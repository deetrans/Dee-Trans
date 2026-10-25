import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { SERVICES } from "@/data/services";
import { CONTACT_EMAIL } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-site grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo inverted />
          <p className="mt-4 text-sm text-navy-foreground/70">Global Language, Localization & Linguistic Services.</p>
          <p className="mt-2 text-sm italic text-navy-foreground/70">Connecting People, Content and Cultures.</p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-navy-foreground">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/70">
            {SERVICES.map((s) => (
              <li key={s.slug}><Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-blue">{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold text-navy-foreground">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/70">
            <li><Link to="/about" className="hover:text-blue">About DEE Trans</Link></li>
            <li><Link to="/industries" className="hover:text-blue">Industries</Link></li>
            <li><Link to="/portfolio" className="hover:text-blue">Portfolio</Link></li>
            <li><Link to="/languages" className="hover:text-blue">Languages We Support</Link></li>
            <li><Link to="/quote" className="hover:text-blue">Request a Quote</Link></li>
            <li><Link to="/contact" className="hover:text-blue">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold text-navy-foreground">Get in touch</h3>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-4 block text-sm text-navy-foreground/70 hover:text-blue">{CONTACT_EMAIL}</a>
          <ul className="mt-6 space-y-2 text-sm text-navy-foreground/70">
            <li><Link to="/privacy" className="hover:text-blue">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-blue">Terms and Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="container-site py-6 text-xs text-navy-foreground/60">© {new Date().getFullYear()} DEE Trans. All rights reserved.</div>
      </div>
    </footer>
  );
}
