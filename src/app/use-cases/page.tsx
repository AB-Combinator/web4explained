import { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";
import { useCases } from "@/data/use-cases";

export const metadata: Metadata = {
  title: "Web 4.0 Use Cases — Real Applications Across Industries",
  description:
    "How Web 4.0 is being applied in healthcare, finance, smart cities, enterprise, security, and the creator economy. Real examples, not hypotheticals.",
};

export default function UseCasesPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
        <SectionReveal>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Use <span className="text-accent">Cases</span>
          </h1>
          <p className="mt-4 text-xl text-muted max-w-2xl">
            Web 4.0 isn&apos;t theoretical. Here&apos;s where it&apos;s already being built — and where it&apos;s headed.
          </p>
        </SectionReveal>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24 space-y-8">
        {useCases.map((uc, i) => (
          <SectionReveal key={uc.sector} delay={i * 0.05}>
            <div className="p-8 rounded-xl border border-border bg-surface">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono px-2 py-1 rounded-full bg-accent-glow text-accent">
                  {uc.sector}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-3">{uc.title}</h2>
              <p className="text-muted leading-relaxed mb-6">{uc.description}</p>

              <div>
                <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">Examples</h3>
                <ul className="space-y-2">
                  {uc.examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-accent mt-1 shrink-0">&bull;</span>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>

              {uc.source && (
                <div className="mt-4 text-xs text-dim font-mono">Source: {uc.source}</div>
              )}
            </div>
          </SectionReveal>
        ))}
      </section>
    </main>
  );
}
