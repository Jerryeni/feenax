import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Navbar } from "@/components/layout/Navbar";
// import { AlertBanner } from "@/components/ui/alert-banner/AlertBanner";
import { PresaleProvider } from "@/providers/provider";
const inter = Inter({ subsets: ["latin"] });
import ContextProvider from '@/context'
import { headers } from "next/headers";

export const metadata: Metadata = {
  metadataBase: new URL('https://fnxcoins.com'),
  title: {
    default: 'Feenax - Your Gateway to Decentralized Finance',
    template: '%s | Feenax'
  },
  description: 'Feenax is revolutionizing blockchain technology with its groundbreaking approach to decentralized finance. Join us in shaping the future of DeFi.',
  keywords: [
    'Feenax',
    'blockchain',
    'cryptocurrency',
    'DeFi',
    'decentralized finance',
    'crypto investment',
    'blockchain technology',
    'digital assets',
    'crypto presale',
    'tokenomics'
  ],
  authors: [{ name: 'Feenax Team' }],
  creator: 'Feenax',
  publisher: 'Feenax',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'Feenax',
    title: 'Feenax - Your Gateway to Decentralized Finance',
    description: 'Revolutionizing blockchain technology with a groundbreaking approach to decentralized finance.',
    images: [
      {
        url: '/images/feenax.svg',
        width: 1200,
        height: 630,
        alt: 'Feenax - Blockchain Innovation'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feenax - Your Gateway to Decentralized Finance',
    description: 'Revolutionizing blockchain technology with a groundbreaking approach to decentralized finance.',
    images: ['/images/feenax.svg'],
    creator: '@feenax',
    site: '@feenax',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/feenax.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/feenax.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/feenax.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/feenax.png" />
        <meta name="theme-color" content="#F0B90B" />
      </head>
      <body className={`${inter.className}  bg-[#0D0B01] text-white min-h-screen antialiased`}>
        <PresaleProvider>
          <ContextProvider>
            {/* <Navbar /> */}
            {children}
            {/* <AlertBanner /> */}
          </ContextProvider>
        </PresaleProvider>

      </body>
    </html>
  );
}
