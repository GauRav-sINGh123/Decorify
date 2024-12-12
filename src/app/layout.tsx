import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import AuthSync from "./Auth";
import { Toaster } from "sonner";
 

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Maison - Luxury AI Designer",
  description:
    "Transform your space with AI-powered luxury interior design solutions",
  icons: {
    icon: "./favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider >
      <AuthSync/>
      <Toaster />
        <html lang="en">
          <body className={`${inter.variable} ${playfair.className}`}>
            {children}
          </body>
        </html>
    </ClerkProvider>
  );
}
