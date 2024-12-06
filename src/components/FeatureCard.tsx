"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  gradient: string
}

export function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative p-8 rounded-xl border bg-card/50 backdrop-blur-sm cursor-pointer"
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${gradient} rounded-xl transition-opacity `} />
      
      <div className="relative">
        <div className="mb-4 p-3 rounded-lg inline-block bg-background">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  )
}