import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, Github, Target } from "lucide-react";
import { actionVariants } from "@/components/action";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { projects, type CaseStudy } from "@/data/portfolio";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.project;
    const description = `${p.short} Architecture, API design, data model and engineering challenges.`;
    return {
      meta: [
        { title: `${p.name} — Case Study | Arjun Verma` },
        { name: "description", content: description },
        { property: "og:title", content: `${p.name} — Engineering case study` },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  component: CaseStudyPage,
});

function Block({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-28">
      <h2 id={`${id}-h`} className="text-2xl font-semibold sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 space-y-6">{children}</div>
    </section>
  );
}

function ArchitectureDiagram({ layers }: { layers: CaseStudy["architecture"]["diagram"] }) {
  return (
    <div className="surface-card overflow-hidden">
      <div className="border-b border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
        System architecture
      </div>
      <div className="space-y-3 p-5">
        {layers.map((layer, i) => (
          <div key={layer.layer}>
            <div className="grid gap-3 sm:grid-cols-[110px_1fr] sm:items-center">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                {layer.layer}
              </p>
              <ul className="flex flex-wrap gap-2">
                {layer.nodes.map((node) => (
                  <li
                    key={node}
                    className="rounded-lg border border-border bg-surface-2 px-3 py-2 text-xs text-foreground/90"
                  >
                    {node}
                  </li>
                ))}
              </ul>
            </div>
            {i < layers.length - 1 ? (
              <div aria-hidden="true" className="ml-0 mt-3 h-4 border-l border-dashed border-border sm:ml-[55px]" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseStudyPage() {
  const { project } = Route.useLoaderData();

  return (
    <>
      <SiteNav />
      <main id="main" className="pt-24">
        <div className="mx-auto w-full max-w-4xl px-5 pb-24 sm:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <a href="/#projects" className="hover:text-foreground">
              Projects
            </a>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span className="text-foreground">{project.name}</span>
          </nav>

          <Reveal>
            <p className="eyebrow">Case study · {project.year}</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">{project.name}</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{project.short}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              <a href="/#projects" className={actionVariants({ variant: "outline", size: "sm" })}>
                <ArrowLeft className="size-4" aria-hidden="true" />
                All projects
              </a>
              {project.links.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={actionVariants({ variant: "ghost", size: "sm" })}
                >
                  <Github className="size-4" aria-hidden="true" />
                  Source
                </a>
              ) : null}
            </div>
          </Reveal>

          <div className="mt-16 space-y-16">
            <Reveal>
              <Block id="overview" title="Overview">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Purpose", value: project.overview.purpose },
                    { label: "Business problem", value: project.overview.businessProblem },
                    { label: "Solution", value: project.overview.solution },
                  ].map((row) => (
                    <div key={row.label} className="surface-card p-5">
                      <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                        {row.label}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{row.value}</p>
                    </div>
                  ))}
                </div>
              </Block>
            </Reveal>

            <Reveal>
              <Block id="architecture" title="Architecture">
                <p className="text-base leading-relaxed text-muted-foreground">
                  {project.architecture.description}
                </p>
                <ArchitectureDiagram layers={project.architecture.diagram} />
                <ul className="space-y-2">
                  {project.architecture.notes.map((n) => (
                    <li key={n} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                      {n}
                    </li>
                  ))}
                </ul>
              </Block>
            </Reveal>

            <Reveal>
              <Block id="api" title="API design">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="surface-card p-5">
                    <h3 className="text-sm font-semibold">Style</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.api.style}</p>
                  </div>
                  <div className="surface-card p-5">
                    <h3 className="text-sm font-semibold">Authentication</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.api.auth}</p>
                  </div>
                </div>
                <div className="surface-card p-5">
                  <h3 className="text-sm font-semibold">Request / response flow</h3>
                  <ol className="mt-3 space-y-3">
                    {project.api.flow.map((step, i) => (
                      <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="grid size-6 shrink-0 place-items-center rounded-md bg-primary/12 font-mono text-[11px] text-primary">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="surface-card p-5">
                    <h3 className="text-sm font-semibold">Validation</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.api.validation}</p>
                  </div>
                  <div className="surface-card p-5">
                    <h3 className="text-sm font-semibold">Error handling</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.api.errors}</p>
                  </div>
                </div>
              </Block>
            </Reveal>

            <Reveal>
              <Block id="database" title="Database">
                <p className="text-base leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">Engine:</span> {project.database.engine}
                </p>
                <div className="surface-card overflow-x-auto">
                  <table className="w-full min-w-[640px] text-left text-sm">
                    <caption className="sr-only">Key entities and relationships</caption>
                    <thead>
                      <tr className="border-b border-border font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                        <th scope="col" className="px-5 py-3">Entity</th>
                        <th scope="col" className="px-5 py-3">Key fields</th>
                        <th scope="col" className="px-5 py-3">Relationships</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.database.entities.map((e) => (
                        <tr key={e.name} className="border-b border-border/60 last:border-0">
                          <th scope="row" className="px-5 py-3 font-mono text-xs font-medium text-primary">
                            {e.name}
                          </th>
                          <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{e.fields}</td>
                          <td className="px-5 py-3 text-xs text-muted-foreground">{e.relations}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="surface-card p-5">
                    <h3 className="text-sm font-semibold">Data flow</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.database.dataFlow}</p>
                  </div>
                  <div className="surface-card p-5">
                    <h3 className="text-sm font-semibold">Migrations</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.database.migrations}</p>
                  </div>
                </div>
                <div className="surface-card p-5">
                  <h3 className="text-sm font-semibold">Query & optimization</h3>
                  <ul className="mt-3 space-y-2">
                    {project.database.optimization.map((o) => (
                      <li key={o} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                        <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </Block>
            </Reveal>

            <Reveal>
              <Block id="challenges" title="Engineering challenges">
                <div className="space-y-4">
                  {project.challenges.map((c) => (
                    <article key={c.problem} className="surface-card p-6">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent">
                          <Target className="size-4" aria-hidden="true" />
                        </span>
                        <div className="space-y-4">
                          {[
                            { k: "Problem", v: c.problem },
                            { k: "Approach", v: c.approach },
                            { k: "Solution", v: c.solution },
                            { k: "Result", v: c.result },
                          ].map((row) => (
                            <div key={row.k}>
                              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                                {row.k}
                              </h3>
                              <p
                                className={`mt-1 text-sm leading-relaxed ${
                                  row.k === "Result" ? "text-foreground" : "text-muted-foreground"
                                }`}
                              >
                                {row.v}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </Block>
            </Reveal>

            <Reveal>
              <Block id="stack" title="Technology stack">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {project.stack.map((g) => (
                    <div key={g.group} className="surface-card p-5">
                      <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                        {g.group}
                      </h3>
                      <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                        {g.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Block>
            </Reveal>
          </div>

          <div className="mt-16 flex flex-wrap gap-3 border-t border-border pt-8">
            <a href="/#projects" className={actionVariants({ variant: "outline" })}>
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to projects
            </a>
            <a href="/#contact" className={actionVariants({})}>
              Discuss this work
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
