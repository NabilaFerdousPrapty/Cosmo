import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import "animate.css";
import { NavbarHome } from "@/components/Home/Navbar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
const merriweather = Merriweather({ subsets: ["latin"], weight: "400" });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sun Flare",
  description:
    "Sailing with the Sun – A whimsical adventure where characters explore with the sun.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black min-h-screen ${merriweather.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <div className="bg-black sticky top-0 z-50">
            <NavbarHome />
          </div>

          <SmoothCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
