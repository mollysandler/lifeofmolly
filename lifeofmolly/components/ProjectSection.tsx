"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { useTheme } from "@/components/theme-provider";

import retetiImage from "@/public/projects/reteti.png";
import kontinuaImage from "@/public/projects/kontinua.png";
import dogWorld from "@/public/projects/dogWorld.png";

const projects = [
  {
    title: "Reteti Elephant Sanctuary",
    description: `hello`,
    // description: `Worked with a team to fix Reteti's data storage system to properly connect to their frontend to their backend. This new system will accurately save all donations, milk bottle purchases, elephant adoptions, and other inputs into Salesforce. Also implementing these connections for their sister company, The Sarara Foundation. See more about elephant adoptions <a href="https://www.reteti.org/adoptions" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">here</a>.`,
    image: retetiImage,
    tags: [
      "Salesforce",
      "JavaScript",
      "Data Management",
      "API Integration",
      "Legacy code",
    ],
  },
  {
    title: "Kontinua Foundation",
    description:
      "Collaborated with a team over a few weeks to develop a full stack recipe management app featuring ingredient uploads, recipe tagging, and other similar functionality, targeted at people living away from home for their first time. I worked on the backend development using Python and PostgreSQL, creating an API to interact with the frontend.",
    // image: "https://www.lifewire.com/thmb/aO6Lvtc4rO9i2q_E1jB76NUmtzM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/photopea-online-picture-editor-5bead7d446e0fb00267a5ac1.png",
    image: kontinuaImage,
    link: "#",
    tags: ["Swift", "XCode", "UI/UX Design", "Client Relations"],
  },
  {
    title: "DogWorld",
    description: `A multiplayer game where a user controls a dog character using instruction blocks to complete levels. Also has a sandbox mode where users can create, save, and play their own levels. Integrates a weather API, uses AWS for the multiplayer connection, and has an arduino bluetooth dog that is controlled by the instruction blocks as well. Check out our <a href="https://github.com/mollysandler/DogWorld" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">repository</a>.`,
    image: dogWorld,
    link: "#",
    tags: [
      "JavaScript",
      "AWS",
      "Arduino",
      "UI/UX Design",
      "API Integration",
      "Game Development",
    ],
  },
  // {
  //   title: "Open-Recipes",
  //   description: "Collaborated with a team over a few weeks to develop a full stack recipe management app featuring ingredient uploads, recipe tagging, and other similar functionality, targeted at people living away from home for their first time. I worked on the backend development using Python and PostgreSQL, creating an API to interact with the frontend.",
  //   image: "https://www.lifewire.com/thmb/aO6Lvtc4rO9i2q_E1jB76NUmtzM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/photopea-online-picture-editor-5bead7d446e0fb00267a5ac1.png",
  //   link: "#",
  //   tags: ["Python", "PostgreSQL", "API Development", "Full Stack"]
  // }
];

const ProjectsSection = () => {
  const themeContext = useTheme();
  const { theme } = themeContext ?? {};
  return (
    <section
      id="projects"
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
          My Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeIn("up", "tween", index * 0.1, 0.5)}
              className={`group flex flex-col rounded-lg border ${
                theme === "dark"
                  ? "border-gray-700 bg-gray-800"
                  : "border-border bg-card"
              } shadow-lg transition-transform hover:scale-105`}
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
                <h3
                  className={`mb-2 text-xl font-semibold ${
                    theme === "dark" ? "text-gray-100" : "text-foreground"
                  }`}
                >
                  {project.title}
                </h3>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-pink-200 text-gray-800 hover:bg-pink-300 dark:bg-pink-800 dark:hover:bg-pink-700 dark:text-gray-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p
                  className={`mb-4 flex-1 text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-muted-foreground"
                  }`}
                >
                  <span
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
