import { ServiceCard } from './ServiceCard'
import {service} from "@/constants/Constants";


function Service() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-light mb-4">Our Design Services</h2>
          <p className="text-muted-foreground">
            Comprehensive interior design solutions tailored to your unique style and needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service
