import Link from "next/link";

const links = [
  { href: "/what-is-web4", label: "What is Web 4.0?" },
  { href: "/timeline", label: "Timeline" },
  { href: "/technologies", label: "Technologies" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="text-lg font-bold tracking-tight">
              Web <span className="text-accent">4.0</span> Explained
            </div>
            <p className="text-dim text-sm mt-2 max-w-xs">
              Built as a public resource. Not affiliated with any company, protocol, or token.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-dim text-xs">
          &copy; {new Date().getFullYear()} Web 4.0 Explained. All information sourced from public research.
        </div>
      </div>
    </footer>
  );
}
