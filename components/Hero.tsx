"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TokenProgress } from "@/components/ui/token-progress";
import { usePresale } from "@/providers/provider";
import { CountdownTimer } from "./ui/countdown-timer";

interface PhaseIndicatorProps {
  currentPhase: number;
  totalPhases: number;
  color?: string;
  nextPrice?: string;
  increasePercent?: string;
  countdown?: boolean;
}

const PhaseIndicator: React.FC<PhaseIndicatorProps> = ({
  currentPhase,
  totalPhases,
  color = "text-[#F0B90B]",
  nextPrice,
  increasePercent,
  countdown = true,
}) => {
  return (
    <div className="text-center">
      <h1
        className={`relative md:text-7xl text-3xl mb-2 w-fit mx-auto heading font-black bg-clip-text backdrop-blur-lg shadow-inner ${color}`}
      >
        <span className="absolute inset-0 shadow-inner bg-white/5 blur-xl"></span>
        <span className="relative z-10">
          PRESALE PHASE {currentPhase}
        </span>
      </h1>
      {countdown ? (
        <>
          <p className="md:text-xl text-sm text-white mb-12">ENDS IN</p>
          <CountdownTimer targetDate={new Date("2025-03-31T18:29:59Z")} />
        </>
      ) : (
        <>
          <div className="space-y-4 mt-4 heading">
            <p className="md:text-5xl text-lg  mb-2 text-[#F0B90B]">LIVE IN 15 DAYS</p>
            <p className="text-lg md:text-5xl font-bold  text-[#F0B90B]">NEXT PRICE: ${nextPrice}</p>
            <p className="text-lg md:text-5xl font-bold  text-[#F0B90B]">PRICE HIKE: {increasePercent}</p>
          </div>

        </>
      )}
    </div>
  );
};

export default function Hero() {
  const { uccInfo, userUCCInfo } = usePresale();
  const [currentPhase, setCurrentPhase] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prev) => (prev === 1 ? 2 : 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-20 flex mb-10 flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,185,11,0.15),transparent_70%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F0B90B]/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 mt-10 text-center">
        <AnimatePresence mode="wait">
          {currentPhase === 1 ? (
            <motion.div
              key="phase1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <PhaseIndicator currentPhase={1} totalPhases={10} />
            </motion.div>
          ) : (
            <motion.div
              key="phase2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <PhaseIndicator
                currentPhase={2}
                totalPhases={10}
                color="text-white"
                nextPrice="0.9"
                increasePercent="50%"
                countdown={false}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Bar */}
        <div className="w-full mt-24 max-w-4xl mx-auto backdrop-blur-xl bg-black/40 rounded-3xl border border-[#F0B90B]/20 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F0B90B]/10 rounded-full blur-3xl" />

          <div className="grid grid-cols-3 p-6">
            <div className="text-left">
              <div className="text-sm md:text-lg text-white mb-1">TOTAL SUPPLY</div>
              <div className="text-sm md:text-xl font-bold text-[#F0B90B]">20 MILLION</div>
            </div>
            <div className="text-center">
              <div className="text-sm md:text-lg text-white mb-">LISTING DATE</div>
              <div className="text-xs md:text-xl font-bold">Announced soon</div>
            </div>
            <div className="text-center">
              <div className="text-right text-sm md:text-lg text-white mb-1">ALLOCATION</div>
              <div className="text-right text-sm md:text-xl font-bold text-[#F0B90B]">1%</div>
            </div>
          </div>

          <div className="">
            <TokenProgress
              tokenBNBPrice={uccInfo.priceBNB}
              tokenUSDTPrice={uccInfo.priceUSDT}
              userInfo={userUCCInfo.usersInfo}
              userDepositsUSDT={userUCCInfo.usersInfo?.[3] ?? 0}
              userDepositsBNB={userUCCInfo.usersInfo?.[4] ?? 0}
              userEarningsBNB={userUCCInfo.usersInfo?.[6] ?? 0}
              userEarningsUSDT={userUCCInfo.usersInfo?.[5] ?? 0}
              userId={userUCCInfo.userId}
              userTokens={userUCCInfo.usersInfo?.[7] ?? 0}
              progress={
                uccInfo.totalTokensToBEDistributed &&
                (uccInfo.totalTokensToBEDistributed * 100) / 150000
              }
              tokensSold={uccInfo.totalTokensToBEDistributed}
              totalTokens={150000}
              activities={userUCCInfo.recentActivities}
              activitiesLength={userUCCInfo.activityLength}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
