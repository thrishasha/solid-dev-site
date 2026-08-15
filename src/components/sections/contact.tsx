import { Download, Eye, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";
import { actionVariants } from "../action";
import { Reveal } from "../reveal";
import { Section } from "../section";

const fieldClass =
  "w-full rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus-visible:outline-none";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);

    const subject = encodeURIComponent(String(data.get("subject") ?? "Portfolio enquiry"));
    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client with the message drafted.");
    form.reset();
    setSending(false);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk about your backend"
      intro="Available for backend and full-stack roles, API/architecture work and systems consulting."
      className="bg-surface-2/40"
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="surface-card p-6 sm:p-8">
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input id="name" name="name" required autoComplete="name" className={fieldClass} placeholder="Jane Doe" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={fieldClass}
                  placeholder="jane@company.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                Subject
              </label>
              <input id="subject" name="subject" required className={fieldClass} placeholder="Backend engineer role" />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className={`${fieldClass} resize-y`}
                placeholder="A few lines about the team, the stack and the problem you're solving."
              />
            </div>
            <button type="submit" disabled={sending} className={actionVariants({ size: "lg" })}>
              <Send className="size-4" aria-hidden="true" />
              Send message
            </button>
          </form>
        </Reveal>

        <div className="space-y-4">
          <Reveal delay={0.06} className="surface-card p-6">
            <h3 className="text-base font-semibold">Direct contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-4 text-primary" aria-hidden="true" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  {profile.phone}
                </a>
              </li>
              <li>
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="size-4 text-primary" aria-hidden="true" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="size-4 text-primary" aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.12} className="surface-card p-6">
            <h3 className="text-base font-semibold">Résumé</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              One page, PDF, updated with current experience and stack.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={profile.resumePath}
                download={profile.resumeFileName}
                className={actionVariants({ size: "sm" })}
              >
                <Download className="size-4" aria-hidden="true" />
                Download
              </a>
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noreferrer noopener"
                className={actionVariants({ variant: "outline", size: "sm" })}
              >
                <Eye className="size-4" aria-hidden="true" />
                View résumé
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
