import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { certifications, education, profile, skillGroups } from "@/data/portfolio";

const description =
  "Arjun Verma — software developer building production backends: Laravel/Node REST & GraphQL APIs, MySQL/PostgreSQL data models, RabbitMQ integrations and React front-ends for SaaS and healthcare (LIMS) platforms.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arjun Verma — Backend & Full-Stack Software Developer" },
      { name: "description", content: description },
      { property: "og:title", content: "Arjun Verma — Backend & Full-Stack Software Developer" },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.title,
          email: `mailto:${profile.email}`,
          description,
          knowsAbout: skillGroups.flatMap((g) => g.items),
          alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.institution })),
          hasCredential: certifications.map((c) => ({
            "@type": "EducationalOccupationalCredential",
            name: c.name,
917: 
          })),
          sameAs: [profile.social.github, profile.social.linkedin],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
