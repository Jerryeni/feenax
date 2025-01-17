"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-xl border border-yellow-600/10 bg-yellow-700/10 m-3 rounded-full">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 ">
            <Image src={require("../public/images/feenax-logo.svg")} alt="refer" className="w-" />

              {/* <span className="text-xl font-bold">Feenax</span> */}
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="#why-us" className="text-[#A6A9A8] hover:text-white transition-colors">
                Why us?
              </Link>
              <Link href="#staking" className="text-[#A6A9A8] hover:text-white transition-colors">
                Staking
              </Link>
              <Link href="#tokenomics" className="text-[#A6A9A8] hover:text-white transition-colors">
                Tokenomics
              </Link>
              <Link href="#roadmap" className="text-[#A6A9A8] hover:text-white transition-colors">
                Roadmap
              </Link>
              <Link href="#faqs" className="text-[#A6A9A8] hover:text-white transition-colors">
                FAQs
              </Link>
            </div>
          </div>

          <Button 
            variant="secondary" 
            className="bg-gradient-to-r from-[#966602] via-[#F9F400]  to-[#966602] rounded-full hover:bg-yellow-500 text-black"
          >
            Connect Wallet
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}