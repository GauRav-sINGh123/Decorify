"use client";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

const AuthSync = () => {
  const { user } = useUser();

  useEffect(() => {
    const saveUserToDB = async () => {
      if (user) {
        try {
          const userData = {
            firstName: user.firstName,
            lastName: user.lastName,
            emailAddress: user?.emailAddresses?.[0]?.emailAddress,
            profileImageUrl: user?.imageUrl,
          };

          await axios.post("/api/addUser", userData);
          console.log("User successfully synced to the database.");
        } catch (error) {
          console.error("Error saving user to database:", error);
        }
      }
    };

    saveUserToDB();
  }, [user]);

  return null;  
};

export default AuthSync;
