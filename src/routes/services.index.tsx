import { createFileRoute } from "@tanstack/react-router";
import { SERVICES, SERVICE_CATEGORIES } from "@/data/services";
import { PageHero, ServiceCard, HowItWorks, FinalCTA } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () => ({ meta: seo("Language Services | DEE Trans", "Translation, subtitling, proofreading, transcription, copywriting, LQA, app testing and data annotation services from DEE Trans.") }),
  component: () => (
    <>
      <PageHero eyebrow="Services" title="Language Services for a Connected World" text="Eight services, one project-focused approach. Choose a service to see what's included and request a tailored quote." />
      {SERVICE_CATEGORIES.map((c) => (
        <section key={c.id} className="container-site py-14">
          <h2 className="font-display text-2xl md:text-3xl">{c.name}</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">{c.text}</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.filter((s) => s.category === c.id).map((s) => <ServiceCard key={s.slug} s={s} />)}
          </div>
        </section>
      ))}
      <HowItWorks />
      <FinalCTA />
    </>
  ),
});
