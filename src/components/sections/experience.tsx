import { TrendingUp } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal } from "../reveal";
import { Section } from "../section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Professional timeline"
      intro="Roles, responsibilities and the measurable engineering impact of the work."
    >
      <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-10">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 0.05} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[1.9rem] top-6 size-3 rounded-full border-2 border-background bg-primary sm:-left-[2.9rem]"
            />
            <article className="surface-card p-6 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <p className="font-mono text-xs text-muted-foreground">{job.duration}</p>
              </div>
              <p className="mt-1 text-sm text-primary">
                {job.company} · {job.location}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{job.summary}</p>

              <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Responsibilities
              </h4>
              <ul className="mt-2 space-y-2">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                    {r}
                  </li>
                ))}
              </ul>

              <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Engineering impact
              </h4>
              <ul className="mt-2 space-y-2">
                {job.impact.map((r) => (
                  <li key={r} className="flex gap-2 text-sm leading-relaxed text-foreground/90">
                    <TrendingUp className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
