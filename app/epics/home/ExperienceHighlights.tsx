import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ExperienceHighlights() {
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
