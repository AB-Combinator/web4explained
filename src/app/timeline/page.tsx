import { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Web Evolution Timeline — From Web 1.0 to Web 4.0",
  description:
    "The complete history of the web from 1989 to 2030. How each era — Web 1.0, 2.0, 3.0, and 4.0 — changed the internet and what comes next.",
};

const eras = [
  {
    version: "1.0",
    name: "The Static Web",
    verb: "Read",
    period: "1989 – 2004",
    color: "text-dim",
    borderColor: "border-dim",
    bgGlow: "rgba(113, 113, 122, 0.1)",
    tech: ["HTML", "HTTP", "URLs", "Static pages"],
    companies: ["Netscape", "GeoCities", "Yahoo", "AltaVista"],
    userImpact: "For the first time, anyone with a browser could access information published anywhere in the world. But it was one-way — you could read, not participate.",
    culturalMoment: "The dot-com boom and bust. The web was transformational, yet by the late 1990s it was considered over-hyped. Sound familiar?",
  },
  {
    version: "2.0",
    name: "The Social Web",
    verb: "Read-Write",
    period: "2004 – present",
    color: "text-muted",
    borderColor: "border-muted",
    bgGlow: "rgba(161, 161, 170, 0.1)",
    tech: ["AJAX", "REST APIs", "Cloud computing", "Mobile"],
    companies: ["Facebook", "YouTube", "Twitter", "Google", "Amazon"],
    userImpact: "Users became creators. Anyone could publish, comment, share, and build an audience. But platforms captured all the value — your data, your content, your attention.",
    culturalMoment: "The rise of the creator economy, influencer culture, and the attention economy. Also: Cambridge Analytica, algorithmic radicalization, and platform monopolies.",
  },
  {
    version: "3.0",
    name: "The Ownership Web",
    verb: "Read-Write-Own",
    period: "~2018 – present",
    color: "text-foreground",
    borderColor: "border-foreground/30",
    bgGlow: "rgba(250, 250, 250, 0.05)",
    tech: ["Blockchain", "Smart contracts", "DeFi", "NFTs", "DAOs"],
    companies: ["Ethereum", "OpenSea", "Uniswap", "Coinbase", "Solana"],
    userImpact: "The promise: own your data, your identity, your digital assets. No intermediaries. The reality: speculation dominated, UX was terrible, and the internet got more centralized, not less.",
    culturalMoment: "The NFT mania of 2021, the crypto winter of 2022, and the slow realization that decentralization is a spectrum, not a switch.",
  },
  {
    version: "4.0",
    name: "The Agentic Web",
    verb: "Read-Write-Own-Act",
    period: "2026 – 2030 (emerging)",
    color: "text-accent",
    borderColor: "border-accent",
    bgGlow: "rgba(59, 130, 246, 0.1)",
    tech: ["AI agents", "Spatial computing", "Digital twins", "MCP", "Edge AI", "IoT"],
    companies: ["OpenAI", "Anthropic", "Google DeepMind", "EU Commission", "Various startups"],
    userImpact: "The web stops being a tool you use and becomes an infrastructure that acts on your behalf. AI agents make decisions, execute transactions, and manage systems autonomously.",
    culturalMoment: "The mainstreaming of agentic AI in 2026. Gartner predicts 40% of enterprise apps will embed AI agents by year-end. The debate: is this liberation or loss of control?",
  },
];

export default function TimelinePage() {
  return (
    <main className="min-h-screen">
      <section className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
        <SectionReveal>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            The Evolution of the <span className="text-accent">Web</span>
          </h1>
          <p className="mt-4 text-xl text-muted">
            From static pages to autonomous agents — how the internet evolved over four decades.
          </p>
        </SectionReveal>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-border" />

          {eras.map((era, i) => (
            <SectionReveal key={era.version} delay={i * 0.1} className="relative pl-20 md:pl-28 pb-24 last:pb-0">
              {/* Node */}
              <div
                className={`absolute left-4 md:left-8 w-8 h-8 md:w-9 md:h-9 rounded-full border-2 ${era.borderColor} flex items-center justify-center bg-background z-10`}
              >
                <span className={`text-xs font-mono font-bold ${era.color}`}>{era.version}</span>
              </div>

              {/* Content */}
              <div className="p-6 rounded-xl border border-border bg-surface" style={{ boxShadow: `0 0 40px ${era.bgGlow}` }}>
                <div className="flex flex-wrap items-baseline gap-3 mb-1">
                  <h2 className={`text-2xl md:text-3xl font-bold ${era.color}`}>{era.name}</h2>
                  <span className="text-sm font-mono text-dim">{era.period}</span>
                </div>
                <div className={`text-sm font-mono ${era.color} mb-4`}>{era.verb}</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-2">Defining Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {era.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-md bg-surface-hover border border-border text-muted">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-2">Key Players</h3>
                    <div className="flex flex-wrap gap-2">
                      {era.companies.map((c) => (
                        <span key={c} className="text-xs px-2 py-1 rounded-md bg-surface-hover border border-border text-muted">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-2">What Changed for Users</h3>
                  <p className="text-sm text-muted leading-relaxed">{era.userImpact}</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-2">The Cultural Moment</h3>
                  <p className="text-sm text-dim leading-relaxed">{era.culturalMoment}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* What's next */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <SectionReveal>
          <div className="p-8 rounded-xl border border-border bg-surface">
            <h2 className="text-2xl font-bold mb-4">What Comes After 4.0?</h2>
            <p className="text-muted leading-relaxed">
              Jack Dorsey&apos;s TBD project proposed <strong>Web5</strong> — combining Web 2.0 usability
              with Web 3.0 decentralization through decentralized identifiers (DIDs) and verifiable credentials.
              Others predict an &quot;emotional web&quot; or &quot;telepathic web&quot; powered by brain-computer
              interfaces. The honest answer: nobody knows. Each web era was only named in retrospect.
              We&apos;re still figuring out what 4.0 actually is.
            </p>
          </div>
        </SectionReveal>
      </section>
    </main>
  );
}
