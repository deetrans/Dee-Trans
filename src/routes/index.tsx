import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Globe2, ClipboardList, MessagesSquare, ArrowRight, Captions } from "lucide-react";
import hero from "@/assets/hero.jpg";
import subtitling from "@/assets/subtitling.jpg";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/services";
import { INDUSTRIES } from "@/data/industries";
import { ServiceCard, SectionHead, FinalCTA } from "@/components/site/Blocks";
import { LanguageDirectory } from "@/components/site/LanguageDirectory";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: seo(
      "DEE Trans | Translation, Subtitling & Global Language Services",
      "DEE Trans offers multilingual translation, subtitle translation, proofreading, transcription, copywriting, LQA, app testing, localization, and data annotation services.",
    ),
  }),
  component: Home,
});

const BENEFITS = [
  { icon: Target, t: "Attention to detail", d: "Careful review of language, formatting, and project requirements." },
  { icon: Globe2, t: "Multilingual flexibility", d: "Support for different languages and language pairs, subject to project availability." },
  { icon: ClipboardList, t: "Project-focused service", d: "Deliverables and workflows tailored to each client's brief." },
  { icon: MessagesSquare, t: "Clear communication", d: "Practical coordination from initial request to final delivery." },
];

const STEPS = [
  ["Tell us about your project", "Share your service, languages, files, and requirements."],
  ["Receive a project assessment", "We review the scope and provide a quote."],
  ["Complete the agreed work", "The project follows the confirmed workflow and deliverables."],
  ["Receive your files", "Get the completed work in your requested format."],
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-site grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="eyebrow">Global Language, Localization & Linguistic Services</p>
            <h1 className="font-display mt-5 text-5xl leading-[1.05] md:text-7xl">
              Your Words. <span className="text-teal">Every Language.</span> Every Audience.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              DEE Trans helps businesses, creators, and organizations communicate across languages and cultures. From translation and subtitles to transcription, linguistic quality assurance, app testing, copywriting, and data annotation, we help your content reach the people who matter.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="cta" size="lg"><Link to="/quote">Request a Quote</Link></Button>
              <Button asChild variant="outline" size="lg" className="rounded-full"><Link to="/services">Explore Our Services</Link></Button>
            </div>
          </div>
          <div className="relative">
            <img src={hero} alt="Linguist working with multilingual content on a laptop in a modern office" width={1600} height={1104} className="aspect-[4/3.4] w-full rounded-[2rem] object-cover shadow-soft" />
            <div className="absolute -bottom-6 left-6 hidden rounded-2xl border bg-card p-5 shadow-soft md:block">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">8 services · 9 language regions</p>
              <p className="mt-1 text-sm font-semibold text-navy">From one brief to every audience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-site">
          <SectionHead eyebrow="Services" title="Language Services for a Connected World" text="Whether you are translating documents, preparing subtitles, reviewing multilingual software, or building language datasets, DEE Trans offers services tailored to your content and project requirements." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => <ServiceCard key={s.slug} s={s} />)}
          </div>
        </div>
      </section>

      <section className="container-site grid items-center gap-12 py-20 lg:grid-cols-2">
        <img src={subtitling} alt="Subtitle specialist working on a video timeline" loading="lazy" width={1408} height={1008} className="w-full rounded-[2rem] object-cover" />
        <div>
          <p className="eyebrow flex items-center gap-2"><Captions className="h-4 w-4" /> Featured service</p>
          <h2 className="font-display mt-3 text-3xl md:text-4xl">Subtitles and SRT files, ready for every audience</h2>
          <p className="mt-4 text-muted-foreground">SRT subtitle translation, subtitle creation from scripts or transcripts, timing and readability review, and subtitle LQA for films, courses, and social video.</p>
          <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
            {["SRT & VTT translation", "Subtitle proofreading", "Timing & sync review", "Subtitle quality assurance"].map((x) => (
              <li key={x} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal" />{x}</li>
            ))}
          </ul>
          <Button asChild variant="navy" size="lg" className="mt-8"><Link to="/services/$slug" params={{ slug: "subtitle-translation" }}>Explore subtitling</Link></Button>
        </div>
      </section>

      <section className="bg-navy-gradient py-20">
        <div className="container-site">
          <p className="eyebrow">Why DEE Trans</p>
          <h2 className="font-display mt-3 text-3xl text-navy-foreground md:text-4xl">Quality, Clarity, and Communication</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <div key={b.t} className="border-t border-navy-foreground/20 pt-6">
                <b.icon className="h-6 w-6 text-teal" />
                <h3 className="mt-4 text-lg font-bold text-navy-foreground">{b.t}</h3>
                <p className="mt-2 text-sm text-navy-foreground/70">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead eyebrow="Industries" title="Language Services Across Industries" />
          <Link to="/industries" className="flex items-center gap-1 text-sm font-bold text-teal">All industries <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {INDUSTRIES.map((i) => (
            <div key={i.name} className="rounded-2xl border p-5">
              <i.icon className="h-5 w-5 text-teal" />
              <h3 className="mt-3 text-sm font-bold">{i.name}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{i.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHead eyebrow="Languages" title="Communicate Across Languages and Cultures" text="Explore the languages and regional varieties available for multilingual projects. Language availability and specialist expertise are confirmed according to each project's requirements." />
            <Button asChild variant="navy" size="lg" className="mt-8"><Link to="/languages">Explore Our Languages</Link></Button>
          </div>
          <LanguageDirectory preview />
        </div>
      </section>

      <section className="container-site py-20">
        <SectionHead eyebrow="How it works" title="From brief to delivery in four steps" center />
        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="rounded-2xl border bg-card p-6">
              <span className="font-display text-4xl text-teal">0{i + 1}</span>
              <h3 className="mt-3 font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center"><Button asChild variant="cta" size="lg"><Link to="/quote">Start Your Project</Link></Button></div>
      </section>

      <FinalCTA />
    </>
  );
}
