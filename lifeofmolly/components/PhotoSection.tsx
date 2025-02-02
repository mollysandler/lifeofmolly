"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { useTheme } from "@/components/theme-provider";

const PhotosSection = () => {
  const themeContext = useTheme();
  const { theme } = themeContext ?? {};
  return (
    <section
      id="photos"
      className={`min-h-screen flex items-center justify-center px-4 py-24 ${
        theme === "dark" ? "bg-gray-900" : ""
      }`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto"
      >
        <motion.h2
          variants={fadeIn("down", "tween", 0, 0.5)}
          className={`mb-12 text-center text-4xl font-bold md:text-5xl ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Photo Gallery
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {[
            "/gallery/arches.jpg",
            "/gallery/friends.jpg",
            "/gallery/craterlake.jpg",
            "/gallery/beans.jpg",
            "/gallery/frisbee.jpg",
            "/gallery/colorado.JPG",
            "/gallery/dixpeak.jpg",
            "/gallery/trot.jpg",
            "/gallery/tswift.jpg",
          ].map((photo, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "tween", index * 0.1, 0.5)}
              className={`relative overflow-hidden rounded-lg shadow-lg ${
                theme === "dark" ? "border border-gray-700" : ""
              }`}
              style={{ aspectRatio: "1/1", maxWidth: "400px" }}
            >
              <Image
                src={photo}
                alt={`Gallery photo ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PhotosSection;
