import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  intro,
  children,
  className = "",
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children?: ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <section className={`border-t border-border/60 py-16 md:py-24 ${className}`}>
      <div className="eri-container">
        {eyebrow ? <p className="eri-eyebrow">{eyebrow}</p> : null}
        {title ? (
          <Heading className="mt-3 max-w-3xl text-3xl font-semibold md:text-5xl">{title}</Heading>
        ) : null}
        {intro ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {intro}
          </p>
        ) : null}
        {children ? <div className="mt-10 md:mt-14">{children}</div> : null}
      </div>
    </section>
  );
}
