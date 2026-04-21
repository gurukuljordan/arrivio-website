import { Container } from "@/components/Container";

const trustItems = ["Built for immigrants worldwide", "AI-powered guidance", "Real-life relocation tools"];

export function TrustStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-5">
      <Container>
        <ul className="grid gap-4 text-center sm:grid-cols-3 sm:text-left">
          {trustItems.map((item) => (
            <li key={item} className="text-sm font-medium text-slate-600">
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
