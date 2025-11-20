import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/layouts/Header";
import { Footer } from "@/layouts/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Horizon Secure",
  description: "Sua fortaleza digital",
  // --- ADICIONE ISTO ---
  icons: {
    icon: "/icon.svg",
  },
  // ---------------------
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} bg-horizon-bg flex min-h-screen flex-col text-white`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
