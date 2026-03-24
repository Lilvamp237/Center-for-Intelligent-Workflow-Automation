"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Cpu, Lock, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Card from "@/components/Card";

const missionPillars = [
  {
    icon: Lightbulb,
    title: "Innovate",
    description:
      "Developing cutting-edge Agentic AI frameworks for complex, multi-domain problem-solving — from academic research to national deployments.",
  },
  {
    icon: Cpu,
    title: "Automate",
    description:
      "Streamlining industrial and civil workflows through intelligent process automation, reducing operational overhead and enhancing national efficiency.",
  },
  {
    icon: Lock,
    title: "Integrate",
    description:
      "Deploying secure, ethical AI within Sri Lanka's defence and civil sectors — building trust through auditability and air-gapped infrastructure.",
  },
];

const teamMembers = [
  {
    name: "Dr. Kaneeka Vidanage",
    role: "Research Lead & Mentor",
    area: "Specialist in Ontology and Knowledge Engineering",
    photo: "/team/kaneekas.jpg",
    linkedin: "https://www.linkedin.com/in/kaneeka-vidanage-902a7292/",
    github: null,
  },
  {
    name: "Dinuka Wickramasinghe",
    role: "Head of Agentic Development",
    area: "Specialist in Multi-Agent Systems and HPC",
    photo: "/team/dinukas.png",
    linkedin: "https://www.linkedin.com/in/dinuka-wickramasinghe/",
    github: "https://github.com/Wicky2002",
  },
  {
    name: "Sumudu",
    role: "Lead for Immersive Systems",
    area: "Specialist in VR, CV, and Inclusive UX",
    photo: "/team/sumudus.png",
    linkedin: "https://www.linkedin.com/in/sumudu-ratnayake-782b90235/",
    github: "https://github.com/Lilvamp237",
  },
];

const values = [
  { label: "Research Papers", value: "3+" },
  { label: "Active Projects", value: "6" },
  { label: "Research Domains", value: "5" },
  { label: "Years Active", value: "3" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ── Page Header ── */}
      <section className="relative pt-24 pb-20 px-5 sm:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-faculty-red/[0.05] rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-faculty-red text-xs font-semibold tracking-[0.2em] uppercase mb-4 block"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            About IWAC
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-slate-100 max-w-4xl mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Built for Impact.{" "}
            <span className="text-gradient">Designed for the Nation.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-200 text-base sm:text-lg max-w-4xl leading-relaxed"
          >
            The Center for Intelligent Workflow Automation (CIWA) operates under the Faculty of Computing at General Sir John Kotelawala Defence University. We specialize in real-world process automation through cutting-edge technologies including Deep Learning, Large Language Models (LLMs), Intelligent Chatbots, Ontological Modelling, and Knowledge Engineering. Our research bridges the gap between theoretical AI advancements and practical applications that transform industries and enhance operational efficiency across defense, healthcare, public administration, and enterprise sectors.
          </motion.p>
        </div>
      </section>

      {/* ── Stats Row ── */}
      <section className="px-5 sm:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {values.map((v, idx) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass glow-border rounded-xl p-6 text-center"
              >
                <div
                  className="text-3xl font-black text-faculty-red mb-1"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {v.value}
                </div>
                <div className="text-slate-400 text-sm">{v.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision Section ── */}
      <section className="py-20 px-5 sm:px-8 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-faculty-red/10 border border-faculty-red/25 rounded-lg flex items-center justify-center">
                <Target size={18} className="text-faculty-red" />
              </div>
              <span
                className="text-faculty-red text-xs font-semibold tracking-[0.18em] uppercase"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Our Vision
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-black text-slate-100 leading-tight mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Regional leader in{" "}
              <span className="text-gradient">Autonomous Agentic Systems.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed text-base">
              To become the regional leader in Autonomous Agentic Systems, driving
              Sri Lanka toward a self-sustaining, AI-powered digital economy. We
              envision a future where intelligent agents manage the complexity of
              national infrastructure — from agriculture to defence, from
              accessibility to enterprise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="glass glow-border rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-faculty-red/[0.06] to-transparent pointer-events-none" />
              <div className="relative z-10 font-mono text-sm space-y-3">
                <p className="text-slate-500">// iwac vision statement</p>
                <p className="text-slate-300">
                  <span className="text-faculty-red">const</span>{" "}
                  <span className="text-slate-100">vision</span> = {"{"}
                </p>
                <p className="text-slate-300 ml-6">
                  goal:{" "}
                  <span className="text-green-400">&apos;Regional AI Leader&apos;</span>,
                </p>
                <p className="text-slate-300 ml-6">
                  scope:{" "}
                  <span className="text-green-400">&apos;National Scale&apos;</span>,
                </p>
                <p className="text-slate-300 ml-6">
                  focus:{" "}
                  <span className="text-green-400">&apos;Agentic Systems&apos;</span>,
                </p>
                <p className="text-slate-300 ml-6">
                  impact:{" "}
                  <span className="text-green-400">&apos;Sri Lanka → Region&apos;</span>,
                </p>
                <p className="text-slate-300">{"}"}</p>
                <p className="text-slate-500 mt-4">
                  // Status: <span className="text-green-400">Executing...</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Mission Section ── */}
      <section className="py-20 px-5 sm:px-8 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span
              className="text-faculty-red text-xs font-semibold tracking-[0.2em] uppercase mb-3 block"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              The Mission
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black text-slate-100"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Three pillars. One purpose.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {missionPillars.map((pillar, idx) => (
              <Card key={pillar.title} index={idx}>
                <div className="w-12 h-12 bg-faculty-red/10 border border-faculty-red/25 rounded-xl flex items-center justify-center mb-5">
                  <pillar.icon size={22} className="text-faculty-red" />
                </div>
                <h3
                  className="text-slate-100 font-bold text-xl mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Section ── */}
      <section className="py-20 px-5 sm:px-8 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span
              className="text-faculty-red text-xs font-semibold tracking-[0.2em] uppercase mb-3 block"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              The Trio
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black text-slate-100"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              The specialists behind the lab.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass glow-border rounded-xl overflow-hidden group"
              >
                {/* Photo area — torso crop, always in colour */}
                <div className="relative h-80 overflow-hidden bg-slate-800/60">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Soft bottom fade — lighter now that images are full colour */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/80 via-transparent to-transparent" />
                  {/* Subtle red tint on hover */}
                  <div className="absolute inset-0 bg-faculty-red/0 group-hover:bg-faculty-red/[0.07] transition-colors duration-700" />
                  {/* Social icons — slide up from bottom on hover */}
                  <div className="absolute bottom-4 right-4 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="w-8 h-8 bg-slate-900/80 border border-faculty-red/40 rounded-lg flex items-center justify-center hover:bg-faculty-red/20 hover:border-faculty-red transition-colors duration-200 backdrop-blur-sm"
                      >
                        <Linkedin size={13} className="text-slate-300" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on GitHub`}
                        className="w-8 h-8 bg-slate-900/80 border border-faculty-red/40 rounded-lg flex items-center justify-center hover:bg-faculty-red/20 hover:border-faculty-red transition-colors duration-200 backdrop-blur-sm"
                      >
                        <Github size={13} className="text-slate-300" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Info area */}
                <div className="p-5">
                  <h3
                    className="text-slate-100 font-semibold text-base group-hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-faculty-red text-xs font-medium mt-0.5 mb-2">
                    {member.role}
                  </p>
                  <p className="text-slate-500 text-xs leading-relaxed">{member.area}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
