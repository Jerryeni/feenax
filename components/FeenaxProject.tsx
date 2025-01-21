"use client";

import { motion } from "framer-motion";
import { Users, LineChart, Shield, Coins } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export function FeenaxProjects() {
  const projects = [
    {
      title: "Virtual Land NFT",
      description: "Immersive virtual world where you can buy, sell, and trade land as NFTs. Dive into the future of real estate with Virtual NFT Land, where blockchain technology meets the metaverse. Feenax will enable users to buy, sell, and trade virtual properties using FNX Coins, driving demand and creating new use cases for the coin.",
      src: "/images/ic1.svg"
    },
    {
      title: "Utility App",
      description: "A comprehensive app for mobile recharge, bill payments, and booking flights and hotels. Payment applications that integrate seamlessly into daily life. From shopping to bill payments, FNX Coins will power fast, secure, and low-cost transactions, making it a go-to currency for practical use.",
      src: "/images/ic2.svg"
    },
    {
      title: "Crypto Hardware Wallet",
      description: "Secure your digital assets with the upcoming Feenax Hardware Wallet, offering top-notch security and convenience for storing FNX Coins, other cryptocurrencies and NFT's. The Feenax Hardware Wallet will provide a secure and user-friendly solution for storing FNX Coins, other cryptocurrencies, and NFTs, ensuring peace of mind and ease of access.",
      src: "/images/ic3.svg"
    },
    {
      title: "Exchange with Wallet",
      description: "Integrated exchange for your cryptocurrencies and seamless trade. A dedicated crypto exchange built by Feenax, featuring advanced trading tools and direct FNX integration. This platform will create liquidity, drive adoption, and establish FNX as a key player in the crypto trading landscape.",
      src: "/images/ic4.svg"
    }
  ];

  return (
    <section id="projects" className="py-20 ">
      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xl md:text-3xl max-w-3xl mx-auto font-bold mb-4">
            Feenax Projects-
            <span className="gradient-text "> FNX Value Appreciation  </span>
          </h2>
          <p className="text-muted/80 max-w-3xl mx-auto">
          Discover the innovative initiatives that are shaping the future of Feenax.

          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="gradient-card flex flex-col  justify-start items-start p-4 rounded-xl relative"
            >
                <Image width={40} height={40} src={project.src} alt="" className="w-12 h-12 mb-2" />
              <h3 className="text-md text-muted font-semibold mb-2">{project.title}</h3>
              <p className="text-muted/80 text-xs">{project.description}</p>
              
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button className="gradient-btn rounded-full xbg-yellow-500/90 hover:bg-yellow-500 text-black">
            Connect Wallet
          </Button>
        </motion.div>
      </div>
    </section>
  );
}