import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { PageHero } from "@/components/site/Blocks";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: seo("Contact DEE Trans | Request Language Services", "Get in touch with DEE Trans to discuss a translation, subtitling, transcription or localization project.") }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(200),
  email: z.string().trim().email("Please enter a valid email").max(320),
  message: z.string().trim().min(1, "Please write a message").max(5000),
});
type Errs = Partial<Record<"name" | "email" | "message", string>>;
const inputCls = "h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus:border-blue";

function Contact() {
  const [errors, setErrors] = useState<Errs>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) return;
    const data = { name: String(fd.get("name")), email: String(fd.get("email")), message: String(fd.get("message")) };
    const p = schema.safeParse(data);
    if (!p.success) {
      const errs: Errs = {};
      p.error.issues.forEach((i) => (errs[String(i.path[0]) as keyof Errs] = i.message));
      return setErrors(errs);
    }
    setErrors({});
    setStatus("sending");
    const { error } = await supabase.from("contact_messages").insert({ ...p.data, subject: String(fd.get("subject") || "") || null });
    setStatus(error ? "error" : "done");
  }

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk about your project" text="Have a question, or a project you'd like to discuss before requesting a quote? Send us a message." />
      <section className="container-site grid gap-12 py-16 lg:grid-cols-[1fr_1.5fr]">
        <div className="space-y-6">
          <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-4 rounded-2xl border p-6 hover:border-blue">
            <Mail className="h-6 w-6 text-blue" />
            <span><span className="block text-sm text-muted-foreground">Email</span><span className="font-bold text-navy">{CONTACT_EMAIL}</span></span>
          </a>
          <p className="text-sm text-muted-foreground">Ready with files and languages? The <Link to="/quote" className="font-semibold text-blue underline">quote form</Link> is the fastest route.</p>
        </div>
        {status === "done" ? (
          <div className="rounded-2xl border bg-blue-soft p-10 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-blue" />
            <h2 className="mt-4 text-2xl font-bold">Message received</h2>
            <p className="mt-2 text-muted-foreground">Thank you — we'll reply by email.</p>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="grid gap-5 rounded-2xl border bg-card p-6 shadow-soft sm:grid-cols-2 md:p-8">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div><label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy">Name *</label><input id="name" name="name" className={inputCls} />{errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}</div>
            <div><label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy">Email *</label><input id="email" name="email" type="email" className={inputCls} />{errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}</div>
            <div className="sm:col-span-2"><label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-navy">Subject</label><input id="subject" name="subject" className={inputCls} /></div>
            <div className="sm:col-span-2"><label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy">Message *</label><textarea id="message" name="message" rows={6} className={`${inputCls} h-auto py-2`} />{errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}</div>
            {status === "error" && <p className="text-sm text-destructive sm:col-span-2">Something went wrong. Please try again.</p>}
            <div className="sm:col-span-2"><Button type="submit" variant="cta" size="lg" disabled={status === "sending"}>{status === "sending" && <Loader2 className="animate-spin" />}Contact DEE Trans</Button></div>
          </form>
        )}
      </section>
    </>
  );
}
