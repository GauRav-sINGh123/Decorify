"use client"

import { Users, Award, Star, Clock } from "lucide-react"
import { StatCard } from "@/components/StatCard"

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Projects Completed",
    description: "Successfully delivered worldwide",
    gradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    icon: Star,
    value: "98%",
    label: "Client Satisfaction",
    description: "Based on client feedback",
    gradient: "from-yellow-500/10 to-orange-500/10"
  },
  {
    icon: Award,
    value: "25+",
    label: "Design Awards",
    description: "International recognition",
    gradient: "from-purple-500/10 to-pink-500/10"
  },
  {
    icon: Clock,
    value: "10+",
    label: "Years Experience",
    description: "Industry expertise",
    gradient: "from-green-500/10 to-emerald-500/10"
  }
]

export default function StatsSection() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              gradient={stat.gradient}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}