import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { company } from "@/content/eri";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/savoir-faire", label: "Savoir-faire" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/entreprise", label: "L'entreprise" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="eri-container flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="h-9 w-1.5 eri-hatch md:h-11" aria-hidden="true" />
          <span className="leading-none">
            <span className="block font-display text-2xl font-semibold tracking-[0.3em] md:text-3xl">
              ERI
            </span>
            <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground md:text-[0.68rem]">
              Entreprise Réalisation Industrielle
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-display text-sm uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={company.phoneHref}
            className="inline-flex h-10 items-center gap-2 rounded-sm border border-border px-3 font-display text-sm uppercase tracking-[0.12em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">{company.phone}</span>
            <span className="sr-only sm:hidden">Appeler ERI</span>
          </a>
          <Link
            to="/devis"
            className="hidden h-10 items-center rounded-sm bg-primary px-4 font-display text-sm uppercase tracking-[0.12em] text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
          >
            Demander un devis
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="inline-flex size-10 items-center justify-center rounded-sm border border-border lg:hidden"
          >
            {open ? <Menu className="size-5 hidden" /> : null}
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="border-t border-border bg-card lg:hidden"
          aria-label="Navigation mobile"
        >
          <div className="eri-container flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 font-display text-base uppercase tracking-[0.14em] text-muted-foreground"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/devis"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex h-11 items-center justify-center rounded-sm bg-primary font-display text-sm uppercase tracking-[0.14em] text-primary-foreground"
            >
              Demander un devis
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
