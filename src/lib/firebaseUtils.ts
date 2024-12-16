import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { toast } from "sonner";
import { storage } from "@/app/config/firebase";

 
export const saveImageInFirebase = async (file: File): Promise<string> => {
  try {
    const storageRef = ref(storage, `design_images/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);
  } catch (error) {
    console.error("Error uploading image to Firebase:", error);
    toast.error("Failed to upload image. Please try again.");
    throw error;
  }
};

 
export const saveImageFromUrlToFirebase = async (imageUrl: string): Promise<string> => {
  try {
    const response = await axios.get(imageUrl, { responseType: "blob" });
    const blob = response.data;

    const imageName = `downloaded_${Date.now()}.jpg`;
    const storageRef = ref(storage, `design_images/${imageName}`);
    const snapshot = await uploadBytes(storageRef, blob);
    return await getDownloadURL(snapshot.ref);
  } catch (error) {
    console.error("Error downloading or uploading image:", error);
    toast.error("Failed to save image to Firebase. Please try again.");
    throw error;
  }
};
