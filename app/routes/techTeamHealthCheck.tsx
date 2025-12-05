import { Main } from "~/components/main";
import { HealthCheckHero } from "~/components/health-check-hero";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Engineering Organization Health Check | Free Assessment" },
    {
      name: "description",
      content:
        "Diagnose your engineering team's performance in 15 minutes. Get a personalized PDF report with actionable insights on velocity, technical debt, and DevOps maturity.",
    },
  ];
}

export default function TechTeamHealthCheck() {
  return (
    <Main>
      <HealthCheckHero />
    </Main>
  );
}
