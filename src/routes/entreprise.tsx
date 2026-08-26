import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Section } from "@/components/section";
import { CtaBand } from "@/components/cta-band";
import { company, heroImage, intro, reasons } from "@/content/eri";

const title = "L'entreprise E R I — Entreprise Réalisation Industrielle | Loriol-du-Comtat";
const description =
  "E R I — Entreprise Réalisation Industrielle, spécialisée en chaudronnerie et soudure, est implantée 600 route d'Orange à Loriol-du-Comtat (Vaucluse).";

export const Route = createFileRoute("/entreprise")({
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
  component: Entreprise,
});

function Entreprise() {
  return (
    <SiteLayout>
      <Section as="h1" eyebrow="Qui sommes-nous" title={intro.title} className="border-t-0">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">{intro.text}</p>
            <dl className="mt-8 grid gap-4 text-sm">
              <div className="rounded-sm border border-border bg-card p-5">
                <dt className="eri-eyebrow">Activité</dt>
                <dd className="mt-2 text-foreground">Chaudronnerie / soudure</dd>
              </div>
              <div className="rounded-sm border border-border bg-card p-5">
                <dt className="eri-eyebrow">Implantation</dt>
                <dd className="mt-2 text-foreground">
                  {company.street}, {company.postalCode} {company.city} ({company.region})
                </dd>
              </div>
              <div className="rounded-sm border border-border bg-card p-5">
                <dt className="eri-eyebrow">Contact</dt>
                <dd className="mt-2">
                  <a href={company.phoneHref} className="text-foreground hover:text-primary">
                    {company.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <img
            src={heroImage}
            alt="Atelier industriel de chaudronnerie et soudure"
            width={1920}
            height={1200}
            loading="lazy"
            className="h-80 w-full rounded-sm border border-border object-cover md:h-[32rem]"
          />
        </div>
      </Section>

      <Section eyebrow="Confiance" title="Pourquoi choisir ERI ?">
        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-sm border border-border bg-card p-6">
              <h3 className="text-xl font-semibold">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </SiteLayout>
  );
}
