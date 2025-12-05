import { Header } from "~/components/header";
import { Hero } from "~/components/hero";
import { Thoughts } from "~/components/thoughts";
import { Footer } from "~/components/footer";
import type { Route } from "./+types/home";
import { Main } from "~/components/main";

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
    <Main>
      <Header />
      <Hero />
      <Thoughts />
      <Footer />
    </Main>
  );
}
