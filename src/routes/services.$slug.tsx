import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { getService, SERVICES } from "@/data/services";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Button } from "@/components/ui/button";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const s = getService(params.slug);
    if (!s) throw notFound();
    return { slug: s.slug };
  },
  head: ({ loaderData }) => {
    const s = loaderData && getService(loaderData.slug);
    return { meta: s ? seo(s.seoTitle, s.seoDescription) : [{ title: "Service not found | DEE Trans" }, { name: "robots", content: "noindex" }] };
  },
  component: ServicePage,
});

function ServicePage() {
  const { slug } = Route.useLoaderData();
  const s = getService(slug)!;
  const others = SERVICES.filter((x) => x.slug !== slug).slice(0, 4);

  return (
    <>
      <section className="bg-secondary">
        <div className="container-site grid items-center gap-12 py-14 md:py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow flex items-center gap-2"><s.icon className="h-4 w-4" /> {s.name}</p>
            <h1 className="font-display mt-4 text-4xl leading-tight md:text-5xl">{s.headline}</h1>
            <p className="mt-6 text-lg text-muted-foreground">{s.description}</p>
            <Button asChild variant="cta" size="lg" className="mt-8"><a href="#quote">{s.cta}</a></Button>
          </div>
          <img src={s.image} alt={s.imageAlt} width={1408} height={1008} className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft" />
        </div>
      </section>

      <section className="container-site grid gap-12 py-20 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl">What we offer</h2>
          <ul className="mt-6 space-y-3">
            {s.offerings.map((o) => (
              <li key={o} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-blue" />{o}</li>
            ))}
          </ul>
          {s.formats && (
            <div className="mt-10">
              <h3 className="text-lg font-bold">Formats</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.formats.map((f) => <span key={f} className="rounded-full bg-blue-soft px-3 py-1.5 text-sm font-semibold text-navy">{f}</span>)}
              </div>
            </div>
          )}
        </div>
        <div>
          <h2 className="font-display text-3xl">How the project works</h2>
          <ol className="mt-6 space-y-4">
            {s.workflow.map((w, i) => (
              <li key={w} className="flex gap-4 rounded-xl border p-4">
                <span className="font-display text-2xl text-blue">{i + 1}</span>
                <span className="pt-1 text-sm">{w}</span>
              </li>
            ))}
          </ol>
          {s.explainer && (
            <div className="mt-8 rounded-2xl bg-navy p-6 text-navy-foreground">
              <h3 className="text-lg font-bold text-navy-foreground">{s.explainer.title}</h3>
              {"body" in s.explainer ? (
                <p className="mt-2 text-sm text-navy-foreground/80">{s.explainer.body}</p>
              ) : (
                <dl className="mt-3 space-y-3">
                  {s.explainer.items.map((it) => (
                    <div key={it.term}><dt className="font-bold text-blue">{it.term}</dt><dd className="text-sm text-navy-foreground/80">{it.text}</dd></div>
                  ))}
                </dl>
              )}
            </div>
          )}
        </div>
      </section>

      <section id="quote" className="scroll-mt-24 bg-secondary py-20">
        <div className="container-site max-w-4xl">
          <p className="eyebrow">Request a quote</p>
          <h2 className="font-display mt-3 text-3xl md:text-4xl">{s.cta}</h2>
          <p className="mt-3 text-muted-foreground">Share your project details. We'll assess the scope and reply with a quote.</p>
          <div className="mt-8"><QuoteForm key={s.slug} fixedService={s.slug} cta={s.cta} /></div>
        </div>
      </section>

      <section className="container-site py-16">
        <h2 className="text-xl font-bold">Related services</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {others.map((o) => (
            <Link key={o.slug} to="/services/$slug" params={{ slug: o.slug }} className="rounded-full border px-4 py-2 text-sm font-semibold hover:border-blue hover:text-blue">{o.name}</Link>
          ))}
        </div>
      </section>
    </>
  );
}
