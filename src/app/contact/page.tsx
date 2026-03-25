"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* -- Page Header -- */}
      <section className="relative pt-24 pb-16 px-5 sm:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-faculty-red/[0.05] rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-faculty-red text-xs font-semibold tracking-[0.2em] uppercase mb-4 block"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-100 leading-tight mb-5"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Deploy an agentic system.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed"
          >
            Tell us about the workflow, stakes, and constraints. We respond with a
            research-backed deployment plan.
          </motion.p>
        </div>
      </section>

      {/* -- Contact Cards -- */}
      <section className="py-8 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass glow-border rounded-2xl p-6"
          >
            <div className="w-12 h-12 bg-faculty-red/10 border border-faculty-red/25 rounded-xl flex items-center justify-center mb-4">
              <Mail size={18} className="text-faculty-red" />
            </div>
            <h2
              className="text-slate-100 font-semibold text-lg mb-2"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Email
            </h2>
            <p className="text-slate-400 text-sm mb-4">
              Start a confidential conversation with the lab.
            </p>
            <a
              href="mailto:iwac@kdu.ac.lk"
              className="text-faculty-red text-sm font-semibold inline-flex items-center gap-2"
            >
              iwac@kdu.ac.lk <ArrowRight size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="glass glow-border rounded-2xl p-6"
          >
            <div className="w-12 h-12 bg-faculty-red/10 border border-faculty-red/25 rounded-xl flex items-center justify-center mb-4">
              <MapPin size={18} className="text-faculty-red" />
            </div>
            <h2
              className="text-slate-100 font-semibold text-lg mb-2"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Location
            </h2>
            <p className="text-slate-400 text-sm mb-4">
              KDU Campus, Ratmalana, Sri Lanka
            </p>
            <span className="text-slate-500 text-xs">On-site workshops by request</span>
          </motion.div>
        </div>
      </section>

      {/* -- CTA -- */}
      <section className="py-16 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass glow-border rounded-2xl p-8 sm:p-12 text-center"
          >
            <p className="text-slate-400 text-base mb-6">
              Ready to scope a deployment? We can provide feasibility, architecture,
              and risk assessments in the first engagement.
            </p>
            <a
              href="mailto:iwac@kdu.ac.lk"
              className="inline-flex items-center gap-2 px-6 py-3 bg-faculty-red text-white text-sm font-semibold rounded-xl hover:bg-faculty-red-dark transition-colors duration-200 shadow-[0_0_24px_rgba(230,57,70,0.35)]"
            >
              Deploy an Agentic System <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
