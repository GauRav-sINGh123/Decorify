import React from 'react'
import { FeatureCard } from './FeatureCard'
import { Clock, Cpu, Palette, Users } from 'lucide-react'

function Features() {
  return (
    <section className="py-24 bg-secondary/30">
    <div className="container px-4 mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-light mb-4">Why Choose Us</h2>
        <p className="text-muted-foreground">
          Revolutionizing interior design with cutting-edge technology and timeless aesthetics
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          icon={<Palette className="w-6 h-6" />}
          title="Personalized Design"
          description="Tailored solutions that reflect your unique style and preferences"
          gradient="from-rose-500 to-orange-500"
        />
        <FeatureCard
          icon={<Cpu className="w-6 h-6" />}
          title="AI-Powered"
          description="Advanced algorithms for optimal space utilization and design"
          gradient="from-blue-500 to-cyan-500"
        />
        <FeatureCard
          icon={<Clock className="w-6 h-6" />}
          title="Fast Delivery"
          description="Quick turnaround times without compromising on quality"
          gradient="from-green-500 to-emerald-500"
        />
        <FeatureCard
          icon={<Users className="w-6 h-6" />}
          title="Expert Team"
          description="Experienced designers and technology specialists"
          gradient="from-purple-500 to-pink-500"
        />
      </div>
    </div>
  </section>
  )
}

export default Features