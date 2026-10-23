import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose } from "@/components/site/Blocks";
import { CONTACT_EMAIL } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: seo("Privacy Policy | DEE Trans", "How DEE Trans collects, stores and uses personal information and project files.") }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" text="Draft policy — to be reviewed by DEE Trans before launch." />
      <Prose>
        <h2>What we collect</h2>
        <p>When you submit a quote request or contact form, we collect the details you provide: name, email, company, country, project information, languages, and any files you upload.</p>
        <h2>How we use it</h2>
        <p>We use this information only to assess your request, prepare a quote, communicate with you, and complete agreed work.</p>
        <h2>Storage and access</h2>
        <p>Submissions and files are stored in private storage that is not publicly accessible. Files are shared only with people assigned to your project.</p>
        <h2>Cookies and analytics</h2>
        <p>This website does not currently use analytics or advertising cookies.</p>
        <h2>Your rights</h2>
        <p>You may ask us to access, correct, or delete your information by emailing {CONTACT_EMAIL}.</p>
      </Prose>
    </>
  ),
});
