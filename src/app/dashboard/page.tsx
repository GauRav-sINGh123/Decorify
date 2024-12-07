"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Layout, Heart, Plus } from "lucide-react";

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

export default function Dashboard() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-light mb-2"
          >
            Welcome back, Designer
          </motion.h1>
          <p className="text-muted-foreground">
            Manage your projects and consultations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[{ icon: Layout, label: "Total Projects", value: "4" },
            { icon: Calendar, label: "Consultations", value: "8" },
            { icon: Heart, label: "Coins Left", value: "12" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6">
                <stat.icon className="w-8 h-8 mb-4 text-primary" />
                <div className="text-2xl font-light">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-light">Recent Projects</h2>
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>
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
                    variant="destructive"
                    size="sm"
                    className="w-full"
                    
                  >
                    Delete
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
