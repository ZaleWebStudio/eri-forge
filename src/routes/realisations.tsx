import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Section } from "@/components/section";
import { projects } from "@/content/eri";

const title = "Nos réalisations en chaudronnerie et soudure | E R I Vaucluse";
const description =
  "Galerie de réalisations en chaudronnerie, soudure et fabrication métallique. E R I, entreprise industrielle à Loriol-du-Comtat, Vaucluse.";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Realisations,
});

function Realisations() {
  return (
    <SiteLayout>
      <Section
        as="h1"
        eyebrow="Galerie"
        title="Nos réalisations"
        intro="Les visuels et descriptions ci-dessous sont des exemples de démonstration : ils seront remplacés par les projets réellement réalisés par ERI."
        className="border-t-0"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-sm border border-border bg-card">
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="eri-eyebrow">{p.category}</span>
                <h2 className="mt-2 text-xl font-semibold">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-5 rounded-sm border border-border eri-gradient-steel p-8 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-xl uppercase tracking-[0.1em] md:text-2xl">
            Vous avez un projet similaire ? Contactez-nous.
          </p>
          <Link
            to="/devis"
            className="inline-flex h-12 items-center rounded-sm bg-primary px-6 font-display text-sm uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Parler de mon projet
          </Link>
        </div>
      </Section>
    </SiteLayout>
  );
}
