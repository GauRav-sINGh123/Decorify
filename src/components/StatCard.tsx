"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface StatCardProps {
  icon: LucideIcon
  value: string
  label: string
  description: string
  gradient: string
  delay?: number
}

export function StatCard({ icon: Icon, value, label, description, gradient, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative p-6 rounded-xl border bg-background"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl opacity-10`} />
      <div className="relative">
        <Icon className="w-8 h-8 mb-4 text-primary" />
        <div className="text-4xl font-light mb-2">{value}</div>
        <div className="font-medium mb-1">{label}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
    </motion.div>
  )
}