"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Eye,
  Headphones,
  TrendingUp,
  Lock,
  ArrowUpRight,
  Clock,
  Users,
  BarChart2,
} from "lucide-react";
import Link from "next/link";

const projects = [
  {
    icon: FileText,
    title: "Workflow Optimization",
    subtitle: "Case Study: KDU Exam Portal",
    description:
      "End-to-end workflow redesign and automation for academic operations. The KDU Exam Portal delivered a 40% efficiency gain by digitizing the entire exam lifecycle and removing manual bottlenecks.",
    impact: "40% efficiency gain",
    tech: ["Next.js", "Python", "PostgreSQL", "Workflow Engine"],
    status: "Deployed",
    category: "Workflow Optimization",
    metrics: [
      { icon: BarChart2, label: "Efficiency Gain", value: "40%" },
      { icon: Users, label: "Operators Enabled", value: "500+" },
      { icon: Clock, label: "Cycle Time", value: "3x faster" },
    ],
  },
  {
    icon: Eye,
    title: "Assistive Tech",
    subtitle: "Product: ViDocX",
    description:
      "AI-driven academic accessibility for visually impaired learners. ViDocX transforms documents into structured audio with context-aware summaries for real-time classroom support.",
    impact: "Academic accessibility at scale",
    tech: ["Computer Vision", "TTS Engine", "OCR", "React Native"],
    status: "Live",
    category: "Assistive Tech",
    metrics: [
      { icon: Users, label: "Students Supported", value: "120+" },
      { icon: FileText, label: "Documents Processed", value: "10K+" },
      { icon: BarChart2, label: "Accuracy Rate", value: "94%" },
    ],
  },
  {
    icon: Headphones,
    title: "Immersive Learning",
    subtitle: "Product: VR Environments for the Deaf",
    description:
      "Immersive learning environments for deaf and hard-of-hearing learners, using gesture recognition to translate sign language into interactive content without audio dependency.",
    impact: "Inclusive curriculum delivery",
    tech: ["Unity 3D", "MediaPipe", "Sign Language AI", "Edge ML"],
    status: "Beta",
    category: "Immersive Learning",
    metrics: [
      { icon: Users, label: "Pilot Users", value: "45" },
      { icon: BarChart2, label: "Sign Recognition", value: "89%" },
      { icon: Clock, label: "Latency", value: "<120ms" },
    ],
  },
  {
    icon: TrendingUp,
    title: "Strategic Automation",
    subtitle: "Product: National Crop Pricing and Wildlife Mitigation Agents",
    description:
      "Multi-agent systems delivering market intelligence, crop pricing guidance, and wildlife mitigation alerts for national resilience across agriculture and conservation.",
    impact: "National-scale decision support",
    tech: ["Multi-Agent AI", "Time Series ML", "SMS Gateway", "Data Pipeline"],
    status: "In Development",
    category: "Strategic Automation",
    metrics: [
      { icon: BarChart2, label: "Prediction Accuracy", value: "78%" },
      { icon: Users, label: "Families Reached", value: "200+" },
      { icon: TrendingUp, label: "Regions Covered", value: "12" },
    ],
  },
];

const statusConfig: Record<string, { color: string; bg: string }> = {
  Deployed: { color: "text-green-400", bg: "bg-green-400/10 border-green-400/25" },
  Live: { color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/25" },
  Beta: { color: "text-amber-400", bg: "bg-amber-400/10 border-amber-400/25" },
  "In Development": { color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/25" },
  Classified: { color: "text-faculty-red", bg: "bg-faculty-red/10 border-faculty-red/25" },
};

const categoryColors: Record<string, string> = {
  "Workflow Optimization": "text-slate-300",
  "Assistive Tech": "text-blue-300",
  "Immersive Learning": "text-amber-300",
  "Strategic Automation": "text-faculty-red",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* ── Page Header ── */}
      <section className="relative pt-24 pb-16 px-5 sm:px-8 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-faculty-red/[0.05] rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-faculty-red text-xs font-semibold tracking-[0.2em] uppercase mb-4 block"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Services and Solutions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-100 leading-tight max-w-4xl mb-5"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Boutique builds for{" "}
            <span className="text-gradient">real-world impact.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed"
          >
            We deliver focused, high-assurance solutions for institutions that need
            measurable outcomes, not prototypes.
          </motion.p>
        </div>
      </section>

      {/* ── Project Grid ── */}
      <section className="py-12 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, idx) => {
              const statusStyle = statusConfig[project.status];
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass glow-border rounded-2xl p-7 flex flex-col group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-faculty-red/10 border border-faculty-red/25 rounded-xl flex items-center justify-center flex-shrink-0">
                        <project.icon size={20} className="text-faculty-red" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span
                            className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${statusStyle.bg} ${statusStyle.color}`}
                          >
                            {project.status}
                          </span>
                          <span
                            className={`text-[11px] font-medium ${categoryColors[project.category]}`}
                          >
                            {project.category}
                          </span>
                        </div>
                        <h2
                          className="text-slate-100 font-bold text-lg leading-tight group-hover:text-white transition-colors"
                          style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                          {project.title}
                        </h2>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-slate-600 group-hover:text-faculty-red transition-colors flex-shrink-0 mt-1"
                    />
                  </div>

                  <p className="text-faculty-red text-sm font-medium mb-2">
                    {project.subtitle}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Metrics row */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-3 text-center"
                      >
                        <metric.icon size={14} className="text-faculty-red/70 mx-auto mb-1" />
                        <div
                          className="text-slate-100 text-sm font-bold"
                          style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                          {metric.value}
                        </div>
                        <div className="text-slate-600 text-[10px]">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] text-slate-400 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-slate-400 text-base max-w-xl mx-auto mb-6">
              Interested in adopting a CIWA solution or commissioning a bespoke AI
              system for your organization?
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 glass glow-border text-slate-200 text-sm font-semibold rounded-xl hover:text-white transition-colors duration-200"
            >
              Discuss a Project <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
