import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { collection, doc, addDoc } from "firebase/firestore";
import { db } from "@/app/config/firebase";
import Replicate from "replicate";

 
const replicate = new Replicate({
  auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN!,
});

export async function POST(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
 
    const { imageUrl, roomType, selectedStyle, requirements } = await req.json();

   
    if ([imageUrl, roomType, selectedStyle].some((item) => item == null)) {
      return NextResponse.json(
        { message: "Please fill all the fields" },
        { status: 400 }
      );
    }

   
    const input = {
      image: imageUrl,
      prompt:
        `A ${roomType} in a ${selectedStyle} style` +
        (requirements ? `, ${requirements}` : ""),
    };

    const replicateOutput = await replicate.run(
      "adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38",
      { input }
    );

 
    const projectsCollection = collection(db, "projects");
    const newProject = {
      userId,
      oldImage:imageUrl,
      roomType,
      selectedStyle,
      requirements: requirements || "",
      newImage: replicateOutput,  
      createdAt: new Date().toISOString(),
    };

    const docRef = await addDoc(projectsCollection, newProject);

 
    return NextResponse.json(
      {
        id: docRef.id,
        ...newProject,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in creating project:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
