import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/dee-trans-logo.png.asset.json";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt=""
      aria-hidden="true"
      className={cn("h-10 w-10 rounded-lg object-contain", className)}
    />
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="DEE Trans home">
      <LogoMark />
      <span className={cn("text-xl font-extrabold tracking-tight", inverted ? "text-navy-foreground" : "text-navy")}>
        DEE<span className="font-medium text-blue"> Trans</span>
      </span>
    </Link>
  );
}
