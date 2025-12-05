import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation("common");

  const socials = [
    { icon: Github, href: "#", labelKey: "socials.github" },
    { icon: Twitter, href: "#", labelKey: "socials.twitter" },
    { icon: Linkedin, href: "#", labelKey: "socials.linkedin" },
    { icon: Mail, href: "#", labelKey: "socials.email" },
  ];

  return (
    <footer className="bg-primary text-background relative overflow-hidden py-24 px-6 md:px-12">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-background-bright opacity-10 -rotate-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <h3 className="font-black text-5xl md:text-7xl mb-8 leading-none uppercase transform -skew-y-2">
              {t("footer.letsConnect")}
              <br />
              <span className="text-accent-foreground">
                {t("footer.connect")}
              </span>
            </h3>
            <p className="text-background/90 font-bold mb-12 leading-relaxed max-w-lg">
              {t("footer.description")}
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-4 px-8 py-4 font-black uppercase text-sm tracking-widest border-2 border-primary-border hover:border-primary-border-bright hover:scale-110 transition-transform duration-300 transform hover:-rotate-2"
            >
              {t("footer.getInTouch")}
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="flex flex-col justify-between">
            <h3 className="font-black text-2xl mb-8 text-accent uppercase tracking-widest">
              {t("footer.findMe")}
            </h3>
            <div className="flex flex-col gap-4">
              {socials.map((social, idx) => {
                const Icon = social.icon;
                const label = t(social.labelKey);
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={label}
                    className="group flex items-center gap-4 font-black uppercase text-sm tracking-wider hover:text-accent transition-colors duration-200"
                  >
                    <div className="w-12 h-12 border-2 border-current flex items-center justify-center transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-32">
                      {label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-12 flex items-center gap-4">
          <div className="flex-1 h-0.5 bg-primary-border-bright" />
          <div className="w-8 h-8 border-2 border-primary-border-bright transform rotate-45" />
          <div className="flex-1 h-0.5 bg-primary-border-bright" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 font-black uppercase tracking-widest text-xs text-background/80">
          <div>
            <p className="mb-2">{t("footer.copyright")}</p>
            <p className="text-2xl text-accent">{t("footer.brand")}</p>
          </div>
          <div className="flex gap-8">
            <a
              href="#"
              className="hover:text-accent transition-colors hover:underline"
            >
              {t("footer.privacy")}
            </a>
            <a
              href="#"
              className="hover:text-accent transition-colors hover:underline"
            >
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
