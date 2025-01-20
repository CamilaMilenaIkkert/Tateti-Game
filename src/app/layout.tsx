import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { Bangers, Lexend_Exa } from 'next/font/google';

const bangers  = Bangers({
  variable: "--font-title",
  subsets: ["latin"],
  weight: "400",
});

const lexendexa = Lexend_Exa({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TA TE TI",
  description: "juego del tateti con NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bangers.variable} ${lexendexa.variable}`}>
      <Head>
      <link rel="icon" href="/favicon-home.ico" />
      </Head>
      <body className="bg-background flex flex-col align-center m-0 min-h-screen tracking-wider font-body">
        {children}
      </body>
    </html>
  );
}
