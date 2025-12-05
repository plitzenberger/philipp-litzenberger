import { Code2, Lightbulb, Users } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";

export function ValueProposition() {
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
