import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: {
    absolute: "Terms of Use for ARRIVIO (arrivioai.com)"
  },
  description:
    "Terms of Use for ARRIVIO on arrivioai.com, including eligibility, acceptable use, subscriptions, IP, and liability terms.",
  alternates: {
    canonical: "/terms"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Terms of Use for ARRIVIO (arrivioai.com)",
    description:
      "Read ARRIVIO Terms of Use including subscriptions, acceptable use, disclaimers, and governing law.",
    url: "https://arrivioai.com/terms",
    type: "article"
  }
};

export default function TermsPage() {
  return (
    <section className="section-tint py-12 md:py-16">
      <Container>
        <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8 md:p-10">
          <h1 className="text-3xl font-semibold tracking-tight text-brand-dark md:text-4xl">Terms of Use for ARRIVIO</h1>
          <p className="mt-3 text-sm font-medium text-slate-500">Last updated: April 19, 2026</p>

          <p className="mt-7 text-base leading-7 text-slate-700">
            These Terms of Use (&quot;Terms&quot;) govern your access to and use of ARRIVIO services provided by [LEGAL_ENTITY_NAME] (&quot;ARRIVIO,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By using ARRIVIO, you agree to these Terms.
          </p>

          <div className="mt-8 space-y-8 text-slate-700">
            <section>
              <h2 className="text-xl font-semibold text-brand-dark">1. Eligibility and Account</h2>
              <p className="mt-3">
                You must provide accurate account information and keep your login credentials secure. You are responsible for activity under your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">2. Service Description</h2>
              <p className="mt-3">
                ARRIVIO provides AI-assisted and workflow tools for newcomers, including (but not limited to) guidance, resume tools, document workflows, and language practice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">3. Informational Use Only (No Legal Advice)</h2>
              <p className="mt-3">
                ARRIVIO content and AI responses are for informational purposes only and do not constitute legal, immigration, financial, medical, or professional advice. You are responsible for verifying information through official and qualified sources.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">4. Acceptable Use</h2>
              <p className="mt-3">You agree not to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Use ARRIVIO for unlawful, fraudulent, abusive, or harmful purposes,</li>
                <li>Attempt unauthorized access to systems or data,</li>
                <li>Reverse engineer or disrupt the service,</li>
                <li>Upload malicious content,</li>
                <li>Infringe intellectual property or privacy rights of others.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">5. Subscriptions and Billing</h2>
              <p className="mt-3">ARRIVIO may offer auto-renewable subscriptions.</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Title: ARRIVIO Pro (example product naming may vary by store listing)</li>
                <li>Plans may include monthly and yearly options.</li>
                <li>Payment is charged to your Apple/Google account at confirmation.</li>
                <li>Subscriptions auto-renew unless canceled at least 24 hours before renewal.</li>
                <li>You can manage/cancel via your App Store or Google Play subscription settings.</li>
                <li>If a trial or promotional period is offered, terms shown at purchase apply.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">6. Refunds</h2>
              <p className="mt-3">
                Refunds are handled by the platform through which you purchased (Apple App Store / Google Play), subject to their policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">7. Intellectual Property</h2>
              <p className="mt-3">
                ARRIVIO branding, software, design, and content (excluding user-provided content) are owned by [LEGAL_ENTITY_NAME] or licensors and protected by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">8. User Content</h2>
              <p className="mt-3">
                You retain rights to content you submit, but grant us a limited license to host, process, and display it solely to operate and improve ARRIVIO.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">9. Service Availability</h2>
              <p className="mt-3">
                We may modify, suspend, or discontinue parts of ARRIVIO at any time. We are not liable for temporary interruptions or changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">10. Disclaimer of Warranties</h2>
              <p className="mt-3">
                ARRIVIO is provided “as is” and “as available,” without warranties of any kind to the maximum extent permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">11. Limitation of Liability</h2>
              <p className="mt-3">
                To the maximum extent permitted by law, [LEGAL_ENTITY_NAME] is not liable for indirect, incidental, special, consequential, or punitive damages, or loss of data/profits arising from use of ARRIVIO.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">12. Indemnification</h2>
              <p className="mt-3">
                You agree to indemnify and hold harmless [LEGAL_ENTITY_NAME] from claims arising out of your misuse of ARRIVIO or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">13. Termination</h2>
              <p className="mt-3">
                We may suspend or terminate access if you violate these Terms or create risk/harm to ARRIVIO, users, or third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">14. Governing Law</h2>
              <p className="mt-3">
                These Terms are governed by applicable laws of the jurisdiction where [LEGAL_ENTITY_NAME] is established, unless otherwise required by consumer protection law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">15. Changes to Terms</h2>
              <p className="mt-3">
                We may update these Terms periodically. Continued use after updates means you accept the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark">16. Contact</h2>
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
