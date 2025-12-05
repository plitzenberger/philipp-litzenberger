import { Link } from "react-router";
import { HeroTitle, HeroTitleAccent } from "./hero-title";

export function Hero() {
  return (
    <section id="about" className="pt-49 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <HeroTitle size="large" skew>
              Just <HeroTitleAccent variant="accent">Curious</HeroTitleAccent>
            </HeroTitle>
            <h2 className="text-2xl md:text-4xl font-black mb-8 text-foreground/70">
              Learning by building and exploring (un)conventional topics
            </h2>
          </div>

          <div className="border-l-8 border-primary-border-bright pl-8">
            <p className="text-lg md:text-xl leading-relaxed font-bold mb-8">
              Synthesis of Ethics, Tech Impact Assessment, Design-Thinking, and
              Engineering. Focused on critical thought and responsible decisions
              in future creation.
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
