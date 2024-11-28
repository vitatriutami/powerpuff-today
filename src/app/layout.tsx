import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const geistPPG = localFont({
  src: "./fonts/PowerPuffRegular.ttf",
  variable: "--font-ppg",
  weight: "100 900",
});
const geistTicketing = localFont({
  src: "./fonts/Ticketing.ttf",
  variable: "--font-ticketing",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Blustpuff Match",
  description: "Which powerpuff are you today?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistPPG.variable} ${geistTicketing.variable} ${outfit.variable} font-outfit antialiased bg-black flex items-center justify-center h-svh p-4`}
      >
        <div className="m-[1%] bg-white h-[95vh] rounded-xl flex-1 overflow-hidden">
          {/* Scrollable inner content */}
          <div className="flex-1 h-full overflow-hidden overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
