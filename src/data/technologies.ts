export interface Technology {
  name: string;
  description: string;
  detail: string;
  maturity: "Emerging" | "Growing" | "Maturing" | "Established";
  maturityPercent: number;
}

export const technologies: Technology[] = [
  {
    name: "AI Agents & Agentic Systems",
    description: "Autonomous AI systems that reason, plan, and execute multi-step tasks with minimal human oversight.",
    detail: "The core engine of Web 4.0. AI agents don't just respond to prompts — they pursue goals, use tools, manage resources, and coordinate with other agents. Gartner predicts 40% of enterprise apps will embed AI agents by end of 2026. The agentic AI market is projected to reach $52B by 2030.",
    maturity: "Growing",
    maturityPercent: 45,
  },
  {
    name: "Spatial Computing & XR",
    description: "Technologies that blend digital content with the physical world — AR, VR, and mixed reality.",
    detail: "Spatial computing creates the immersive layer of Web 4.0. Apple Vision Pro, Meta Quest, and enterprise headsets are making mixed reality practical for work. The EU's strategy specifically targets virtual worlds and spatial computing as core Web 4.0 infrastructure.",
    maturity: "Growing",
    maturityPercent: 40,
  },
  {
    name: "Digital Twins",
    description: "Highly accurate virtual replicas of physical objects, systems, or environments that update in real-time.",
    detail: "Digital twins let engineers simulate and test changes in a virtual environment before touching the physical one. The EU is building Destination Earth (a planetary-scale digital twin) and CitiVerse (urban digital twins for city planning). Industrial digital twins are already mainstream in manufacturing.",
    maturity: "Maturing",
    maturityPercent: 65,
  },
  {
    name: "IoT & Smart Connectivity",
    description: "Networks of physical devices with sensors and software that connect, collect data, and communicate.",
    detail: "IoT provides the sensory layer — the eyes, ears, and hands of Web 4.0. Smart thermostats, autonomous vehicles, industrial sensors, and wearables all feed data into AI systems. By 2030, an estimated 29 billion IoT devices will be active globally.",
    maturity: "Established",
    maturityPercent: 80,
  },
  {
    name: "Edge Computing",
    description: "Processing data closer to where it's generated rather than in centralized cloud data centers.",
    detail: "Edge computing solves the latency problem. When an autonomous vehicle needs to make a split-second decision, it can't wait for a round trip to a cloud server. Edge AI processes data locally, enabling real-time responses that Web 4.0's connected systems demand.",
    maturity: "Maturing",
    maturityPercent: 60,
  },
  {
    name: "Brain-Computer Interfaces",
    description: "Direct communication pathways between the brain and external devices.",
    detail: "The most speculative Web 4.0 technology. Neuralink and other BCI companies are developing neural interfaces that could eventually replace keyboards and screens entirely. Current applications focus on medical use (paralysis, epilepsy). Consumer BCIs are likely a decade or more away.",
    maturity: "Emerging",
    maturityPercent: 15,
  },
  {
    name: "Blockchain & Crypto Rails",
    description: "Decentralized ledgers and programmable money that enable trustless transactions between agents.",
    detail: "If AI agents are going to transact autonomously, they need payment infrastructure that doesn't require human approval for every transaction. Crypto rails (USDC, smart contracts, decentralized identity) provide this. The intersection of AI agents and crypto is where 'agentic Web 4.0' discourse lives.",
    maturity: "Growing",
    maturityPercent: 50,
  },
  {
    name: "Model Context Protocol (MCP)",
    description: "An open standard for connecting AI models to external tools, data sources, and services.",
    detail: "MCP is rapidly becoming the USB port for AI agents — a universal way to plug AI into any system. Google DeepMind confirmed MCP support in Gemini models, calling it 'an open standard for the AI agentic era.' Over 5,000 active MCP servers existed by May 2025.",
    maturity: "Emerging",
    maturityPercent: 30,
  },
];
