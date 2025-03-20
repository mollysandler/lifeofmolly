"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { useTheme } from "@/components/theme-provider";
import Image from "next/image";

const HomeSection = () => {
  const themeContext = useTheme();
  const { theme } = themeContext ?? {};

  const handleDownload = () => {
    const resumePath = "/mollysandlerresume.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Molly_Sandler_Software_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-4 pt-24 ${
        theme === "dark" ? "bg-gray-900" : ""
      }`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="max-w-3xl text-center"
      >
        <motion.h1
          className={
            theme === "dark"
              ? "bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:text-7xl"
              : "text-5xl font-extrabold text-gray-900 md:text-6xl lg:text-7xl"
          }
          variants={fadeIn("up", "tween", 0, 0.5)}
        >
          Welcome to Molly's World
        </motion.h1>

        <motion.p
          className={`mt-6 text-lg ${
            theme === "dark" ? "text-gray-100" : "text-gray-700"
          }`}
          variants={fadeIn("up", "tween", 0.2, 0.5)}
        >
          I'm a developer with a passion for building interactive and dynamic
          web experiences. I'm currently attending Cal Poly SLO as a fourth year
          Software Engineering major with a minor in Entrepreneurship. I have
          experience with Python, Java, SQL, Javascript, React, Typescript, and
          Git.
        </motion.p>

        <motion.div
          className={`relative mx-auto mt-12 h-64 w-64 overflow-hidden rounded-full border-4 ${
            theme === "dark" ? "border-gray-100" : "border-gray-300"
          }`}
          variants={fadeIn("up", "tween", 0.4, 0.5)}
        >
          <Image
            src="/molly_headshot.jpeg"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4 md:flex-nowrap" // Added md:flex-nowrap
          variants={fadeIn("up", "tween", 0.6, 0.5)}
        >
          {[
            ["About Me", "#about"],
            ["Photos", "#photos"],
            ["Projects", "#projects"],
            ["Contact", "#contact"],
            ["Resume", ""],
          ].map(([label, path], index) => (
            <Button
              key={label}
              size="lg"
              className={`min-w-[140px] bg-pink-200 hover:scale-105 text-gray-800 hover:bg-pink-300 dark:bg-pink-800 dark:hover:bg-pink-700 dark:text-gray-200 ${
                label === "Resume"
                  ? "border-2 border-dashed border-gray-400 dark:border-gray-500"
                  : ""
              }`}
            >
              {path ? (
                <a href={path}>{label}</a>
              ) : (
                <div onClick={handleDownload} className="flex items-center">
                  <Download className="h-4 w-4 mr-2" /> {label}
                </div>
              )}
            </Button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeSection;
