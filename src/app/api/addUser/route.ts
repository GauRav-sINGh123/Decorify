import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/app/config/firebase";

// Define the structure for user data
interface UserData {
  id: string;
  name: string;
  email: string;
  image: string;
  credits: number;
  createdAt: string;
}


export async function POST(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { firstName, lastName, emailAddress, profileImageUrl } = body as {
      firstName: string;
      lastName: string;
      emailAddress: string;
      profileImageUrl: string;
    };

    const userRef = doc(db, "users", userId);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      
      const newUser: UserData = {
        id: userId,
        name: `${firstName} ${lastName}`,
        email: emailAddress,
        image: profileImageUrl,
        credits: 5, // Default credits
        createdAt: new Date().toISOString(),
      };

      await setDoc(userRef, newUser);
      return NextResponse.json({ message: "User added successfully" }, { status: 201 });
    }

    
    return NextResponse.json({ message: "User already exists" }, { status: 200 });
  } catch (error) {
    console.error("Error adding user:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
