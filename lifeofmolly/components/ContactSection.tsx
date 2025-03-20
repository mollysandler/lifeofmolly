"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { useTheme } from "@/components/theme-provider";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactSection = () => {
  const themeContext = useTheme();
  const { theme } = themeContext ?? {};
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_pg9uejd",
        "template_zaqaj4c",
        form.current,
        "c84Nxe3wBTlfc1QQm"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Toaster /> {/* Put the Toaster component here */}
      <section
        id="contact"
        className={`min-h-screen flex items-center justify-center px-4 py-24 ${
          theme === "dark" ? "bg-gray-900" : ""
        }`}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="container mx-auto max-w-2xl"
        >
          <motion.h2
            variants={fadeIn("down", "tween", 0, 0.5)}
            className={`mb-12 text-center text-4xl font-bold md:text-5xl ${
              theme === "dark" ? "text-gray-100" : "text-foreground"
            }`}
          >
            Contact Me
          </motion.h2>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("up", "tween", 0.2, 0.5)}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium ${
                  theme === "dark" ? "text-gray-300" : "text-foreground"
                }`}
              >
                Name
              </label>
              <Input
                id="name"
                type="text"
                name="user_name"
                required
                className={`mt-1 ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
                    : ""
                }`}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium ${
                  theme === "dark" ? "text-gray-300" : "text-foreground"
                }`}
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                name="user_email"
                required
                className={`mt-1 ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
                    : ""
                }`}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium ${
                  theme === "dark" ? "text-gray-300" : "text-foreground"
                }`}
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                className={`mt-1 min-h-[150px] ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
                    : ""
                }`}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-pink-200 text-gray-800 hover:bg-pink-300 dark:bg-pink-800 dark:hover:bg-pink-700 dark:text-gray-200"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>

          <motion.div
            variants={fadeIn("up", "tween", 0.4, 0.5)}
            className={`mt-12 flex justify-center space-x-6 ${
              theme === "dark" ? "text-gray-400" : ""
            }`}
          >
            <a
              href="https://linkedin.com/molly-sandler"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-foreground ${
                theme === "dark" ? "text-gray-400 hover:text-gray-300" : ""
              }`}
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://instagram.com/mollyelaine_"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-foreground ${
                theme === "dark" ? "text-gray-400 hover:text-gray-300" : ""
              }`}
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://github.com/mollysandler"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-foreground ${
                theme === "dark" ? "text-gray-400 hover:text-gray-300" : ""
              }`}
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default ContactSection;
