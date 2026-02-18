"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "1.0", label: "Web 1.0", subtitle: "Read", x: 10, y: 50 },
  { id: "2.0", label: "Web 2.0", subtitle: "Read-Write", x: 33, y: 30 },
  { id: "3.0", label: "Web 3.0", subtitle: "Read-Write-Own", x: 56, y: 60 },
  { id: "4.0", label: "Web 4.0", subtitle: "Read-Write-Own-Act", x: 82, y: 40 },
];

export default function NetworkGraph() {
  return (
    <div className="relative w-full max-w-3xl mx-auto h-64 md:h-80">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {nodes.slice(0, -1).map((node, i) => {
          const next = nodes[i + 1];
          return (
            <motion.line
              key={`line-${i}`}
              x1={node.x}
              y1={node.y}
              x2={next.x}
              y2={next.y}
              stroke="var(--color-accent)"
              strokeWidth="0.3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.4 }}
            />
          );
        })}
      </svg>
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          className="absolute flex flex-col items-center"
          style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.4, type: "spring" }}
        >
          <div
            className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center text-xs md:text-sm font-mono font-bold ${
              i === nodes.length - 1
                ? "border-accent bg-accent-glow text-accent"
                : "border-border bg-surface text-muted"
            }`}
          >
            {node.id}
          </div>
          <div className="mt-2 text-xs md:text-sm font-medium text-foreground whitespace-nowrap">{node.label}</div>
          <div className="text-[10px] md:text-xs text-dim whitespace-nowrap">{node.subtitle}</div>
        </motion.div>
      ))}
    </div>
  );
}
