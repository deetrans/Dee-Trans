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
    <Link to="/services/$slug" params={{ slug: s.slug }} className="group flex flex-col rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:border-blue hover:shadow-soft">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-soft text-blue"><s.icon className="h-5 w-5" /></span>
      <h3 className="mt-5 text-lg font-bold">{s.name}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
      <span className="mt-5 flex items-center gap-1 text-sm font-bold text-blue">Learn More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
    </Link>
  );
}

const WORKFLOW_STEPS = [
  { t: "Share Your Project", d: "Tell us about your content, language requirements, service needs, deadlines, and preferred deliverables." },
  { t: "Requirements Review", d: "We review the brief and clarify any questions about scope, subject matter, language direction, format, or technical requirements." },
  { t: "Project Proposal", d: "We confirm feasibility, resource availability, deliverables, pricing, and the proposed timeline before work begins." },
  { t: "Language Work & Quality Checks", d: "Once the scope and terms are agreed, the project proceeds using appropriate language professionals and the review or quality-assurance steps agreed for the project." },
  { t: "Delivery", d: "The completed work is delivered in the agreed format and according to the agreed project terms." },
];

export function HowItWorks() {
  return (
    <section className="container-site py-20">
      <SectionHead
        eyebrow="How It Works"
        title="From Brief to Delivery in Five Steps"
        text="Every project starts with understanding your requirements. We review your brief, clarify the scope, and work with suitable language professionals to deliver the agreed language services."
        center
      />
      <ol className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
        {WORKFLOW_STEPS.map((s, i) => (
          <li key={s.t} className="rounded-2xl border bg-card p-6">
            <span className="font-display text-4xl text-blue">0{i + 1}</span>
            <h3 className="mt-3 font-bold">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </li>
        ))}
      </ol>
      <div className="mt-10 text-center"><Button asChild variant="cta" size="lg"><Link to="/quote">Request a Quote</Link></Button></div>
    </section>
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
