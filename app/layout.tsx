import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import "./globals.css";

const RobotoFlex = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-flex",
});

export const metadata: Metadata = {
  title: "Mbak Widya",
  description:
    "Mbak Widya adalah asisten virtual berbasis AI resmi dari Dinas Kearsipan dan Perpustakaan Provinsi Jawa Tengah. Dirancang cerdas untuk membantu Anda mencari, mengulik, dan merangkum ratusan ribu data arsip daerah secara real-time langsung lewat obrolan interaktif dan fitur suara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={RobotoFlex.className}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
