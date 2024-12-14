"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import {projects} from "@/constants/Constants"


export function ProjectShowcase() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-light mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-lg">
              Discover our latest interior design projects, where luxury meets functionality
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="rounded-lg object-cover "
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors rounded-lg" />
              </div>
              <h3 className="text-xl mb-1">{project.title}</h3>
              <p className="text-muted-foreground">{project.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}