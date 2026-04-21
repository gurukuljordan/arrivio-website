import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-primary">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-dark">Page not found</h1>
        <p className="mx-auto mt-4 max-w-lg text-slate-600">
          The page you requested is not available. Return to the ARRIVIO homepage.
        </p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white">
          Go Home
        </Link>
      </Container>
    </section>
  );
}
