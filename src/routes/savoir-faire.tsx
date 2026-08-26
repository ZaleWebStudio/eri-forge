import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Section } from "@/components/section";
import { CtaBand } from "@/components/cta-band";
import { skills } from "@/content/eri";

const title = "Savoir-faire : chaudronnerie et soudure | E R I Vaucluse";
const description =
  "Chaudronnerie, soudure et fabrication métallique : découvrez le savoir-faire industriel d'E R I, entreprise implantée à Loriol-du-Comtat dans le Vaucluse.";

export const Route = createFileRoute("/savoir-faire")({
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
  component: SavoirFaire,
});

function SavoirFaire() {
  return (
    <SiteLayout>
      <Section
        as="h1"
        eyebrow="Métiers"
        title="Notre savoir-faire"
        intro="Chaudronnerie et soudure sont au cœur de l'activité d'ERI. Les prestations détaillées seront précisées avec l'entreprise."
        className="border-t-0"
      >
        <div className="grid gap-10">
          {skills.map((s, i) => (
            <article
              key={s.title}
              className={`grid items-center gap-8 overflow-hidden rounded-sm border border-border bg-card md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>img]:order-2" : ""
              }`}
            >
              <img
                src={s.image}
                alt={s.title}
                width={1200}
                height={900}
                loading="lazy"
                className="h-64 w-full object-cover md:h-full"
              />
              <div className="p-7 md:p-10">
                <span className="eri-eyebrow">0{i + 1}</span>
                <h2 className="mt-3 text-2xl font-semibold md:text-3xl">{s.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <CtaBand />
    </SiteLayout>
  );
}
