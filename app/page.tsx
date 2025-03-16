import { Navbar } from "@/components/Navbar";
import { SeedSale } from "@/components/SeedSale";
import { Features } from "@/components/Features";
import { WhyFeenax } from "@/components/WhyFeenax";
import { Blockchain } from "@/components/Blockchain";
import { Staking } from "@/components/Staking";
import { Tokenomics } from "@/components/Tokenomics";
import { ReferAndEarn } from "@/components/ReferAndEarn";
import { Roadmap } from "@/components/Roadmap";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FeenaxProjects } from "@/components/FeenaxProject";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import { PriceProgression } from "@/components/PriceProgrssion";
import ClaimFeenaxWallet from "@/components/WalletPromo";
// import { Steps } from "@/components/Steps";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900">
      <Navbar />
      {/* <SeedSale /> */}
      <Hero />
      <Features />
      <ClaimFeenaxWallet />
      <Steps />
      <PriceProgression />

      {/* <WhyFeenax />
      <Blockchain />
      <Staking />
      <Tokenomics />
      <Roadmap />
      <FeenaxProjects />
      <ReferAndEarn />
      <FAQ /> */}
      <Footer />
    </main>
  );
}