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

 
interface Project {
  id: string;
  newImage: string;
  oldImage: string;
  requirements: string;
  roomType: string;
  selectedStyle: string;
  createdAt: string;
}

 
interface UserState {
  user: UserData | null;
  projects: Project[];
  setUser: (data: UserData) => void;
  setProjects: (data: Project[]) => void;
  addProject: (project: Project) => void;
  removeProject: (projectId: string) => void;
}

 
export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      projects: [],
      setUser: (data) => set({ user: data }),
      setProjects: (data) => set({ projects: data }),
      addProject: (project) => set((state) => ({
        projects: [...state.projects, project],
      })),
      removeProject: (projectId) => set((state) => ({
        projects: state.projects.filter((project) => project.id !== projectId),
      })),
    }),
    {
      name: "user-storage",  
    }
  )
);
