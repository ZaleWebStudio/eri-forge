import { Link } from "@tanstack/react-router";
import { FileText, Phone } from "lucide-react";
import { company } from "@/content/eri";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-card/95 backdrop-blur md:hidden">
      <a
        href={company.phoneHref}
        className="flex h-14 items-center justify-center gap-2 font-display text-sm uppercase tracking-[0.14em] text-foreground"
      >
        <Phone className="size-4" aria-hidden="true" />
        Appeler
      </a>
      <Link
        to="/devis"
        className="flex h-14 items-center justify-center gap-2 bg-primary font-display text-sm uppercase tracking-[0.14em] text-primary-foreground"
      >
        <FileText className="size-4" aria-hidden="true" />
        Devis
      </Link>
    </div>
  );
}
