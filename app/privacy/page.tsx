import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy for ARRIVIO (arrivioai.com)"
  },
  description:
    "Privacy Policy for ARRIVIO on arrivioai.com, including data collection, usage, retention, security, and contact details.",
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
          <p className="mt-3 text-sm font-medium text-slate-500">Last updated: April 19, 2026</p>

          <p className="mt-7 text-base leading-7 text-slate-700">
            ARRIVIO (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides tools to help immigrants, students, and newcomers settle in a new country. This Privacy Policy explains how [LEGAL_ENTITY_NAME] collects, uses, stores, and protects information when you use the ARRIVIO mobile app, website, and related services.
          </p>

          <div className="mt-8 space-y-8 text-slate-700">
            <section>
              <h2 className="text-xl font-semibold text-brand-dark">1. Information We Collect</h2>
              <p className="mt-3">We may collect:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Account information: name, email address, sign-in provider, and basic profile details.</li>
                <li>User content: information you submit in forms, AI chat prompts, resume data, and uploaded files/documents.</li>
                <li>Subscription and billing status: plan type, entitlement status, transaction metadata (we do not store full card numbers).</li>
                <li>Device and usage data: app version, device type, crash logs, diagnostics, feature usage, and interaction events.</li>
                <li>Support communications: messages you send us for help or feedback.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">2. How We Use Information</h2>
              <p className="mt-3">We use data to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Provide and improve ARRIVIO features.</li>
                <li>Authenticate users and secure accounts.</li>
                <li>Deliver AI-assisted responses and personalized tools.</li>
                <li>Enforce free/pro limits and subscription access.</li>
                <li>Process support requests and service notifications.</li>
                <li>Monitor performance, detect abuse/fraud, and fix bugs.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">3. Legal Bases (where applicable)</h2>
              <p className="mt-3">Depending on your location, we process data based on:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Contract performance (to provide requested services),</li>
                <li>Legitimate interests (security, quality, analytics),</li>
                <li>Consent (where required),</li>
                <li>Legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">4. AI Features</h2>
              <p className="mt-3">
                ARRIVIO includes AI-powered functionality. Inputs you provide may be processed by trusted service providers to generate responses. Do not submit highly sensitive personal information unless necessary.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">5. Payments and Subscriptions</h2>
              <p className="mt-3">
                In-app purchases are processed by Apple App Store / Google Play and related billing providers. We receive limited transaction data (such as product ID, status, and renewal state) to manage entitlements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">6. Data Sharing</h2>
              <p className="mt-3">We do not sell personal data.</p>
              <p className="mt-3">We may share data with:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Cloud hosting and infrastructure providers,</li>
                <li>Authentication providers,</li>
                <li>Analytics/crash reporting providers,</li>
                <li>Payment/subscription platforms,</li>
                <li>Customer support tools,</li>
                <li>Legal authorities if required by law.</li>
              </ul>
              <p className="mt-3">All partners are expected to protect data appropriately.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">7. Data Retention</h2>
              <p className="mt-3">
                We retain data only as long as needed for service delivery, legal compliance, dispute resolution, and enforcement of agreements. You may request deletion as described below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">8. Security</h2>
              <p className="mt-3">
                We use reasonable technical and organizational safeguards to protect data. No system is 100% secure, but we continuously work to protect user information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">9. Your Rights</h2>
              <p className="mt-3">Depending on your jurisdiction, you may have rights to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Access your personal data,</li>
                <li>Correct inaccurate data,</li>
                <li>Delete data,</li>
                <li>Restrict or object to processing,</li>
                <li>Request portability,</li>
                <li>Withdraw consent where processing is based on consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">10. Children’s Privacy</h2>
              <p className="mt-3">
                ARRIVIO is not intended for children under 13 (or higher minimum age where required by local law). We do not knowingly collect personal data from children in violation of applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">11. International Transfers</h2>
              <p className="mt-3">
                Your data may be processed in countries other than your own. We take steps to ensure appropriate safeguards for cross-border transfers where required.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">12. Changes to This Policy</h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. We will update the “Last updated” date and, where required, provide additional notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">13. Contact</h2>
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
