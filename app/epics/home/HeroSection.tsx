import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LocalizedLink } from "~/lib/localizedLink";
import { StatItem } from "./StatItem";

export function HeroSection() {
  const { t } = useTranslation("home");

  return (
    <section className="pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-interactive opacity-20 -rotate-12 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-interactive opacity-20 rotate-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left: Profile Image with overlaid name */}
          <div className="relative order-first">
            <div className="relative group h-full">
              {/* Decorative background element */}
              <div className="absolute -inset-4 bg-accent-interactive opacity-30 rotate-3 transition-transform duration-300 group-hover:rotate-6" />

              {/* Image container */}
              <div className="relative border-4 border-primary-border-bright overflow-hidden transition-transform duration-300 group-hover:-rotate-1 h-full min-h-[500px] lg:min-h-[600px]">
                <img
                  src="/profile-image.webp"
                  alt="Philipp Litzenberger"
                  className="w-full h-full object-cover grayscale transition-all duration-500"
                />

                {/* Name overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-linear-to-t from-primary-background/70 via-primary-background/50 to-transparent">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] -skew-y-2">
                    {t("hero.firstName")}
                    <br />
                    <span className="text-accent-foreground">
                      {t("hero.lastName")}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-between py-4">
            {/* Top: Badge and description */}
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 text-sm font-black uppercase tracking-widest border-2 border-accent-border-bright text-accent-foreground">
                  {t("hero.badge")}
                </span>
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 max-w-xl leading-relaxed">
                {t("hero.subtitle")}
              </h2>
            </div>

            {/* Middle: Stats */}
            <div className="flex flex-wrap gap-8 lg:gap-10 py-8 border-t-4 border-b-4 border-primary-border my-8">
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

            {/* Bottom: CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
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
          </div>
        </div>
      </div>
    </section>
  );
}
