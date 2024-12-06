import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import { ClerkProvider} from '@clerk/nextjs'
import {Suspense} from "react"
 

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Maison - Luxury Ai Designer",
  description:
    "Transform your space with AI-powered luxury interior design solutions",
    icons:{
      icon: './favicon.ico',
    }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <Suspense fallback={<div>Loading...</div>}>
     <ClerkProvider dynamic>  
    <html lang="en">
      <body className={`${inter.variable} ${playfair.className}`}>
        {children}
      </body>
    </html>
    </ClerkProvider>
    </Suspense>
  );
}
