import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Blocks";
import { LanguageDirectory } from "@/components/site/LanguageDirectory";
import { Button } from "@/components/ui/button";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/languages")({
  head: () => ({ meta: seo("Languages We Support | DEE Trans", "Search DEE Trans's regional language directory: African, European, Asian, Middle Eastern, American and Oceanian languages and varieties.") }),
  component: () => (
    <>
      <PageHero eyebrow="Languages We Support" title="Communicate Across Languages and Cultures" text="Search by name or open a region. Need a specific dialect, regional variety, script, or locale? Add it in the quote form — and if a language isn't listed, request it.">
        <Button asChild variant="cta" size="lg" className="mt-8"><Link to="/quote">Request a language pair</Link></Button>
      </PageHero>
      <section className="container-site max-w-5xl py-16">
        <LanguageDirectory />
      </section>
    </>
  ),
});
