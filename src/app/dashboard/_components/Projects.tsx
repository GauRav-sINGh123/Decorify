import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface Project {
  title: string;
  image: string;
  createdAt: string;
}

 
const recentProjects: Project[] = [];

export default function Projects() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-light">Recent Projects</h2>
        <Link href="/dashboard/create_design">
          <Button variant="outline" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </Link>
      </div>

      {recentProjects.length === 0 ? (
        <div className="flex justify-center items-center h-48 text-center text-muted-foreground">
          <p>No Projects Available</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentProjects.map((project, index) => (
            <Card key={index} className="p-4">
              <div className="space-y-4">
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <div>
                  <h3 className="font-medium text-lg">{project.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    Created At:{" "}
                    <span className="font-medium">{project.createdAt}</span>
                  </p>
                </div>

                <Button
                  size="sm"
                  className="w-full text-sm bg-orange-200 text-black hover:bg-orange-200"
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
