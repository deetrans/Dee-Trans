import { createFileRoute } from "@tanstack/react-router";
import about from "@/assets/about.jpg";
import { FinalCTA } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: seo("About DEE Trans | Language Services Company", "DEE Trans helps people and organizations communicate across languages and cultures through translation, subtitling, transcription and more.") }),
  component: About,
});

const SECTIONS = [
  ["Our mission", "To help people and organizations communicate clearly with audiences in every language they need to reach."],
  ["Our approach", "Linguistic attention to detail, thoughtful project coordination, and respect for the cultural context of every piece of content."],
  ["Our services", "Translation, localization, subtitling, proofreading, transcription, copywriting, linguistic quality assurance, app testing, and data annotation."],
  ["Our commitment to communication", "Clear expectations from the first request: what will be delivered, in which format, and by when."],
  ["How we work with clients", "Every project starts with your brief. We confirm languages, scope, and deliverables, then assign work according to actual linguistic and subject expertise."],
];

function About() {
  return (
    <>
      <section className="container-site grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <p className="eyebrow">About DEE Trans</p>
          <h1 className="font-display mt-4 text-4xl md:text-5xl">Helping People and Organizations Communicate Across Languages</h1>
          <p className="mt-6 text-lg text-muted-foreground">DEE Trans is a language services company dedicated to helping people and organizations communicate across languages and cultures. We support multilingual content through translation, localization, subtitling, proofreading, transcription, copywriting, linguistic quality assurance, app testing, and data annotation.</p>
          <p className="mt-4 text-muted-foreground">Our approach combines linguistic attention to detail, thoughtful project coordination, and an understanding of the importance of clear communication. We aim to help clients prepare content for audiences across different languages and cultures.</p>
        </div>
        <img src={about} alt="Professionals collaborating on an international project" width={1408} height={1008} className="w-full rounded-[2rem] object-cover shadow-soft" />
      </section>
      <section className="bg-secondary py-20">
        <div className="container-site grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-card p-7">
              <h2 className="text-xl font-bold">{t}</h2>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container-site py-20">
        <h2 className="font-display text-3xl">Trust, quality, and confidentiality</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            "Understand the client's brief and intended audience.",
            "Confirm languages, content type, and deliverables.",
            "Assign the project according to actual linguistic and subject expertise.",
            "Complete the agreed translation, review, transcription, testing, or annotation work.",
            "Conduct appropriate quality checks.",
            "Deliver the work in the agreed format.",
          ].map((t, i) => (
            <li key={t} className="flex gap-4 rounded-xl border p-5"><span className="font-display text-2xl text-teal">{i + 1}</span><span className="pt-1 text-sm">{t}</span></li>
          ))}
        </ol>
        <p className="mt-6 max-w-2xl text-sm text-muted-foreground">Files you share are stored privately and used only to assess and complete your project. Ask us if your project needs a confidentiality agreement.</p>
      </section>
      <FinalCTA />
    </>
  );
}
