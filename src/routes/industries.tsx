import { createFileRoute } from "@tanstack/react-router";
import { INDUSTRIES } from "@/data/industries";
import { PageHero, FinalCTA } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/industries")({
  head: () => ({ meta: seo("Industries We Support | DEE Trans", "How DEE Trans language services support legal, finance, media, technology, education, healthcare, retail, marketing, publishing and research content.") }),
  component: () => (
    <>
      <PageHero eyebrow="Industries" title="Language Services Across Industries" text="Every sector has its own content, vocabulary, and audiences. Here is how our services typically support each one. Specialist work is assigned only where qualified resources are available." />
      <section className="container-site grid gap-6 py-16 md:grid-cols-2">
        {INDUSTRIES.map((i) => (
          <article key={i.name} className="flex gap-5 rounded-2xl border p-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-soft text-teal"><i.icon className="h-6 w-6" /></span>
            <div>
              <h2 className="text-xl font-bold">{i.name}</h2>
              <p className="mt-2 text-muted-foreground">{i.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {i.services.map((s) => <span key={s} className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-navy">{s}</span>)}
              </div>
            </div>
          </article>
        ))}
      </section>
      <FinalCTA />
    </>
  ),
});
