export function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="group">
      <div className="text-4xl md:text-5xl font-black text-accent-foreground group-hover:scale-110 transform transition-transform duration-200 inline-block">
        {number}
      </div>
      <div className="text-sm font-bold uppercase tracking-widest text-primary-foreground/70 mt-1">
        {label}
      </div>
    </div>
  );
}
