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

          {/* Step 2 - Set Up Your Wallet */}
          <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-xl p-6 border border-gray-800">
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
                    Download Wallet Connect-compatible wallet Apps like Trust Wallet or MetaMask and connect via Wallet Connect.
                  </p>
                </div>
              </div>

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

              {/* Top Up Your Wallet Section */}
              <div className="bg-[#1a1a1a] rounded-lg p-6 mt-6">
                <h3 className="text-xl font-semibold mb-4">Top Up Your Wallet</h3>
                <p className="text-gray-300 mb-4">
                  Use centralized exchanges to deposit USDT and BNB into your wallet:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link
                    href="https://www.binance.com"
                    target="_blank"
                    className="bg-[#252525] hover:bg-[#303030] transition-colors rounded-lg p-4 flex items-center justify-center space-x-2 border border-gray-800"
                  >
                    <Image
                      src="/binance.svg"
                      alt="Binance"
                      width={32}
                      height={32}
                      className="rounded w-10"
                    />
                    <div>
                      <div className="font-semibold">Binance</div>
                    </div>
                    <ExternalLink className="h-4 w-4 ml-auto text-gray-400" />
                  </Link>

                  <Link
                    href="https://www.bitget.com"
                    target="_blank"
                    className="bg-[#252525] hover:bg-[#303030] transition-colors rounded-lg p-4 flex items-center justify-center space-x-3 border border-gray-800"
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
                    className="bg-[#252525] hover:bg-[#303030] transition-colors rounded-lg p-4 flex items-center justify-center space-x-2 border border-gray-800"
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
          <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">3. Purchase Process</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 bg-[#1a1a1a] p-4 rounded-lg">
                <div className="w-8 h-8 bg-[#F0B90B] rounded-full flex items-center justify-center">1</div>
                <p className="text-gray-300">Enter the amount of FNX Coins you'd like to buy.</p>
              </div>
              <div className="flex items-center space-x-4 bg-[#1a1a1a] p-4 rounded-lg">
                <div className="w-8 h-8 bg-[#F0B90B] rounded-full flex items-center justify-center">2</div>
                <p className="text-gray-300">Click the "Buy $FNX" button.</p>
              </div>
              <div className="flex items-center space-x-4 bg-[#1a1a1a] p-4 rounded-lg">
                <div className="w-8 h-8 bg-[#F0B90B] rounded-full flex items-center justify-center">3</div>
                <p className="text-gray-300">Approve the transaction.</p>
              </div>
              <div className="flex items-center space-x-4 bg-[#1a1a1a] p-4 rounded-lg">
                <div className="w-8 h-8 bg-[#F0B90B] rounded-full flex items-center justify-center">4</div>
                <p className="text-gray-300">Confirm the transaction in your wallet (ensure you have sufficient BNB for the gas fees).</p>
              </div>
            </div>
          </div>

          {/* Step 4 - Receive Your Coins */}
          <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">4. Receive Your Coins</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Check className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  Once the transaction is completed, your FNX Coins will appear in your connected wallet.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  Congratulations! You are now part of the Feenaxians community!
                </p>
              </div>
            </div>
          </div>

          {/* Maximize Rewards */}
          <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">Maximize Rewards</h2>
            <div className="bg-[#1a1a1a] rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Referral Program</h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Retrieve your referral link from the Recent Transactions and Activities section on the dashboard.
                </p>
                <p className="text-gray-300">
                  Share your link to earn additional rewards through Feenax's affiliate program.
                </p>
               
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-xl p-6 border border-gray-800 text-center">
            <h2 className="text-3xl font-bold text-[#F0B90B] mb-2">Welcome to the Feenax Blockchain Revolution!</h2>
            <p className="text-gray-300">Join us in shaping the future of decentralized finance.</p>
          </div>

           {/* Questions */}
           <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-center">Have any questions?</h2>
            <div className="flex justify-center mt-4">
              <Link
                href="https://t.me/feenaxcommunity"
                target="_blank"
                className="bg-[#1a1a1a] hover:bg-[#252525] transition-colors rounded-lg p-4 flex items-center justify-center border border-gray-800"
              >
                <Send className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">Join our Telegram Community Chat</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}