import { Link } from "react-router";

export function Hero() {
  return (
    <section id="about" className="pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase font-black text-accent">
            [ Curious Engineer ]
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none tracking-tighter text-balance"
              style={{ transform: "skewY(-2deg)" }}
            >
              Stay <span className="text-accent">Curious</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-black mb-8 text-foreground/70">
              Learning by building and exploring unconventional ideas
            </h2>
          </div>

          <div className="border-l-8 border-accent pl-8">
            <p className="text-lg md:text-xl leading-relaxed font-bold mb-8">
              I explore the edges and intersections of engineering excellence,
              design thinking, and unconventional approaches. Here I share
              thoughts on technology, philosophy, and the future we're building.
            </p>
            <div className="flex flex-col gap-4">
              <Link
                to="#thoughts"
                className="inline-block px-8 py-4 bg-accent text-accent-foreground font-black text-lg uppercase tracking-wider hover:scale-105 transform transition-all duration-200 border-4 border-accent hover:shadow-lg"
              >
                Read Essays
              </Link>
              <Link
                to="#work"
                className="inline-block px-8 py-4 bg-transparent border-4 border-foreground font-black text-lg uppercase tracking-wider hover:bg-foreground hover:text-background transition-all duration-200"
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
