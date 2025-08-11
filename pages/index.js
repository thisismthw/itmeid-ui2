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
  Home,
  CreditCard,
  Briefcase,
} from "lucide-react";

const steps = [
  { id: 1, label: "Verify ID", icon: <ScanFace className="w-5 h-5" /> },
  { id: 2, label: "Connect Accounts", icon: <Link2 className="w-5 h-5" /> },
  { id: 3, label: "Share Profile", icon: <Share2 className="w-5 h-5" /> },
];

const industries = [
  { name: "Rent", icon: <Home className="w-4 h-4" /> },
  { name: "Work", icon: <Briefcase className="w-4 h-4" /> },
  { name: "Lend", icon: <CreditCard className="w-4 h-4" /> },
  { name: "Insure", icon: <ShieldCheck className="w-4 h-4" /> },
];

function Orb({ active }) {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-emerald-400 via-teal-300 to-blue-500 blur-2xl opacity-40"
        animate={{ scale: active ? [1, 1.08, 1] : 1, opacity: active ? [0.35, 0.5, 0.35] : 0.4 }}
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
    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs tracking-wide border ${active ? "bg-white/10 border-white/20" : "bg-white/5 border-white/10"}`}>
      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${active ? "bg-emerald-400/90 text-slate-900" : "bg-slate-700/70 text-white/80"}`}>
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

      {/* Hero */}
      {tab === "home" && (
        <section className="mx-auto max-w-6xl px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Who you are. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-300">How you are.</span>
            </h1>
            <p className="mt-4 text-white/70 max-w-xl">
              ItMeID is your portable trust profile. Verified identity + behaviour, reusable everywhere. Rent faster, get hired sooner, unlock better rates.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-md bg-gradient-to-r from-emerald-400 to-sky-400 text-slate-900" onClick={() => setTab("onboarding")}>Start verification</button>
              <button className="px-4 py-2 rounded-md border border-white/20 text-white/90 hover:bg-white/10" onClick={() => setTab("dashboard")}>View demo dashboard</button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-white/60">
              <CheckCircle2 className="w-4 h-4" /> GDPR-ready
              <ShieldCheck className="w-4 h-4" /> Verified at source
              <Zap className="w-4 h-4" /> Decisions in minutes
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Orb active />
          </div>
        </section>
      )}

      {/* Onboarding */}
      {tab === "onboarding" && (
        <section className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex items-center gap-3 flex-wrap">
            {steps.map((s, i) => (
              <StepPill key={s.id} index={i + 1} label={s.label} active={step === s.id} />
            ))}
          </div>

          {/* Progress */}
          <div className="mt-4 h-2 w-full bg-white/10 rounded">
            <div className="h-2 rounded bg-gradient-to-r from-emerald-400 to-sky-400" style={{ width: `${pct}%` }} />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="rounded-xl bg-white/5 border border-white/10">
              <div className="p-5 border-b border-white/10">
                <div className="flex items-center gap-2 text-white/90 font-semibold">
                  <ScanFace className="w-5 h-5" /> Verify your identity
                </div>
              </div>
              <div className="p-5 text-white/70 space-y-4">
                <p>Upload a passport or driving licence and take a quick liveness selfie. We match and encrypt your data end-to-end.</p>
                <div className="flex gap-2">
                  <input placeholder="Document number" className="flex-1 rounded-md bg-white/10 border border-white/20 px-3 py-2 placeholder-white/40 outline-none" />
                  <button className="px-3 py-2 rounded-md bg-gradient-to-r from-emerald-400 to-sky-400 text-slate-900">Upload</button>
                </div>
              </div>
              <div className="p-5 border-t border-white/10">
                <button className="px-3 py-2 rounded-md border border-white/20 text-white/90 hover:bg-white/10" onClick={() => setStep(2)}>Continue</button>
              </div>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10">
              <div className="p-5 border-b border-white/10">
                <div className="flex items-center gap-2 text-white/90 font-semibold">
                  <Link2 className="w-5 h-5" /> Connect accounts
                </div>
              </div>
              <div className="p-5 text-white/70 space-y-4">
                <p>Plug in only what you need for this use-case. Open Banking for rent payments, HR for employment, DVLA for driving record.</p>
                <div className="flex flex-wrap gap-2">
                  {["Open Banking", "HR/Payroll", "DVLA", "Insurance"].map((t) => (
                    <span key={t} className="rounded-md px-2 py-1 text-xs border border-white/15 bg-white/10">{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-5 border-t border-white/10">
                <button className="px-3 py-2 rounded-md border border-white/20 text-white/90 hover:bg-white/10" onClick={() => setStep(3)}>Continue</button>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white/5 border border-white/10 mt-6">
            <div className="p-5 border-b border-white/10">
              <div className="flex items-center gap-2 text-white/90 font-semibold">
                <Share2 className="w-5 h-5" /> Share selectively
              </div>
            </div>
            <div className="p-5 text-white/70">
              Choose an industry template. We’ll create a least-privilege share link revealing only what’s required.
              <div className="mt-4 flex gap-2 flex-wrap">
                {industries.map((it) => (
                  <button key={it.name} className="px-3 py-2 rounded-md border border-white/20 text-white/90 hover:bg-white/10 flex items-center gap-2">
                    <span>{it.icon}</span>{it.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-5 border-t border-white/10 flex items-center justify-between">
              <div className="text-sm text-white/60">Preview before sharing. Revoke anytime.</div>
              <button className="px-3 py-2 rounded-md bg-gradient-to-r from-emerald-400 to-sky-400 text-slate-900" onClick={() => setTab("dashboard")}>Finish & View Dashboard</button>
            </div>
          </div>
        </section>
      )}

      {/* Dashboard */}
      {tab === "dashboard" && (
        <section className="mx-auto max-w-6xl px-6 py-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-xl bg-white/5 border border-white/10">
              <div className="p-5 border-b border-white/10">
                <div className="flex items-center gap-2 text-white/90 font-semibold">
                  <ShieldCheck className="w-5 h-5" /> Your Trust Overview
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-3">
                    <div className="text-sm text-white/60">ItMeID Trust Score</div>
                    <div className="text-5xl font-semibold">{score}</div>
                    <div className="text-white/60 text-sm">Based on identity, payment behaviour, endorsements, and verified history.</div>
                    <div className="flex gap-2 mt-2">
                      {["Verified ID", "Open Banking", "Employment"].map((t) => (
                        <span key={t} className="rounded-md px-2 py-1 text-xs border border-white/15 bg-white/10">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Orb active />
                  </div>
                </div>
              </div>
              <div className="p-5 border-t border-white/10 flex gap-2">
                <button className="px-3 py-2 rounded-md border border-white/20 text-white/90 hover:bg-white/10">
                  <span className="inline-flex items-center gap-2">
                    <Share2 className="w-4 h-4" /> Share Profile
                  </span>
                </button>
                <button className="px-3 py-2 rounded-md bg-gradient-to-r from-emerald-400 to-sky-400 text-slate-900">
                  <span className="inline-flex items-center gap-2">
                    <KeyRound className="w-4 h-4" /> Create Access Link
                  </span>
                </button>
              </div>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10">
              <div className="p-5 border-b border-white/10">
                <div className="text-white/90 font-semibold">Quick Actions</div>
              </div>
              <div className="p-5 space-y-3">
                <button className="w-full px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white/90" onClick={() => setScore((s) => Math.min(850, s + 5))}>Add landlord reference</button>
                <button className="w-full px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white/90" onClick={() => setScore((s) => Math.min(850, s + 3))}>Connect payroll</button>
                <button className="w-full px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white/90" onClick={() => setScore((s) => Math.min(850, s + 2))}>Import insurance history</button>
              </div>
              <div className="px-5 pb-5 text-xs text-white/60">Enhancing your profile increases approvals and unlocks perks.</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-6">
            <div className="rounded-xl bg-white/5 border border-white/10">
              <div className="p-5 border-b border-white/10">
                <div className="text-white/90 font-semibold flex items-center gap-2"><Home className="w-4 h-4" /> Rent-ready</div>
              </div>
              <div className="p-5 text-white/70 text-sm space-y-2">
                <div>24 months on-time rent via Open Banking</div>
                <div>Right to Rent verified</div>
                <div className="flex items-center gap-2 text-emerald-300/90"><CheckCircle2 className="w-4 h-4" /> Fast-track eligible</div>
              </div>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10">
              <div className="p-5 border-b border-white/10">
                <div className="text-white/90 font-semibold flex items-center gap-2"><Briefcase className="w-4 h-4" /> Work-ready</div>
              </div>
              <div className="p-5 text-white/70 text-sm space-y-2">
                <div>Employment verified: BrightMart PLC (24m)</div>
                <div>2 manager endorsements</div>
                <div className="flex items-center gap-2 text-emerald-300/90"><CheckCircle2 className="w-4 h-4" /> Right to Work verified</div>
              </div>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10">
              <div className="p-5 border-b border-white/10">
                <div className="text-white/90 font-semibold flex items-center gap-2"><CreditCard className="w-4 h-4" /> Lend-ready</div>
              </div>
              <div className="p-5 text-white/70 text-sm space-y-2">
                <div>Low utilisation, no missed payments (36m)</div>
                <div>Salary verified via payroll</div>
                <div className="flex items-center gap-2 text-emerald-300/90"><CheckCircle2 className="w-4 h-4" /> Pre-approval likely</div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-white/50 text-xs">
            Demo UI inspired by modern proof-of-personhood aesthetics. Not affiliated with Worldcoin / World ID.
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-10 flex items-center justify-between text-white/50 text-sm">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" /> ItMeID · Portable Trust Platform
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="hover:text-white/80">Privacy</a>
          <a href="#" className="hover:text-white/80">Terms</a>
        </div>
      </footer>
    </main>
  );
}
