"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { db } from "@/app/config/firebase";
import LoadingSkeleton from "./LoadingSkeleton";
import Image from "next/image";
import { useUserStore } from "@/store/useUserStore";
import DialogComponent from "./DialogComponent";

interface Project {
  id: string;
  createdAt: string;
  newImage: string;
  oldImage: string;
  requirements: string;
  roomType: string;
  selectedStyle: string;
}

export default function Projects() {
  const { user, isLoaded } = useUser();
  const { projects, setProjects } = useUserStore();
  const [loading, setLoading] = useState<boolean>(true);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
 

  useEffect(() => {
    const fetchProjects = async () => {
      if (!isLoaded || !user || projects.length > 0) return;

      try {
        const projectsRef = collection(db, "users", user?.id, "projects");
        const querySnapshot = await getDocs(projectsRef);

        const projectsData: Project[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Project[];

        setProjects(projectsData);
      } catch (err) {
        toast.error(
          "Error fetching projects: " +
            (err instanceof Error ? err.message : "Unknown")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
    setLoading(false);
  }, [isLoaded, user, setProjects, projects.length]);

  const handleDelete = async (projectId: string) => {
    if (!user) return;

    try {
      await deleteDoc(doc(db, "users", user.id, "projects", projectId));

      const updatedProjects = projects.filter(
        (project) => project.id !== projectId
      );
      setProjects(updatedProjects);

      toast.success("Project deleted successfully");
    } catch (err) {
      toast.error(
        "Error deleting project: " +
          (err instanceof Error ? err.message : "Unknown")
      );
    }
  };

  const handleImageClick = (project: Project) => {
    
    setOpenDialog(true);
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-light">Projects</h2>
          <Button variant="outline" size="default">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>

        {projects.length === 0 ? (
          <div className="flex justify-center items-center h-48 text-center text-muted-foreground">
            <p>No Projects Available</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="p-4">
                <div className="space-y-4">
                  <div className="relative w-full h-48">
                    <Image
                      src={project.newImage || "/placeholder.jpg"}
                      alt={project.id}
                      fill
                      quality={60}
                      className="object-cover rounded-lg w-full h-full"
                      onClick={() => handleImageClick(project)}
                    />
                  </div>

                  <div>
                    <p className="text-sm text-black">
                      Created At:{" "}
                      <span className="font-medium">
                        {new Date(project.createdAt).toLocaleDateString()}
                      </span>
                    </p>
                    <p className="text-sm text-black">
                      Room Type: {project.roomType}
                    </p>
                    <p className="text-sm text-black">
                      Style: {project.selectedStyle}
                    </p>
                  </div>

                  <Button
                    onClick={() => handleDelete(project.id)}
                    size="sm"
                    className="w-full text-sm bg-orange-200 text-black hover:bg-orange-200"
                  >
                    Delete
                  </Button>
                  <DialogComponent
                    open={openDialog}
                    onOpenChange={setOpenDialog}
                    firstImage={{ imageUrl: project.oldImage }}   
                    secondImage={{ imageUrl: project.newImage }} 
                  />
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
