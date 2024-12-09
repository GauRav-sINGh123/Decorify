import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ChevronRight, Zap, Shield, Eye, Sparkles } from 'lucide-react'

export default function page() {
  const features = [
    { icon: Zap, title: "Intelligent Living", description: "AI-powered solutions that anticipate and adapt to your lifestyle." },
    { icon: Shield, title: "Timeless Craftsmanship", description: "Meticulous attention to detail in every element of design." },
    { icon: Eye, title: "Visionary Aesthetics", description: "Pushing the boundaries of style and architectural innovation." },
    { icon: Sparkles, title: "Bespoke Luxury", description: "Tailored experiences that redefine personal comfort and elegance." },
  ]

  return (
    <section className="w-full bg-gradient-to-b from-[#FAFAFA] to-white py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div className="flex flex-col justify-center space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl font-light tracking-tight sm:text-5xl xl:text-6xl">
                Elevating <span className="font-medium italic">Living</span> to an
                <span className="block mt-2 bg-gradient-to-r from-[#F2D4C2] to-[#E5C4B2] bg-clip-text text-transparent">Art Form</span>
              </h2>
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl leading-relaxed">
                At MAISON, we orchestrate a symphony of timeless elegance and cutting-edge innovation, 
                crafting living spaces that transcend the ordinary and redefine luxury for the modern age.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 border-none shadow-lg">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <feature.icon className="h-8 w-8 text-[#E5C4B2]" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button className="group w-fit bg-[#F2D4C2] text-black hover:bg-[#E5C4B2] transition-all duration-300">
              Experience MAISON
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-neutral-200 to-neutral-50 opacity-50 rounded-2xl" />
            <div className="relative p-4 space-y-8">
              <Card className="bg-white/80 backdrop-blur-sm border-none shadow-xl">
                <CardContent className="p-6">
                  <h4 className="text-2xl font-medium mb-4">Shaping the Future of Living</h4>
                  <p className="text-muted-foreground mb-6">
                    We envision living spaces that inspire, adapt, and elevate the human experience, 
                    seamlessly blending luxury with cutting-edge technology. Our AI-driven solutions 
                    learn and adapt to your preferences, creating a living environment that anticipates your needs.
                  </p>
                  <Image
                    src={"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}
                    alt={"Luxurious and modern living room with large windows"}
                    width={1000}
                    height={600}
                    className="rounded-lg object-cover shadow-lg"
                  />
                </CardContent>
              </Card>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg">
                  <CardContent className="p-6">
                    <h5 className="text-xl font-medium mb-2">Innovation</h5>
                    <p className="text-sm text-muted-foreground mb-4">
                      Pioneering smart living solutions that seamlessly integrate with your lifestyle.
                    </p>
                    <Image
                      src={"https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1201&q=80"}
                      alt={"Smart home device in a modern interior"}
                      width={400}
                      height={300}
                      className="rounded-lg object-cover shadow-lg"
                    />
                  </CardContent>
                </Card>
                <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg">
                  <CardContent className="p-6">
                    <h5 className="text-xl font-medium mb-2">Design</h5>
                    <p className="text-sm text-muted-foreground mb-4">
                      Crafting timeless elegance where form and function unite in perfect harmony.
                    </p>
                    <Image
                      src={"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"}
                      alt={"Elegantly designed interior with modern furniture"}
                      width={400}
                      height={300}
                      className="rounded-lg object-cover shadow-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

