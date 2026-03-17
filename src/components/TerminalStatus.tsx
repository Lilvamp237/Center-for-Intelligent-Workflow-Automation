"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const statusItems = [
  { label: "STATUS", value: "ACTIVE", color: "#22c55e" },
  { label: "CURRENT_AGENTS", value: "4", color: "#E63946" },
  { label: "LATEST_PUB", value: "PeerJ 2026", color: "#60a5fa" },
  { label: "UPTIME", value: "99.97%", color: "#22c55e" },
  { label: "NODE", value: "iwac-primary-01", color: "#f59e0b" },
];

export default function TerminalStatus() {
  const [cursor, setCursor] = useState(true);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const cursorInterval = setInterval(() => setCursor((p) => !p), 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let idx = 0;
    const lineInterval = setInterval(() => {
      idx++;
      setVisibleLines(idx);
      if (idx >= statusItems.length) clearInterval(lineInterval);
    }, 200);
    return () => clearInterval(lineInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="glass glow-border rounded-xl p-6 font-mono text-sm max-w-sm w-full"
    >
      {/* Terminal top bar */}
      <div className="flex items-center gap-2 mb-5 pb-3 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-slate-400 text-xs">iwac_live_status.sh</span>
      </div>

      {/* Status lines */}
      <div className="space-y-2.5">
        {statusItems.slice(0, visibleLines).map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: idx * 0.05 }}
            className="flex items-center gap-2 flex-wrap"
          >
            <span className="text-slate-600 select-none">$</span>
            <span className="text-slate-400">[{item.label}:</span>
            <span style={{ color: item.color }} className="font-semibold">
              {item.value}
            </span>
            <span className="text-slate-400">]</span>
          </motion.div>
        ))}

        {/* Blinking cursor line */}
        {visibleLines >= statusItems.length && (
          <div className="flex items-center gap-2 mt-3 pt-2 border-t border-white/5">
            <span className="text-slate-600 select-none">$</span>
            <span className="text-slate-300">&gt;_</span>
            <span
              className="text-faculty-red select-none"
              style={{ opacity: cursor ? 1 : 0, transition: "opacity 0.1s" }}
            >
              █
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
