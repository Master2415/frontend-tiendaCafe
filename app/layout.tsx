import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"; // Asegúrate de importar Navbar
import Footer from "@/components/footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist", 
});

export const metadata: Metadata = {
  title: "Proyecto E-commerce",
  description: "Bienvenido a nuestro e-commerce",
};

export default function RootLayout({
  children,   
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body className={urbanist.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
