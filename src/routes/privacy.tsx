import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose } from "@/components/site/Blocks";
import { CONTACT_EMAIL } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: seo("Privacy Policy | DEE Trans", "How DEE Trans collects, stores and uses personal information and project files.") }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" text="Draft for owner review — not yet finalized.">
        <p className="mt-4 text-sm text-muted-foreground">Last updated: <time dateTime="2026-10-27">27 October 2026</time></p>
      </PageHero>
      <Prose>
        <h2>1. Introduction</h2>
        <p>DEE Trans ("we," "us," or "our") respects your privacy and aims to handle personal information responsibly. This Privacy Policy explains how information may be collected, used, stored, and shared when you visit our website, contact us, request a quotation, or submit files for a language services project.</p>
        <p>By using our website, you acknowledge that you have read this policy. Where consent is legally required, it must be requested separately.</p>
        <h2>2. Information We May Collect</h2>
        <p>Depending on how you use our website, information may include:</p>
        <ul>
          <li>Contact information: your name, email address, company name, country, and any telephone number you choose to provide in correspondence.</li>
          <li>Project information: requested services, source and target languages, descriptions, deadlines, output requirements, and other details you submit.</li>
          <li>Uploaded files: documents, text, images, audio, video, subtitles, or other materials you choose to submit for quotation or project assessment.</li>
          <li>Technical information: browser type, device information, website usage data, and diagnostic logs, where collected by the website or its service providers.</li>
          <li>Correspondence: messages and other information you provide when communicating with us.</li>
        </ul>
        <p>Please do not submit sensitive personal information unless it is necessary for your project and appropriate handling arrangements have been agreed in advance.</p>
        <h2>3. How We Use Information</h2>
        <p>Submitted information may be used to:</p>
        <ul>
          <li>Respond to enquiries and quotation requests.</li>
          <li>Assess project requirements and resource availability.</li>
          <li>Prepare proposals and coordinate agreed services.</li>
          <li>Communicate about projects and deliverables.</li>
          <li>Maintain business, accounting, and project records.</li>
          <li>Protect the website, prevent misuse, and troubleshoot technical problems.</li>
          <li>Meet applicable legal obligations and establish or defend legal claims where necessary.</li>
        </ul>
        <p>Project files are submitted for quotation assessment and agreed project work, not for unrelated purposes.</p>
        <h2>4. Sharing Information</h2>
        <p>Personal information is not offered for sale through this website. Information may be shared when reasonably necessary with service providers supporting website operation, communications, file storage, administration, or project delivery.</p>
        <p>Where a project involves freelance translators, reviewers, or other language professionals, relevant information may need to be shared only as necessary to assess or perform the agreed work. Confidentiality arrangements must be agreed as part of the project.</p>
        <p>Information may also be disclosed when required by law or reasonably necessary to protect rights, safety, and security. Public identification of clients or publication of their materials requires appropriate authorization.</p>
        <h2>5. Confidentiality and Project Files</h2>
        <p>Clients should submit only materials they are authorized to share. DEE Trans aims to handle project materials confidentially and limit access to people and service providers who need them for legitimate project purposes.</p>
        <p>The website's quote-file storage is configured as private. Public website visitors can submit enquiries and upload quote files, but are not granted access to read stored submissions or uploaded files.</p>
        <p>These settings do not establish every internal handling procedure or guarantee complete security. Do not submit highly sensitive or regulated information through the website unless the required handling arrangements have been confirmed with DEE Trans in advance.</p>
        <h2>6. Storage and Retention</h2>
        <p>Information may be stored by DEE Trans or by service providers used to operate the website and deliver services.</p>
        <p>Retention needs depend on project coordination, business records, dispute resolution, and applicable legal obligations. Specific retention periods and deletion procedures have not yet been confirmed for this policy. Contact DEE Trans to discuss retention requirements before submitting materials that require a defined deletion schedule.</p>
        <h2>7. Cookies and Technical Data</h2>
        <p>The website or its service providers may use essential technologies to operate the website, maintain security, understand performance, or remember preferences.</p>
        <p>This draft does not confirm a complete inventory of provider cookies or tracking technologies. Any use of non-essential analytics or advertising technologies requires appropriate disclosure and any legally required consent.</p>
        <p>You can manage cookies through your browser settings, although disabling certain cookies may affect website functionality.</p>
        <h2>8. Data Security</h2>
        <p>No website or method of electronic transmission can be guaranteed completely secure. This policy does not assert particular encryption standards, certifications, or safeguards beyond the storage and public-access settings described above.</p>
        <p>Please contact us if you believe information submitted to DEE Trans has been exposed or mishandled.</p>
        <h2>9. International Data Transfers</h2>
        <p>Depending on the locations of service providers and language professionals involved in a project, information may be processed in countries other than the country where it was collected.</p>
        <p>Processing locations and applicable transfer arrangements have not yet been confirmed for this policy. Discuss any location-specific requirements with DEE Trans before submitting project materials.</p>
        <h2>10. Your Privacy Rights</h2>
        <p>Depending on the laws that apply to you, you may have rights to request access to, correction of, deletion of, or restrictions on the use of your personal information. You may also have the right to withdraw consent where processing relies on consent.</p>
        <p>To make a privacy-related request, contact us using the email below. We may need to verify your identity before responding. You may also have the right to lodge a complaint with the relevant data protection authority.</p>
        <h2>11. Third-Party Websites and Services</h2>
        <p>Our website may link to third-party websites or use third-party services. Their privacy practices are governed by their own policies. Please review those policies when appropriate.</p>
        <h2>12. Children's Privacy</h2>
        <p>Our website and services are intended for business and general professional use, not specifically for children. Please do not submit children's personal information unless necessary for an agreed project and appropriate arrangements have been confirmed.</p>
        <h2>13. Changes to This Policy</h2>
        <p>This policy may be updated to reflect changes in services, website operation, procedures, or legal obligations. The revised policy will appear on this page with an updated revision date.</p>
        <h2>14. Contact Us</h2>
        <p>For questions about this policy or the handling of your information, contact DEE Trans.</p>
        <p>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue underline">{CONTACT_EMAIL}</a><br />Website: <a href="https://dee-trans.lovable.app/" className="break-all text-blue underline">https://dee-trans.lovable.app/</a></p>
      </Prose>
    </>
  ),
});
