"use client";

import { motion } from "framer-motion";
import { Wallet, ArrowUpRight, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function Features() {
  const features = [
    {
      title: "Connect Wallet",
      description: "Set up and Connect a Decentralized Digital Wallet that is Compatible with Feenax.",
      src: "/images/icon.svg"
    },
    {
      title: "Purchase FNX",
      description: "Use Cryptocurrency, such as USDT BEP-20, to Purchase FNX Coins seamlessly through the Feenax Platform.",
      src: "/images/icon(1).svg"
    },
    {
      title: "Staking Rewards",
      description: "Stake your FNX Coins and Enjoy Potential Rewards from the Growing Feenax Ecosystem.",
      src: "/images/icon(2).svg"
    }
  ];

  return (
    <section className="py-16 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4 flex flex-col"
      >
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-3xl font-medium mb-4">
            Participate In FNX Presale
          </h2>
          <p className="text-xl md:text-3xl font-medium">
            And Get <span className="gradient-text">Staking Rewards</span>
          </p>
          <p className="text-gray-400 mt-2 text-xl font-bold">Own FNX in 3 Simple Steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <Image width={40} height={40} src="/images/connector.svg" alt="" className="w-72  absolute left-[20%] top-10" />
          <Image width={40} height={40} src="/images/connector(1).svg" alt="" className="w-72  absolute right-[20%] top-12" />
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-black/40 p-6 rounded-xl h-full">
                <Image width={40} height={40} src={feature.src} alt="" className="w-20 h-20 mx-auto mb-4 text-yellow-500" />
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#FFFDF0]/80 text-xl">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* <Image width={100} height={100} src="/images/bg3.png" alt="" className="w-[90%] animate-pulse mx-auto" /> */}
        

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mx-auto"
        >
          {/* <Image width={100} height={100} src="/images/bg3.png" alt="" className="w-[90%] animate-pulse mx-auto" /> */}
          <div className="pt-20 max-w-7xl mx-auto px-4 hidden md:block">
          <Image src="/fbanner.jpg" alt="Feenax" width={100} height={100} className="absolutex top-4x w-full animate-pulsex" />
        </div>
        <div className="pt-20 max-w-7xl mx-auto px-4 md:hidden">
          <Image src="/fbanner2.jpg" alt="Feenax" width={100} height={100} className="absolutex top-4x w-full animate-pulsex" />
        </div>

        </motion.div>
        {/* <iframe src="https://youtu.be/Df1qFJ9XT34" allowFullScreen /> */}
      </motion.div>
    </section>
  );
}