"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Twitter, Send, ArrowUpRight, Facebook, Instagram, Youtube, SmilePlus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-10x bg-black/40 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 relative">
       
        <Image src={require("../public/images/bg.svg")} alt="refer" className="absolute top-0 h-96 w-full" />


        {/* Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 mt-20">
          <div>
            <Link href="/" className="flex items-center space-x-1 ">
            <Image src={require("../public/images/feenax.svg")} alt="refer" className=" " />

              <span className="text-xl font-bold">FEENAX</span>
            </Link>
            <p className="text-gray-400 text-sm">
              © 2025 Feenax Network. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Feenax</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#why-us" className="hover:text-yellow-500 transition-colors">
                  About Feenax
                </Link>
              </li>
              <li>
                <Link href="#blockchain" className="hover:text-yellow-500 transition-colors">
                  Blockchain
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-yellow-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#staking" className="hover:text-yellow-500 transition-colors">
                  Staking
                </Link>
              </li>
              <li>
                <Link href="#tokenomics" className="hover:text-yellow-500 transition-colors">
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="hover:text-yellow-500 transition-colors">
                  Roadmap
                </Link>
              </li>

              <li>
                <Link href="#rewards" className="hover:text-yellow-500 transition-colors">
                  Rewards
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#faqs" className="hover:text-yellow-500 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-yellow-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-yellow-500 transition-colors">
                  Wiki
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-yellow-500 transition-colors">
                  Whitepaper
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-yellow-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Socials</h3>
            <div className="grid grid-cols-2 w-full justify-start gap-6">
              <Link
                href="https://x.com/Feenaxcoin"
                className=" rounded-full  transition-colors flex gap-4 items-center justify-start"
              >

                <Image src={require("../public/x.svg")} alt="refer" className="w-5 h-5 bg-white rounded-full p-1" />
                <p className=" text-muted/80">X</p>
              </Link>
              <Link
                href="https://t.me/feenaxcoin"
                className=" rounded-full  transition-colors flex gap-4 items-center justify-start"
              >
                <Send className="w-5 h-5 text-blue-400" />
                <p className="text-sm text-muted/80">Telegram</p>
              </Link>
              <Link
                href="https://t.me/feenaxcommunity"
                className=" rounded-full  transition-colors flex gap-4 items-center justify-start"
              >
                <Send className="w-5 h-5 text-blue-400" />
                <p className="text-sm text-muted/80 ">Chat</p>

              </Link>
              <Link
                href="https://www.instagram.com/feenaxcoin/"
                className=" rounded-full  transition-colors flex gap-4 items-center justify-start"
              >
                <Instagram className="w-5 h-5 text-red-400 " />
                <p className="text-sm text-muted/80">Instagram</p>

              </Link>
              <Link
                href="https://www.facebook.com/feenaxcoin/"
                className=" rounded-full  transition-colors flex gap-4 items-center justify-start"
              >
                <Facebook className="w-5 h-5 text-blue-500" />
                <p className="text-sm text-muted/80">Facebook</p>

              </Link>

              <Link
                href="https://www.youtube.com/@Feenax"
                className=" rounded-full  transition-colors flex gap-4 items-center justify-start"
              >
                <Youtube className="w-5 h-5" />
                <p className="text-sm text-muted/80">YouTube</p>

              </Link>
              <Link
                href="https://discord.gg/MPShvQyb"
                className=" rounded-full  transition-colors flex gap-4 items-center justify-start"
              >
                <Image src={require("../public/discord.svg")} alt="refer" className="w-5 h-5" />
                <p className="text-sm text-muted/80">Discord</p>

              </Link>
              <Link
                href="https://medium.com/@feenaxcoin"
                className=" rounded-full  transition-colors flex gap-4 items-center justify-start"
              >
                <Image src={require("../public/medium.svg")} alt="refer" className="w-5 h-5 text-white bg-white rounded-full p-1" />
                <p className="text-sm text-muted/80">Medium</p>

              </Link>
              <Link
                href="https://coinmarketcap.com/community/profile/Feenaxcoin/"
                className=" rounded-full  transition-colors flex gap-4 items-center justify-start"
              >
                <Image src={require("../public/coinmarketcap.png")} alt="refer" className="w-5 h-5 text-white bg-white rounded-full p-1" />
                <p className="text-sm text-muted/80">Coin market</p>

              </Link>
            </div>
          </div>

        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute right-4 -top-6 w-12 h-12 rounded-full bg-yellow-500/90 hover:bg-yellow-500 text-black flex items-center justify-center transition-colors"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          <ArrowUpRight className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  );
}