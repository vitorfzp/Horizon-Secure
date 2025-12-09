"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring, useTransform, animate } from "framer-motion";
import { ShieldCheck, Lock, Activity, ScanLine } from "lucide-react";

const ScrollingCryptoBackground = () => {
  const [hashes, setHashes] = useState<string[]>([]);

  useEffect(() => {
    // FIX: setTimeout joga a execução para o próximo ciclo, resolvendo o erro do Lint
    const timer = setTimeout(() => {
      const generateHash = () =>
        Array(16)
          .fill(0)
          .map(() => Math.random().toString(16).substr(2, 2).toUpperCase())
          .join(" ");
      setHashes(Array(12).fill(0).map(generateHash));
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden font-mono text-[10px] leading-tight text-indigo-500 opacity-[0.07] select-none">
      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {hashes.map((hash, i) => (
          <div key={i} className="whitespace-nowrap">
            {hash}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const AnimatedCounter = ({ from, to }: { from: number; to: number }) => {
  const count = useSpring(from, { stiffness: 50, damping: 20 });
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, { duration: 2.5 });
    return controls.stop;
  }, [count, to]);

  useEffect(() => rounded.on("change", setDisplay), [rounded]);

  return <span>{display}%</span>;
};

export function MobileCyberHUD() {
  return (
    <div className="group relative mx-auto my-8 w-full max-w-sm md:hidden">
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30 blur-md transition duration-1000 group-hover:opacity-60"></div>

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#050505] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-2">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500/80"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/80"></div>
          </div>
          <div className="flex items-center gap-1 font-mono text-[9px] text-gray-500 uppercase">
            <ScanLine size={10} /> System v4.0.2
          </div>
        </div>

        <div className="relative space-y-3 p-4">
          <ScrollingCryptoBackground />

          <div className="relative overflow-hidden rounded-xl border border-indigo-500/30 bg-[#0A0A0E]/90 p-5 backdrop-blur-sm">
            <motion.div
              className="pointer-events-none absolute inset-[-50%] rounded-full bg-gradient-to-t from-indigo-500/10 via-transparent to-transparent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-indigo-500/20 bg-indigo-500/10 p-2 text-indigo-400">
                  <Activity size={20} />
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                    Status
                  </div>
                  <div className="flex items-center gap-2 text-lg font-black tracking-wide text-white">
                    OPERACIONAL
                    <span className="h-2 w-2 animate-ping rounded-full bg-green-500"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-3">
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0E]/90 p-4 text-center">
              <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
              <ShieldCheck className="mb-2 text-emerald-400" size={28} />
              <div className="mb-1 text-2xl font-bold text-emerald-400">
                <AnimatedCounter from={0} to={100} />
              </div>
              <div className="font-mono text-[9px] tracking-wider text-gray-500 uppercase">
                PROTEÇÃO
              </div>
            </div>

            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0E]/90 p-4 text-center">
              <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
              <Lock className="mb-2 text-purple-400" size={28} />
              <div className="mb-1 text-2xl font-bold text-purple-400">
                AES-256
              </div>
              <div className="font-mono text-[9px] tracking-wider text-gray-500 uppercase">
                CRIPTO
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
