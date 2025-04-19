import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Fonimage from "@/components/fonimage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Taxi App",
  description: "Site de commande de taxi en temps reel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black  relative h-screen w-screen">
      <Fonimage/>
      <Header/>
        {children}
    <Footer/>
      </body>
    </html>
  );
}
