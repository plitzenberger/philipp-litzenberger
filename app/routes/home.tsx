import { Footer } from "~/components/footer";
import type { Route } from "./+types/home";
import { Main } from "~/components/main";

import { HeroSection } from "~/epics/home/HeroSection";
import { ValueProposition } from "~/epics/home/ValueProposition";
import { ServicesSection } from "~/epics/home/ServicesSection";
import { TechExpertise } from "~/epics/home/TechExpertise";
import { ExperienceHighlights } from "~/epics/home/ExperienceHighlights";
import { ThoughtsPreview } from "~/epics/home/ThoughtsPreview";
import { CTASection } from "~/epics/home/CTASection";


export function meta({}: Route.MetaArgs) {
  // Note: For SSR meta, we'd need to pass locale through loader
  // For now, using English as default meta
  return [
    {
      title:
        "Philipp Litzenberger | Lead Fullstack Engineer & Technical Consultant",
    },
    {
      name: "description",
      content:
        "Senior Technical Leader with 10+ years building scalable systems. Specializing in fullstack development, team leadership, and engineering organization health.",
    },
    { name: "generator", content: "React Router" },
  ];
}

export default function Home() {
  return (
    <Main>
      <HeroSection />
      <ValueProposition />
      <ServicesSection />
      <TechExpertise />
      <ExperienceHighlights/>
      <ThoughtsPreview />
      <CTASection />
      <Footer />
    </Main>
  );
}
