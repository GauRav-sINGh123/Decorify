import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight, Zap, Shield, Eye, Sparkles } from 'lucide-react'

export default function page() {
  const features = [
    { icon: Zap, title: "Intelligent Living", description: "AI-powered solutions that adapt to your lifestyle." },
    { icon: Shield, title: "Timeless Craftsmanship", description: "Meticulous attention to detail in every design." },
    { icon: Eye, title: "Visionary Aesthetics", description: "Pushing the boundaries of architectural innovation." },
    { icon: Sparkles, title: "Bespoke Luxury", description: "Tailored experiences that redefine personal comfort." },
  ]

  return (
    <section className="w-full bg-gradient-to-b from-[#FAFAFA] to-white py-10">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-10 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
              Elevating <span className="font-medium italic">Living</span> to an
              <span className="block mt-2 bg-gradient-to-r from-[#F2D4C2] to-[#E5C4B2] bg-clip-text text-transparent">Art Form</span>
            </h2>
            <p className="max-w-[600px] text-base text-muted-foreground md:text-lg leading-relaxed">
              At MAISON, we orchestrate a symphony of timeless elegance and cutting-edge innovation, 
              crafting living spaces that transcend the ordinary and redefine luxury for the modern age.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 w-full">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 border-none shadow-lg">
                <CardContent className="flex items-center space-x-4 p-4">
                  <feature.icon className="h-6 w-6 text-[#E5C4B2]" />
                  <div className="text-left">
                    <h3 className="text-lg font-medium">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Link href="/">
          <Button className="group bg-[#F2D4C2] text-black hover:bg-[#E5C4B2] transition-all duration-300">
            Go To Home
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          </Link>
         
          
           
        </div>
      </div>
    </section>
  )
}

