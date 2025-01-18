"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Instagram, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { fadeIn, staggerContainer } from "@/lib/animations"

const projects = [
  {
    title: "Reteti Elephant Sanctuary",
    description: "Worked with a team to fix Reteti's data storage system to properly connect to their frontend to their backend. This new system will accurately save all donations, milk bottle purchases, elephant adoptions, and other inputs into Salesforce. Also implementing these connections for their sister company, The Sarara Foundation.",
    image: "https://www.lifewire.com/thmb/aO6Lvtc4rO9i2q_E1jB76NUmtzM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/photopea-online-picture-editor-5bead7d446e0fb00267a5ac1.png",
    tags: ["Salesforce", "JavaScript", "Data Management", "API Integration"]
  },
  {
    title: "DogWorld",
    description: "A multiplayer game where a user controls a dog character using instruction blocks to complete levels. Also has a sandbox mode where users can create, save, and play their own levels. Integrates a weather API, uses AWS for the multiplayer connection, and has an arduino bluetooth dog that is controlled by the instruction blocks as well.",
    image: "https://www.lifewire.com/thmb/aO6Lvtc4rO9i2q_E1jB76NUmtzM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/photopea-online-picture-editor-5bead7d446e0fb00267a5ac1.png",
    link: "#",
    tags: ["JavaScript", "AWS", "Arduino", "API Integration", "Game Development"]
  },
  {
    title: "Kontinua Foundation",
    description: "Collaborated with a team over a few weeks to develop a full stack recipe management app featuring ingredient uploads, recipe tagging, and other similar functionality, targeted at people living away from home for their first time. I worked on the backend development using Python and PostgreSQL, creating an API to interact with the frontend.",
    image: "https://www.lifewire.com/thmb/aO6Lvtc4rO9i2q_E1jB76NUmtzM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/photopea-online-picture-editor-5bead7d446e0fb00267a5ac1.png",
    link: "#",
    tags: ["Swift", "XCode", "UI/UX Design", "Client Relations"]
  },
  {
    title: "Open-Recipes",
    description: "Collaborated with a team over a few weeks to develop a full stack recipe management app featuring ingredient uploads, recipe tagging, and other similar functionality, targeted at people living away from home for their first time. I worked on the backend development using Python and PostgreSQL, creating an API to interact with the frontend.",
    image: "https://www.lifewire.com/thmb/aO6Lvtc4rO9i2q_E1jB76NUmtzM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/photopea-online-picture-editor-5bead7d446e0fb00267a5ac1.png",
    link: "#",
    tags: ["Python", "PostgreSQL", "API Development", "Full Stack"]
  }
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-3xl text-center"
        >
          <motion.h1 
            className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-5xl font-bold text-transparent dark:from-gray-100 dark:to-gray-400 md:text-6xl lg:text-7xl"
            variants={fadeIn("up", "tween", 0, 0.5)}
          >
            Welcome to Molly's World
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg text-gray-600 dark:text-gray-300"
            variants={fadeIn("up", "tween", 0.2, 0.5)}
          >
            I'm a developer with a passion for building interactive and dynamic web experiences. 
            I'm currently attending Cal Poly SLO as a fourth year Software Engineering major with a minor in 
            Entrepreneurship. I have experience with Python, Java, SQL, Javascript, React, Typescript, and Git.
          </motion.p>

          <motion.div 
            className="relative mx-auto mt-12 h-64 w-64 overflow-hidden rounded-full border-4 border-gray-900 dark:border-white"
            variants={fadeIn("up", "tween", 0.4, 0.5)}
          >
            <Image
            src ="/molly_headshot.jpeg"
            alt="Profile"
            fill
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-4"
            variants={fadeIn("up", "tween", 0.6, 0.5)}
          >
            {[
              ["About Me", "#about"],
              ["View Projects", "#projects"],
              ["View Photos", "#photos"],
              ["Get In Touch", "#contact"],
            ].map(([label, path], index) => (
              <Button
                key={path}
                variant={index === 0 ? "default" : "outline"}
                size="lg"
                className="min-w-[140px] bg-pink-200 hover:scale-105 text-gray-800 hover:bg-pink-300 dark:text-gray-200"
                asChild
              >
                <a href={path}>{label}</a>
              </Button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="container mx-auto"
        >
          <motion.h2
            variants={fadeIn("down", "tween", 0, 0.5)}
            className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white md:text-5xl"
          >
            About Me
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 0.5)}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">Online</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    Exclusive Networks:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    I work in software development and product management at Exclusive Networks,
                    focusing on creating new cybersecurity tools to make cyber safety more
                    accessible to the average person.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    Reteti Elephant Sanctuary:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    I volunteer with a small team to enhance data storage systems for Reteti and
                    the Sarara Foundation. I am working on connecting their operations to
                    Salesforce for accurate tracking of donations, milk bottles, and elephant
                    adoptions.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    Social Media:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    I am an avid user of social media, and love using my platforms to promote
                    positivity and honesty online! I have worked with brands such as{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      Bragg Live Foods
                    </a>{" "}
                    to both run their social media and create content for them as an influencer.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("left", "tween", 0.2, 0.5)}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">Offline</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    Ultimate Frisbee:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    I started playing ultimate frisbee since middle school, and have been playing
                    ever since! I currently play for Cal Poly San Luis Obispo women's ultimate
                    (SLO Motion), Santa Barbara mixed gender ultimate (Robot), and pickup
                    frisbee.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    Crocheting:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    I learned how to crochet in 2021, and then started to run an Etsy shop for
                    my pieces, which you can check out{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      here
                    </a>
                    ! Being a part of the small business community has been incredibly
                    fulfilling.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    Hiking:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    I love spending time in nature, especially hiking and backpacking, and am
                    working towards getting my Adirondack 46 right now. I have 32/46 so far!
                    Hiking the Tri-Tip Challenge in SLO with my roommates every year is a staple
                    activity too.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="container mx-auto"
        >
          <motion.h2
            variants={fadeIn("down", "tween", 0, 0.5)}
            className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white md:text-5xl"
          >
            My Projects
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeIn("up", "tween", index * 0.1, 0.5)}
                className="group flex flex-col rounded-lg border border-gray-200 bg-white shadow-lg transition-transform hover:scale-105 dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className=" 0 bmin-w-[140px] bg-pink-200 hover: text-gray-800 hover:bg-pink-300 dark:text-gray-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="mb-4 flex-1 text-sm text-gray-600 dark:text-gray-300">{project.description}</p>

                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="photos" className="min-h-screen flex items-center justify-center px-4 py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="container mx-auto"
        >
          <motion.h2
            variants={fadeIn("down", "tween", 0, 0.5)}
            className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white md:text-5xl"
          >
            Photo Gallery
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              "/reteti.png"            
              ].map((photo, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", index * 0.1, 0.5)}
                className="relative h-64 overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={photo}
                  alt={`Gallery photo ${index + 1}`}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="container mx-auto max-w-2xl"
        >
          <motion.h2
            variants={fadeIn("down", "tween", 0, 0.5)}
            className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white md:text-5xl"
          >
            Contact Me
          </motion.h2>

          <motion.form
            variants={fadeIn("up", "tween", 0.2, 0.5)}
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
                className="mt-1 min-h-[150px]"
              />
            </div>

            <Button type="submit" className="w-full 0 bmin-w-[140px] bg-pink-200 hover: text-gray-800 hover:bg-pink-300 dark:text-gray-200">
              Send Message
            </Button>
          </motion.form>

          <motion.div
            variants={fadeIn("up", "tween", 0.4, 0.5)}
            className="mt-12 flex justify-center space-x-6"
          >
            <a
              href="https://linkedin.com/molly-sandler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://instagram.com/mollyelaine_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://github.com/mollysandler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}