"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { UserButton } from "@clerk/nextjs";
import { useUserStore } from "@/store/useUserStore";

function DashboardNavbar() {
  const {user}=useUserStore();
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

        <div className="flex items-center space-x-6">
          <div className="flex flex-row gap-2">
            <span className="mt-0">🌕</span>
          <span className="font-bold text-base">{user?.credits}</span>
          </div>
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <UserButton/>
        </div>
      </nav>
    </motion.header>
  );
}

export default DashboardNavbar;
