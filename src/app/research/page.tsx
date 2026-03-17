"use client";

import { motion } from "framer-motion";
import { Brain, Eye, Shield, Wheat, TreePine, ArrowRight, BookOpen } from "lucide-react";
import Card from "@/components/Card";
import Link from "next/link";

const researchAreas = [
  {
    icon: Brain,
    number: "01",
    title: "Agentic Workflow Automation",
    tagline: "Decision-Making Agents for Administrative Processes",
    description:
      "Researching and deploying multi-step 'Decision-Making Agents' capable of managing complex administrative processes autonomously. Our agents integrate with real-world systems to reduce manual task overhead and eliminate bottlenecks in institutional workflows.",
    tags: ["LLM Agents", "Workflow Orchestration", "Process Automation", "Multi-Agent Systems"],
    status: "Active",
    papers: 2,
  },
  {
    icon: Eye,
    number: "02",
    title: "Assistive Intelligence (ViDocX)",
    tagline: "AI-Driven Tools for Visually Impaired and DHH Communities",
    description:
      "ViDocX is our flagship assistive intelligence platform, providing real-time document comprehension, classroom companion tools, and gesture-based interfaces for students with visual impairments and deaf/hard-of-hearing (DHH) communities across Sri Lanka.",
    tags: ["Computer Vision", "NLP", "Sign Language AI", "HCI", "Accessibility"],
    status: "Published",
    papers: 1,
  },
  {
    icon: Shield,
    number: "03",
    title: "Defence & Strategic AI",
    tagline: "Secure, Air-Gapped Models for Military Operations",
    description:
      "Developing secure, edge-deployed AI models for Sri Lanka's defence sector — covering logistics optimization, situational awareness, and strategic decision support. All systems are designed with air-gapped architectures and strict security protocols.",
    tags: ["Edge AI", "Secure Inference", "Logistics AI", "Situational Awareness"],
    status: "Classified",
    papers: 0,
  },
  {
    icon: Wheat,
    number: "04",
    title: "Agri-Economic Stabilization",
    tagline: "Multi-Agent Systems for Crop Price Stabilization",
    description:
      "Deploying a network of economic AI agents that monitor regional supply chains, analyze weather patterns, and predict crop price fluctuations. Our system empowers smallholder farmers with real-time market intelligence to prevent economic crises.",
    tags: ["Economic AI", "Market Prediction", "Multi-Agent", "Farmer Empowerment"],
    status: "Active",
    papers: 0,
  },
  {
    icon: TreePine,
    number: "05",
    title: "HWC Mitigation",
    tagline: "Real-Time AI Deterrence for Human-Wildlife Conflict Zones",
    description:
      "A real-time detection and deterrence system combining IoT sensors, edge computing, and predictive AI to alert communities and rangers about wildlife intrusions before confrontations occur — protecting both human lives and endangered species.",
    tags: ["IoT + AI", "Edge Computing", "Wildlife Conservation", "Real-Time Detection"],
    status: "In Development",
    papers: 0,
  },
];

const statusColors: Record<string, string> = {
  Active: "text-green-400 bg-green-400/10 border-green-400/25",
  Published: "text-blue-400 bg-blue-400/10 border-blue-400/25",
  Classified: "text-faculty-red bg-faculty-red/10 border-faculty-red/25",
  "In Development": "text-amber-400 bg-amber-400/10 border-amber-400/25",
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen">
      {/* ── Page Header ── */}
      <section className="relative pt-24 pb-16 px-5 sm:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-faculty-red/[0.05] rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-faculty-red text-xs font-semibold tracking-[0.2em] uppercase mb-4 block"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Research Areas
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-100 leading-tight max-w-4xl mb-5"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Five domains.{" "}
            <span className="text-gradient">One singular focus.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed"
          >
            Our research spans the most critical challenge domains facing Sri Lanka —
            each area powered by Agentic AI, designed for real-world deployment.
          </motion.p>
        </div>
      </section>

      {/* ── Research Cards ── */}
      <section className="py-12 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {researchAreas.map((area, idx) => (
            <motion.div
              key={area.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="glass glow-border rounded-2xl p-7 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Left: Icon + Number */}
                <div className="flex-shrink-0 flex sm:flex-col items-center sm:items-start gap-4">
                  <div className="w-14 h-14 bg-faculty-red/10 border border-faculty-red/25 rounded-xl flex items-center justify-center">
                    <area.icon size={24} className="text-faculty-red" />
                  </div>
                  <span
                    className="text-slate-700 text-5xl font-black leading-none"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {area.number}
                  </span>
                </div>

                {/* Right: Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start gap-3 mb-2">
                    <h2
                      className="text-slate-100 font-bold text-xl sm:text-2xl"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {area.title}
                    </h2>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${statusColors[area.status]}`}
                    >
                      {area.status}
                    </span>
                    {area.papers > 0 && (
                      <span className="flex items-center gap-1 text-[11px] text-blue-400 bg-blue-400/10 border border-blue-400/25 px-2.5 py-0.5 rounded-full font-semibold">
                        <BookOpen size={10} />
                        {area.papers} pub{area.papers > 1 ? "s" : ""}
                      </span>
                    )}
                  </div>
                  <p className="text-faculty-red text-sm font-medium mb-3">
                    {area.tagline}
                  </p>
                  <p className="text-slate-400 leading-relaxed text-sm mb-5">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-slate-400 bg-white/[0.04] border border-white/[0.07] px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Collaboration CTA ── */}
      <section className="py-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass glow-border rounded-2xl p-10 sm:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-faculty-red/[0.06] via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2
                className="text-2xl sm:text-4xl font-black text-slate-100 mb-4"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Interested in <span className="text-gradient">collaborating?</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-8">
                We partner with government bodies, defence organizations, private sector
                innovators, and international researchers to accelerate impact.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-faculty-red text-white text-sm font-semibold rounded-xl hover:bg-faculty-red-dark transition-colors duration-200 shadow-[0_0_24px_rgba(230,57,70,0.35)]"
              >
                Meet the Team <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
