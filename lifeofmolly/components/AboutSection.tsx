"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { useTheme } from "@/components/theme-provider";
import Image from "next/image";

import exclusive from "@/public/about/exclusive.png";
import slomotion from "@/public/about/motion.jpeg";
import reteti from "@/public/about/reteti.png";

const AboutSection = () => {
  const themeContext = useTheme();
  const { theme } = themeContext ?? {};

  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center px-4 py-24 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
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
          About Me
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 0.5)}
            className={`rounded-lg border p-6 shadow-lg ${
              theme === "dark"
                ? "border-gray-700 bg-gray-800"
                : "border-gray-300 bg-white"
            }`}
          >
            <h3
              className={`mb-6 text-2xl font-semibold flex items-center ${
                theme === "dark" ? "text-gray-100" : "text-gray-900"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-globe mr-2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              Online
            </h3>
            <div className="space-y-6">
              <div>
                <h4
                  className={`mb-2 text-lg font-semibold flex items-center ${
                    theme === "dark" ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  <Image
                    src={exclusive}
                    alt="Exclusive Networks Logo"
                    className="h-6 w-6 mr-2 object-contain"
                  />
                  Exclusive Networks
                </h4>
                <p
                  className={` ${
                    theme === "dark" ? "text-gray-100" : "text-gray-700"
                  }`}
                >
                  I work in software development and product management at
                  Exclusive Networks, focusing on creating new cybersecurity
                  tools to make cyber safety more accessible to the average
                  person.
                </p>
              </div>
              <div>
                <h4
                  className={`mb-2 text-lg font-semibold flex items-center ${
                    theme === "dark" ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  <Image
                    src={reteti}
                    alt="Reteti Elephant Sanctuary Logo"
                    className="h-6 w-6 mr-2 object-contain"
                  />
                  Reteti Elephant Sanctuary
                </h4>
                <p
                  className={` ${
                    theme === "dark" ? "text-gray-100" : "text-gray-700"
                  }`}
                >
                  I volunteer with a small team to enhance data storage systems
                  for Reteti and the Sarara Foundation. I am working on
                  connecting their operations to Salesforce for accurate
                  tracking of donations, milk bottles, and elephant adoptions.
                </p>
              </div>
              <div>
                <h4
                  className={`mb-2 text-lg font-semibold flex items-center ${
                    theme === "dark" ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram mr-2"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  Social Media
                </h4>
                <p
                  className={` ${
                    theme === "dark" ? "text-gray-100" : "text-gray-700"
                  }`}
                >
                  I am an avid user of social media, and love using my platforms
                  to promote positivity and honesty online! I have worked with
                  brands such as{" "}
                  <a
                    href="#"
                    className={`text-pink-400 hover:underline ${
                      theme === "dark" ? "dark:text-pink-300" : ""
                    }`}
                  >
                    Bragg Live Foods
                  </a>{" "}
                  to both run their social media and create content for them as
                  an influencer.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 0.5)}
            className={`rounded-lg border p-6 shadow-lg ${
              theme === "dark"
                ? "border-gray-700 bg-gray-800"
                : "border-gray-300 bg-white"
            }`}
          >
            <h3
              className={`mb-6 text-2xl font-semibold flex items-center ${
                theme === "dark" ? "text-gray-100" : "text-gray-900"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-person-standing mr-2"
              >
                <path d="M12 20v-1" />
                <path d="M9 19h6" />
                <path d="M19 9a4 4 0 0 0-4-4" />
                <path d="M9 5a4 4 0 0 0-4 4" />
                <path d="M5.5 9h.1" />
                <path d="M18.5 9h.1" />
                <path d="M12 9v10" />
                <path d="M8 20l2-3" />
                <path d="M14 20l-2-3" />
              </svg>
              Offline
            </h3>
            <div className="space-y-6">
              <div>
                <h4
                  className={`mb-2 text-lg font-semibold flex items-center ${
                    theme === "dark" ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  <Image
                    src={slomotion} // Replace with actual icon URL or use an appropriate SVG
                    alt="Ultimate Frisbee Icon"
                    className="h-8 w-8 mr-2 object-contain"
                  />
                  Ultimate Frisbee
                </h4>
                <p
                  className={` ${
                    theme === "dark" ? "text-gray-100" : "text-gray-700"
                  }`}
                >
                  I started playing ultimate frisbee since middle school, and
                  have been playing ever since! I currently play for Cal Poly
                  San Luis Obispo women's ultimate (SLO Motion), Santa Barbara
                  mixed gender ultimate (Robot), and pickup frisbee.
                </p>
              </div>
              <div>
                <h4
                  className={`mb-2 text-lg font-semibold flex items-center ${
                    theme === "dark" ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-knitting-needle mr-2"
                  >
                    <path d="m14.14 5.32-8.4 8.4a1 1 0 0 0-.28.65l-.56 4.48a1 1 0 0 0 1.38 1.38l4.48-.56a1 1 0 0 0 .65-.28l8.4-8.4" />
                    <path d="m18.68 9.86-8.4-8.4" />
                    <path d="m15.14 6.32-5.6-5.6" />
                  </svg>
                  Crocheting
                </h4>
                <p
                  className={` ${
                    theme === "dark" ? "text-gray-100" : "text-gray-700"
                  }`}
                >
                  I learned how to crochet in 2021, and then started to run an
                  Etsy shop for my pieces, which you can check out{" "}
                  <a
                    href="#"
                    className={`text-pink-400 hover:underline ${
                      theme === "dark" ? "dark:text-pink-300" : ""
                    }`}
                  >
                    here
                  </a>
                  ! Being a part of the small business community has been
                  incredibly fulfilling.
                </p>
              </div>
              <div>
                <h4
                  className={`mb-2 text-lg font-semibold flex items-center ${
                    theme === "dark" ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mountain mr-2"
                  >
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                  </svg>
                  Hiking
                </h4>
                <p
                  className={` ${
                    theme === "dark" ? "text-gray-100" : "text-gray-700"
                  }`}
                >
                  I love spending time in nature, especially hiking and
                  backpacking, and am working towards getting my Adirondack 46
                  right now. I have 32/46 so far! Hiking the Tri-Tip Challenge
                  in SLO with my roommates every year is a staple activity too.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
