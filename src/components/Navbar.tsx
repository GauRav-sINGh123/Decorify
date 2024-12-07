"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth, UserButton } from "@clerk/nextjs";

export function Navbar() {
  const { isSignedIn } = useAuth();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md"
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-light tracking-wide">
          MAISON
        </Link>

        <div className="flex items-center space-x-8">
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          {isSignedIn ? (
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8",
                },
              }}
            />
          ) : (
            <Link href="/signin">
              <Button variant="outline" className="ml-4">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </motion.header>
  );
}
