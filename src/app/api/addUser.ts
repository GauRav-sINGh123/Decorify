import { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from "@clerk/nextjs/server";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/app/config/firebase";

// API Route Handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { firstName, lastName, emailAddress, profileImageUrl } = req.body as {
      firstName: string;
      lastName: string;
      emailAddress: string;
      profileImageUrl: string;
    };

    const userRef = doc(db, "users", userId);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      const newUser = {
        id: userId,
        name: `${firstName} ${lastName}`,
        email: emailAddress,
        image: profileImageUrl,
        credits: 5,
        createdAt: new Date().toISOString(),
      };

      await setDoc(userRef, newUser);
      return res.status(201).json({ message: "User added successfully" });
    }

    return res.status(200).json({ message: "User already exists" });
  } catch (error) {
    console.error("Error adding user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
