"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Instagram, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { fadeIn, staggerContainer } from "@/lib/animations"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log("Form submitted:", formState)
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="container mx-auto px-4 pt-32 pb-16"
    >
      <motion.h1
        variants={fadeIn("down", "tween", 0, 0.5)}
        className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white md:text-5xl"
      >
        Contact Me
      </motion.h1>

      <div className="mx-auto max-w-2xl">
        <motion.form
          variants={fadeIn("up", "tween", 0.2, 0.5)}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <Input
              id="name"
              type="text"
              required
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              required
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <Textarea
              id="message"
              required
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="mt-1 min-h-[150px]"
            />
          </div>

          <Button type="submit" className="w-full border-2 border-red-500">
            Send Message
          </Button>
        </motion.form>

        <motion.div
          variants={fadeIn("up", "tween", 0.4, 0.5)}
          className="mt-12 flex justify-center space-x-6"
        >
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}

