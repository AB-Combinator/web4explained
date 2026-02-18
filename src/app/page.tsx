import NetworkGraph from "@/components/NetworkGraph";
import SectionReveal from "@/components/SectionReveal";
import StaggerReveal from "@/components/StaggerReveal";
import StaggerItem from "@/components/StaggerItem";
import StatCounter from "@/components/StatCounter";
import TiltCard from "@/components/TiltCard";
import Link from "next/link";

const eras = [
  { version: "1.0", verb: "Read", desc: "Static pages. Information portals. One-way consumption.", color: "text-dim" },
  { version: "2.0", verb: "Read-Write", desc: "Social media. User-generated content. Platforms own everything.", color: "text-muted" },
  { version: "3.0", verb: "Read-Write-Own", desc: "Blockchain. Decentralization. Tokens and digital ownership.", color: "text-foreground" },
  { version: "4.0", verb: "Read-Write-Own-Act", desc: "AI agents. Autonomous systems. The internet does things for you.", color: "text-accent" },
];

const pageLinks = [
  { href: "/what-is-web4", title: "What is Web 4.0?", desc: "Three competing definitions, one synthesized view." },
  { href: "/timeline", title: "Evolution Timeline", desc: "From 1989 to 2030 — how the web evolved era by era." },
  { href: "/technologies", title: "Core Technologies", desc: "AI agents, spatial computing, digital twins, and more." },
  { href: "/use-cases", title: "Use Cases", desc: "Real applications across healthcare, finance, and cities." },
  { href: "/faq", title: "FAQ", desc: "Is it real? When is it coming? Is it just hype?" },
];

const stats = [
  { end: 800, prefix: "$", suffix: "B", label: "Projected market by 2030" },
  { end: 40, suffix: "%", label: "Enterprise apps with AI agents by 2026" },
  { end: 5000, suffix: "+", label: "Active MCP servers (May 2025)" },
  { end: 52, prefix: "$", suffix: "B", label: "Agentic AI market by 2030" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
        <SectionReveal>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Web <span className="text-accent">4.0</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-muted max-w-2xl mx-auto">
            The next evolution of the internet, explained.
          </p>
        </SectionReveal>
        <SectionReveal delay={0.3} className="mt-12 w-full">
          <NetworkGraph />
        </SectionReveal>
      </section>

      {/* Definition card */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <SectionReveal>
          <div className="relative p-8 rounded-xl border border-accent/20 bg-surface">
            <div className="absolute inset-0 rounded-xl bg-accent-glow blur-xl -z-10" />
            <p className="text-lg md:text-xl leading-relaxed">
              <strong>Web 4.0</strong> is the emerging era of the internet where artificial intelligence,
              autonomous agents, and connected systems work together to create a web that doesn&apos;t just
              respond to you — it acts on your behalf. Where Web 3.0 promised ownership, Web 4.0 promises agency.
            </p>
          </div>
        </SectionReveal>
      </section>

      {/* Era comparison */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <SectionReveal>
          <h2 className="text-3xl font-bold text-center mb-12">The Evolution</h2>
        </SectionReveal>
        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {eras.map((era) => (
            <StaggerItem key={era.version}>
              <TiltCard className="h-full">
                <div className="p-6 rounded-xl border border-border bg-surface h-full">
                  <div className={`text-2xl font-mono font-bold ${era.color}`}>{era.version}</div>
                  <div className="text-sm font-semibold text-foreground mt-2">{era.verb}</div>
                  <p className="text-sm text-muted mt-3">{era.desc}</p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <StaggerReveal className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <StatCounter {...stat} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* Page links */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <SectionReveal>
          <h2 className="text-3xl font-bold text-center mb-12">Explore</h2>
        </SectionReveal>
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pageLinks.map((link) => (
            <StaggerItem key={link.href}>
              <Link href={link.href}>
                <TiltCard>
                  <div className="p-6 rounded-xl border border-border bg-surface hover:border-accent/30 transition-colors">
                    <h3 className="text-lg font-semibold">{link.title}</h3>
                    <p className="text-sm text-muted mt-2">{link.desc}</p>
                  </div>
                </TiltCard>
              </Link>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>
    </main>
  );
}
