"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Tag } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    id: "year-of-the-agent",
    number: "01",
    title: "Why 2026 is the Year of the Agent, Not the Bot.",
    excerpt:
      "The world spent five years chasing chatbots and text generators. In 2026, the paradigm has shifted; the real revolution belongs to Agentic AI — autonomous systems that don't just answer questions, but take actions, manage workflows, and make decisions at scale. IWAC explains why this shift matters more than any LLM release.",
    fullPreview:
      "From RPA bots to LLM-powered assistants, the journey to true AI agency has been incremental. But 2026 marks an inflection point. We now have the tools — multi-step reasoning, tool use, persistent memory — to build agents that genuinely operate in the world.",
    author: "Dr. A. Perera",
    role: "Director, IWAC",
    date: "March 10, 2026",
    readTime: "8 min read",
    category: "Agentic AI",
    categoryColor: "text-faculty-red bg-faculty-red/10 border-faculty-red/25",
    featured: true,
  },
  {
    id: "ai-at-the-border",
    number: "02",
    title: "AI at the Border: Solving the Human-Elephant Conflict.",
    excerpt:
      "Sri Lanka's Human-Wildlife Conflict (HWC) claims dozens of lives and displaces thousands of families every year. IWAC's edge-AI deterrence system — combining IoT sensors, predictive wildlife movement models, and real-time community alerts — is redefining what it means to coexist with nature at the border of conservation zones.",
    fullPreview:
      "Traditional electric fences and ranger patrols can only do so much. By deploying low-latency edge AI nodes across protected area boundaries, we can now predict elephant intrusion events up to 40 minutes before they occur, giving communities and rangers time to respond.",
    author: "Eng. K. Rajapaksa",
    role: "Lead Engineer, IWAC",
    date: "February 22, 2026",
    readTime: "11 min read",
    category: "Conservation AI",
    categoryColor: "text-green-400 bg-green-400/10 border-green-400/25",
    featured: false,
  },
  {
    id: "accessibility-by-design",
    number: "03",
    title: "Accessibility by Design: How ViDocX is Redefining the Classroom.",
    excerpt:
      "For too long, accessibility has been an afterthought — retrofitted onto systems built without disabled users in mind. ViDocX was architected differently. From the first line of code, our team designed for visual impairment, DHH needs, and cognitive accessibility. This is the story of how we built it — and what we learned.",
    fullPreview:
      "Inclusive design isn't a feature — it's a philosophy. When we began developing ViDocX, we embedded students with visual impairments into every sprint review. Their feedback didn't just improve the product; it fundamentally changed how we think about intelligent interface design.",
    author: "Ms. R. Bandara",
    role: "UI/UX Architect, IWAC",
    date: "January 30, 2026",
    readTime: "9 min read",
    category: "Accessibility",
    categoryColor: "text-blue-400 bg-blue-400/10 border-blue-400/25",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = articles.find((a) => a.featured);
  const others = articles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen">
      {/* ── Page Header ── */}
      <section className="relative pt-24 pb-16 px-5 sm:px-8 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-faculty-red/[0.05] rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-faculty-red text-xs font-semibold tracking-[0.2em] uppercase mb-4 block"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Blog & Insights
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-100 leading-tight max-w-4xl mb-5"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Ideas that{" "}
            <span className="text-gradient">shape the future.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed"
          >
            Deep dives, research notes, and perspectives from the IWAC team — on
            Agentic AI, national challenges, and building systems that matter.
          </motion.p>
        </div>
      </section>

      {/* ── Featured Article ── */}
      {featured && (
        <section className="px-5 sm:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="glass glow-border rounded-2xl overflow-hidden group"
            >
              {/* Featured banner */}
              <div className="relative bg-gradient-to-br from-faculty-red/[0.12] via-faculty-red/[0.06] to-transparent p-8 sm:p-12">
                <div className="absolute top-6 right-6">
                  <span className="text-[11px] font-semibold text-faculty-red bg-faculty-red/15 border border-faculty-red/30 px-3 py-1 rounded-full uppercase tracking-wider">
                    Featured
                  </span>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border mb-5 ${featured.categoryColor}`}
                >
                  <Tag size={9} />
                  {featured.category}
                </span>
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-100 leading-tight mb-4 max-w-3xl group-hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {featured.title}
                </h2>
                <p className="text-slate-400 leading-relaxed max-w-3xl mb-4 text-base">
                  {featured.excerpt}
                </p>
                <p className="text-slate-500 leading-relaxed max-w-2xl text-sm italic">
                  &quot;{featured.fullPreview}&quot;
                </p>
              </div>

              {/* Footer */}
              <div className="px-8 sm:px-12 py-5 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 bg-faculty-red/20 border border-faculty-red/30 rounded-full flex items-center justify-center">
                    <User size={14} className="text-faculty-red" />
                  </div>
                  <div>
                    <p className="text-slate-200 text-sm font-semibold">{featured.author}</p>
                    <p className="text-slate-500 text-xs">{featured.role}</p>
                  </div>
                  <div className="flex items-center gap-4 text-slate-500 text-xs ml-2">
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {featured.readTime}
                    </span>
                    <span>{featured.date}</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-faculty-red text-sm font-semibold hover:gap-3 transition-all duration-200">
                  Read Full Article <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* ── Other Articles ── */}
      <section className="px-5 sm:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass glow-border rounded-2xl overflow-hidden flex flex-col group"
              >
                {/* Article top */}
                <div className="p-7 flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${article.categoryColor}`}
                    >
                      <Tag size={9} />
                      {article.category}
                    </span>
                    <span
                      className="text-slate-700 text-4xl font-black"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {article.number}
                    </span>
                  </div>

                  <h2
                    className="text-slate-100 font-bold text-lg leading-tight mb-3 group-hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {article.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <p className="text-slate-600 text-xs leading-relaxed italic">
                    &quot;{article.fullPreview}&quot;
                  </p>
                </div>

                {/* Article footer */}
                <div className="px-7 py-5 border-t border-white/[0.05] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-white/[0.05] border border-white/[0.08] rounded-full flex items-center justify-center">
                      <User size={11} className="text-slate-400" />
                    </div>
                    <div>
                      <p className="text-slate-300 text-xs font-semibold">{article.author}</p>
                      <div className="flex items-center gap-2 text-slate-600 text-[10px]">
                        <Clock size={9} /> {article.readTime} · {article.date}
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center gap-1.5 text-faculty-red text-xs font-semibold hover:gap-2.5 transition-all duration-200 flex-shrink-0">
                    Read <ArrowRight size={12} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter / Subscribe Banner ── */}
      <section className="py-20 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass glow-border rounded-2xl p-10 sm:p-14 flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-faculty-red/[0.06] to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-xl">
              <h2
                className="text-2xl sm:text-3xl font-black text-slate-100 mb-2"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Stay ahead of the{" "}
                <span className="text-gradient">intelligence curve.</span>
              </h2>
              <p className="text-slate-400 text-sm">
                Get IWAC research notes, project updates, and AI insights delivered
                quarterly.
              </p>
            </div>
            <div className="relative z-10 flex gap-3 flex-shrink-0">
              <input
                type="email"
                placeholder="your@email.com"
                className="glass border border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-faculty-red/40 transition-colors w-52"
              />
              <Link
                href="/blog"
                className="flex items-center gap-2 px-5 py-2.5 bg-faculty-red text-white text-sm font-semibold rounded-xl hover:bg-faculty-red-dark transition-colors whitespace-nowrap shadow-[0_0_20px_rgba(230,57,70,0.3)]"
              >
                Subscribe
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
