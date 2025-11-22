import { Link } from "react-router";
import { useEffect, useState } from "react";
import clsx from "clsx";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300 bg-primary-background/95",
        isScrolled && "border-b-4 border-primary-border-bright"
      )}
    >
      <nav className="max-w-full px-6 md:px-12 py-6 flex justify-between items-center">
        <Link
          to="/"
          className="font-black text-4xl md:text-5xl hover:text-accent-foreground transition-all duration-200 transform hover:scale-110"
        >
          CE/
        </Link>
        <div className="hidden md:flex gap-12 text-lg font-black tracking-tight uppercase">
          <Link
            to="#about"
            className="hover:text-accent-foreground border-b-3 border-transparent hover:border-accent-border-bright transition-all duration-200 transform hover:scale-110"
          >
            About
          </Link>
          <Link
            to="#thoughts"
            className="hover:text-accent-foreground border-b-3 border-transparent hover:border-accent-border-bright transition-all duration-200 transform hover:scale-110"
          >
            Thoughts
          </Link>
          <Link
            to="#work"
            className="hover:text-accent-foreground border-b-3 border-transparent hover:border-accent-border-bright transition-all duration-200 transform hover:scale-110"
          >
            Work
          </Link>
        </div>
      </nav>
    </header>
  );
}
