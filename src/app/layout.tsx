import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Root from "../Components/Root/Root";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Login - Drukland",
  description: "Login to your Drukland account",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} 
      >
        <div className="bg-[#F1F1F1]">
        <Root>{children}</Root>
        </div>
       
      </body>
    </html>
  );
}
