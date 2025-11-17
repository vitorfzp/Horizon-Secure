// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// 1. Importe os novos componentes
import { Header } from '@/layouts/Header';
import { Footer } from '@/layouts/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Horizon Secure',
  description: 'Sua fortaleza digital',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        {/* 2. Adicione o Header */}
        <Header />

        {/* 3. Adicione 'flex-grow' ao main para empurrar o footer para baixo */}
        <main className="flex-grow">{children}</main>

        {/* 4. Adicione o Footer */}
        <Footer />
      </body>
    </html>
  );
}