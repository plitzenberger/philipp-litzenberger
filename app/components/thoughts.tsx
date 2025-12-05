const posts = [
  {
    title: "The winning AI narrative.",
    excerpt: "Exploring how the narrative around AI is shaping our reality.",
    category: "Technology",
    date: "Dec 3, 2025",
  },
  {
    title: "What model for which task?",
    excerpt:
      "Exploring the importance of choosing the right model for the right task.",
    category: "Technology",
    date: "Dec 3, 2025",
  },
];

export function Thoughts() {
  return (
    <section id="thoughts" className="py-32 px-6 md:px-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-0">
          {/* Header column */}
          <div className="md:col-span-1 mb-12 md:mb-0 md:pr-12">
            <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tight leading-tight mb-4 -skew-y-2">
              My{" "}
              <span className="text-6xl md:text-7xl font-black uppercase tracking-tight leading-tight text-accent-foreground mb-4">
                Essays
              </span>
            </h2>
            <p className="font-bold text-sm uppercase tracking-widest">
              Thoughts on tech, philosophy & criticism
            </p>
          </div>

          {/* Posts column - spans 2 */}
          <div className="md:col-span-2 space-y-8">
            {posts.map((post, idx) => (
              <div
                key={idx}
                className="group cursor-pointer border-l-4 border-accent-border hover:border-accent-border-bright pl-6 py-4 hover:bg-primary-interactive/50 transition-all duration-200 transform hover:translate-x-4"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-foreground/60 text-sm mt-2 font-medium">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 text-xs font-black uppercase">
                  <span className="px-3 py-1 border border-accent-interactive-bright text-accent-foreground">
                    {post.category}
                  </span>
                  <span className="text-foreground/50">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
