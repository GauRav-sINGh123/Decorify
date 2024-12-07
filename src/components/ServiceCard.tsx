"use client"
import Image from "next/image"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  image: string
}

export function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[3/2] mb-6 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover  transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
      </div>
      <h3 className="text-xl mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}