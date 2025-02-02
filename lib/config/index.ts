import { cookieStorage, createStorage, http } from '@wagmi/core'
// import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { bsc } from 'wagmi/chains';
// import {mainnet, bsc} from 'wagmi/chains';
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [bsc]

// export const wagmiAdapter = new WagmiAdapter({
//   storage: createStorage({
//     storage: cookieStorage
//   }),
//   ssr: true,
//   projectId,
//   networks
// })

export const config = getDefaultConfig({
  appName: 'FEENAX Seed Sale',
  projectId: projectId||"c6e9b8a0bb223a51b90a1c4dca754ac6",
  chains: [bsc],
  ssr: false, // If your dApp uses server side rendering (SSR)
});

// export const config = wagmiAdapter.wagmiConfig