"use client";
import { Button } from "./ui/button";
import {motion} from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="min-h-screen relative flex items-center pt-20">
    <div className="absolute inset-0 pattern-grid opacity-10" />
    <div className="container px-4 mx-auto">
     {/* Hero */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light mb-6">
            Where <span className="curved-underline">Luxury</span> Meets Innovation
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
            Experience the perfect blend of timeless elegance and cutting-edge AI technology 
            in every corner of your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8 hover:scale-105 transition-all ease-in-out cursor-pointer">
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 hover:scale-105 transition-all ease-in-out cursor-pointer">
              Our Services
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square"
        >
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
            alt="Luxury Interior"
            className="rounded-tr-[80px] rounded-bl-[80px] object-cover w-full h-full"
          />
          <div className="absolute inset-0 rounded-tr-[80px] rounded-bl-[80px] bg-gradient-to-br from-primary/10 to-transparent" />
        </motion.div>
      </div>
    </div>
  </section>
  )
}

export default Hero