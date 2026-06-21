import type { Metadata } from "next";

import { Vazirmatn } from "next/font/google";

import "./globals.css";
import Layout from "@/components/layout/Layout";

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
    <html lang="fa" dir="rtl">
      <body className={`${vazir.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
