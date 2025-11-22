import { Header } from "~/components/header";
import { Hero } from "~/components/hero";
import { Featured } from "~/components/featured";
import { Thoughts } from "~/components/thoughts";
import { Projects } from "~/components/projects";
import { Footer } from "~/components/footer";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Curious Engineer | Building Tomorrow's Solutions" },
    {
      name: "description",
      content:
        "Curious Engineer exploring technology, philosophy, and the intersection of innovation and practical problem-solving.",
    },
    { name: "generator", content: "v0.app" },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-background">
      <Header />
      <Hero />
      <Featured />
      <Thoughts />
      <Projects />
      <Footer />
    </main>
  );
}
