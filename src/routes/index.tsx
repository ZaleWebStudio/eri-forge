import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Section } from "@/components/section";
import { CtaBand } from "@/components/cta-band";
import { company, heroImage, intro, localBusinessJsonLd, projects, reasons, skills } from "@/content/eri";

const title = "Chaudronnerie & Soudure dans le Vaucluse | E R I Loriol-du-Comtat";
const description =
  "E R I — Entreprise Réalisation Industrielle : chaudronnerie et soudure à Loriol-du-Comtat (Vaucluse). Présentez-nous votre projet métallique, demandez un devis au 04 90 46 95 83.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <img
          src={heroImage}
          alt="Atelier de chaudronnerie : soudure d'une structure métallique"
          width={1920}
          height={1200}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="eri-container relative flex min-h-[86vh] flex-col justify-center py-20 md:min-h-[calc(100vh-5rem)]">
          <p className="eri-eyebrow">Chaudronnerie · Soudure · Vaucluse</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] sm:text-5xl md:text-7xl">
            E R I — Chaudronnerie &amp; Soudure dans le Vaucluse
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Un savoir-faire industriel au service de vos projets métalliques.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/devis"
              className="inline-flex h-13 items-center gap-2 rounded-sm bg-primary px-7 py-3.5 font-display text-sm uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Demander un devis
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-background/60 px-7 py-3.5 font-display text-sm uppercase tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="size-4" aria-hidden="true" />
              {company.phone}
            </a>
          </div>
        </div>
        <div className="relative border-t border-border/60 bg-card/70">
          <p className="eri-container flex items-center gap-2 py-4 font-display text-sm uppercase tracking-[0.22em] text-muted-foreground">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            {company.city} • {company.region}
          </p>
        </div>
      </section>

      <Section eyebrow="L'entreprise" title={intro.title}>
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
          <p className="text-lg leading-relaxed text-muted-foreground">{intro.text}</p>
          <div className="rounded-sm border border-border bg-card p-6">
            <h3 className="font-display text-lg tracking-[0.14em] text-primary">Coordonnées</h3>
            <address className="mt-4 not-italic text-sm leading-relaxed text-muted-foreground">
              {company.fullName}
              <br />
              {company.street}
              <br />
              {company.postalCode} {company.city}
            </address>
            <a
              href={company.phoneHref}
              className="mt-4 inline-flex items-center gap-2 font-display text-lg tracking-[0.1em] text-foreground hover:text-primary"
            >
              <Phone className="size-4" aria-hidden="true" />
              {company.phone}
            </a>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Métiers"
        title="Notre savoir-faire"
        intro="Chaudronnerie, soudure et travail du métal pour les professionnels."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <article key={s.title} className="group overflow-hidden rounded-sm border border-border bg-card eri-shadow">
              <img
                src={s.image}
                alt={s.title}
                width={1200}
                height={900}
                loading="lazy"
                className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            </article>
          ))}
        </div>
        <Link
          to="/savoir-faire"
          className="mt-10 inline-flex items-center gap-2 font-display text-sm uppercase tracking-[0.18em] text-primary"
        >
          Voir le détail du savoir-faire <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Section>

      <Section eyebrow="Galerie" title="Nos réalisations" intro="Visuels de démonstration, à remplacer par les projets réalisés par ERI.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((p) => (
            <figure key={p.title} className="group relative overflow-hidden rounded-sm border border-border">
              <img
                src={p.image}
                alt={p.title}
                width={1200}
                height={900}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/85 to-transparent p-4">
                <span className="eri-eyebrow">{p.category}</span>
                <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
        <Link
          to="/realisations"
          className="mt-10 inline-flex items-center gap-2 font-display text-sm uppercase tracking-[0.18em] text-primary"
        >
          Toutes les réalisations <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Section>

      <Section eyebrow="Confiance" title="Pourquoi choisir ERI ?">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <div key={r.title} className="rounded-sm border border-border bg-card p-6">
              <span className="font-display text-3xl text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </SiteLayout>
  );
}
