import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Header } from '@/layouts/Header';
import { Footer } from '@/layouts/Footer';

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Horizon Secure',
  description: 'Sua fortaleza digital',
  icons: {
    icon: '/icon.svg', // Usa o SVG que acabamos de criar
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} flex min-h-screen flex-col bg-black text-white`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}