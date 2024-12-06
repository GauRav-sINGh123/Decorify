"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

const hotspots = [
  { x: 30, y: 40, label: "Modern Sofa", price: "$1,299" },
  { x: 70, y: 30, label: "Pendant Light", price: "$249" },
  { x: 50, y: 60, label: "Coffee Table", price: "$599" },
]

export function InteractiveRoom() {
  const [activeSpot, setActiveSpot] = useState<number | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative aspect-video rounded-xl overflow-hidden border shadow-2xl"
    >
      <img
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
        alt="Modern living room"
        className="w-full h-full object-cover"
      />
      
      {hotspots.map((spot, index) => (
        <div
          key={index}
          className="absolute"
          style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => setActiveSpot(activeSpot === index ? null : index)}
            className={cn(
              "w-6 h-6 rounded-full border-2",
              "flex items-center justify-center",
              "bg-background/80 backdrop-blur-sm",
              "hover:border-primary transition-colors",
              activeSpot === index && "border-primary"
            )}
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
          </motion.button>
          
          {activeSpot === index && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 p-3 rounded-lg bg-background/95 backdrop-blur-sm border shadow-lg"
            >
              <p className="font-medium">{spot.label}</p>
              <p className="text-sm text-muted-foreground">{spot.price}</p>
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  )
}