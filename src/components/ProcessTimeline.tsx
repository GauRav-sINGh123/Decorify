"use client"

import { motion } from "framer-motion";
import {steps} from "@/constants/Constants";


export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-light mb-4">Our Process</h2>
          <p className="text-muted-foreground">
            A streamlined approach combining technology and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step?.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-5xl font-light text-primary/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-medium mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-[2px] bg-primary/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}