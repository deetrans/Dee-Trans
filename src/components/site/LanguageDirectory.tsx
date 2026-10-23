import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { REGIONS, COVERAGE_NOTICE } from "@/data/languages";
import { cn } from "@/lib/utils";

export function LanguageDirectory({ preview = false }: { preview?: boolean }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<Record<string, boolean>>(preview ? {} : { african: true });
  const query = q.trim().toLowerCase();

  const regions = useMemo(
    () =>
      REGIONS.map((r) => ({ ...r, matches: query ? r.languages.filter((l) => l.toLowerCase().includes(query)) : r.languages })).filter(
        (r) => !query || r.matches.length > 0,
      ),
    [query],
  );

  return (
    <div>
      <label className="relative block">
        <span className="sr-only">Search languages</span>
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search a language, e.g. Yoruba, Swahili, Portuguese…"
          className="h-14 w-full rounded-full border border-input bg-background pl-12 pr-5 text-base shadow-soft outline-none focus:border-teal"
        />
      </label>

      <div className="mt-6 divide-y overflow-hidden rounded-2xl border bg-card">
        {regions.length === 0 && (
          <p className="p-6 text-sm text-muted-foreground">
            No match for “{q}”. You can still request it — choose “Other language / specify” in the quote form.
          </p>
        )}
        {regions.map((r) => {
          const isOpen = query ? true : !!open[r.id];
          const shown = preview && !query ? r.matches.slice(0, 18) : r.matches;
          return (
            <section key={r.id} id={r.id} className="scroll-mt-28">
              <button
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left hover:bg-secondary"
                aria-expanded={isOpen}
                onClick={() => setOpen((o) => ({ ...o, [r.id]: !o[r.id] }))}
              >
                <span className="text-base font-bold text-navy">{r.name}</span>
                <span className="flex items-center gap-3 text-sm text-muted-foreground">
                  {r.matches.length} {query ? "matches" : "listed"}
                  <ChevronDown className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")} />
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-6">
                  <ul className="flex flex-wrap gap-2">
                    {shown.map((l) => (
                      <li key={l} className="rounded-full bg-secondary px-3 py-1.5 text-sm text-foreground">{l}</li>
                    ))}
                    {shown.length < r.matches.length && (
                      <li className="px-2 py-1.5 text-sm font-semibold text-teal">+{r.matches.length - shown.length} more</li>
                    )}
                  </ul>
                  {r.note && <p className="mt-4 text-xs text-muted-foreground">{r.note} Not listed? Request it as “Other”.</p>}
                </div>
              )}
            </section>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">{COVERAGE_NOTICE}</p>
    </div>
  );
}
