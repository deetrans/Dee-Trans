import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { QuoteForm } from "@/components/site/QuoteForm";
import { PageHero } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/quote")({
  validateSearch: z.object({ service: z.string().optional() }),
  head: () => ({ meta: seo("Request a Quote | DEE Trans", "Tell DEE Trans about your translation, subtitling, transcription or localization project and receive a tailored quote.") }),
  component: Quote,
});

function Quote() {
  return (
    <>
      <PageHero eyebrow="Request a Quote" title="Tell us about your project" text="Choose a service, add your languages and files, and we'll assess the scope and reply with a quote. We don't publish fixed prices because every project is different." />
      <section className="container-site max-w-4xl py-16">
        <QuoteForm cta="Request a Quote" />
      </section>
    </>
  );
}
