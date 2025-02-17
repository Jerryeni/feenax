"use client";

import Image from "next/image";
import { CircleDot, Wallet, ArrowRight, Check, Link as LinkIcon, ExternalLink, Send } from "lucide-react";
import Link from "next/link";

export default function HowToBuy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F0B90B]/10 via-black to-black text-white pb-16">
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Steps to Buy FNX Coins
        </h1>

        <div className="space-y-6 max-w-5xl mx-auto">
          {/* Step 1 - FNX on BNB Smart Chain */}
          <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-xl p-6 border border-[#F0B90B]/20">
            <h2 className="text-2xl font-semibold mb-4">1. FNX on BNB Smart Chain (BEP20)</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <CircleDot className="h-6 w-6 text-[#F0B90B] flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  FNX Coins are available for Purchase on the BNB Smart Chain (BEP20) Network.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <CircleDot className="h-6 w-6 text-[#F0B90B] flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  You need BNB to Pay Transaction Fees and USDT BEP20 to Purchase FNX Coins.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 - Set Up Your Wallet */}
          <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-xl p-6 border border-[#F0B90B]/20">
            <h2 className="text-2xl font-semibold mb-4">2. Set Up Your Wallet</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="bg-[#1a1a1a] rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">For Desktop Users:</h3>
                  <p className="text-gray-300">
                    Install MetaMask or Trust Wallet and link it to your browser for seamless integration.
                  </p>
                </div>
                
                <div className="bg-[#1a1a1a] rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">For Mobile Users:</h3>
                  <p className="text-gray-300">
                    Download Wallet Connect-compatible Wallet Apps like Trust Wallet or MetaMask and Connect via Wallet Connect.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link
                  href="https://trustwallet.com/download"
                  target="_blank"
                  className="bg-[#1a1a1a] hover:bg-[#252525] transition-colors rounded-lg p-4 flex flex-col items-center space-y-2 border border-[#F0B90B]/20"
                >
                  <Image
                    src="/trust.png"
                    alt="TrustWallet"
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                  <div className="text-lg font-semibold">Trust Wallet</div>
                </Link>
                
                <Link
                  href="https://metamask.io/download/"
                  target="_blank"
                  className="bg-[#1a1a1a] hover:bg-[#252525] transition-colors rounded-lg p-4 flex flex-col items-center space-y-2 border border-[#F0B90B]/20"
                >
                  <Image
                    src="/metamask-icon.svg"
                    alt="MetaMask"
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                  <div className="text-lg font-semibold">MetaMask</div>
                </Link>

                <Link
                  href="https://safepal.com/download"
                  target="_blank"
                  className="bg-[#1a1a1a] hover:bg-[#252525] transition-colors rounded-lg p-4 flex flex-col items-center space-y-2 border border-[#F0B90B]/20"
                >
                  <Image
                    src="/safepal-logo.svg"
                    alt="SafePal"
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                  <div className="text-lg font-semibold">SafePal</div>
                </Link>

                <Link
                  href="https://www.tokenpocket.pro/en/download/app"
                  target="_blank"
                  className="bg-[#1a1a1a] hover:bg-[#252525] transition-colors rounded-lg p-4 flex flex-col items-center space-y-2 border border-[#F0B90B]/20"
                >
                  <Image
                    src="https://www.tokenpocket.pro/favicon.ico"
                    alt="Token Pocket"
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                  <div className="text-lg font-semibold">Token Pocket</div>
                </Link>
              </div>

              {/* Top Up Your Wallet Section */}
              <div className="bg-[#1a1a1a] rounded-lg p-6 mt-6">
                <h3 className="text-xl font-semibold mb-4">Top Up Your Wallet</h3>
                <p className="text-gray-300 mb-4">
                  Use Centralized Exchanges to Deposit USDT and BNB into your Wallet:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link
                    href="https://www.binance.com"
                    target="_blank"
                    className="bg-[#252525] hover:bg-[#303030] transition-colors rounded-lg p-4 flex items-center justify-center space-x-2 border border-[#F0B90B]/20"
                  >
                    <Image
                      src="/binance4.png"
                      alt="Binance"
                      width={32}
                      height={32}
                      className="rounded"
                    />
                    <div>
                      <div className="font-semibold">Binance</div>
                    </div>
                    <ExternalLink className="h-4 w-4 ml-auto text-gray-400" />
                  </Link>

                  <Link
                    href="https://www.bitget.com"
                    target="_blank"
                    className="bg-[#252525] hover:bg-[#303030] transition-colors rounded-lg p-4 flex items-center justify-center space-x-3 border border-[#F0B90B]/20"
                  >
                    <Image
                      src="/bitget.png"
                      alt="Bitget"
                      width={32}
                      height={32}
                      className="rounded"
                    />
                    <div>
                      <div className="font-semibold">Bitget</div>
                    </div>
                    <ExternalLink className="h-4 w-4 ml-auto text-gray-400" />
                  </Link>

                  <Link
                    href="https://www.bybit.com"
                    target="_blank"
                    className="bg-[#252525] hover:bg-[#303030] transition-colors rounded-lg p-4 flex items-center justify-center space-x-2 border border-[#F0B90B]/20"
                  >
                    <Image
                      src="/bybit.jpg"
                      alt="Bybit"
                      width={32}
                      height={32}
                      className="rounded w-10"
                    />
                    <div>
                      <div className="font-semibold">Bybit</div>
                    </div>
                    <ExternalLink className="h-4 w-4 ml-auto text-gray-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 - Purchase Process */}
          <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-xl p-6 border border-[#F0B90B]/20">
            <h2 className="text-2xl font-semibold mb-4">3. Purchase Process</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 bg-[#1a1a1a] p-4 rounded-lg">
                <div className="w-8 h-8 bg-[#F0B90B] rounded-full flex items-center justify-center">1</div>
                <p className="text-gray-300">Enter the Amount of FNX Coins you'd like to Buy.</p>
              </div>
              <div className="flex items-center space-x-4 bg-[#1a1a1a] p-4 rounded-lg">
                <div className="w-8 h-8 bg-[#F0B90B] rounded-full flex items-center justify-center">2</div>
                <p className="text-gray-300">Click the "Buy $FNX" Button.</p>
              </div>
              <div className="flex items-center space-x-4 bg-[#1a1a1a] p-4 rounded-lg">
                <div className="w-8 h-8 bg-[#F0B90B] rounded-full flex items-center justify-center">3</div>
                <p className="text-gray-300">Approve the Transaction.</p>
              </div>
              <div className="flex items-center space-x-4 bg-[#1a1a1a] p-4 rounded-lg">
                <div className="w-8 h-8 bg-[#F0B90B] rounded-full flex items-center justify-center">4</div>
                <p className="text-gray-300">Confirm the Transaction in your Wallet (Ensure you have Sufficient BNB for the Gas Fees).</p>
              </div>
            </div>
          </div>

          {/* Step 4 - Receive Your Coins */}
          <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-xl p-6 border border-[#F0B90B]/20">
            <h2 className="text-2xl font-semibold mb-4">4. Receive Your Coins</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Check className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  Once the Transaction is Completed, your FNX Coins will Appear in your Connected Wallet.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  Congratulations! You are now Part of the Feenaxians Community!
                </p>
              </div>
            </div>
          </div>

          {/* Maximize Rewards */}
          <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-xl p-6 border border-[#F0B90B]/20">
            <h2 className="text-2xl font-semibold mb-4">Maximize Rewards</h2>
            <div className="bg-[#1a1a1a] rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Referral Program</h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Retrieve your referral Link from the Recent Transactions and Activities section on the Dashboard.
                </p>
                <p className="text-gray-300">
                  Share your Link to Earn Additional Rewards through Feenax's Affiliate Program.
                </p>
               
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-xl p-6 border border-[#F0B90B]/20 text-center">
            <h2 className="text-3xl font-bold text-[#F0B90B] mb-2">Welcome to the Feenax Blockchain Revolution!</h2>
            <p className="text-white font-bold text-sm md:text-xl">Join us in Shaping the Future of Decentralized Finance.</p>
          </div>

           {/* Questions */}
           <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-xl p-6 border border-[#F0B90B]/20">
            <h2 className="text-2xl font-semibold text-center">Have any Questions?</h2>
            <div className="flex justify-center mt-4">
              <Link
                href="https://t.me/feenaxcommunity"
                target="_blank"
                className="bg-[#1a1a1a] hover:bg-[#252525] transition-colors rounded-lg p-4 flex items-center justify-center border border-[#F0B90B]/20"
              >
                <Send className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold text-sm">Join our Telegram Community Chat</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}