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
  title: 'Feenax - Blockchain Innovation Platform',
  description: 'Feenax is a robust and innovative blockchain platform designed for scalability, security, and efficiency.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
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
