import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileFooterBar from "@/components/MobileFooterBar";

export const metadata: Metadata = {
  title: "Prem Eye & Maternity Hospital | Barnala",
  description: "Your trusted healthcare partner providing comprehensive eye care and maternity services with advanced technology and compassionate care in Barnala.",
  keywords: "eye hospital, maternity hospital, Barnala, cataract surgery, LASIK, pregnancy care, Dr. Rupesh Singla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pb-16 md:pb-0">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileFooterBar />
      </body>
    </html>
  );
}
