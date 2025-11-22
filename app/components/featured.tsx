export function Featured() {
  return (
    <section className="py-32 px-6 md:px-12 bg-primary-background-bright border-y-8 border-primary-border-bright">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl uppercase tracking-[0.2em] text-primary-foreground font-black mb-16">
          Featured Work
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left card - larger, rotated */}
          <div className="md:row-span-2 transform md:rotate-3 hover:rotate-0 transition-transform duration-300 cursor-pointer">
            <div className="h-96 bg-gradient-to-br from-accent to-primary mb-6 border-4 border-foreground flex items-end justify-start p-8">
              <div className="text-foreground">
                <h3 className="text-4xl font-black mb-2">Platform</h3>
                <p className="text-sm font-bold">Scaling to millions</p>
              </div>
            </div>
          </div>

          {/* Top right card */}
          <div className="transform md:-rotate-2 hover:rotate-0 transition-transform duration-300 cursor-pointer">
            <div className="h-64 bg-foreground mb-4 border-4 border-accent flex items-end justify-start p-6">
              <div className="text-background">
                <h3 className="text-2xl font-black">Analytics</h3>
                <p className="text-xs font-bold">Real-time insights</p>
              </div>
            </div>
          </div>

          {/* Bottom right card */}
          <div className="transform md:rotate-1 hover:rotate-0 transition-transform duration-300 cursor-pointer">
            <div className="h-64 mb-4 border-4 border-foreground flex items-end justify-start p-6">
              <div className="text-accent-foreground">
                <h3 className="text-2xl font-black">Infrastructure</h3>
                <p className="text-xs font-bold">Elegant architecture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
