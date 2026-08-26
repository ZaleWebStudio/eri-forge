import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Section } from "@/components/section";
import { DevisForm } from "@/components/devis-form";
import { company } from "@/content/eri";

const title = "Demander un devis chaudronnerie ou soudure | E R I Vaucluse";
const description =
  "Présentez votre projet en chaudronnerie ou soudure à E R I (Loriol-du-Comtat, Vaucluse) et recevez une réponse adaptée à votre besoin.";

export const Route = createFileRoute("/devis")({
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
  component: Devis,
});

function Devis() {
  return (
    <SiteLayout>
      <Section
        as="h1"
        eyebrow="Professionnels"
        title="Un projet industriel ou métallique ?"
        intro="Vous avez un besoin spécifique en chaudronnerie ou en soudure ? Présentez-nous votre projet et échangeons sur vos besoins."
        className="border-t-0"
      >
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div className="rounded-sm border border-border bg-card p-6 md:p-9">
            <h2 className="text-2xl font-semibold">Demander un devis</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Les champs marqués d'un astérisque sont obligatoires.
            </p>
            <div className="mt-8">
              <DevisForm />
            </div>
          </div>
          <aside className="rounded-sm border border-border eri-gradient-steel p-6 md:p-8">
            <h2 className="font-display text-xl tracking-[0.1em]">Contact direct</h2>
            <address className="mt-4 not-italic text-sm leading-relaxed text-muted-foreground">
              {company.fullName}
              <br />
              {company.street}
              <br />
              {company.postalCode} {company.city}
            </address>
            <a
              href={company.phoneHref}
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-sm bg-primary px-5 font-display text-sm uppercase tracking-[0.16em] text-primary-foreground"
            >
              <Phone className="size-4" aria-hidden="true" />
              {company.phone}
            </a>
          </aside>
        </div>
      </Section>
    </SiteLayout>
  );
}
