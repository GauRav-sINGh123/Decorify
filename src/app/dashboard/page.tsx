import Projects from "./_components/Projects";
import Stats from "./_components/Stats";
 

export default function Dashboard() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-light mb-2">Welcome back, Designer</h1>
          <p className="text-muted-foreground">
            Manage your projects and consultations
          </p>
        </div>
        <Stats/>
        <Projects/>
      </div>
    </div>
  );
}
