import { create } from "zustand";
import { persist } from "zustand/middleware";


interface UserData {
  id: string;
  name: string;
  email: string;
  image: string;
  credits: number;
  createdAt: string;
}

interface UserState {
  user: UserData | null;
  setUser: (data: UserData) => void; 
}


export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null, 
      setUser: (data) => set({ user: data }),
    }),
    {
      name: "user-storage",  
    }
  )
);
