import { Award, ExternalLink, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/portfolio";
import { Reveal } from "../reveal";
import { Section } from "../section";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education & certifications"
      title="Academic background and credentials"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.05} className="surface-card p-6">
              <div className="flex items-start gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary">
                  <GraduationCap className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{e.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {e.institution} · {e.year}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {e.focus.map((f) => (
                      <li
                        key={f}
                        className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <ul className="space-y-4">
          {certifications.map((c, i) => (
            <Reveal as="li" key={c.name} delay={i * 0.05} className="surface-card p-5">
              <div className="flex items-start gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent">
                  <Award className="size-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold">{c.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {c.issuer} · {c.year}
                  </p>
                  {c.link ? (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-2 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                    >
                      View credential
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
