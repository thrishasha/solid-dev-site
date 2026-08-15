import { skillGroups } from "@/data/portfolio";
import { Reveal } from "../reveal";
import { Section } from "../section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tooling I use in production"
      intro="Grouped by role in the stack — everything listed here has shipped in a system with real users."
      className="bg-surface-2/40"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.name} delay={(i % 4) * 0.05} className="surface-card p-5">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
              {group.name}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs text-foreground/90 transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
