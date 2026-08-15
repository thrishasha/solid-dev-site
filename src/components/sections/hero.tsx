import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/data/portfolio";
import { actionVariants } from "../action";
import { ParticleField } from "../particle-field";

export function Hero() {
  const reduced = useReducedMotion();
  const item = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <ParticleField className="opacity-70" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
        <motion.p {...item(0)} className="eyebrow">
          {profile.title}
        </motion.p>
        <motion.h1
          id="hero-heading"
          {...item(0.08)}
          className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          {...item(0.16)}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          {profile.tagline}
        </motion.p>

        <motion.div {...item(0.24)} className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4" aria-hidden="true" />
          {profile.location}
        </motion.div>

        <motion.div {...item(0.32)} className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#projects" className={actionVariants({ size: "lg" })}>
            View projects
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href={profile.resumePath}
            download={profile.resumeFileName}
            className={actionVariants({ variant: "outline", size: "lg" })}
          >
            <Download className="size-4" aria-hidden="true" />
            Download résumé
          </a>
          <a href="#contact" className={actionVariants({ variant: "ghost", size: "lg" })}>
            <Mail className="size-4" aria-hidden="true" />
            Contact me
          </a>
        </motion.div>

        <motion.div {...item(0.4)} className="mt-6 flex items-center gap-3">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="size-4" aria-hidden="true" />
            GitHub
          </a>
          <span aria-hidden="true" className="text-border">
            /
          </span>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="size-4" aria-hidden="true" />
            LinkedIn
          </a>
        </motion.div>

        <motion.dl
          {...item(0.48)}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4"
        >
          {profile.stats.map((stat) => (
            <div key={stat.label} className="bg-surface px-5 py-6">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs leading-snug text-muted-foreground">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
