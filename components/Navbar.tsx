import Link from "next/link";
import { Container } from "@/components/Container";
import { BrandLogo } from "@/components/BrandLogo";
import { navLinks } from "@/content/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <BrandLogo variant="compact" className="md:hidden" />
          <BrandLogo variant="full" className="hidden md:inline-flex" />

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-brand-primary">
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/product"
            className="rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Get the App
          </Link>
        </div>

        <nav className="mt-4 flex items-center gap-4 overflow-x-auto whitespace-nowrap text-sm font-medium text-slate-700 md:hidden">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 px-3 py-1.5 transition hover:text-brand-primary">
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
