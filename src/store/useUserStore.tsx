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

interface ProjectData {
  id: string;
  createdAt: string;
  newImage: string;
  oldImage: string;
  requirements: string;
  roomType: string;
  selectedStyle: string;
}

interface UserState {
  user: UserData | null;
  projects: ProjectData[]; 
  setUser: (data: UserData) => void;
  addProject: (project: ProjectData) => void;
  removeProject: (id: string) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      projects: [],
      setUser: (data) => set({ user: data }),
      addProject: (project) =>
      set((state) => ({ projects: [...state.projects, project] })),
      removeProject: (id) =>
        set((state) => ({
          projects: state.projects.filter((project) => project.id !== id),
        })),
    }),
    {
      name: "user-storage",  
    }
  )
);
