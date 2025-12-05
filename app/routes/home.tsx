import { Footer } from "~/components/footer";
import type { Route } from "./+types/home";
import { Main } from "~/components/main";
import { useTranslation, Trans } from "react-i18next";
import { LocalizedLink } from "~/lib/localizedLink";
import {
  Code2,
  Users,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Cloud,
  GitBranch,
  Layers,
  Zap,
} from "lucide-react";

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
      <ExperienceHighlights />
      <ThoughtsPreview />
      <CTASection />
      <Footer />
    </Main>
  );
}

function HeroSection() {
  const { t } = useTranslation("home");

  return (
    <section className="pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-interactive opacity-20 -rotate-12 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-interactive opacity-20 rotate-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Main content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 text-sm font-black uppercase tracking-widest border-2 border-accent-border-bright text-accent-foreground mb-6">
                {t("hero.badge")}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6 -skew-y-1">
              {t("hero.firstName")}
              <br />
              <span className="text-accent-foreground">
                {t("hero.lastName")}
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-8 max-w-2xl">
              {t("hero.subtitle")}
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <LocalizedLink
                to="#services"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-solid text-primary-background font-black text-lg uppercase tracking-wider hover:bg-primary-solid-bright hover:scale-105 transform transition-all duration-200"
              >
                {t("hero.cta.primary")}
                <ArrowRight className="w-5 h-5" />
              </LocalizedLink>
              <LocalizedLink
                to="#about"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-black text-lg uppercase tracking-wider border-4 border-primary-border-bright hover:border-accent-border-bright hover:text-accent-foreground transition-all duration-200"
              >
                {t("hero.cta.secondary")}
              </LocalizedLink>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 lg:gap-12 pt-8 border-t-4 border-primary-border">
              <StatItem
                number={t("hero.stats.experience.number")}
                label={t("hero.stats.experience.label")}
              />
              <StatItem
                number={t("hero.stats.projects.number")}
                label={t("hero.stats.projects.label")}
              />
              <StatItem
                number={t("hero.stats.teams.number")}
                label={t("hero.stats.teams.label")}
              />
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative group">
              {/* Decorative background element */}
              <div className="absolute -inset-4 bg-accent-interactive opacity-30 rotate-3 transition-transform duration-300 group-hover:rotate-6" />
              {/* Image container */}
              <div className="relative border-4 border-primary-border-bright overflow-hidden transition-transform duration-300 group-hover:-rotate-1">
                <img
                  src="/profile-image.webp"
                  alt="Philipp Litzenberger"
                  className="w-full max-w-xs sm:max-w-sm lg:max-w-md aspect-4/5 grayscale hover:grayscale-0 transition-all duration-500 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
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

function ValueProposition() {
  const { t } = useTranslation("home");

  const items = [
    {
      icon: Code2,
      titleKey: "valueProposition.items.technicalDepth.title",
      descriptionKey: "valueProposition.items.technicalDepth.description",
    },
    {
      icon: Users,
      titleKey: "valueProposition.items.teamFocus.title",
      descriptionKey: "valueProposition.items.teamFocus.description",
    },
    {
      icon: Lightbulb,
      titleKey: "valueProposition.items.strategicThinking.title",
      descriptionKey: "valueProposition.items.strategicThinking.description",
    },
  ];

  const skills = t("valueProposition.skills", {
    returnObjects: true,
  }) as string[];

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-primary-background-bright scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* About content */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8 -skew-y-2">
            {t("valueProposition.title")}
            <br />
            <span className="text-accent-foreground">
              {t("valueProposition.titleAccent")}
            </span>
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            <Trans i18nKey="valueProposition.description1" ns="home">
              I bridge the gap between{" "}
              <strong>technical excellence and business value</strong>. With a
              decade of experience building and leading engineering teams, I
              help organizations create software that scales—both technically
              and organizationally.
            </Trans>
          </p>
          <p className="text-lg leading-relaxed mb-8 text-primary-foreground/80">
            {t("valueProposition.description2")}
          </p>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm font-bold border-2 border-primary-border hover:border-accent-border-bright hover:text-accent-foreground transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Value proposition items - full width grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex gap-6 p-6 border-l-4 border-primary-border hover:border-accent-border-bright hover:bg-primary-interactive/50 transition-all duration-200"
              >
                <div className="w-12 h-12 flex items-center justify-center border-2 border-primary-border-bright group-hover:border-accent-border-bright group-hover:scale-110 transition-all duration-200 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-lg mb-2 group-hover:text-accent-foreground transition-colors">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm">
                    {t(item.descriptionKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const { t } = useTranslation("home");

  const services = [
    {
      titleKey: "services.items.retainer.title",
      descriptionKey: "services.items.retainer.description",
      featuresKey: "services.items.retainer.features",
      highlight: true,
    },
    {
      titleKey: "services.items.healthCheck.title",
      descriptionKey: "services.items.healthCheck.description",
      featuresKey: "services.items.healthCheck.features",
      highlight: false,
    },
    {
      titleKey: "services.items.fractionalCto.title",
      descriptionKey: "services.items.fractionalCto.description",
      featuresKey: "services.items.fractionalCto.features",
      highlight: false,
    },
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4 -skew-y-2">
            {t("services.title")}{" "}
            <span className="text-accent-foreground">
              {t("services.titleAccent")}
            </span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const features = t(service.featuresKey, {
              returnObjects: true,
            }) as string[];
            return (
              <div
                key={idx}
                className={`group p-8 border-4 transition-all duration-300 hover:-translate-y-2 ${
                  service.highlight
                    ? "border-accent-border-bright bg-accent-interactive/20"
                    : "border-primary-border hover:border-accent-border-bright"
                }`}
              >
                {service.highlight && (
                  <span className="inline-block px-3 py-1 text-xs font-black uppercase tracking-wider bg-accent-solid text-accent-background mb-4">
                    {t("services.mostPopular")}
                  </span>
                )}
                <h3 className="text-xl font-black mb-4 group-hover:text-accent-foreground transition-colors">
                  {t(service.titleKey)}
                </h3>
                <p className="text-primary-foreground/70 mb-6 text-sm leading-relaxed">
                  {t(service.descriptionKey)}
                </p>
                <ul className="space-y-3">
                  {features.map((feature, fidx) => (
                    <li
                      key={fidx}
                      className="flex items-center gap-3 text-sm font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent-foreground shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <LocalizedLink
            to="/tech-team-health-check"
            className="inline-flex items-center gap-3 text-accent-foreground font-bold hover:underline group"
          >
            {t("services.freeHealthCheck")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
}

function TechExpertise() {
  const { t } = useTranslation("home");

  const techCategories = [
    {
      icon: Layers,
      titleKey: "techExpertise.categories.frontend.title",
      techsKey: "techExpertise.categories.frontend.techs",
    },
    {
      icon: Database,
      titleKey: "techExpertise.categories.backend.title",
      techsKey: "techExpertise.categories.backend.techs",
    },
    {
      icon: Cloud,
      titleKey: "techExpertise.categories.cloud.title",
      techsKey: "techExpertise.categories.cloud.techs",
    },
    {
      icon: Cpu,
      titleKey: "techExpertise.categories.architecture.title",
      techsKey: "techExpertise.categories.architecture.techs",
    },
    {
      icon: GitBranch,
      titleKey: "techExpertise.categories.practices.title",
      techsKey: "techExpertise.categories.practices.techs",
    },
    {
      icon: Zap,
      titleKey: "techExpertise.categories.leadership.title",
      techsKey: "techExpertise.categories.leadership.techs",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-primary-background-bright">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 -skew-y-2">
            {t("techExpertise.title")}{" "}
            <span className="text-accent-foreground">
              {t("techExpertise.titleAccent")}
            </span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl">
            {t("techExpertise.description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, idx) => {
            const Icon = category.icon;
            const techs = t(category.techsKey, {
              returnObjects: true,
            }) as string[];
            return (
              <div
                key={idx}
                className="group p-6 border-2 border-primary-border hover:border-accent-border-bright transition-all duration-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-primary-border-bright group-hover:border-accent-border-bright transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-black text-lg group-hover:text-accent-foreground transition-colors">
                    {t(category.titleKey)}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-primary-interactive/50 text-primary-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExperienceHighlights() {
  const { t } = useTranslation("home");

  const highlights = [
    {
      roleKey: "experience.items.lead.role",
      companyKey: "experience.items.lead.company",
      periodKey: "experience.items.lead.period",
      achievementsKey: "experience.items.lead.achievements",
    },
    {
      roleKey: "experience.items.senior.role",
      companyKey: "experience.items.senior.company",
      periodKey: "experience.items.senior.period",
      achievementsKey: "experience.items.senior.achievements",
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 -skew-y-2">
              {t("experience.title")}
              <br />
              <span className="text-accent-foreground">
                {t("experience.titleAccent")}
              </span>
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              {t("experience.description")}
            </p>
            <a
              href="/LEAD_FULLSTACK_SWE_PHILIPP_LITZENBERGER_202511.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-bold text-accent-foreground hover:underline group"
            >
              {t("experience.downloadCv")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="lg:col-span-2 space-y-8">
            {highlights.map((exp, idx) => {
              const achievements = t(exp.achievementsKey, {
                returnObjects: true,
              }) as string[];
              return (
                <div
                  key={idx}
                  className="group border-l-4 border-primary-border hover:border-accent-border-bright pl-8 py-4 transition-all duration-200"
                >
                  <div className="flex flex-wrap items-baseline gap-4 mb-2">
                    <h3 className="text-xl font-black group-hover:text-accent-foreground transition-colors">
                      {t(exp.roleKey)}
                    </h3>
                    <span className="text-sm font-bold text-primary-foreground/60">
                      {t(exp.companyKey)} • {t(exp.periodKey)}
                    </span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {achievements.map((achievement, aidx) => (
                      <li
                        key={aidx}
                        className="flex items-start gap-3 text-sm text-primary-foreground/80"
                      >
                        <span className="w-1.5 h-1.5 bg-accent-solid rounded-full mt-2 shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ThoughtsPreview() {
  const { t } = useTranslation("home");

  const posts = [
    {
      titleKey: "thoughts.posts.aiNarrative.title",
      excerptKey: "thoughts.posts.aiNarrative.excerpt",
      categoryKey: "thoughts.posts.aiNarrative.category",
      dateKey: "thoughts.posts.aiNarrative.date",
    },
    {
      titleKey: "thoughts.posts.modelSelection.title",
      excerptKey: "thoughts.posts.modelSelection.excerpt",
      categoryKey: "thoughts.posts.modelSelection.category",
      dateKey: "thoughts.posts.modelSelection.date",
    },
  ];

  return (
    <section
      id="thoughts"
      className="py-24 px-6 md:px-12 bg-primary-background-bright scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2 -skew-y-2">
              {t("thoughts.title")}{" "}
              <span className="text-accent-foreground">
                {t("thoughts.titleAccent")}
              </span>
            </h2>
            <p className="text-primary-foreground/70">
              {t("thoughts.description")}
            </p>
          </div>
          <LocalizedLink
            to="#thoughts"
            className="inline-flex items-center gap-2 font-bold text-accent-foreground hover:underline group"
          >
            {t("thoughts.viewAll")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </LocalizedLink>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="group cursor-pointer p-6 border-2 border-primary-border hover:border-accent-border-bright hover:bg-primary-interactive/30 transition-all duration-200"
            >
              <div className="flex items-center gap-4 mb-4 text-xs font-black uppercase tracking-wider">
                <span className="px-3 py-1 border border-accent-interactive-bright text-accent-foreground">
                  {t(post.categoryKey)}
                </span>
                <span className="text-primary-foreground/50">
                  {t(post.dateKey)}
                </span>
              </div>
              <h3 className="text-xl font-black mb-3 group-hover:text-accent-foreground transition-colors">
                {t(post.titleKey)}
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {t(post.excerptKey)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { t } = useTranslation("home");

  return (
    <section className="py-24 px-6 md:px-12 bg-primary-solid text-primary-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-solid opacity-20 -rotate-12 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 -skew-y-2">
          {t("cta.title1")}
          <br />
          <span className="text-accent-background">{t("cta.title2")}</span>
        </h2>
        <p className="text-xl mb-10 text-primary-background/80 max-w-2xl mx-auto">
          {t("cta.description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@philipplitzenberger.com"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-background text-primary-solid font-black text-lg uppercase tracking-wider hover:scale-105 transform transition-all duration-200"
          >
            {t("cta.getInTouch")}
            <ArrowRight className="w-5 h-5" />
          </a>
          <LocalizedLink
            to="/tech-team-health-check"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 font-black text-lg uppercase tracking-wider border-4 border-primary-background/50 hover:border-primary-background text-primary-background transition-all duration-200"
          >
            {t("cta.freeHealthCheck")}
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
}
