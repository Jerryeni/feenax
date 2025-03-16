"use client";

import { ShieldCheck, Gift, Lock, Wallet2, RefreshCw, KeyRound, ArchiveRestore } from "lucide-react";

export default function ClaimFeenaxWallet() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F0B90B]/10 via-black to-black text-white pb-16">
      <div className="container mx-auto px-4 pt-24">
        {/* <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Claim Your Free Feenax Crypto Hardware Wallet!
        </h1> */}

        <div className="space-y-6 max-w-6xl mx-auto">
          {/* Free Wallet Claim Section */}
          <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-xl p-6 border border-[#F0B90B]/20">
            <h2 className="text-2xl md:text-4xl text-center font-semibold mb-4">Claim Your Free Feenax Crypto Hardware Wallet!</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Gift className="h-6 w-6 text-[#F0B90B] flex-shrink-0 mt-1" />
                <p className="text-gray-300">Accumulate purchases of $1,250 to receive a Free Basic Model Feenax Crypto Hardware Wallet.</p>
              </div>
              <div className="flex items-center space-x-4">
                <Gift className="h-6 w-6 text-[#F0B90B] flex-shrink-0 mt-1" />
                <p className="text-gray-300">Accumulate purchases of $2,000 to receive a Free Display Model Feenax Crypto Hardware Wallet.</p>
              </div>
              <div className="flex items-center space-x-4">
                <Gift className="h-6 w-6 text-[#F0B90B] flex-shrink-0 mt-1" />
                <p className="text-gray-300">Accumulate purchases of $3,000 to receive a Free Touch Model Feenax Crypto Hardware Wallet.</p>
              </div>
            </div>
          </div>

          {/* Hardware Wallet Features Section */}
          <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-xl p-6 border border-[#F0B90B]/20">
            <h2 className="text-2xl md:text-4xl text-center font-semibold mb-4">Feenax Crypto Hardware Wallet – Features & Security </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Wallet2 className="h-6 w-6 text-[#F0B90B] flex-shrink-0 mt-1" />
                <p className="text-gray-300">Multiple Wallet Creation – Securely create and manage multiple wallets within the Feenax hardware wallet.</p>
              </div>
              <div className="flex items-center space-x-4">
                <Lock className="h-6 w-6 text-[#F0B90B] flex-shrink-0 mt-1" />
                <p className="text-gray-300">No External Wallet Import – Importing existing wallets is disabled to eliminate hacking risks from compromised mobile devices.</p>
              </div>
              <div className="flex items-center space-x-4">
                <ShieldCheck className="h-6 w-6 text-[#F0B90B] flex-shrink-0 mt-1" />
                <p className="text-gray-300"> Ultimate Security – Your private keys never leave the device, ensuring maximum protection against online threats.</p>
              </div>
              <div className="flex items-center space-x-4">
                <RefreshCw className="h-6 w-6 text-[#F0B90B] flex-shrink-0 mt-1" />
                <p className="text-gray-300">Recovery Options – Even if you lose your hardware wallet, your assets remain safe! </p>
              </div>
              <div className="flex items-center space-x-4">
                <ArchiveRestore className="h-6 w-6 text-[#F0B90B] flex-shrink-0 mt-1" />
                <p className="text-gray-300">Restore access via Trust Wallet or MetaMask using your secret phrases and private key.</p>
              </div>
              <div className="flex items-center space-x-4">
                <KeyRound className="h-6 w-6 text-[#F0B90B] flex-shrink-0 mt-1" />
                <p className="text-gray-300">Hack-Proof Protection – Advanced security mechanisms safeguard your crypto assets at all times.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
