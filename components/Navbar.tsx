"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, Menu, X } from "lucide-react";
import { shortenAddress } from "@/lib/utils";
import { usePresale } from "@/providers/provider";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { ConnectButton } from "@rainbow-me/rainbowkit";


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { initWallet, userAddress } = usePresale();
  const { isConnected } = useAccount();

  useEffect(() => {
  }, [userAddress]);

  return (
    <nav
      className="fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-xl border border-yellow-600/10 bg-yellow-700/10 m-3 rounded-full">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={require("../public/images/feenax-logo.svg")} alt="Feenax Logo" className="w-20 h-20" />
            </Link>
          </div>

          <div className="hidden ">
            <div className="flex items-center space-x-8">
              <Link href="#why-us" className="text-[#A6A9A8] hover:text-white transition-colors">
                About us
              </Link>
              <Link href="#blockchain" className="text-[#A6A9A8] hover:text-white transition-colors">
                Blockchain
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
              <Link href="#projects" className="text-[#A6A9A8] hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#faqs" className="text-[#A6A9A8] hover:text-white transition-colors">
                FAQs
              </Link>
            </div>
          </div>

          {/* <Button 
            variant="secondary" 
            className=" md:inline-block bg-gradient-to-r from-[#966602] via-[#F9F400] to-[#966602] text-xs md:text-base rounded-full hover:bg-yellow-500 text-black"
          > */}
            <Link href="https://feenax.com" className="text-[#A6A9A8] hidden md:flex items-center gap-1 md:gap-2 md:text-base text-[8px] hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 text-yellow-500" />
            Back to Home
            </Link>
          <ConnectButton />


          {/* <ConnectButton /> */}
          {/* </Button> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#A6A9A8] hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden mt-2"
          >
            <div className="flex flex-col space-y-4">
              <Link href="https://feenax.com" className="text-[#A6A9A8] hover:text-white transition-colors">
                Back to Home
              </Link>

              {/* <Button 
                variant="secondary" 
                className="bg-gradient-to-r from-[#966602] via-[#F9F400] to-[#966602] rounded-full hover:bg-yellow-500 text-black w-full"
              > */}
              <ConnectButton />

              {/* </Button> */}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}