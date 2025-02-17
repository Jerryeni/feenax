"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, HomeIcon, Layers, Menu, X } from "lucide-react";
import { shortenAddress } from "@/lib/utils";
import { usePresale } from "@/providers/provider";

import { useAccount } from "wagmi";
import { ConnectButtonWrapper } from "./ui/ConnetButton";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
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
            <Link href="https://feenax.com" className="flex items-center space-x-1 ">
              <Image src={require("../public/images/feenax.svg")} alt="refer" className=" " />
              <span className="text-xl font-bold md:block hidden">FEENAX</span>
            </Link>
          </div>

          <div className="hidden ">
            <div className="flex items-center space-x-8">
              <Link href="#why-us" className="text-white hover:text-white transition-colors">
                About us
              </Link>
              <Link href="#blockchain" className="text-white hover:text-white transition-colors">
                Blockchain
              </Link>
              <Link href="#staking" className="text-white hover:text-white transition-colors">
                Staking
              </Link>
              <Link href="#tokenomics" className="text-white hover:text-white transition-colors">
                Tokenomics
              </Link>
              <Link href="#roadmap" className="text-white hover:text-white transition-colors">
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
          <div className="flex md:flex justify-between items-center gap-2 md:gap-12">
            <Link href="https://feenax.com" className="text-white md:text-base text-xs font-medium hover:text-yellow-500 transition-colors flex md:gap-2 gap-1 items-center">
              {/* <ArrowLeft className="w-4 h-4 text-yellow-500" /> */}
              <HomeIcon className="md:w-4 md:h-4 w-2 h-2 text-yellow-500 " />
              Home
            </Link>
            <Link href="/Whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="text-white font-medium md:text-base text-xs hover:text-yellow-500  flex gap-2 items-center transition-colors">
              <Layers className="md:w-4 md:h-4 w-2 h-2 text-yellow-500" />
              Whitepaper
            </Link>
          </div>

          <ConnectButtonWrapper />


          {/* <ConnectButton /> */}
          {/* </Button> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white focus:outline-none"
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
              <Link href="https://feenax.com" className="text-white hover:text-white transition-colors flex gap-2">
                <HomeIcon className="w-4 h-4 text-yellow-500" />
                Home
              </Link>
              <Link href="/Whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-yellow-500  flex gap-2 items-center transition-colors">
                <Layers className="w-4 h-4 text-yellow-500" />
                Whitepaper
              </Link>

              {/* <Button 
                variant="secondary" 
                className="bg-gradient-to-r from-[#966602] via-[#F9F400] to-[#966602] rounded-full hover:bg-yellow-500 text-black w-full"
              > */}
              <ConnectButtonWrapper />

              {/* </Button> */}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}