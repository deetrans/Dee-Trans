import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  // Two overlapping speech forms: one voice passing into another language.
  return (
    <svg viewBox="0 0 40 40" className={cn("h-9 w-9", className)} aria-hidden="true">
      <path d="M6 8h16a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6h-8l-6 5v-5H6a0 0 0 0 1 0 0V8Z" fill="var(--navy)" />
      <path d="M18 16h14a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-2v4l-5-4h-7a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4Z" fill="var(--teal)" opacity="0.92" />
      <circle cx="22" cy="24" r="1.4" fill="var(--background)" />
      <circle cx="26" cy="24" r="1.4" fill="var(--background)" />
      <circle cx="30" cy="24" r="1.4" fill="var(--background)" />
    </svg>
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="DEE Trans home">
      <LogoMark />
      <span className={cn("text-xl font-extrabold tracking-tight", inverted ? "text-navy-foreground" : "text-navy")}>
        DEE<span className="font-medium text-teal"> Trans</span>
      </span>
    </Link>
  );
}
