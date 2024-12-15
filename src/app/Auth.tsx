"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useUserStore } from "@/store/useUserStore";
import { toast } from "sonner";

const AuthSync = () => {
  const { user } = useUser();
  const storedUser = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);  

  useEffect(() => {

    const saveUserToDB = async () => {
       if(!user) return;
       
       if (storedUser?.id === user.id) return;

        try {
          const userData = {
            firstName: user.firstName,
            lastName: user.lastName,
            emailAddress: user.emailAddresses[0]?.emailAddress,
            profileImageUrl: user.imageUrl,
          };

          const response = await axios.post("/api/addUser", userData);

          if (response.status === 201 || response.status === 200) {
            setUser(response.data.user);              
          } else {
            toast.error("Something went wrong:");
          }
        } catch (error: any) {
          toast.error("Something went wrong:", error.response || error.message);
        }
    };

    saveUserToDB();
  }, [user, setUser,storedUser]);

  return null;  
};

export default AuthSync;
