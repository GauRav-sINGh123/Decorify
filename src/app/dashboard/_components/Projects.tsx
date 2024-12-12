import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

const recentProjects = [
  {
    title: "Modern Living Room",
    createdAt: "March 1, 2024",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
  },
  {
    title: "Minimalist Kitchen",
    createdAt: "February 28, 2024",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
  },
  {
    title: "Elegant Bedroom",
    createdAt: "March 5, 2024",
    image:
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Scandinavian Bathroom",
    createdAt: "February 20, 2024",
    image:
      "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

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
    </div>
  );
}
