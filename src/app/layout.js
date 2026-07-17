import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import AosInitializer from "@/src/components/AosInitializer";
import Footer from "@/src/components/Footer";
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shorif Uddin Rifat | Web Developer",
  description: "Portfolio of Shorif Uddin Rifat — MERN Stack & Frontend Developer. Clean code, scalable apps, and user-focused interfaces. 2+ years experience, 20+ projects.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Shorif Uddin Rifat | Web Developer",
    description: "Portfolio of Shorif Uddin Rifat — MERN Stack & Frontend Developer. Clean code, scalable apps, 2+ years experience.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground transition-colors duration-300`}
      >
          <Navbar></Navbar>
        {children}
           <AosInitializer></AosInitializer>
            <Toaster/>
            <div className="">
              <Footer/>
            </div>
      </body>
    </html>
  );
}
