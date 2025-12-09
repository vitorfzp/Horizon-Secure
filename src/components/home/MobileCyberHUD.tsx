"use client";
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';
import { ShieldCheck, Lock, Activity, ScanLine } from 'lucide-react';

const ScrollingCryptoBackground = () => {
  const [hashes, setHashes] = useState<string[]>([]);
  useEffect(() => {
    const generateHash = () => Array(16).fill(0).map(() => Math.random().toString(16).substr(2, 2).toUpperCase()).join(' ');
    setHashes(Array(12).fill(0).map(generateHash));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.07] pointer-events-none select-none font-mono text-[10px] leading-tight text-indigo-500">
      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {hashes.length > 0 && hashes.concat(hashes).map((hash, i) => (
          <div key={i} className="whitespace-nowrap">{hash}</div>
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
    <div className="md:hidden w-full max-w-sm mx-auto my-8 relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-30 blur-md group-hover:opacity-60 transition duration-1000"></div>
      
      <div className="relative bg-[#050505] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="bg-white/5 px-4 py-2 flex justify-between items-center border-b border-white/5">
           <div className="flex gap-1.5">
             <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 animate-pulse"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
           </div>
           <div className="text-[9px] font-mono text-gray-500 uppercase flex items-center gap-1">
             <ScanLine size={10} /> System v4.0.2
           </div>
        </div>

        <div className="p-4 space-y-3 relative">
           <ScrollingCryptoBackground />

           <div className="relative bg-[#0A0A0E]/90 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-5 overflow-hidden">
              <motion.div 
                className="absolute inset-[-50%] bg-gradient-to-t from-indigo-500/10 via-transparent to-transparent pointer-events-none rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              />
              <div className="flex justify-between items-center relative z-10">
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20 text-indigo-400">
                       <Activity size={20} />
                    </div>
                    <div>
                       <div className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">Status</div>
                       <div className="text-white font-black text-lg tracking-wide flex items-center gap-2">
                          OPERACIONAL
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-2 gap-3 relative z-10">
              {/* CARD ESQUERDA (VERDE) */}
              <div className="bg-[#0A0A0E]/90 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
                 <ShieldCheck className="text-emerald-400 mb-2" size={28} />
                 
                 {/* CORREÇÃO DA COR: Agora é verde (emerald-400) */}
                 <div className="text-2xl font-bold text-emerald-400 mb-1">
                    <AnimatedCounter from={0} to={100} />
                 </div>
                 <div className="text-[9px] text-gray-500 uppercase tracking-wider font-mono">PROTEÇÃO</div>
              </div>

              {/* CARD DIREITA (ROXO) */}
              <div className="bg-[#0A0A0E]/90 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
                 <Lock className="text-purple-400 mb-2" size={28} />
                 
                 {/* CORREÇÃO DA COR: Agora é roxo (purple-400) */}
                 <div className="text-2xl font-bold text-purple-400 mb-1">AES-256</div>
                 <div className="text-[9px] text-gray-500 uppercase tracking-wider font-mono">CRIPTO</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}