import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LocalizedLink } from "~/lib/localizedLink";

export function ThoughtsPreview() {
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
