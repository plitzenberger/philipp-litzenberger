import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LocalizedLink } from "~/lib/localizedLink";

export function CTASection() {
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
