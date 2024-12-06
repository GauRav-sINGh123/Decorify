"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "The AI-powered design recommendations were spot on! It saved us so much time in the decision-making process.",
    author: "Sarah Johnson",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    quote: "Maison transformed our office space into a productive and inspiring environment. The attention to detail was impressive.",
    author: "Michael Chen",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    quote: "The team's expertise in blending traditional elements with modern technology created the perfect balance in our home.",
    author: "Emma Thompson",
    role: "Interior Design Enthusiast",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="text-center"
          >
            <Quote className="w-12 h-12 mx-auto mb-8 text-primary/20" />
            <p className="text-2xl md:text-3xl font-light mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex items-center justify-center mb-8">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].author}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <div className="font-medium">{testimonials[currentIndex].author}</div>
                <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="icon" onClick={prev}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={next}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}