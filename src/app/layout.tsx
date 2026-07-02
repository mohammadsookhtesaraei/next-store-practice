import type { Metadata } from "next";

import { Vazirmatn } from "next/font/google";

import "./globals.css";

import QueryProvider from "@/providers/ReactQueryProvider";

import { Toaster } from "react-hot-toast";

const vazir = Vazirmatn({
  variable: "--font-vazir",
  display: "swap",
  style: "normal",
});

export const metadata: Metadata = {
  title: "store App",
  description: "store app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazir.variable}`}>
      <body>
        <QueryProvider>
          {children}
          <Toaster/>
        </QueryProvider>
      </body>
    </html>
  );
}
