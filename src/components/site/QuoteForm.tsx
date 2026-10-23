import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { z } from "zod";
import { CheckCircle2, Loader2, Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { SERVICES, type Field } from "@/data/services";
import { LanguagePicker } from "./LanguagePicker";
import { Button } from "@/components/ui/button";

const MAX_FILE = 50 * 1024 * 1024;

export const quoteSchema = z.object({
  full_name: z.string().trim().min(1, "Please enter your name").max(200),
  email: z.string().trim().email("Please enter a valid email").max(320),
  service: z.string().min(1, "Please choose a service"),
  target_languages: z.array(z.string()).min(1, "Choose at least one target language"),
  consent: z.literal(true, { errorMap: () => ({ message: "Please accept the privacy policy" }) }),
});

const inputCls = "h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus:border-teal";
const labelCls = "mb-1.5 block text-sm font-semibold text-navy";

function DynField({ f, value, onChange }: { f: Field; value: string; onChange: (v: string) => void }) {
  const id = `f-${f.name}`;
  return (
    <div className={f.type === "textarea" ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className={labelCls}>{f.label}</label>
      {f.type === "select" ? (
        <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className={inputCls}>
          <option value="">Select…</option>
          {f.options!.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : f.type === "textarea" ? (
        <textarea id={id} rows={3} value={value} onChange={(e) => onChange(e.target.value)} className={`${inputCls} h-auto py-2`} />
      ) : (
        <input id={id} type={f.type} min={f.type === "number" ? 0 : undefined} placeholder={f.placeholder} value={value} onChange={(e) => onChange(e.target.value)} className={inputCls} />
      )}
    </div>
  );
}

export function QuoteForm({ fixedService, cta = "Submit request" }: { fixedService?: string; cta?: string }) {
  const [service, setService] = useState(fixedService ?? "");
  const [source, setSource] = useState<string[]>([]);
  const [targets, setTargets] = useState<string[]>([]);
  const [extra, setExtra] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  const svc = SERVICES.find((s) => s.slug === service);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) return; // honeypot
    const base = {
      full_name: String(fd.get("full_name") ?? ""),
      email: String(fd.get("email") ?? ""),
      service,
      target_languages: targets,
      consent: fd.get("consent") === "on",
    };
    const parsed = quoteSchema.safeParse(base);
    const tooBig = files.find((f) => f.size > MAX_FILE);
    if (!parsed.success || tooBig) {
      const errs: Record<string, string> = {};
      parsed.error?.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      if (tooBig) errs.files = `${tooBig.name} is larger than 50 MB. Please share large files by link in the instructions.`;
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const folder = `uploads/${crypto.randomUUID()}`;
      const paths: string[] = [];
      for (const f of files) {
        const path = `${folder}/${f.name.replace(/[^\w.\-]+/g, "_")}`;
        const { error } = await supabase.storage.from("quote-files").upload(path, f);
        if (error) throw new Error(`Upload failed for ${f.name}`);
        paths.push(path);
      }
      const { error } = await supabase.from("quote_requests").insert({
        full_name: base.full_name.trim(),
        email: base.email.trim(),
        company: String(fd.get("company") ?? "") || null,
        country: String(fd.get("country") ?? "") || null,
        service: svc?.name ?? service,
        source_language: source[0] ?? null,
        target_languages: targets,
        consent: true,
        file_paths: paths,
        details: {
          ...extra,
          project_description: fd.get("description"),
          project_size: fd.get("size"),
          deadline: fd.get("deadline"),
          output_format_general: fd.get("output_format_general"),
          instructions: fd.get("instructions"),
        },
      });
      if (error) throw error;
      setStatus("done");
    } catch (err) {
      setErrMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "done")
    return (
      <div className="rounded-2xl border bg-teal-soft p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-teal" />
        <h3 className="mt-4 text-2xl font-bold">Thank you — your request was received.</h3>
        <p className="mt-2 text-muted-foreground">We will review your project and reply by email with an assessment and quote.</p>
      </div>
    );

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border bg-card p-6 shadow-soft md:p-8">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="full_name" className={labelCls}>Full name <span className="text-teal">*</span></label>
          <input id="full_name" name="full_name" autoComplete="name" className={inputCls} />
          {errors.full_name && <p className="mt-1 text-xs text-destructive">{errors.full_name}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Email address <span className="text-teal">*</span></label>
          <input id="email" name="email" type="email" autoComplete="email" className={inputCls} />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="company" className={labelCls}>Company or organization <span className="font-normal text-muted-foreground">(optional)</span></label>
          <input id="company" name="company" autoComplete="organization" className={inputCls} />
        </div>
        <div>
          <label htmlFor="country" className={labelCls}>Country</label>
          <input id="country" name="country" autoComplete="country-name" className={inputCls} />
        </div>
        {!fixedService && (
          <div className="sm:col-span-2">
            <label htmlFor="service" className={labelCls}>Service required <span className="text-teal">*</span></label>
            <select id="service" value={service} onChange={(e) => { setService(e.target.value); setExtra({}); }} className={inputCls}>
              <option value="">Choose a service…</option>
              {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
            </select>
            {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
          </div>
        )}
        <LanguagePicker id="source" label="Source language" value={source} onChange={setSource} />
        <div>
          <LanguagePicker id="targets" label="Target language(s)" multiple required value={targets} onChange={setTargets} />
          {errors.target_languages && <p className="mt-1 text-xs text-destructive">{errors.target_languages}</p>}
        </div>

        {svc && svc.fields.length > 0 && (
          <fieldset className="grid gap-5 rounded-xl bg-secondary p-5 sm:col-span-2 sm:grid-cols-2">
            <legend className="eyebrow mb-2 px-1">{svc.name} details</legend>
            {svc.fields.map((f) => (
              <DynField key={f.name} f={f} value={extra[f.name] ?? ""} onChange={(v) => setExtra((x) => ({ ...x, [f.name]: v }))} />
            ))}
          </fieldset>
        )}

        <div className="sm:col-span-2">
          <label htmlFor="description" className={labelCls}>Project description</label>
          <textarea id="description" name="description" rows={4} className={`${inputCls} h-auto py-2`} />
        </div>
        <div>
          <label htmlFor="size" className={labelCls}>Approximate project size</label>
          <input id="size" name="size" placeholder="words, pages, minutes, strings…" className={inputCls} />
        </div>
        <div>
          <label htmlFor="deadline" className={labelCls}>Preferred deadline</label>
          <input id="deadline" name="deadline" type="date" className={inputCls} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="output_format_general" className={labelCls}>Desired output format</label>
          <input id="output_format_general" name="output_format_general" placeholder="e.g. DOCX, SRT, XLSX" className={inputCls} />
        </div>
        <div className="sm:col-span-2">
          <span className={labelCls}>Files</span>
          <label htmlFor="files" className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-input px-4 py-5 text-sm text-muted-foreground hover:border-teal">
            <Upload className="h-5 w-5 text-teal" />
            {files.length ? files.map((f) => f.name).join(", ") : "Upload documents, video, audio, subtitles or samples (max 50 MB each)"}
          </label>
          <input id="files" type="file" multiple className="sr-only" onChange={(e) => setFiles(Array.from(e.target.files ?? []))} />
          {errors.files && <p className="mt-1 text-xs text-destructive">{errors.files}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="instructions" className={labelCls}>Additional instructions</label>
          <textarea id="instructions" name="instructions" rows={3} className={`${inputCls} h-auto py-2`} />
        </div>
        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 text-sm">
            <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-[var(--teal)]" />
            <span>I agree that DEE Trans may store and process my details and files to respond to this request, as described in the <Link to="/privacy" className="font-semibold text-teal underline">Privacy Policy</Link>. <span className="text-teal">*</span></span>
          </label>
          {errors.consent && <p className="mt-1 text-xs text-destructive">{errors.consent}</p>}
        </div>
      </div>
      {status === "error" && <p className="mt-5 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">{errMsg} Please try again.</p>}
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button type="submit" variant="cta" size="lg" disabled={status === "sending"}>
          {status === "sending" && <Loader2 className="animate-spin" />} {cta}
        </Button>
        <p className="text-xs text-muted-foreground">No instant pricing — every project is assessed and quoted individually.</p>
      </div>
    </form>
  );
}
