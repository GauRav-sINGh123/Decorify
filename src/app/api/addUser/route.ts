import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/app/config/firebase";
import {UserData } from "@/types/types"
 

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
        credits: 4,  
        createdAt: new Date().toISOString(),
      };

      
      await setDoc(userRef, newUser);

      // Returns the full user data to the client
      return NextResponse.json({ user: newUser }, { status: 201 });
    }

    // If user already exists, return the existing user data
    const existingUser = docSnap.data() as UserData;
    return NextResponse.json({ user: existingUser }, { status: 200 });

  } catch (error) {
    console.error("Error adding user:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
