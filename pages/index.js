import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  ScanFace,
  KeyRound,
  Link2,
  Share2,
  Zap,
  Sparkles,
  Building2,
  Home as HomeIcon,
  CreditCard,
  Briefcase,
} from "lucide-react";

const steps = [
  { id: 1, label: "Verify ID", icon: <ScanFace className="w-5 h-5" /> },
  { id: 2, label: "Connect Accounts", icon: <Link2 className="w-5 h-5" /> },
  { id: 3, label: "Share Profile", icon: <Share2 className="w-5 h-5" /> },
];

const industries = [
  { name: "Rent", icon: <HomeIcon className="w-4 h-4" /> },
  { name: "Work", icon: <Briefcase className="w-4 h-4" /> },
  { name: "Lend", icon: <CreditCard className="w-4 h-4" /> },
  { name: "Insure", icon: <ShieldCheck className="w-4 h-4" /> },
];

function Orb({ active }) {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-emerald-400 via-teal-300 to-blue-500 blur-2xl opacity-40"
        animate={{
          scale: active ? [1, 1.08, 1] : 1,
          opacity: active ? [0.35, 0.5, 0.35] : 0.4,
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="relative w-56 h-56 rounded-full bg-gradient-to-b from-slate-900/60 to-slate-800/60 backdrop-blur-xl border border-white/10 shadow-2xl"
        animate={{
          boxShadow: active
            ? [
                "0 20px 60px rgba(56,189,248,0.25)",
                "0 25px 70px rgba(16,185,129,0.25)",
                "0 20px 60px rgba(56,189,248,0.25)",
              ]
            : "0 20px 60px rgba(0,0,0,0.25)",
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="absolute inset-6 rounded-full border border-white/10" />
        <div className="absolute inset-14 rounded-full border border-white/10" />
        <div className="absolute inset-24 rounded-full border border-white/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-teal-300/90" />
        </div>
      </motion.div>
    </div>
  );
}

function StepPill({ index, label, active }) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs tracking-wide border ${
        active
          ? "bg-white/10 border-white/20"
          : "bg-white/5 border-white/10"
      }`}
    >
      <div
        className={`w-5 h-5 rounded-full flex items-center justify-center ${
          active
            ? "bg-emerald-400/90 text-slate-900"
            : "bg-slate-700/70 text-white/80"
        }`}
      >
        {index}
      </div>
      <span className="text-white/90">{label}</span>
    </div>
  );
}

export default function Home() {
  const [tab, setTab] = useState("home");
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(742);
  const pct = (step / steps.length) * 100;

  return (
    <main className="min-h-screen w-full bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(45,212,191,0.15),transparent),radial-gradient(900px_500px_at_10%_10%,rgba(56,189,248,0.12),transparent)] bg-slate-950 text-white">
      {/* Nav */}
      <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-400 to-sky-400" />
          <span className="font-semibold tracking-tight">ItMeID</span>
          <span className="ml-2 rounded-md px-2 py-0.5 text-xs bg-white/10 border border-white/15 text-white/90">beta</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 rounded-md text-white/80 hover:bg-white/10" onClick={() => setTab("home")}>Home</button>
          <button className="px-3 py-2 rounded-md text-white/80 hover:bg-white/10" onClick={() => setTab("dashboard")}>Dashboard</button>
          <button className="px-3 py-2 rounded-md bg-gradient-to-r from-emerald-400 to-sky-400 text-slate-900 hover:opacity-90" onClick={() => setTab("onboarding")}>Get Verified</button>
        </div>
      </div>

      {/* You keep the rest of the UI sections here — Onboarding, Dashboard, Footer */}
      {/* Copy from the long code I sent earlier starting at {tab === "home" && ...} */}
    </main>
  );
}

