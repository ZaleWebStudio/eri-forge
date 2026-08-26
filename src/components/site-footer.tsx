import { Link } from "@tanstack/react-router";
import { eriLogoWhite } from "@/assets/eri-logo";
import { company } from "@/content/eri";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="eri-container grid gap-10 py-14 md:grid-cols-3">
        <div>
          <img
            src={eriLogoWhite}
            alt="Logo ERI — Entreprise Réalisation Industrielle"
            width={255}
            height={255}
            className="size-20 rounded-full"
          />
          <p className="mt-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">
            Entreprise Réalisation Industrielle
          </p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Chaudronnerie et soudure à Loriol-du-Comtat, dans le Vaucluse.
          </p>
        </div>

        <div className="text-sm">
          <h2 className="font-display text-sm tracking-[0.22em] text-primary">Coordonnées</h2>
          <address className="mt-4 not-italic text-muted-foreground">
            {company.street}
            <br />
            {company.postalCode} {company.city}
            <br />
            <a href={company.phoneHref} className="mt-2 inline-block text-foreground hover:text-primary">
              {company.phone}
            </a>
          </address>
        </div>

        <div className="text-sm">
          <h2 className="font-display text-sm tracking-[0.22em] text-primary">Navigation</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>
              <Link to="/savoir-faire" className="hover:text-foreground">
                Savoir-faire
              </Link>
            </li>
            <li>
              <Link to="/realisations" className="hover:text-foreground">
                Réalisations
              </Link>
            </li>
            <li>
              <Link to="/entreprise" className="hover:text-foreground">
                L'entreprise
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/devis" className="hover:text-foreground">
                Demander un devis
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6">
        <p className="eri-container text-xs uppercase tracking-[0.18em] text-muted-foreground">
          © {new Date().getFullYear()} E R I — Entreprise Réalisation Industrielle
        </p>
      </div>
    </footer>
  );
}
