import { createFileRoute, Link } from "@tanstack/react-router";
import { FlaskConical } from "lucide-react";
import { PORTFOLIO_SAMPLES } from "@/data/portfolio";
import { PageHero, FinalCTA } from "@/components/site/Blocks";
import { Button } from "@/components/ui/button";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: seo(
      "Portfolio | DEE Trans",
      "Demonstration samples showing the types of language work DEE Trans coordinates: translation, localization, subtitling, proofreading, transcription, testing and annotation.",
    ),
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Examples of the Work We Coordinate"
        text="The samples below are demonstration projects created to illustrate the types of language work DEE Trans can coordinate. They are not completed client assignments. Example translations shown are illustrative and would receive full linguistic review before any real publication."
      />
      <section className="container-site py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {PORTFOLIO_SAMPLES.map((p) => (
            <article key={p.title} className="flex flex-col rounded-2xl border bg-card p-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-blue-soft px-3 py-1 text-xs font-bold text-navy">{p.category}</span>
                <span className="rounded-full border border-blue/40 px-3 py-1 text-xs font-bold text-blue">{p.languages}</span>
                <span className="ml-auto flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <FlaskConical className="h-3.5 w-3.5" /> Demonstration Sample
                </span>
              </div>
              <h2 className="mt-4 text-xl font-bold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.objective}</p>
              {(p.sourceSample || p.targetSample) && (
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {p.sourceSample && (
                    <div className="rounded-xl bg-secondary p-4">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Source</p>
                      <p className="mt-2 whitespace-pre-line text-sm">{p.sourceSample}</p>
                    </div>
                  )}
                  {p.targetSample && (
                    <div className="rounded-xl bg-blue-soft p-4">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Result</p>
                      <p className="mt-2 whitespace-pre-line text-sm">{p.targetSample}</p>
                    </div>
                  )}
                </div>
              )}
              <p className="mt-5 text-sm"><span className="font-bold text-navy">Approach: </span>{p.approach}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.skills.map((s) => (
                  <span key={s} className="rounded-full border px-3 py-1 text-xs font-semibold text-muted-foreground">{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-14 rounded-3xl bg-secondary px-8 py-12 text-center">
          <h2 className="font-display text-2xl md:text-3xl">Have a project like these?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Tell us about your content, languages, and goals — we'll assess the scope and reply with a tailored proposal.</p>
          <Button asChild variant="cta" size="lg" className="mt-6"><Link to="/quote">Discuss Your Project</Link></Button>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
