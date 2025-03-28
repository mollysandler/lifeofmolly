"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
// import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();

  // Add null check with optional chaining
  const { theme: currentTheme, setTheme, hasMounted } = theme ?? {};

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only render when the theme is initialized
  if (!hasMounted) {
    return null;
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md dark:bg-gray-900/80"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            Molly&apos;s World
          </Link>
          <div className="flex items-center gap-6">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Projects", "/projects"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <Link
                key={path}
                href={path}
                className={`relative text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-white ${
                  pathname === path
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                {label}
                {pathname === path && (
                  <motion.div
                    layoutId="navigation-underline"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-900 dark:bg-white"
                  />
                )}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                if (!setTheme) return; // Add early return if setTheme is undefined

                if (currentTheme === "dark") {
                  setTheme("light");
                } else if (currentTheme === "light") {
                  setTheme("system");
                } else {
                  setTheme("dark");
                }
              }}
            >
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
