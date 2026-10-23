import { createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/data/services";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const paths = ["/", "/services", ...SERVICES.map((s) => `/services/${s.slug}`), "/industries", "/languages", "/about", "/quote", "/contact", "/privacy", "/terms"];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((p) => `<url><loc>${origin}${p}</loc></url>`).join("")}</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
