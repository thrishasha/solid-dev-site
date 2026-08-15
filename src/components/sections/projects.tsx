import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { actionVariants } from "../action";
import { Reveal } from "../reveal";
import { Section } from "../section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title="Systems I've designed and shipped"
      intro="Each project has a full case study covering architecture, API design, data modelling and the engineering challenges behind it."
      className="bg-surface-2/40"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal
            as="article"
            key={project.slug}
            delay={i * 0.06}
            className="surface-card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              {project.year}
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              <Link
                to="/projects/$slug"
                params={{ slug: project.slug }}
                className="after:absolute after:inset-0 focus-visible:outline-none"
              >
                {project.name}
              </Link>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.short}</p>

            <dl className="mt-5 space-y-3 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Problem solved
                </dt>
                <dd className="mt-1 leading-relaxed text-foreground/90">{project.problem}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Key contribution
                </dt>
                <dd className="mt-1 leading-relaxed text-foreground/90">{project.contribution}</dd>
              </div>
            </dl>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-2 pt-1">
              <Link
                to="/projects/$slug"
                params={{ slug: project.slug }}
                className={actionVariants({ variant: "outline", size: "sm" })}
              >
                View case study
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Link>
              {project.links.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`${actionVariants({ variant: "ghost", size: "sm" })} relative z-10`}
                  aria-label={`${project.name} on GitHub`}
                >
                  <Github className="size-4" aria-hidden="true" />
                  Code
                </a>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
