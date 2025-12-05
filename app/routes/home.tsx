import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import type { Route } from "./+types/home";
import { Main } from "~/components/main";
import { Link } from "react-router";
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
      <Header />
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
  return (
    <section className="pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-interactive opacity-20 -rotate-12 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-interactive opacity-20 rotate-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Main content - 3 columns */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 text-sm font-black uppercase tracking-widest border-2 border-accent-border-bright text-accent-foreground mb-6">
                Available for Consulting
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6 -skew-y-1">
              Philipp
              <br />
              <span className="text-accent-foreground">Litzenberger</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-8 max-w-2xl">
              Lead Fullstack Engineer & Technical Consultant helping teams build
              scalable, maintainable systems that run smooth like well oiled
              machines.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="#services"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-solid text-primary-background font-black text-lg uppercase tracking-wider hover:bg-primary-solid-bright hover:scale-105 transform transition-all duration-200"
              >
                Work With Me
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="#about"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-black text-lg uppercase tracking-wider border-4 border-primary-border-bright hover:border-accent-border-bright hover:text-accent-foreground transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats sidebar - 2 columns */}
          <div className="lg:col-span-2 border-l-4 border-primary-border-bright pl-8">
            <div className="space-y-8">
              <StatItem number="10+" label="Years Experience" />
              <StatItem number="50+" label="Projects Delivered" />
              <StatItem number="20+" label="Teams Mentored" />
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
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-primary-background-bright scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8 -skew-y-2">
              Engineering
              <br />
              <span className="text-accent-foreground">Excellence</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              I bridge the gap between{" "}
              <strong>technical excellence and business value</strong>. With a
              decade of experience building and leading engineering teams, I
              help organizations create software that scales—both technically
              and organizationally.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-primary-foreground/80">
              My approach combines deep technical expertise with a strong focus
              on team dynamics, developer experience, and sustainable
              engineering practices.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "TypeScript",
                "React",
                "Node.js",
                "AWS",
                "System Design",
                "Team Leadership",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-bold border-2 border-primary-border hover:border-accent-border-bright hover:text-accent-foreground transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: Code2,
                title: "Technical Depth",
                description:
                  "From system architecture to code review, I bring hands-on expertise to every engagement.",
              },
              {
                icon: Users,
                title: "Team Focus",
                description:
                  "Building high-performing teams through mentorship, clear processes, and psychological safety.",
              },
              {
                icon: Lightbulb,
                title: "Strategic Thinking",
                description:
                  "Aligning technical decisions with business goals for maximum impact.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group flex gap-6 p-6 border-l-4 border-primary-border hover:border-accent-border-bright hover:bg-primary-interactive/50 transition-all duration-200"
                >
                  <div className="w-12 h-12 flex items-center justify-center border-2 border-primary-border-bright group-hover:border-accent-border-bright group-hover:scale-110 transition-all duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg mb-2 group-hover:text-accent-foreground transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "Technical Leadership Retainer",
      description:
        "Ongoing technical guidance for your team. Weekly check-ins, architecture reviews, and strategic planning.",
      features: [
        "Weekly 1:1 sessions",
        "Architecture reviews",
        "Team mentoring",
        "Technical roadmap planning",
      ],
      highlight: true,
    },
    {
      title: "Engineering Health Check",
      description:
        "Comprehensive assessment of your engineering organization's processes, practices, and culture.",
      features: [
        "Team interviews",
        "Process analysis",
        "Tech debt assessment",
        "Actionable recommendations",
      ],
      highlight: false,
    },
    {
      title: "Fractional CTO",
      description:
        "Part-time technical leadership for startups and scale-ups. All the expertise, flexible commitment.",
      features: [
        "Strategic planning",
        "Hiring support",
        "Vendor management",
        "Board presentations",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4 -skew-y-2">
            How I Can <span className="text-accent-foreground">Help</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Flexible engagement models designed to meet your organization where
            it is.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
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
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-black mb-4 group-hover:text-accent-foreground transition-colors">
                {service.title}
              </h3>
              <p className="text-primary-foreground/70 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, fidx) => (
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
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/tech-team-health-check"
            className="inline-flex items-center gap-3 text-accent-foreground font-bold hover:underline group"
          >
            Take the free Engineering Health Check
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TechExpertise() {
  const techCategories = [
    {
      icon: Layers,
      title: "Frontend",
      techs: ["React", "TypeScript", "Next.js", "Tailwind CSS", "React Native"],
    },
    {
      icon: Database,
      title: "Backend",
      techs: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      techs: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    },
    {
      icon: Cpu,
      title: "Architecture",
      techs: [
        "Microservices",
        "Event-Driven",
        "DDD",
        "System Design",
        "API Design",
      ],
    },
    {
      icon: GitBranch,
      title: "Practices",
      techs: ["TDD", "Code Review", "Agile", "DevEx", "Documentation"],
    },
    {
      icon: Zap,
      title: "Leadership",
      techs: [
        "Team Building",
        "Mentoring",
        "Hiring",
        "Process Design",
        "Strategy",
      ],
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-primary-background-bright">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 -skew-y-2">
            Technical <span className="text-accent-foreground">Expertise</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl">
            A decade of building across the full stack, from pixel-perfect UIs
            to distributed systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, idx) => {
            const Icon = category.icon;
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
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
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
  const highlights = [
    {
      role: "Lead Fullstack Engineer",
      company: "Enterprise Scale-Up",
      period: "Recent",
      achievements: [
        "Led migration from monolith to microservices architecture",
        "Built and mentored a team of 8 engineers",
        "Reduced deployment time by 70% through CI/CD improvements",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "High-Growth Startup",
      period: "Previous",
      achievements: [
        "Architected real-time data pipeline processing 1M+ events/day",
        "Established engineering best practices and documentation culture",
        "Shipped product features that increased user engagement by 40%",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 -skew-y-2">
              Career
              <br />
              <span className="text-accent-foreground">Highlights</span>
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              From startup to enterprise, I've delivered impact across diverse
              environments and challenges.
            </p>
            <a
              href="/LEAD_FULLSTACK_SWE_PHILIPP_LITZENBERGER_202511.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-bold text-accent-foreground hover:underline group"
            >
              Download Full CV
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="lg:col-span-2 space-y-8">
            {highlights.map((exp, idx) => (
              <div
                key={idx}
                className="group border-l-4 border-primary-border hover:border-accent-border-bright pl-8 py-4 transition-all duration-200"
              >
                <div className="flex flex-wrap items-baseline gap-4 mb-2">
                  <h3 className="text-xl font-black group-hover:text-accent-foreground transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-bold text-primary-foreground/60">
                    {exp.company} • {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.achievements.map((achievement, aidx) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ThoughtsPreview() {
  const posts = [
    {
      title: "The winning AI narrative.",
      excerpt: "Exploring how the narrative around AI is shaping our reality.",
      category: "Technology",
      date: "Dec 3, 2025",
    },
    {
      title: "What model for which task?",
      excerpt:
        "Exploring the importance of choosing the right model for the right task.",
      category: "Technology",
      date: "Dec 3, 2025",
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
              Latest <span className="text-accent-foreground">Thoughts</span>
            </h2>
            <p className="text-primary-foreground/70">
              Essays on technology, leadership, and building better software.
            </p>
          </div>
          <Link
            to="#thoughts"
            className="inline-flex items-center gap-2 font-bold text-accent-foreground hover:underline group"
          >
            View All Essays
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="group cursor-pointer p-6 border-2 border-primary-border hover:border-accent-border-bright hover:bg-primary-interactive/30 transition-all duration-200"
            >
              <div className="flex items-center gap-4 mb-4 text-xs font-black uppercase tracking-wider">
                <span className="px-3 py-1 border border-accent-interactive-bright text-accent-foreground">
                  {post.category}
                </span>
                <span className="text-primary-foreground/50">{post.date}</span>
              </div>
              <h3 className="text-xl font-black mb-3 group-hover:text-accent-foreground transition-colors">
                {post.title}
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-primary-solid text-primary-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-solid opacity-20 -rotate-12 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 -skew-y-2">
          Let's Build
          <br />
          <span className="text-accent-background">Something Great</span>
        </h2>
        <p className="text-xl mb-10 text-primary-background/80 max-w-2xl mx-auto">
          Whether you need technical leadership, want to improve your
          engineering processes, or have a challenging project—I'd love to hear
          from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@philipplitzenberger.com"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-background text-primary-solid font-black text-lg uppercase tracking-wider hover:scale-105 transform transition-all duration-200"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </a>
          <Link
            to="/tech-team-health-check"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 font-black text-lg uppercase tracking-wider border-4 border-primary-background/50 hover:border-primary-background text-primary-background transition-all duration-200"
          >
            Free Health Check
          </Link>
        </div>
      </div>
    </section>
  );
}
