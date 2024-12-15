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
import { storage } from "@/app/config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import axios from "axios";
import {styles} from "@/constants/Constants";
import DialogComponent from "../_components/DialogComponent";

export default function CreateDesign() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [roomType, setRoomType] = useState<string>("");
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [requirements, setRequirements] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [response,setResponse]= useState<any>(null);
 

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setSelectedImage(file);
    }
  };

  const handleStyleSelection = (style: string) => {
    if (selectedStyle === style) {
      setSelectedStyle(null);
    } else {
      setSelectedStyle(style);
    }
  };
 

  const generateDesign = async () => {
    if (!selectedImage || !roomType || !selectedStyle) {
      return toast.error("Please fill all required fields");
    }
    setLoading(true);
    try {
      const imageUrl = await saveImageInFirebase(selectedImage);
      const response = await axios.post("/api/redesign", {
        imageUrl,
        roomType,
        selectedStyle,
        requirements,
      });

      const designData = response.data;
      setResponse(designData)
       

      toast.success("Design genereted successfully!");
      setLoading(false);
      setOpenDialog(true);
      setSelectedImage(null);
      setRoomType("");
      setSelectedStyle("");
      setRequirements("");
    } catch (error) {
      toast.error("Something went wrong while generating the design");
      setLoading(false);
    }
    setLoading(false);
  };

  // Image Upload to Firebase Storage
  const saveImageInFirebase = async (file: File) => {
    try {
      const storageRef = ref(storage, `design_images/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error: any) {
      toast.error("Error uploading image:", error);
    }
  };

   
  const FIRST_IMAGE = {
    imageUrl: response?.oldImage,
  };
  const SECOND_IMAGE = {
    imageUrl: response?.newImage,
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
                  <SelectItem value="living">Living Room</SelectItem>
                  <SelectItem value="bedroom">Bedroom</SelectItem>
                  <SelectItem value="kitchen">Kitchen</SelectItem>
                  <SelectItem value="bathroom">Bathroom</SelectItem>
                  <SelectItem value="office">Home Office</SelectItem>
                  <SelectItem value="dining">Dining Room</SelectItem>
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
          firstImage={FIRST_IMAGE}
          secondImage={SECOND_IMAGE}
        />

      </div>
    </div>
  );
}
