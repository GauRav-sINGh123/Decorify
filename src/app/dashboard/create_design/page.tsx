"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ImagePlus } from "lucide-react";
import HowItWorks from "../_components/HowItWorks";
import { toast } from "sonner";
import { db} from "@/app/config/firebase";
import axios from "axios";
import {styles} from "@/constants/Constants";
import DialogComponent from "../_components/DialogComponent";
import { useUserStore } from "@/store/useUserStore";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import {saveImageInFirebase, saveImageFromUrlToFirebase} from "@/lib/firebaseUtils";

 

export default function CreateDesign() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [roomType, setRoomType] = useState<string>("");
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [requirements, setRequirements] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [response, setResponse] = useState<any>(null);
  const { user, setUser } = useUserStore();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setSelectedImage(file);
    }
  };

  const handleStyleSelection = (style: string) => {
    setSelectedStyle((prev) => (prev === style ? null : style));
  };

  const generateDesign = async () => {
    if (!selectedImage || !roomType || !selectedStyle) {
      return toast.error("Please fill all required fields");
    }

    if (user && user.credits <= 0) {
      return toast.error("You do not have enough credits to generate a design.");
    }

    setLoading(true);

    try {
      
      const oldImageUrl = await saveImageInFirebase(selectedImage);

      const { data } = await axios.post(
        "/api/redesign",
        { imageUrl: oldImageUrl, roomType, selectedStyle, requirements },
        { timeout: 120000 }
      );

        
      const generatedImageUrl = data.newImage;
      const savedNewImageUrl = await saveImageFromUrlToFirebase(generatedImageUrl);

      
      if (user) {
        const updatedCredits = user.credits - 1;
        setUser({ ...user, credits: updatedCredits });
        const userDocRef = doc(db, "users", user.id);
        await updateDoc(userDocRef, { credits: updatedCredits });
      }

       
      const projectsCollection = collection(db, `users/${user?.id}/projects`);
      const newProject = {
        oldImage: oldImageUrl,
        roomType,
        selectedStyle,
        requirements: requirements || "",
        newImage: savedNewImageUrl,
        createdAt: new Date().toISOString(),
      };
      await addDoc(projectsCollection, newProject);

      setResponse({ oldImage: oldImageUrl, newImage: savedNewImageUrl });
      setOpenDialog(true);

      toast.success("Design generated successfully!");
    } catch (error) {
      console.error("Error generating design:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      resetFields();
    }
  };

  const resetFields = () => {
    setSelectedImage(null);
    setRoomType("");
    setSelectedStyle(null);
    setRequirements("");
  };
  return (
    <div className="min-h-screen bg-white py-12 px-4 mt-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h1 className="text-xl md:text-4xl font-serif tracking-tight text-[#2C2C2C] mb-4">
            Redefine Your Living Space
          </h1>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto font-light text-lg">
            Harness the power of AI to transform your home into a personalized
            sanctuary that reflects your unique style and needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8 px-8 md:px-28">
          <div className="bg-white rounded-lg p-6 border-2 border-dashed border-[#cac7c7] flex flex-col items-center justify-center h-[350px]">
            <ImagePlus className="h-5 w-5 text-[#6B6B6B] mb-4" />

            <div className="flex flex-col gap-4">
              <label htmlFor="image-upload" className="cursor-pointer">
                Click to Select Image of your room
              </label>
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
            </div>

            {selectedImage && (
              <div className="relative w-full h-48 mt-4">
                <Image
                  src={URL.createObjectURL(selectedImage)}
                  alt={"Uploaded Room Image"}
                  fill
                  className="rounded-lg"
                />
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-[#2C2C2C]">
                Select Room Type
              </label>
              <Select value={roomType} onValueChange={setRoomType}>
                <SelectTrigger className="bg-white border-[#E5E5E5]">
                  <SelectValue placeholder="Choose room type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Living">Living Room</SelectItem>
                  <SelectItem value="Bedroom">Bedroom</SelectItem>
                  <SelectItem value="Kitchen">Kitchen</SelectItem>
                  <SelectItem value="Bathroom">Bathroom</SelectItem>
                  <SelectItem value="Office">Home Office</SelectItem>
                  <SelectItem value="Dining">Dining Room</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-4 text-[#2C2C2C]">
                Select Interior Design Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {styles.map((style) => (
                  <Card
                    key={style.name}
                    className={`p-2 cursor-pointer transition-colors border-[#E5E5E5] ${
                      selectedStyle === style.name ? "bg-[#F5E6D3]" : ""
                    }`}
                    onClick={() => handleStyleSelection(style.name)}
                  >
                    <div className="aspect-video relative mb-2 overflow-hidden rounded">
                      <Image src={style.image} alt={style.name} fill />
                    </div>
                    <p className="text-sm font-medium text-center text-[#2C2C2C]">
                      {style.name}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-[#2C2C2C]">
                Enter Additional Requirements (Optional)
              </label>
              <Textarea
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                placeholder="Describe any specific requirements or preferences..."
                className="min-h-[100px] bg-white border-[#E5E5E5]"
              />
            </div>

            <Button
              onClick={generateDesign}
              disabled={loading}
              className="w-full bg-[#2C2C2C] hover:bg-[#404040] text-white"
            >
              {loading ? "Generating..." : "Generate Design"}
            </Button>

            <p className="text-xs text-[#6B6B6B] text-center">
              NOTE: 1 Credit will use to redesign your room
            </p>
          </div>
        </div>
        <HowItWorks />

        <DialogComponent
          open={openDialog}
          onOpenChange={setOpenDialog}
          firstImage={{ imageUrl: response?.oldImage }}
          secondImage={{ imageUrl: response?.newImage }}
        />

      </div>
    </div>
  );
}
