import { Link } from "react-router";

export function Hero() {
  return (
    <section id="about" className="pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase font-black text-accent-foreground">
            [ Curious Engineer ]
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none tracking-tighter text-balance -skew-y-2">
              Stay <span className="text-accent-foreground">Curious</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-black mb-8 text-foreground/70">
              Learning by building and exploring (un)conventional ideas
            </h2>
          </div>

          <div className="border-l-8 border-primary-border-bright pl-8">
            <p className="text-lg md:text-xl leading-relaxed font-bold mb-8">
              I explore the edges and intersections of engineering excellence,
              design thinking, and (un)conventional approaches. Here I share
              thoughts on technology, philosophy, and the future we're building.
            </p>
            <div className="flex flex-col gap-4">
              <Link
                to="#thoughts"
                className="inline-block px-8 py-4 font-black text-lg uppercase tracking-wider hover:scale-105 transform transition-all duration-200 border-4 border-primary-border-bright hover:shadow-lg"
              >
                Read Essays
              </Link>
              <Link
                to="#work"
                className="inline-block px-8 py-4 font-black text-lg uppercase tracking-wider hover:scale-105 transform transition-all duration-200 border-4 border-primary-border-bright hover:shadow-lg"
              >
                See Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
