import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import AosInitializer from "@/components/AosInitializer";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "./provider/theme-provider";


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
    <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
              attribute="class"      
          defaultTheme="light"    
          enableSystem={false}  
 
            disableTransitionOnChange
          >

          <Navbar></Navbar>
        {children}
           <AosInitializer></AosInitializer>
            <Toaster/>
            <div className="">
              <Footer/>
            </div>

               </ThemeProvider>
      </body>
    </html>
  );
}
