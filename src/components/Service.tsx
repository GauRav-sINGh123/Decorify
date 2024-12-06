import { ServiceCard } from './ServiceCard'

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
            <ServiceCard
              title="Residential Design"
              description="Transform your home into a personalized sanctuary"
              image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
            />
            <ServiceCard
              title="Commercial Spaces"
              description="Create inspiring workplaces that boost productivity"
              image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            />
            <ServiceCard
              title="AI Consultation"
              description="Get instant design recommendations powered by AI"
              image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>
  )
}

export default Service