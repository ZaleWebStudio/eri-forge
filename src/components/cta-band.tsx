import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { company } from "@/content/eri";

export function CtaBand({
  title = "Un projet industriel ou métallique ?",
  text = "Vous avez un besoin spécifique en chaudronnerie ou en soudure ? Présentez-nous votre projet et échangeons sur vos besoins.",
  cta = "Demander un devis",
}: {
  title?: string;
  text?: string;
  cta?: string;
}) {
  return (
    <section className="border-t border-border/60 eri-gradient-steel py-16 md:py-20">
      <div className="eri-container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <span className="block h-1 w-16 eri-hatch" aria-hidden="true" />
          <h2 className="mt-5 text-3xl font-semibold md:text-4xl">{title}</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/devis"
            className="inline-flex h-12 items-center rounded-sm bg-primary px-6 font-display text-sm uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            {cta}
          </Link>
          <a
            href={company.phoneHref}
            className="inline-flex h-12 items-center gap-2 rounded-sm border border-border px-6 font-display text-sm uppercase tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="size-4" aria-hidden="true" />
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
