import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy for ARRIVIO (arrivioai.com)"
  },
  description:
    "ARRIVIO's Privacy Policy explains the information we collect and how we use, share, and protect it.",
  alternates: {
    canonical: "/privacy"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Privacy Policy for ARRIVIO (arrivioai.com)",
    description:
      "Read the ARRIVIO Privacy Policy covering information collection, AI features, subscriptions, and user rights.",
    url: "https://arrivioai.com/privacy",
    type: "article"
  }
};

export default function PrivacyPage() {
  return (
    <section className="section-tint py-12 md:py-16">
      <Container>
        <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8 md:p-10">
          <h1 className="text-3xl font-semibold tracking-tight text-brand-dark md:text-4xl">Privacy Policy for ARRIVIO</h1>
          <p className="mt-3 text-sm font-medium text-slate-500">Last updated: October 10, 2026</p>

          <p className="mt-7 text-base leading-7 text-slate-700">
            ARRIVIO AI INC. (&quot;ARRIVIO,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides tools to help immigrants, students, and newcomers settle in a new country. This Privacy Policy explains how we collect, use, store, and protect information when you use the ARRIVIO mobile app, website, and related services.
          </p>

          <div className="mt-8 space-y-8 text-slate-700">
            <section>
              <h2 className="text-xl font-semibold text-brand-dark">1. Information We Collect</h2>
              <p className="mt-3">Depending on the features you use, we may collect:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Account information, such as your name, email address, sign-in provider, and account identifiers.</li>
                <li>Profile and preference information you choose to provide, such as destination country, goals, work preferences, and language or coaching preferences.</li>
                <li>User content you submit, such as questions, conversation messages, speech transcripts, resume text, target-role details, job or interview information, and document information.</li>
                <li>Files or images you choose to provide for document features. PDF and DOCX files are parsed on your device; their extracted text may be shared with OpenAI when you request AI analysis. If you choose image analysis or text extraction, the selected document-image bytes may be sent to OpenAI.</li>
                <li>Subscription and billing status, such as plan, entitlement, product, and transaction metadata. We do not receive or store full payment-card numbers.</li>
                <li>Device and usage information, such as app version, device type, diagnostics, crash and performance data, and feature interactions.</li>
                <li>Information in support communications you send us.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">2. How We Collect Information</h2>
              <p className="mt-3">
                We collect information directly when you create or manage an account, complete profile or job-related forms, enter prompts or messages, use voice or document features, contact support, or make a purchase. Some information is generated when you use the app, including service logs, diagnostics, and feature activity. Account and app information may be stored or processed through Firebase services. Apple App Store, Google Play, and subscription services provide limited transaction or entitlement information needed to manage your plan.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">3. How We Use Information</h2>
              <p className="mt-3">We use information to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Provide, maintain, and improve ARRIVIO features.</li>
                <li>Authenticate users, secure accounts, and save user-selected profile and consent settings.</li>
                <li>Generate AI responses and recommendations, provide English corrections and coaching, analyze documents, and assist with resumes, job searches, and interview practice when you request those features and grant the required AI permission.</li>
                <li>Manage free usage limits, subscriptions, and access to paid features.</li>
                <li>Respond to support requests, monitor performance, prevent abuse or fraud, troubleshoot issues, and comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">4. AI Features and OpenAI</h2>
              <p className="mt-3">
                ARRIVIO uses OpenAI as an AI processing provider. Before personal or user-provided data is sent to OpenAI, ARRIVIO displays an in-app disclosure naming OpenAI and the data categories and purposes, and requires your explicit permission. No applicable AI request is sent before you choose &quot;Allow &amp; Continue.&quot;
              </p>
              <p className="mt-3">
                Depending on the AI feature you choose, and only to the extent used for that request, information sent to OpenAI may include:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Your typed questions, prompts, and relevant conversation text.</li>
                <li>Text transcribed from speech. Raw microphone audio is not sent to OpenAI; voice recognition is handled by the speech-recognition service available through your device or operating system, subject to its settings and terms.</li>
                <li>Optional profile or job-search context you provided, such as destination country, goal, current task, location, work preferences, target role, saved job details, or relevant career context.</li>
                <li>Resume text and target-role, company, job, or interview details that you choose to use with resume or interview assistance.</li>
                <li>For document analysis, document text, document type, and destination country. PDF and DOCX files are parsed locally and the raw PDF or DOCX file is not sent to OpenAI; extracted text may be sent. If you choose image analysis or text extraction, the selected image bytes are sent to OpenAI for that request.</li>
              </ul>
              <p className="mt-3">
                We use this information to generate AI responses and recommendations, provide English corrections and coaching, analyze documents, and assist with resumes and interviews. ARRIVIO sends AI requests to the OpenAI API. OpenAI processes API data under its applicable API terms and data controls.
              </p>
              <p className="mt-3">
                &quot;Not now&quot; prevents the applicable AI request from being sent. &quot;Allow &amp; Continue&quot; grants permission for the disclosed AI processing. You can review the disclosure and revoke permission for future sharing in ARRIVIO under More &rarr; Privacy &rarr; AI Data Sharing. If you revoke permission, future gated AI requests are blocked until you grant permission again. Your choice is associated with your ARRIVIO account.
              </p>
              <p className="mt-3">
                OpenAI states that API inputs and outputs are not used to train its models by default unless the API customer opts in. Under standard API settings, API content may be retained in abuse-monitoring logs for up to 30 days. Retention can vary based on the account, endpoint, security needs, or legal requirements. ARRIVIO has not verified that its OpenAI API account has Zero Data Retention enabled, and this Policy does not claim that it does.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">5. Payments and Subscriptions</h2>
              <p className="mt-3">
                In-app purchases are processed by Apple App Store or Google Play and related subscription services, including RevenueCat for subscription entitlement management. ARRIVIO receives limited transaction information, such as product, purchase status, and renewal or entitlement state, to provide subscription access. Payment-card information is handled by the applicable app store or payment provider.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">6. Data Sharing</h2>
              <p className="mt-3">ARRIVIO does not sell personal data.</p>
              <p className="mt-3">We share information only as needed to provide or protect the services, including with:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li><strong>OpenAI</strong>, as a third-party processor for AI processing, only after the required explicit user permission and only for the AI request you choose to make.</li>
                <li>Firebase and other cloud, hosting, and infrastructure providers that support account authentication, app storage, and service operation.</li>
                <li>Apple, Google, and RevenueCat for app-store payments and subscription entitlement handling.</li>
                <li>Device or operating-system speech-recognition services when you use voice input, subject to device settings and provider terms.</li>
                <li>Service providers that support diagnostics, security, customer support, and app operations.</li>
                <li>Authorities or other parties when required by law, to protect rights and safety, or to address fraud or security issues.</li>
              </ul>
              <p className="mt-3">
                Service providers are required to protect information and use it only to provide their contracted services, subject to applicable law and their service-specific terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">7. Device Permissions</h2>
              <p className="mt-3">
                ARRIVIO requests device permissions only when a feature needs them. These may include microphone and speech-recognition access for voice input, camera or photo-library access when you choose an image for document analysis, file access when you select a document, and location access for nearby services. You can manage permissions in your device settings. Speech recognition is performed by the service available on your device; see the AI section for what may be sent to OpenAI.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">8. Data Retention</h2>
              <p className="mt-3">
                ARRIVIO retains account, profile, and user-provided information for as long as needed to provide the services, maintain your account, meet legal obligations, resolve disputes, and enforce agreements. You may request account and data deletion through ARRIVIO’s account-deletion process or by contacting us. Removing information from ARRIVIO does not automatically remove information already processed by a third-party provider; provider retention is governed by that provider’s terms and settings.
              </p>
              <p className="mt-3">
                OpenAI API content may be retained in abuse-monitoring logs for up to 30 days by default, subject to account, endpoint, security, and legal requirements. OpenAI API content is not used to train models by default unless the API customer opts in. ARRIVIO has not confirmed Zero Data Retention for its OpenAI API account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">9. Security</h2>
              <p className="mt-3">
                We use reasonable technical and organizational safeguards to protect information, including access controls and protections provided by our service providers. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">10. User Rights</h2>
              <p className="mt-3">Depending on your location and applicable law, you may have rights to access, correct, delete, restrict, object to, or obtain a copy of your personal data, and to withdraw consent where processing is based on consent. You can revoke future OpenAI sharing in ARRIVIO privacy / AI data-sharing settings. To submit another privacy request, contact us using the details below.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">11. Children’s Privacy</h2>
              <p className="mt-3">
                ARRIVIO is not intended for children under 13 (or a higher minimum age where required by local law). We do not knowingly collect personal data from children in violation of applicable law. If you believe a child has provided us personal data, contact us so we can review and take appropriate action.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">12. International Data Processing</h2>
              <p className="mt-3">
                ARRIVIO and its service providers may process information in countries other than the country where you live, including the United States. Where required, we use appropriate safeguards for international transfers and apply protections required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">13. Legal Bases</h2>
              <p className="mt-3">
                Where applicable, we process personal information to perform our agreement with you, based on your consent, to pursue legitimate interests such as securing and improving our services, or to comply with legal obligations. When explicit permission is required for AI sharing, we request it in the app before sending the applicable data to OpenAI.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">14. Changes to This Policy</h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. We will revise the &quot;Last updated&quot; date and provide additional notice where required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">15. Contact</h2>
              <p className="mt-3">For privacy requests or questions, contact:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Email: support@arrivioai.com</li>
                <li>Website: https://arrivioai.com</li>
              </ul>
            </section>
          </div>
        </article>
      </Container>
    </section>
  );
}
