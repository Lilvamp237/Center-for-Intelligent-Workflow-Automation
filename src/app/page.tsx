"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Shield,
  Zap,
  Users,
  BookOpen,
  ChevronRight,
  Network,
  Database,
  Cpu,
  Lock,
} from "lucide-react";
import TextScramble from "@/components/TextScramble";
import TerminalStatus from "@/components/TerminalStatus";
import MagneticButton from "@/components/MagneticButton";
import Card from "@/components/Card";

const stats = [
  { value: "3", label: "Core Lab Leads" },
  { value: "4", label: "Signature Solutions" },
  { value: "3", label: "Publications (2026)" },
  { value: "100%", label: "High-Assurance Focus" },
];

const featureCards = [
  {
    icon: Brain,
    title: "Agentic AI Systems",
    description:
      "Building autonomous decision-making agents that transform complex administrative and industrial workflows.",
    href: "/research",
  },
  {
    icon: Shield,
    title: "Defence & Strategic AI",
    description:
      "Secure, air-gapped AI models engineered for mission-critical logistics and situational awareness.",
    href: "/research",
  },
  {
    icon: Users,
    title: "Assistive Intelligence",
    description:
      "ViDocX and companion tools redefining accessibility for visually impaired and DHH communities.",
    href: "/research",
  },
  {
    icon: Zap,
    title: "National-Scale Automation",
    description:
      "Agri-economic agents, HWC deterrence systems, and civil sector workflow suites deployed nationwide.",
    href: "/projects",
  },
];

const techStack = [
  {
    icon: Network,
    title: "Core Engine",
    items: ["Agentic RAG", "LangGraph", "Multi-Agent Orchestration"],
  },
  {
    icon: Database,
    title: "Knowledge Layer",
    items: ["Neo4j (Knowledge Graphs)", "OWL/RDF (Ontologies)", "Semantic Reasoning"],
  },
  {
    icon: Cpu,
    title: "Compute",
    items: ["CUDA/C++ (HPC)", "TensorFlow", "PyTorch"],
  },
  {
    icon: Lock,
    title: "Deployment",
    items: ["Secure, Air-Gapped AI", "Edge Computing", "Controlled Inference"],
  },
];

export default function HomePage() {
  const typewriterText = "We build agents that Reason, Act, and Deliver.";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      idx += 1;
      setTypedText(typewriterText.slice(0, idx));
      if (idx >= typewriterText.length) {
        clearInterval(interval);
      }
    }, 38);

    return () => clearInterval(interval);
  }, [typewriterText]);

  return (
    <div className="min-h-screen">
      {/* ── Hero Section ── */}
      <section className="relative flex flex-col items-center justify-center min-h-[92vh] px-5 sm:px-8 text-center overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-faculty-red/[0.06] rounded-full blur-[120px] pointer-events-none" />

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass glow-border px-4 py-1.5 rounded-full text-xs text-slate-300 mb-8 font-mono"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-faculty-red opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-faculty-red" />
          </span>
          Independent R&D Studio · KDU Heritage · Sri Lanka
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-faculty-red text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Engineering the Next Generation of Agentic Systems
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.08] tracking-tight max-w-5xl mb-6"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          <TextScramble
            text="The Frontier of Agentic AI."
            className="text-gradient red-glow block"
            delay={300}
          />
          <span className="text-slate-100 block mt-2">Elite workflows, engineered.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-10"
        >
          {typedText}
          <span className="inline-block w-2 h-5 bg-faculty-red ml-1 align-middle animate-pulse" />
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <MagneticButton className="group flex items-center gap-2 px-6 py-3 bg-faculty-red hover:bg-faculty-red-dark text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-[0_0_24px_rgba(230,57,70,0.35)] hover:shadow-[0_0_36px_rgba(230,57,70,0.55)]">
            <Link href="/contact" className="flex items-center gap-2">
              Deploy an Agentic System
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </MagneticButton>

          <MagneticButton className="group flex items-center gap-2 px-6 py-3 glass glow-border text-slate-200 text-sm font-semibold rounded-xl hover:text-white transition-colors duration-200">
            <Link href="/research" className="flex items-center gap-2">
              View our Research
              <ChevronRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Terminal status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-center"
        >
          <TerminalStatus />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-xs tracking-widest uppercase"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 h-6 bg-gradient-to-b from-faculty-red/60 to-transparent rounded-full"
          />
        </motion.div>
      </section>

      {/* ── Stats Section ── */}
      <section className="py-20 px-5 sm:px-8 border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-cyber-black px-8 py-10 text-center"
              >
                <div
                  className="text-4xl sm:text-5xl font-black text-faculty-red mb-2 red-glow"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features / Research Snapshot ── */}
      <section className="py-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 max-w-2xl"
          >
            <span
              className="text-faculty-red text-xs font-semibold tracking-[0.2em] uppercase mb-3 block"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              What We Do
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 leading-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Research that moves{" "}
              <span className="text-gradient">nations forward.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featureCards.map((card, idx) => (
              <Card key={card.title} index={idx}>
                <div className="w-10 h-10 bg-faculty-red/10 border border-faculty-red/25 rounded-lg flex items-center justify-center mb-4">
                  <card.icon size={18} className="text-faculty-red" />
                </div>
                <h3
                  className="text-slate-100 font-semibold text-base mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-faculty-red text-xs font-semibold hover:gap-2.5 transition-all duration-200"
                >
                  Learn more <ArrowRight size={12} />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-24 px-5 sm:px-8 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-2xl"
          >
            <span
              className="text-faculty-red text-xs font-semibold tracking-[0.2em] uppercase mb-3 block"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              The Tech Stack
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 leading-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              The muscle behind our
              <span className="text-gradient"> agentic systems.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {techStack.map((stack, idx) => (
              <Card key={stack.title} index={idx}>
                <div className="w-10 h-10 bg-faculty-red/10 border border-faculty-red/25 rounded-lg flex items-center justify-center mb-4">
                  <stack.icon size={18} className="text-faculty-red" />
                </div>
                <h3
                  className="text-slate-100 font-semibold text-base mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {stack.title}
                </h3>
                <ul className="space-y-2 text-slate-400 text-sm">
                  {stack.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-faculty-red mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative glass glow-border rounded-2xl overflow-hidden px-8 sm:px-16 py-16 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-faculty-red/[0.06] via-transparent to-faculty-red/[0.03] pointer-events-none" />
            <div className="relative z-10">
              <BookOpen
                size={36}
                className="text-faculty-red mx-auto mb-5 opacity-80"
              />
              <h2
                className="text-2xl sm:text-4xl font-black text-slate-100 mb-4"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Latest Publication: <span className="text-gradient">PeerJ 2026</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
                Our research on AI-driven accessibility tools was published in PeerJ — advancing
                ViDocX and its impact on inclusive education.
              </p>
              <MagneticButton className="inline-flex items-center gap-2 px-6 py-3 bg-faculty-red text-white text-sm font-semibold rounded-xl hover:bg-faculty-red-dark transition-colors duration-200 shadow-[0_0_24px_rgba(230,57,70,0.35)]">
                <Link href="/blog" className="flex items-center gap-2">
                  Read Our Research <ArrowRight size={15} />
                </Link>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
