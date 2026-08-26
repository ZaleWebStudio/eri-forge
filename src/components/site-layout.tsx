import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { MobileCallBar } from "./mobile-call-bar";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-16 pb-14 md:pt-20 md:pb-0">{children}</main>
      <SiteFooter />
      <MobileCallBar />
    </div>
  );
}
