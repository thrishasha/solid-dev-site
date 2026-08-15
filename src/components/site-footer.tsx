import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name} · Built with React, TanStack Start and Tailwind CSS.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="grid size-9 place-items-center rounded-lg border border-border transition-colors hover:bg-surface-2 hover:text-foreground"
          >
            <Github className="size-4" aria-hidden="true" />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="grid size-9 place-items-center rounded-lg border border-border transition-colors hover:bg-surface-2 hover:text-foreground"
          >
            <Linkedin className="size-4" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="grid size-9 place-items-center rounded-lg border border-border transition-colors hover:bg-surface-2 hover:text-foreground"
          >
            <Mail className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
