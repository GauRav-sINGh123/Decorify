import { InteractiveRoom } from "@/components/InteractiveRoom";
import Features from "../components/Features";
import Hero from "../components/Hero";
import { ProjectShowcase } from "@/components/ProjectShowcase";

 
export default function Home() {
  return (
    <div className="relative">
     <Hero/>
     <Features/>
     <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-light mb-4">Interactive Room Design</h2>
            <p className="text-muted-foreground">
              Explore our interactive room visualization with AI-powered recommendations
            </p>
          </div>
          <InteractiveRoom />
          <ProjectShowcase/>
        </div>
      </section>

    </div>
  );
}
