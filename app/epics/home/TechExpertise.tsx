import { Cloud, Cpu, Database, GitBranch, Layers, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export function TechExpertise() {
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
