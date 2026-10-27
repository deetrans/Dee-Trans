import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Prose } from "@/components/site/Blocks";
import { CONTACT_EMAIL } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: seo("Terms and Conditions | DEE Trans", "Terms governing use of the DEE Trans website and language services.") }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Terms and Conditions" text="Draft for owner review — not yet finalized.">
        <p className="mt-4 text-sm text-muted-foreground">Last updated: <time dateTime="2026-10-27">27 October 2026</time></p>
      </PageHero>
      <Prose>
        <h2>1. Introduction</h2>
        <p>Welcome to DEE Trans. These draft Terms and Conditions describe use of our website and the general process for requesting language services. They remain subject to owner review and are not a finalized project agreement.</p>
        <p>These website terms do not replace a separate written agreement, quotation, purchase order, or statement of work that DEE Trans and a client may enter into for a particular project.</p>
        <h2>2. Our Services</h2>
        <p>DEE Trans coordinates language services that may include:</p>
        <ul>
          <li>Translation and localization.</li>
          <li>Subtitle translation and review.</li>
          <li>Proofreading and editing.</li>
          <li>Linguistic and audio transcription.</li>
          <li>Copywriting and transcreation.</li>
          <li>Linguistic quality assurance.</li>
          <li>Website and software localization.</li>
          <li>App localization testing.</li>
          <li>Data annotation and related language support.</li>
        </ul>
        <p>Availability depends on the project's requirements, language pair, subject matter, scope, deadline, and suitable professionals. Listing a language or service does not guarantee immediate availability or acceptance of a project.</p>
        <h2>3. Requests for Quotations</h2>
        <p>Visitors may submit project details and upload relevant files to request a quotation. A request is an enquiry, not an accepted order. Submission does not guarantee acceptance, a requested deadline, or a particular service.</p>
        <p>We may contact you to clarify requirements before providing a quotation. A project proceeds only after scope, price, deliverables, timeline, payment terms, and other applicable conditions have been agreed.</p>
        <h2>4. Quotations, Pricing, and Payment</h2>
        <p>Quotations are based on available information and may depend on word count, language pair, subject matter, file format, technical complexity, review requirements, and deadline.</p>
        <p>Applicable taxes, payment methods, deposits, cancellation fees, and other charges are to be specified in the relevant quotation or project agreement. Unless otherwise agreed in writing, a quotation should not be treated as a binding commitment after its stated validity period expires.</p>
        <h2>5. Client Responsibilities</h2>
        <p>Clients are responsible for:</p>
        <ul>
          <li>Providing accurate project information and instructions.</li>
          <li>Holding necessary rights and permissions to submit materials.</li>
          <li>Identifying terminology, style guides, references, and formatting requirements.</li>
          <li>Informing DEE Trans of material changes to scope or deadline.</li>
          <li>Reviewing and approving deliverables where required by the project agreement.</li>
          <li>Making payments according to agreed terms.</li>
        </ul>
        <p>Incomplete, inaccurate, or late information may affect timing, scope, or cost.</p>
        <h2>6. Intellectual Property and Submitted Materials</h2>
        <p>Clients retain any rights they hold in supplied materials, subject to applicable law and any separate agreement. By submitting materials, clients confirm they have the necessary rights or authorization for quotation assessment and, if accepted, the agreed services.</p>
        <p>Materials must not infringe another person's rights or violate applicable law. Ownership and permitted use of translations, edited content, subtitles, transcripts, and other deliverables are to be specified in the project agreement.</p>
        <p>Publishing client materials, identifying clients publicly, or using confidential project content as a portfolio sample requires appropriate authorization.</p>
        <h2>7. Confidentiality and Data Protection</h2>
        <p>DEE Trans aims to handle client information and project materials confidentially and use them for legitimate business and project purposes. Relevant information may need to be shared with service providers or language professionals to assess or perform an agreed project, with confidentiality arrangements agreed for that work.</p>
        <p>Do not submit highly sensitive materials until you have confirmed that available handling arrangements meet your requirements. Personal information handling is described in our <Link to="/privacy" className="text-blue underline">Privacy Policy</Link>, which also remains subject to owner review.</p>
        <h2>8. Quality, Reviews, and Revisions</h2>
        <p>Requirements and quality checks vary by service and agreed scope. Included proofreading, independent review, quality assurance, testing, or revisions are to be described in the quotation or project agreement.</p>
        <p>Clients should report concerns within any agreed review period with enough detail for assessment. No particular business outcome or error-free performance is guaranteed by the website. Any express project commitment remains subject to the agreement and applicable law.</p>
        <h2>9. Deadlines and Project Changes</h2>
        <p>Deadlines are agreed individually. Timing may be affected by scope changes, delayed feedback, incomplete materials, technical issues, or circumstances outside reasonable control.</p>
        <p>Changes after work begins may require an updated quotation or deadline. Material changes will be communicated when reasonably practicable.</p>
        <h2>10. Third-Party Services</h2>
        <p>The website may use third-party hosting, communication, storage, or other services with separate terms and privacy policies. Those separate terms do not remove any responsibilities DEE Trans has under applicable law.</p>
        <h2>11. Website Availability and Acceptable Use</h2>
        <p>We aim to keep the website accessible and useful, but uninterrupted operation cannot be guaranteed. You must not misuse the website, attempt unauthorized access, interfere with its operation, introduce malicious code, or use it unlawfully.</p>
        <p>Access may be restricted where reasonably necessary to protect the website, its users, or its services.</p>
        <h2>12. Liability</h2>
        <p>Responsibility for losses depends on the circumstances, the applicable project agreement, and relevant law. Temporary website unavailability, inaccurate visitor information, and third-party service failures may affect service delivery.</p>
        <p>Nothing in these terms excludes or limits liability where prohibited by law, or removes statutory rights. Liability arising from an accepted project is governed by the applicable agreement and relevant law.</p>
        <h2>13. Unlawful Use and Submitted Materials</h2>
        <p>Unlawful website use or submission of materials without the necessary rights may give rise to responsibility for losses or claims under applicable law. This provision does not create an automatic indemnity or remove rights and protections that cannot legally be excluded.</p>
        <h2>14. Changes to These Terms</h2>
        <p>These terms may be updated to reflect changes to the website, services, or applicable requirements. Updated terms will appear on this page with a revised date. Changes to an existing project agreement are handled according to that agreement and applicable law.</p>
        <h2>15. Governing Law and Disputes</h2>
        <p>These draft website terms do not designate a governing jurisdiction or dispute-resolution forum. Any project-specific provisions must be agreed in writing subject to applicable law and rights that cannot legally be excluded.</p>
        <h2>16. Contact</h2>
        <p>For questions about these terms, contact DEE Trans.</p>
        <p>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue underline">{CONTACT_EMAIL}</a><br />Website: <a href="https://dee-trans.lovable.app/" className="break-all text-blue underline">https://dee-trans.lovable.app/</a></p>
      </Prose>
    </>
  ),
});
