import { Link } from "react-router";
import { HeroTitle, HeroTitleAccent } from "./hero-title";

const features = [
  { icon: "⚡", label: "Team Velocity Scoring" },
  { icon: "🔧", label: "Technical Debt Assessment" },
  { icon: "👥", label: "Hiring & Retention Analysis" },
  { icon: "🏗️", label: "Architecture Scalability" },
  { icon: "🚀", label: "DevOps Maturity Evaluation" },
];

export function HealthCheckHero() {
  return (
    <section className="relative pt-16 pb-24 px-6 md:px-12 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/20 rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Top Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase tracking-widest border-2 border-accent text-accent-foreground bg-accent/10">
            <span className="w-2 h-2 bg-accent animate-pulse" />
            Free Assessment
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Copy */}
          <div className="order-2 lg:order-1">
            <HeroTitle skew>
              Tech Team
              <br />
              <HeroTitleAccent variant="accent">Health Check</HeroTitleAccent>
            </HeroTitle>

            <p className="text-xl md:text-2xl font-bold text-foreground/70 mb-8 max-w-xl">
              Diagnose your engineering team's performance in{" "}
              <span className="text-accent-foreground">15 minutes</span>. Get a
              personalized PDF report with actionable insights within 48 hours.
            </p>

            {/* Time Indicator */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm font-bold uppercase tracking-wider text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                15 min questionnaire
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Custom PDF Report
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                3-5 Quick Wins
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="#start-assessment"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 font-black text-lg uppercase tracking-wider bg-primary text-primary-foreground hover:scale-105 transform transition-all duration-200 border-4 border-primary hover:shadow-xl hover:shadow-primary/25"
              >
                Start Free Assessment
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                to="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 font-black text-lg uppercase tracking-wider border-4 border-border hover:border-foreground transition-colors duration-200"
              >
                How It Works
              </Link>
            </div>

            {/* Social Proof */}
            <p className="text-sm text-muted-foreground font-medium">
              Trusted by{" "}
              <span className="text-foreground font-bold">50+ CTOs</span> and
              Engineering Leaders
            </p>
          </div>

          {/* Right Column - Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-card border-4 border-foreground p-8 -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-primary" />

                <h3 className="text-xl font-black uppercase tracking-wider mb-6 border-b-4 border-foreground pb-4">
                  What You'll Get
                </h3>

                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-4 text-lg font-bold"
                    >
                      <span className="shrink-0 w-10 h-10 flex items-center justify-center bg-muted text-xl">
                        {feature.icon}
                      </span>
                      {feature.label}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t-4 border-dashed border-border">
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                    Plus personalized recommendations
                  </p>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-accent-background text-accent-foreground p-4 border-4 border-foreground rotate-3 shadow-lg hidden sm:block">
                <p className="text-3xl font-black">48h</p>
                <p className="text-xs font-bold uppercase tracking-wider">
                  Report Delivery
                </p>
              </div>

              <div className="absolute -top-6 -right-6 bg-primary-background text-primary-foreground p-4 border-4 border-foreground -rotate-3 shadow-lg hidden sm:block">
                <p className="text-3xl font-black">Free</p>
                <p className="text-xs font-bold uppercase tracking-wider">
                  No Card Required
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Progress Indicator */}
        <div className="mt-16 lg:mt-24">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
            {[
              "Take Assessment",
              "Get Your Score",
              "Receive Report",
              "Book Strategy Call",
            ].map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center bg-foreground text-background font-black text-sm">
                    {index + 1}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider whitespace-nowrap">
                    {step}
                  </span>
                </div>
                {index < 3 && (
                  <div className="hidden sm:block w-12 h-0.5 bg-border mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
