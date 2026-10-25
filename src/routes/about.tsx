import { createFileRoute } from "@tanstack/react-router";
import about from "@/assets/about.jpg";
import { FinalCTA } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: seo("About DEE Trans | Multilingual Language Solutions", "DEE Trans coordinates professional language solutions — translation, subtitling, transcription and more — through suitable language professionals for each project.") }),
  component: About,
});

const SECTIONS = [
  ["Our purpose", "To help businesses, organizations, and individuals communicate clearly with audiences in every language they need to reach."],
  ["Who we serve", "Companies entering international markets, businesses with multilingual content, translation agencies seeking reliable partners, media companies, and technology teams localizing software."],
  ["How projects are coordinated", "Every project starts with your brief. We confirm languages, scope, and deliverables, then coordinate the work with language professionals whose skills match the project."],
  ["How professionals are selected", "Work is assigned according to actual linguistic and subject expertise — the right language pair, the right subject matter, and the right service experience for each project."],
  ["Cultural context and consistency", "Good language work is more than correct words. We pay attention to cultural context, terminology, and consistency so content reads naturally for its intended audience."],
  ["Clear requirements, clear communication", "We set expectations before work begins: what will be delivered, in which format, and on what timeline — and we stay reachable while the project runs."],
];

function About() {
  return (
    <>
      <section className="container-site grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <p className="eyebrow">About DEE Trans</p>
          <h1 className="font-display mt-4 text-4xl md:text-5xl">Connecting Languages. Creating Understanding.</h1>
          <p className="mt-6 text-lg text-muted-foreground">DEE Trans is a language services company that coordinates professional language solutions for businesses, organizations, and individuals. We support multilingual communication through translation, localization, subtitling, proofreading, transcription, copywriting, linguistic quality assurance, app testing, and data annotation.</p>
          <p className="mt-4 text-muted-foreground">Rather than a large permanent in-house team, DEE Trans works with suitable freelance and other qualified language professionals, selected according to each project's languages, subject matter, and requirements. This keeps every project matched with the right expertise.</p>
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
        <h2 className="font-display text-3xl">Confidentiality and file handling</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Private by default", "Files you upload through the quote form are stored privately and are not publicly accessible."],
            ["Used only for your project", "Your details and files are used to assess and complete your project — nothing else."],
            ["Agreements on request", "If your project needs a confidentiality agreement, ask us before sharing sensitive material."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border p-5">
              <h3 className="font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
