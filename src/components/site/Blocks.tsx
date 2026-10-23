import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import type { Service } from "@/data/services";

export function PageHero({ eyebrow, title, text, children }: { eyebrow: string; title: string; text?: string; children?: ReactNode }) {
  return (
    <section className="bg-secondary">
      <div className="container-site py-16 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="font-display mt-4 max-w-4xl text-4xl md:text-6xl">{title}</h1>
        {text && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{text}</p>}
        {children}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, text, center }: { eyebrow?: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="font-display mt-3 text-3xl md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-muted-foreground">{text}</p>}
    </div>
  );
}

export function ServiceCard({ s }: { s: Service }) {
  return (
    <Link to="/services/$slug" params={{ slug: s.slug }} className="group flex flex-col rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:border-teal hover:shadow-soft">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-teal"><s.icon className="h-5 w-5" /></span>
      <h3 className="mt-5 text-lg font-bold">{s.name}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
      <span className="mt-5 flex items-center gap-1 text-sm font-bold text-teal">Learn More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
    </Link>
  );
}

export function FinalCTA() {
  return (
    <section className="container-site py-20">
      <div className="bg-navy-gradient relative overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16">
        <h2 className="font-display text-3xl text-navy-foreground md:text-5xl">Ready to Take Your Content Global?</h2>
        <p className="mx-auto mt-4 max-w-xl text-navy-foreground/75">Tell us what you need translated, reviewed, subtitled, transcribed, written, tested, or annotated.</p>
        <Button asChild variant="cta" size="lg" className="mt-8"><Link to="/quote">Request a Quote</Link></Button>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="container-site max-w-3xl space-y-4 py-16 text-foreground [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_ul]:list-disc [&_ul]:pl-6">{children}</div>;
}
