import { Code2, Zap, Lightbulb } from "lucide-react";

const categories = [
  {
    title: "Building",
    description:
      "Full-stack solutions with elegant architecture and bold design.",
    icon: Code2,
    projects: ["SaaS Platform", "API Infrastructure", "Real-time Analytics"],
  },
  {
    title: "Exploring",
    description: "Experimental projects pushing technical boundaries.",
    icon: Zap,
    projects: [
      "AI Integration",
      "Performance Optimization",
      "Novel Algorithms",
    ],
  },
  {
    title: "Thinking",
    description: "Written reflections on tech, business & society.",
    icon: Lightbulb,
    projects: ["Tech Essays", "Analysis Pieces", "Research Notes"],
  },
];

export function Projects() {
  return (
    <section
      id="work"
      className="py-32 px-6 md:px-12 border-t-8 border-primary-border-bright bg-primary-background-bright text-primary-foreground-bright scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl uppercase tracking-[0.2em] text-primary-foreground font-black mb-16">
          What I Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-8 border-4 border-primary-border-bright transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Icon className="w-8 h-8 font-black" />
                  <h3 className="font-black text-2xl uppercase">{cat.title}</h3>
                </div>
                <p className="font-bold text-sm mb-8 leading-relaxed">
                  {cat.description}
                </p>
                <ul className="space-y-3">
                  {cat.projects.map((proj, pidx) => (
                    <li
                      key={pidx}
                      className={`text-sm font-black uppercase tracking-wide hover:translate-x-2 transition-transform ${cat.color === "bg-foreground" ? "text-background" : "text-secondary"}`}
                    >
                      → {proj}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
