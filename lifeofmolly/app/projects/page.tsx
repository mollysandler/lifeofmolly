// "use client"

// import Image from "next/image"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { fadeIn, staggerContainer } from "@/lib/animations"

// const projects = [
//   {
//     title: "Reteti Elephant Sanctuary",
//     description: "Worked with a team to fix Reteti's data storage system to properly connect to their frontend to their backend. This new system will accurately save all donations, milk bottle purchases, elephant adoptions, and other inputs into Salesforce. Also implementing these connections for their sister company, The Sarara Foundation.",
//     image: "../public/reteti.png",
//     link: "#",
//     tags: ["Salesforce", "JavaScript", "Data Management", "API Integration"]
//   },
//   {
//     title: "DogWorld",
//     description: "A multiplayer game where a user controls a dog character using instruction blocks to complete levels. Also has a sandbox mode where users can create, save, and play their own levels. Integrates a weather API, uses AWS for the multiplayer connection, and has an arduino bluetooth dog that is controlled by the instruction blocks as well.",
//     image: "../public/reteti.png",
//     link: "#",
//     tags: ["JavaScript", "AWS", "Arduino", "API Integration", "Game Development"]
//   },
//   {
//     title: "Kontinua Foundation",
//     description: "Collaborated with a team over a few weeks to develop a full stack recipe management app featuring ingredient uploads, recipe tagging, and other similar functionality, targeted at people living away from home for their first time. I worked on the backend development using Python and PostgreSQL, creating an API to interact with the frontend.",
//     image: "../public/reteti.png",
//     link: "#",
//     tags: ["Swift", "XCode", "UI/UX Design", "Client Relations"]
//   },
//   {
//     title: "Open-Recipes",
//     description: "Collaborated with a team over a few weeks to develop a full stack recipe management app featuring ingredient uploads, recipe tagging, and other similar functionality, targeted at people living away from home for their first time. I worked on the backend development using Python and PostgreSQL, creating an API to interact with the frontend.",
//     image: "../public/reteti.png",
//     link: "#",
//     tags: ["Python", "PostgreSQL", "API Development", "Full Stack"]
//   }
// ]

// export default function Projects() {
//   return (
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       animate="show"
//       className="container mx-auto px-4 pt-32 pb-16"
//     >
//       <motion.h1
//         variants={fadeIn("down", "tween", 0, 0.5)}
//         className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white md:text-5xl"
//       >
//         My Projects
//       </motion.h1>

//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.title}
//             variants={fadeIn("up", "tween", index * 0.1, 0.5)}
//             className="group flex flex-col rounded-lg border border-gray-200 bg-white shadow-lg transition-transform hover:scale-105 dark:border-gray-700 dark:bg-gray-800"
//           >
//             <div className="relative h-48 overflow-hidden rounded-t-lg">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover transition-transform group-hover:scale-110"
//               />
//             </div>
//             <div className="flex flex-1 flex-col p-6">
//               <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
//                 {project.title}
//               </h3>
//               <p className="mb-4 flex-1 text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
//               <div className="mb-4 flex flex-wrap gap-2">
//                 {project.tags.map((tag) => (
//                   <Badge key={tag} variant="secondary">
//                     {tag}
//                   </Badge>
//                 ))}
//               </div>
//               <Button asChild>
//                 <a href={project.link}>Learn More</a>
//               </Button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   )
// }

