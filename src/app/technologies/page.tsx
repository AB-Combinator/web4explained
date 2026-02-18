import { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";
import StaggerReveal from "@/components/StaggerReveal";
import StaggerItem from "@/components/StaggerItem";
import TiltCard from "@/components/TiltCard";
import { technologies } from "@/data/technologies";

export const metadata: Metadata = {
  title: "Core Technologies Powering Web 4.0",
  description:
    "The eight key technologies behind Web 4.0: AI agents, spatial computing, digital twins, IoT, edge computing, BCIs, blockchain, and MCP.",
};

const maturityColor: Record<string, string> = {
  Emerging: "text-violet bg-violet-glow",
  Growing: "text-accent bg-accent-glow",
  Maturing: "text-emerald-400 bg-emerald-400/10",
  Established: "text-foreground bg-foreground/10",
};

export default function TechnologiesPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
        <SectionReveal>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Core <span className="text-accent">Technologies</span>
          </h1>
          <p className="mt-4 text-xl text-muted max-w-2xl">
            The eight technologies converging to create Web 4.0 — from mature infrastructure to early-stage research.
          </p>
        </SectionReveal>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.map((tech) => (
            <StaggerItem key={tech.name} className="h-full">
              <TiltCard className="h-full">
                <div className="p-6 rounded-xl border border-border bg-surface h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h2 className="text-lg font-bold">{tech.name}</h2>
                    <span className={`text-xs font-mono px-2 py-1 rounded-full shrink-0 ${maturityColor[tech.maturity]}`}>
                      {tech.maturity}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80 mb-4">{tech.description}</p>

                  {/* Maturity bar */}
                  <div className="w-full h-1 rounded-full bg-border mb-4">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-1000"
                      style={{ width: `${tech.maturityPercent}%` }}
                    />
                  </div>

                  <p className="text-sm text-muted leading-relaxed mt-auto">{tech.detail}</p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>
    </main>
  );
}
