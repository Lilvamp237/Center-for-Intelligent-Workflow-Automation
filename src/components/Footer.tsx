import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { href: "/about", label: "The Lab" },
      { href: "/projects", label: "Solutions" },
      { href: "/research", label: "Research" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Research",
    links: [
      { href: "/research", label: "Agentic Systems" },
      { href: "/research", label: "Knowledge Engineering" },
      { href: "/research", label: "HPC + Multi-Agent" },
      { href: "/research", label: "Edge + Air-Gapped" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] mt-24 z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-9 h-9 bg-faculty-red rounded-lg flex items-center justify-center shadow-[0_0_16px_rgba(230,57,70,0.4)]">
                <span
                  className="text-white text-xs font-black tracking-tight"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  IW
                </span>
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-slate-100 text-base font-bold"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  IWAC
                </span>
                <span className="text-slate-500 text-[10px] tracking-widest uppercase">
                  Independent Lab
                </span>
              </div>
            </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Independent. Agile. Research-first. Built by the pioneers of Agentic AI
                in Sri Lanka.
              </p>
            <div className="flex items-center gap-2 text-slate-500 text-xs mb-2">
              <MapPin size={12} className="text-faculty-red flex-shrink-0" />
              <span>KDU Campus, Ratmalana, Sri Lanka</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-xs">
              <Mail size={12} className="text-faculty-red flex-shrink-0" />
              <span>iwac@kdu.ac.lk</span>
            </div>
          </div>

          {/* Navigation columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4
                className="text-slate-100 text-sm font-semibold mb-5 tracking-wide uppercase"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-faculty-red text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social column */}
          <div>
            <h4
              className="text-slate-100 text-sm font-semibold mb-5 tracking-wide uppercase"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                aria-label="GitHub"
                className="w-9 h-9 glass glow-border rounded-lg flex items-center justify-center text-slate-400 hover:text-faculty-red transition-colors duration-200"
              >
                <Github size={15} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 glass glow-border rounded-lg flex items-center justify-center text-slate-400 hover:text-faculty-red transition-colors duration-200"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="w-9 h-9 glass glow-border rounded-lg flex items-center justify-center text-slate-400 hover:text-faculty-red transition-colors duration-200"
              >
                <Mail size={15} />
              </a>
            </div>
            <div className="glass glow-border rounded-lg p-4">
              <p className="text-slate-300 text-xs font-mono mb-1">
                <span className="text-faculty-red">●</span> System Online
              </p>
              <p className="text-slate-500 text-xs font-mono">
                agents: 4 · uptime: 99.97%
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">
            © 2026 IWAC - Intelligent Workflow Automation Center, KDU. All rights
            reserved.
          </p>
          <p className="text-slate-600 text-xs font-mono">
            Status: <span className="text-faculty-red">Open for Collaboration</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
