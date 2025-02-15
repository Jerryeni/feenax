"use client";

import Image from "next/image";
import { CircleDot } from "lucide-react";
import Link from "next/link";

export default function HowToBuy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F0B90B]/10 via-black to-black text-white pb-16">
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Steps to Buy FNX Coins
        </h1>

        <div className="space-y-6 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">1. FNX on BNB Smart Chain (BEP20)</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <CircleDot className="h-6 w-6 text-[#F0B90B] flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  FNX Coins are available for purchase on the BNB Smart Chain (BEP20) network.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <CircleDot className="h-6 w-6 text-[#F0B90B] flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  You need BNB to pay transaction fees and USDT BEP20 to purchase FNX Coins.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">2. Prepare Your Wallet</h2>
            
            <div className="mb-8">
              <p className="text-gray-300 mb-4">All purchases must be made using decentralized wallets such as:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link
                  href="https://trustwallet.com/download"
                  target="_blank"
                  className="bg-[#1a1a1a] hover:bg-[#252525] transition-colors rounded-lg p-4 flex flex-col items-center space-y-2 border border-gray-800"
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
                  className="bg-[#1a1a1a] hover:bg-[#252525] transition-colors rounded-lg p-4 flex flex-col items-center space-y-2 border border-gray-800"
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
                  className="bg-[#1a1a1a] hover:bg-[#252525] transition-colors rounded-lg p-4 flex flex-col items-center space-y-2 border border-gray-800"
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
                  className="bg-[#1a1a1a] hover:bg-[#252525] transition-colors rounded-lg p-4 flex flex-col items-center space-y-2 border border-gray-800"
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
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Top Up Your Wallet:</h3>
              <p className="text-gray-300">
                Use centralized exchanges like Binance, Bitget, or Bybit to deposit USDT and BNB into your wallet.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <Link
                  href="https://www.binance.com"
                  target="_blank"
                  className="bg-[#1a1a1a] hover:bg-[#252525] transition-colors rounded-lg p-4 flex items-center justify-center border border-gray-800"
                >
                  <span className="text-yellow-400 font-semibold">Binance</span>
                </Link>
                <Link
                  href="https://www.bitget.com"
                  target="_blank"
                  className="bg-[#1a1a1a] hover:bg-[#252525] transition-colors rounded-lg p-4 flex items-center justify-center border border-gray-800"
                >
                  <span className="text-blue-400 font-semibold">Bitget</span>
                </Link>
                <Link
                  href="https://www.bybit.com"
                  target="_blank"
                  className="bg-[#1a1a1a] hover:bg-[#252525] transition-colors rounded-lg p-4 flex items-center justify-center border border-gray-800"
                >
                  <span className="text-green-400 font-semibold">Bybit</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Questions */}
          <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-center">Have any questions?</h2>
          </div>
        </div>
      </div>
    </main>
  );
}