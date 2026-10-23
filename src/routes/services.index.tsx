import { createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/data/services";
import { PageHero, ServiceCard, FinalCTA } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () => ({ meta: seo("Language Services | DEE Trans", "Translation, subtitling, proofreading, transcription, copywriting, LQA, app testing and data annotation services from DEE Trans.") }),
  component: () => (
    <>
      <PageHero eyebrow="Services" title="Language Services for a Connected World" text="Eight services, one project-focused approach. Choose a service to see what's included and request a tailored quote." />
      <section className="container-site grid gap-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s) => <ServiceCard key={s.slug} s={s} />)}
      </section>
      <FinalCTA />
    </>
  ),
});
