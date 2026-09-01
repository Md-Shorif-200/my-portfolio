import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import AosInitializer from "@/components/AosInitializer";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "./provider/theme-provider";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
      <body className={`${interSans.variable} ${robotoMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="night"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar></Navbar>
          {children}
          <AosInitializer></AosInitializer>
          <Toaster />
          <div className="">
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
