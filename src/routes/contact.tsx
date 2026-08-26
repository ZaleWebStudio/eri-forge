import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Section } from "@/components/section";
import { DevisForm } from "@/components/devis-form";
import { company, localBusinessJsonLd } from "@/content/eri";

const title = "Contact — Chaudronnerie & soudure à Loriol-du-Comtat | E R I";
const description =
  "Contactez E R I — Entreprise Réalisation Industrielle : 600 route d'Orange, 84870 Loriol-du-Comtat (Vaucluse), téléphone 04 90 46 95 83.";

export const Route = createFileRoute("/contact")({
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
      { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <Section as="h1" eyebrow="Contact" title="Parlons de votre projet" className="border-t-0">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-sm border border-border bg-card p-7 md:p-9">
            <h2 className="text-2xl font-semibold">{company.fullName}</h2>
            <address className="mt-5 flex gap-3 not-italic text-muted-foreground">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                {company.street}
                <br />
                {company.postalCode} {company.city}
              </span>
            </address>
            <a
              href={company.phoneHref}
              className="mt-5 flex items-center gap-3 font-display text-2xl tracking-[0.08em] hover:text-primary"
            >
              <Phone className="size-5 text-primary" aria-hidden="true" />
              {company.phone}
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={company.phoneHref}
                className="inline-flex h-12 items-center gap-2 rounded-sm bg-primary px-6 font-display text-sm uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Appeler
              </a>
              <Link
                to="/devis"
                className="inline-flex h-12 items-center rounded-sm border border-border px-6 font-display text-sm uppercase tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
              >
                Demander un devis
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-sm border border-border">
            <iframe
              title="Localisation d'E R I à Loriol-du-Comtat"
              src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapsQuery)}&output=embed`}
              loading="lazy"
              className="h-80 w-full lg:h-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>

      <Section eyebrow="Devis" title="Décrivez votre besoin">
        <div className="rounded-sm border border-border bg-card p-6 md:p-9">
          <DevisForm />
        </div>
      </Section>
    </SiteLayout>
  );
}
