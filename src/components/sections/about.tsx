import { Database, GitBranch, Radio, ServerCog } from "lucide-react";
import { about } from "@/data/portfolio";
import { Reveal } from "../reveal";
import { Section } from "../section";

const icons = [ServerCog, Database, Radio, GitBranch];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering for systems that run in production"
      intro="What I work on day to day, and how I approach building software that other teams depend on."
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-5">
          {about.summary.map((paragraph, i) => (
            <Reveal key={paragraph.slice(0, 24)} delay={i * 0.06}>
              <p className="text-base leading-relaxed text-muted-foreground">{paragraph}</p>
            </Reveal>
          ))}
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {about.highlights.map((h, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <Reveal as="li" key={h.title} delay={i * 0.06} className="surface-card p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{h.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
