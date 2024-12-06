import Link from "next/link";

function Hero() {
  return (
    <section className="min-h-screen relative flex items-center pt-10">
      <div className="absolute inset-0 opacity-10 pattern-grid pointer-events-none" />
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light mb-6">
              Where <span className="curved-underline">Luxury</span> Meets Innovation
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Experience the perfect blend of timeless elegance and cutting-edge AI technology
              in every corner of your space.
            </p>

            <Link
              href="/dashboard"
              className="text-lg px-8 py-2.5 rounded-lg border border-primary text-primary bg-orange-200  hover:scale-110 cursor-pointer transition-all ease-in-out"
            >
              Explore More!
            </Link>
          </div>

          <div className="relative aspect-square animate-fade-in-delayed mt-10">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
              alt="Luxury Interior"
              className="rounded-tr-[80px] rounded-bl-[80px] object-cover w-full h-full"
            />
            <div className="absolute inset-0 rounded-tr-[80px] rounded-bl-[80px] bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
