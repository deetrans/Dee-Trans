import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/services";
import { REGIONS } from "@/data/languages";

const linkCls = "text-sm font-semibold text-navy/80 hover:text-blue transition-colors";

export function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<null | "services" | "languages">(null);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur" onMouseLeave={() => setMenu(null)}>
      <div className="container-site flex h-18 items-center justify-between py-4">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: "text-blue" }}>Home</Link>
          <button className={`${linkCls} flex items-center gap-1`} aria-expanded={menu === "services"} onMouseEnter={() => setMenu("services")} onClick={() => setMenu(menu === "services" ? null : "services")}>
            Services <ChevronDown className="h-4 w-4" />
          </button>
          <Link to="/industries" className={linkCls} activeProps={{ className: "text-blue" }}>Industries</Link>
          <Link to="/portfolio" className={linkCls} activeProps={{ className: "text-blue" }}>Portfolio</Link>
          <button className={`${linkCls} flex items-center gap-1`} aria-expanded={menu === "languages"} onMouseEnter={() => setMenu("languages")} onClick={() => setMenu(menu === "languages" ? null : "languages")}>
            Languages <ChevronDown className="h-4 w-4" />
          </button>
          <Link to="/about" className={linkCls} activeProps={{ className: "text-blue" }}>About Us</Link>
          <Link to="/contact" className={linkCls} activeProps={{ className: "text-blue" }}>Contact</Link>
        </nav>
        <div className="hidden lg:block">
          <Button asChild variant="cta" size="lg"><Link to="/quote">Request a Quote</Link></Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild variant="cta" size="sm" className="rounded-full"><Link to="/quote">Quote</Link></Button>
          <button className="p-2 text-navy" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {menu && (
        <div className="absolute inset-x-0 top-full hidden border-b bg-background shadow-soft lg:block">
          <div className="container-site py-8">
            {menu === "services" ? (
              <div className="grid grid-cols-4 gap-x-6 gap-y-5">
                {SERVICES.map((s) => (
                  <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} onClick={() => setMenu(null)} className="group flex gap-3 rounded-lg p-3 hover:bg-secondary">
                    <s.icon className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                    <span>
                      <span className="block text-sm font-bold text-navy group-hover:text-blue">{s.name}</span>
                      <span className="mt-1 line-clamp-2 block text-xs text-muted-foreground">{s.short}</span>
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap items-center gap-3">
                {REGIONS.map((r) => (
                  <Link key={r.id} to="/languages" hash={r.id} onClick={() => setMenu(null)} className="rounded-full border px-4 py-2 text-sm font-semibold text-navy hover:border-blue hover:text-blue">
                    {r.name}
                  </Link>
                ))}
                <Link to="/languages" onClick={() => setMenu(null)} className="ml-auto text-sm font-bold text-blue">Search all languages →</Link>
              </div>
            )}
          </div>
        </div>
      )}

      {open && (
        <nav className="border-t bg-background lg:hidden" aria-label="Mobile">
          <div className="container-site flex flex-col gap-1 py-4">
            {([
              ["/", "Home"], ["/services", "Services"], ["/industries", "Industries"], ["/portfolio", "Portfolio"], ["/languages", "Languages"], ["/about", "About Us"], ["/contact", "Contact"],
            ] as const).map(([to, label]) => (
              <Link key={to} to={to} onClick={() => setOpen(false)} className="rounded-md px-2 py-3 font-semibold text-navy hover:bg-secondary">{label}</Link>
            ))}
            <Button asChild variant="cta" size="lg" className="mt-3"><Link to="/quote" onClick={() => setOpen(false)}>Request a Quote</Link></Button>
          </div>
        </nav>
      )}
    </header>
  );
}
