"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, MouseEvent } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

function MagneticWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.25);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/[0.05]">
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <MagneticWrapper>
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-faculty-red rounded-lg flex items-center justify-center flex-shrink-0 shadow-[0_0_16px_rgba(230,57,70,0.4)] group-hover:shadow-[0_0_24px_rgba(230,57,70,0.6)] transition-shadow duration-300">
              <span
                className="text-white text-xs font-black tracking-tight"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                IW
              </span>
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span
                className="text-slate-100 text-base font-bold tracking-tight"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                IWAC
              </span>
              <span className="text-slate-500 text-[10px] tracking-widest uppercase">
                KDU Lab
              </span>
            </div>
          </Link>
        </MagneticWrapper>

        {/* Navigation links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2.5 text-sm rounded-md block transition-colors duration-200 ${
                    isActive
                      ? "text-slate-100"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-underline"
                      className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-faculty-red rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <MagneticWrapper>
          <Link
            href="/research"
            className="hidden md:flex items-center gap-2 px-4 py-2 text-sm border border-faculty-red/35 text-faculty-red rounded-lg hover:bg-faculty-red/10 hover:border-faculty-red/60 transition-all duration-200"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-faculty-red opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-faculty-red" />
            </span>
            Live Research
          </Link>
        </MagneticWrapper>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-white/[0.05] transition-colors"
          aria-label="Open menu"
        >
          <span className="w-5 h-0.5 bg-slate-300 rounded" />
          <span className="w-5 h-0.5 bg-slate-300 rounded" />
          <span className="w-3 h-0.5 bg-slate-300 rounded" />
        </button>
      </nav>
    </header>
  );
}
