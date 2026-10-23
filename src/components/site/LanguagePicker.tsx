import { useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { REGIONS } from "@/data/languages";
import { cn } from "@/lib/utils";

type Props = {
  id: string;
  label: string;
  multiple?: boolean;
  value: string[];
  onChange: (v: string[]) => void;
  required?: boolean;
};

/** Searchable, region-grouped language selector. Supports single or multiple selection and free-text "other". */
export function LanguagePicker({ id, label, multiple, value, onChange, required }: Props) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const query = q.trim().toLowerCase();
  const groups = useMemo(
    () => REGIONS.map((r) => ({ ...r, items: r.languages.filter((l) => l.toLowerCase().includes(query)) })).filter((r) => r.items.length),
    [query],
  );

  const toggle = (l: string) => {
    if (multiple) onChange(value.includes(l) ? value.filter((v) => v !== l) : [...value, l]);
    else {
      onChange([l]);
      setOpen(false);
    }
    setQ("");
  };

  return (
    <div ref={ref} className="relative">
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy">
        {label} {required && <span className="text-teal">*</span>}
      </label>
      <div
        className={cn("flex min-h-11 flex-wrap items-center gap-1.5 rounded-lg border border-input bg-background px-2 py-1.5", open && "border-teal")}
        onClick={() => setOpen(true)}
      >
        {multiple &&
          value.map((v) => (
            <span key={v} className="flex items-center gap-1 rounded-full bg-teal-soft px-2.5 py-1 text-xs font-semibold text-navy">
              {v}
              <button type="button" aria-label={`Remove ${v}`} onClick={(e) => { e.stopPropagation(); onChange(value.filter((x) => x !== v)); }}>
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        <input
          id={id}
          role="combobox"
          aria-expanded={open}
          aria-controls={`${id}-list`}
          value={q}
          placeholder={!multiple && value[0] ? value[0] : multiple && value.length ? "Add another…" : "Search or type a language…"}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && q.trim()) { e.preventDefault(); toggle(q.trim()); }
            if (e.key === "Escape") setOpen(false);
          }}
          className={cn("min-w-32 flex-1 bg-transparent px-1 text-sm outline-none", !multiple && value[0] && "placeholder:text-foreground")}
        />
        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
      </div>
      {open && (
        <div id={`${id}-list`} role="listbox" className="absolute z-30 mt-1 max-h-72 w-full overflow-auto rounded-lg border bg-popover p-1 shadow-soft">
          {q.trim() && (
            <button type="button" onClick={() => toggle(q.trim())} className="w-full rounded-md px-3 py-2 text-left text-sm text-teal hover:bg-secondary">
              Use “{q.trim()}” (variety, dialect, locale or unlisted language)
            </button>
          )}
          {groups.map((g) => (
            <div key={g.id}>
              <div className="px-3 pb-1 pt-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{g.name}</div>
              {g.items.map((l) => (
                <button type="button" role="option" aria-selected={value.includes(l)} key={g.id + l} onClick={() => toggle(l)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-1.5 text-left text-sm hover:bg-secondary">
                  {l}
                  {value.includes(l) && <Check className="h-4 w-4 text-teal" />}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
