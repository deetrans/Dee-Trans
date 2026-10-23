import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: seo("Terms and Conditions | DEE Trans", "Terms governing use of the DEE Trans website and language services.") }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Terms and Conditions" text="Draft terms — to be reviewed by DEE Trans before launch." />
      <Prose>
        <h2>Quotes</h2>
        <p>Quotes are prepared after reviewing each project's scope. A quote is not binding until both parties confirm scope, price, deliverables, and deadline in writing.</p>
        <h2>Client materials</h2>
        <p>You confirm you have the right to share any files you submit and to have them translated, reviewed, transcribed, or otherwise processed.</p>
        <h2>Deliverables</h2>
        <p>Work is delivered in the format and to the specifications agreed for the project. Requests for revisions are handled according to the agreed scope.</p>
        <h2>Language availability</h2>
        <p>Languages listed on this website indicate potential coverage. Availability and specialist expertise are confirmed for each project.</p>
        <h2>Website use</h2>
        <p>Content on this website is provided for general information and may be updated without notice.</p>
      </Prose>
    </>
  ),
});
