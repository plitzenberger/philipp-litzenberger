import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LocalizedLink } from "~/lib/localizedLink";

export function ServicesSection() {
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
