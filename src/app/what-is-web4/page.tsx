import { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";
import StaggerReveal from "@/components/StaggerReveal";
import StaggerItem from "@/components/StaggerItem";
import TiltCard from "@/components/TiltCard";

export const metadata: Metadata = {
  title: "What is Web 4.0? — The Definitive Explanation",
  description:
    "Web 4.0 is the next evolution of the internet — where AI agents, spatial computing, and autonomous systems create an intelligent, symbiotic web. Three definitions explained.",
};

const definitions = [
  {
    title: "The Agentic Web",
    subtitle: "The Crypto & AI Perspective",
    description:
      "Web 4.0 is where AI agents read, write, own, earn, and transact entirely on their own. Autonomous agents operate on decentralized infrastructure, using crypto rails (USDC, smart contracts) as the payment layer. Where Web 3.0 gave humans ownership, Web 4.0 gives machines agency.",
    source: "Frontiers in Blockchain, Decrypt, DailyCoin",
    color: "border-accent",
  },
  {
    title: "The Symbiotic Web",
    subtitle: "The Enterprise & Academic Perspective",
    description:
      "Web 4.0 is the symbiotic integration of artificial intelligence with IoT, edge computing, and spatial systems — creating an internet that anticipates needs, personalizes everything, and blurs the line between physical and digital. Machines and humans work in a symbiotic relationship where the web acts proactively, not reactively.",
    source: "Narrato, BairesDev, GeeksforGeeks",
    color: "border-violet",
  },
  {
    title: "The EU Policy Framework",
    subtitle: "The Government Perspective",
    description:
      "In July 2023, the European Commission adopted a formal Web 4.0 strategy focused on virtual worlds, digital twins, and metaverse governance. Key initiatives include CitiVerse (immersive urban planning), Destination Earth (planetary digital twin), and the European Virtual Human Twin. The EU defines Web 4.0 as the integration of digital objects with physical ones.",
    source: "European Commission COM(2023) 442",
    color: "border-emerald-500",
  },
];

const characteristics = [
  { title: "Autonomous Agents", desc: "AI systems that make decisions, transact, and operate without human intervention. They don't just assist — they act." },
  { title: "Predictive & Proactive", desc: "The web anticipates what you need before you ask. Context-aware systems that adapt in real-time to behavior and environment." },
  { title: "Physical-Digital Convergence", desc: "Digital twins, spatial computing, and IoT collapse the boundary between online and offline. The internet becomes embedded in the physical world." },
  { title: "Decentralized Identity", desc: "Users own their identity and data across platforms. No more platform lock-in or centralized gatekeepers controlling access." },
];

const misconceptions = [
  { myth: "Web 4.0 is just Web3 rebranded", reality: "Web3 focused on blockchain and token-based ownership. Web 4.0 is about AI agency and human-machine symbiosis. Different thesis entirely." },
  { myth: "Web 4.0 is the metaverse", reality: "The metaverse is one component (spatial computing, virtual worlds), but Web 4.0 is broader — it includes autonomous agents, IoT, edge computing, and AI systems that have nothing to do with VR headsets." },
  { myth: "Web 4.0 is science fiction", reality: "Pieces of it are live today. AI agents are executing transactions, digital twins are managing factories, and MCP has 5,000+ servers. It's emerging infrastructure, not fantasy." },
  { myth: "Web 4.0 is guaranteed to happen", reality: "Web3 promised decentralization and the internet got more centralized. Skepticism is warranted. The trajectory is real, but the timeline and form are uncertain." },
];

export default function WhatIsWeb4() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
        <SectionReveal>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            What is Web <span className="text-accent">4.0</span>?
          </h1>
        </SectionReveal>
        <SectionReveal delay={0.2}>
          <div className="mt-8 p-6 rounded-xl bg-surface border border-border">
            <h2 className="text-sm font-mono text-accent uppercase tracking-wider mb-3">TL;DR</h2>
            <p className="text-lg leading-relaxed">
              Web 4.0 is the emerging era of the internet where AI agents operate autonomously,
              physical and digital systems merge through spatial computing and digital twins,
              and the web shifts from a tool you use to an infrastructure that acts on your behalf.
              There is no single agreed-upon definition — but the direction is clear.
            </p>
          </div>
        </SectionReveal>
      </section>

      {/* Three definitions */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="text-3xl font-bold mb-4">Three Competing Definitions</h2>
          <p className="text-muted max-w-2xl mb-12">
            Different communities mean different things when they say &quot;Web 4.0.&quot;
            Understanding all three perspectives gives you the complete picture.
          </p>
        </SectionReveal>
        <StaggerReveal className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {definitions.map((def) => (
            <StaggerItem key={def.title} className="h-full">
              <TiltCard className="h-full">
                <div className={`p-6 rounded-xl border-l-4 ${def.color} bg-surface h-full`}>
                  <h3 className="text-xl font-bold">{def.title}</h3>
                  <div className="text-sm text-accent mt-1">{def.subtitle}</div>
                  <p className="text-sm text-muted mt-4 leading-relaxed">{def.description}</p>
                  <div className="text-xs text-dim mt-4 font-mono">{def.source}</div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <SectionReveal className="mt-12">
          <div className="p-6 rounded-xl border border-accent/20 bg-surface">
            <h3 className="text-lg font-bold mb-3">The Synthesized View</h3>
            <p className="text-muted leading-relaxed">
              Web 4.0 is not one thing — it&apos;s a convergence. The agentic web provides the autonomous intelligence.
              The symbiotic web provides the human-machine interface. The EU framework provides governance and standards.
              Together, they describe an internet that is intelligent, connected to the physical world, and capable of
              independent action — while (ideally) remaining under human oversight and democratic governance.
            </p>
          </div>
        </SectionReveal>
      </section>

      {/* Key characteristics */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="text-3xl font-bold mb-12">Key Characteristics</h2>
        </SectionReveal>
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {characteristics.map((char) => (
            <StaggerItem key={char.title}>
              <div className="p-6 rounded-xl border border-border bg-surface">
                <h3 className="text-lg font-semibold">{char.title}</h3>
                <p className="text-sm text-muted mt-3 leading-relaxed">{char.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* What it is NOT */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="text-3xl font-bold mb-12">What Web 4.0 is <span className="text-accent">Not</span></h2>
        </SectionReveal>
        <div className="space-y-6">
          {misconceptions.map((item, i) => (
            <SectionReveal key={item.myth} delay={i * 0.1}>
              <div className="p-6 rounded-xl border border-border bg-surface">
                <div className="flex items-start gap-4">
                  <span className="text-red-400 font-mono text-sm mt-1 shrink-0">MYTH</span>
                  <div>
                    <p className="font-semibold">&quot;{item.myth}&quot;</p>
                    <p className="text-sm text-muted mt-2 leading-relaxed">{item.reality}</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
