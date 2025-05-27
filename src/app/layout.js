import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'  
import Navbar from "@/components/section/common/navbar";
import Footer from "@/components/section/common/footer";
import LogoSlider from "@/components/section/ui/rotatingimg";
import BottomNavbar from "@/components/section/common/navbar";
import Project52Button from "@/components/section/ui/Project52Button";
import TawkToScript from "@/components/TawkToScript"; // Client-only component
import DisclaimerModal from "@/components/section/ui/disclaimermodel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Phehchan",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
        <Project52Button />
        <Navbar />
        <LogoSlider />
        <Footer />
        <TawkToScript /> {/* Injects Tawk.to chat widget */}
      </body>
       <GoogleAnalytics gaId="G-T35TM88RBP" />
    </html>
  );
}

