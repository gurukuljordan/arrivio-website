import Link from "next/link";
import { Container } from "@/components/Container";
import { BrandLogo } from "@/components/BrandLogo";
import { companyContact } from "@/content/site";

const productLinks = [
  { href: "/product", label: "Product" },
  { href: "/support", label: "Support" }
];

const companyLinks = [
  { href: "/company", label: "Company" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/80">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandLogo variant="full" className="w-fit" />
            <p className="mt-4 text-sm font-semibold text-brand-dark">AI Super App for Newcomers Worldwide</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
              ARRIVIO is building the AI super app for immigrants and newcomers worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-dark">Product</h3>
            <nav className="mt-4 grid gap-3 text-sm text-slate-600" aria-label="Footer product links">
              {productLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-brand-primary">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-dark">Company</h3>
            <nav className="mt-4 grid gap-3 text-sm text-slate-600" aria-label="Footer company links">
              {companyLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-brand-primary">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-dark">Contact</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-brand-dark">Location:</span> {companyContact.location}
              </p>
              <p>
                <span className="font-semibold text-brand-dark">Email:</span>{" "}
                <a href={`mailto:${companyContact.helloEmail}`} className="transition hover:text-brand-primary">
                  {companyContact.helloEmail}
                </a>
              </p>
              <p>
                <span className="font-semibold text-brand-dark">Support:</span>{" "}
                <a href={`mailto:${companyContact.supportEmail}`} className="transition hover:text-brand-primary">
                  {companyContact.supportEmail}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} ARRIVIO. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
