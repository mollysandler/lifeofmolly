import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import PhotosSection from "@/components/PhotoSection";
import ProjectsSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HomeSection />
      <AboutSection />
      <PhotosSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Github, Instagram, Linkedin, Download } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Badge } from "@/components/ui/badge";
// import { fadeIn, staggerContainer } from "@/lib/animations";
// import { useTheme } from "@/components/theme-provider";

// import retetiImage from "@/public/projects/reteti.png";
// import kontinuaImage from "@/public/projects/kontinua.png";

// import exclusive from "@/public/about/exclusive.png";
// import slomotion from "@/public/about/motion.jpeg";
// import reteti from "@/public/about/reteti-logo.png";

// // import dogworldImage from "@/public/projects/dogworld.png";

// const projects = [
//   {
//     title: "Reteti Elephant Sanctuary",
//     description: `Worked with a team to fix Reteti's data storage system to properly connect to their frontend to their backend. This new system will accurately save all donations, milk bottle purchases, elephant adoptions, and other inputs into Salesforce. Also implementing these connections for their sister company, The Sarara Foundation. See more about elephant adoptions <a href="https://www.reteti.org/adoptions" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">here</a>.`,
//     image: retetiImage,
//     tags: ["Salesforce", "JavaScript", "Data Management", "API Integration"],
//   },
//   {
//     title: "Kontinua Foundation",
//     description:
//       "Collaborated with a team over a few weeks to develop a full stack recipe management app featuring ingredient uploads, recipe tagging, and other similar functionality, targeted at people living away from home for their first time. I worked on the backend development using Python and PostgreSQL, creating an API to interact with the frontend.",
//     // image: "https://www.lifewire.com/thmb/aO6Lvtc4rO9i2q_E1jB76NUmtzM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/photopea-online-picture-editor-5bead7d446e0fb00267a5ac1.png",
//     image: kontinuaImage,
//     link: "#",
//     tags: ["Swift", "XCode", "UI/UX Design", "Client Relations"],
//   },
//   {
//     title: "DogWorld",
//     description:
//       "A multiplayer game where a user controls a dog character using instruction blocks to complete levels. Also has a sandbox mode where users can create, save, and play their own levels. Integrates a weather API, uses AWS for the multiplayer connection, and has an arduino bluetooth dog that is controlled by the instruction blocks as well.",
//     image:
//       "https://www.lifewire.com/thmb/aO6Lvtc4rO9i2q_E1jB76NUmtzM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/photopea-online-picture-editor-5bead7d446e0fb00267a5ac1.png",
//     link: "#",
//     tags: [
//       "JavaScript",
//       "AWS",
//       "Arduino",
//       "API Integration",
//       "Game Development",
//     ],
//   },
//   // {
//   //   title: "Open-Recipes",
//   //   description: "Collaborated with a team over a few weeks to develop a full stack recipe management app featuring ingredient uploads, recipe tagging, and other similar functionality, targeted at people living away from home for their first time. I worked on the backend development using Python and PostgreSQL, creating an API to interact with the frontend.",
//   //   image: "https://www.lifewire.com/thmb/aO6Lvtc4rO9i2q_E1jB76NUmtzM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/photopea-online-picture-editor-5bead7d446e0fb00267a5ac1.png",
//   //   link: "#",
//   //   tags: ["Python", "PostgreSQL", "API Development", "Full Stack"]
//   // }
// ];

// export default function Home() {
//   const themeContext = useTheme();
//   const { theme } = themeContext ?? {};

//   //downloads my resume
//   const handleDownload = () => {
//     // Replace 'path/to/your/resume.pdf' with the actual path to the resume file
//     const resumePath = "/mollysandlerresume.pdf";

//     // Create a new anchor element dynamically
//     const link = document.createElement("a");
//     link.href = resumePath;
//     link.download = "Molly_Sandler_Resume.pdf"; // Set the download attribute to the desired file name
//     link.target = "_blank"; // Open in a new tab (optional)

//     // Append the link to the body, click it to start the download, and then remove it
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <main className="min-h-screen bg-background">
//       <section
//         id="home"
//         className={`min-h-screen flex items-center justify-center px-4 pt-24 ${theme === "dark" ? "bg-gray-900" : ""}`}
//       >
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           animate="show"
//           className="max-w-3xl text-center"
//         >
//           <motion.h1
//             className={
//               theme === "dark"
//                 ? "bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:text-7xl"
//                 : "text-5xl font-extrabold text-gray-900 md:text-6xl lg:text-7xl"
//             }
//             variants={fadeIn("up", "tween", 0, 0.5)}
//           >
//             Welcome to Molly's World
//           </motion.h1>

//           <motion.p
//             className={`mt-6 text-lg ${
//               theme === "dark" ? "text-gray-100" : "text-gray-700"
//             }`}
//             variants={fadeIn("up", "tween", 0.2, 0.5)}
//           >
//             I'm a developer with a passion for building interactive and dynamic
//             web experiences. I'm currently attending Cal Poly SLO as a fourth
//             year Software Engineering major with a minor in Entrepreneurship. I
//             have experience with Python, Java, SQL, Javascript, React,
//             Typescript, and Git.
//           </motion.p>

//           <motion.div
//             className={`relative mx-auto mt-12 h-64 w-64 overflow-hidden rounded-full border-4
//               ${theme === "dark" ? "border-gray-100" : "border-gray-300"}`}
//             variants={fadeIn("up", "tween", 0.4, 0.5)}
//           >
//             <Image
//               src="/molly_headshot.jpeg"
//               alt="Profile"
//               fill
//               className="object-cover"
//               priority
//             />
//           </motion.div>

//           <motion.div
//             className="mt-12 flex flex-wrap justify-center gap-4"
//             variants={fadeIn("up", "tween", 0.6, 0.5)}
//           >
//             {[
//               ["About Me", "#about"],
//               ["View Photos", "#photos"],
//               ["View Projects", "#projects"],
//               ["Get In Touch", "#contact"],
//               ["Resume"],
//             ].map(([label, path], index) => (
//               <Button
//                 key={label}
//                 size="lg"
//                 className={`min-w-[140px] bg-pink-200 hover:scale-105 text-gray-800 hover:bg-pink-300 dark:bg-pink-800 dark:hover:bg-pink-700 dark:text-gray-200 ${
//                   label === "Resume"
//                     ? "border-2 border-dashed border-gray-400 dark:border-gray-500"
//                     : ""
//                 }`}
//               >
//                 {path ? (
//                   <a href={path}>{label}</a>
//                 ) : (
//                   <div onClick={handleDownload} className="flex items-center">
//                     <Download className="h-4 w-4 mr-2" /> {label}
//                   </div>
//                 )}
//               </Button>
//             ))}
//           </motion.div>
//         </motion.div>
//       </section>

//       <section
//         id="about"
//         className={`min-h-screen flex items-center justify-center px-4 py-24 ${
//           theme === "dark" ? "bg-gray-900" : "bg-white"
//         }`}
//       >
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.25 }}
//           className="container mx-auto"
//         >
//           <motion.h2
//             variants={fadeIn("down", "tween", 0, 0.5)}
//             className={`mb-12 text-center text-4xl font-bold md:text-5xl ${
//               theme === "dark" ? "text-gray-100" : "text-gray-900"
//             }`}
//           >
//             About Me
//           </motion.h2>

//           <div className="grid gap-8 md:grid-cols-2">
//             <motion.div
//               variants={fadeIn("right", "tween", 0.2, 0.5)}
//               className={`rounded-lg border p-6 shadow-lg ${
//                 theme === "dark"
//                   ? "border-gray-700 bg-gray-800"
//                   : "border-gray-300 bg-white"
//               }`}
//             >
//               <h3
//                 className={`mb-6 text-2xl font-semibold flex items-center ${
//                   theme === "dark" ? "text-gray-100" : "text-gray-900"
//                 }`}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-globe mr-2"
//                 >
//                   <circle cx="12" cy="12" r="10" />
//                   <path d="M2 12h20" />
//                   <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
//                 </svg>
//                 Online
//               </h3>
//               <div className="space-y-6">
//                 <div>
//                   <h4
//                     className={`mb-2 text-lg font-semibold flex items-center ${
//                       theme === "dark" ? "text-gray-100" : "text-gray-900"
//                     }`}
//                   >
//                     {" "}
//                     <img
//                       src={exclusive.src}
//                       alt="Exclusive Networks Logo"
//                       className="h-6 w-6 mr-2 object-contain"
//                     />
//                     Exclusive Networks
//                   </h4>
//                   <p
//                     className={` ${
//                       theme === "dark" ? "text-gray-100" : "text-gray-700"
//                     }`}
//                   >
//                     {" "}
//                     I work in software development and product management at
//                     Exclusive Networks, focusing on creating new cybersecurity
//                     tools to make cyber safety more accessible to the average
//                     person.
//                   </p>
//                 </div>
//                 <div>
//                   <h4
//                     className={`mb-2 text-lg font-semibold flex items-center ${
//                       theme === "dark" ? "text-gray-100" : "text-gray-900"
//                     }`}
//                   >
//                     {" "}
//                     <img
//                       src={reteti.src}
//                       alt="Reteti Elephant Sanctuary Logo"
//                       className="h-6 w-6 mr-2 object-contain"
//                     />
//                     Reteti Elephant Sanctuary
//                   </h4>
//                   <p
//                     className={` ${
//                       theme === "dark" ? "text-gray-100" : "text-gray-700"
//                     }`}
//                   >
//                     {" "}
//                     I volunteer with a small team to enhance data storage
//                     systems for Reteti and the Sarara Foundation. I am working
//                     on connecting their operations to Salesforce for accurate
//                     tracking of donations, milk bottles, and elephant adoptions.
//                   </p>
//                 </div>
//                 <div>
//                   <h4
//                     className={`mb-2 text-lg font-semibold flex items-center ${
//                       theme === "dark" ? "text-gray-100" : "text-gray-900"
//                     }`}
//                   >
//                     {" "}
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-instagram mr-2"
//                     >
//                       <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//                       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//                       <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
//                     </svg>
//                     Social Media
//                   </h4>
//                   <p
//                     className={` ${
//                       theme === "dark" ? "text-gray-100" : "text-gray-700"
//                     }`}
//                   >
//                     {" "}
//                     I am an avid user of social media, and love using my
//                     platforms to promote positivity and honesty online! I have
//                     worked with brands such as{" "}
//                     <a
//                       href="#"
//                       className={`text-pink-400 hover:underline ${
//                         theme === "dark" ? "dark:text-pink-300" : ""
//                       }`}
//                     >
//                       Bragg Live Foods
//                     </a>{" "}
//                     to both run their social media and create content for them
//                     as an influencer.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               variants={fadeIn("left", "tween", 0.2, 0.5)}
//               className={`rounded-lg border p-6 shadow-lg ${
//                 theme === "dark"
//                   ? "border-gray-700 bg-gray-800"
//                   : "border-gray-300 bg-white"
//               }`}
//             >
//               <h3
//                 className={`mb-6 text-2xl font-semibold flex items-center ${
//                   theme === "dark" ? "text-gray-100" : "text-gray-900"
//                 }`}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-person-standing mr-2"
//                 >
//                   <path d="M12 20v-1" />
//                   <path d="M9 19h6" />
//                   <path d="M19 9a4 4 0 0 0-4-4" />
//                   <path d="M9 5a4 4 0 0 0-4 4" />
//                   <path d="M5.5 9h.1" />
//                   <path d="M18.5 9h.1" />
//                   <path d="M12 9v10" />
//                   <path d="M8 20l2-3" />
//                   <path d="M14 20l-2-3" />
//                 </svg>
//                 Offline
//               </h3>
//               <div className="space-y-6">
//                 <div>
//                   <h4
//                     className={`mb-2 text-lg font-semibold flex items-center ${
//                       theme === "dark" ? "text-gray-100" : "text-gray-900"
//                     }`}
//                   >
//                     {" "}
//                     <img
//                       src={slomotion.src} // Replace with actual icon URL or use an appropriate SVG
//                       alt="Ultimate Frisbee Icon"
//                       className="h-8 w-8 mr-2 object-contain"
//                     />
//                     Ultimate Frisbee
//                   </h4>
//                   <p
//                     className={` ${
//                       theme === "dark" ? "text-gray-100" : "text-gray-700"
//                     }`}
//                   >
//                     {" "}
//                     I started playing ultimate frisbee since middle school, and
//                     have been playing ever since! I currently play for Cal Poly
//                     San Luis Obispo women's ultimate (SLO Motion), Santa Barbara
//                     mixed gender ultimate (Robot), and pickup frisbee.
//                   </p>
//                 </div>
//                 <div>
//                   <h4
//                     className={`mb-2 text-lg font-semibold flex items-center ${
//                       theme === "dark" ? "text-gray-100" : "text-gray-900"
//                     }`}
//                   >
//                     {" "}
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-knitting-needle mr-2"
//                     >
//                       <path d="m14.14 5.32-8.4 8.4a1 1 0 0 0-.28.65l-.56 4.48a1 1 0 0 0 1.38 1.38l4.48-.56a1 1 0 0 0 .65-.28l8.4-8.4" />
//                       <path d="m18.68 9.86-8.4-8.4" />
//                       <path d="m15.14 6.32-5.6-5.6" />
//                     </svg>
//                     Crocheting
//                   </h4>
//                   <p
//                     className={` ${
//                       theme === "dark" ? "text-gray-100" : "text-gray-700"
//                     }`}
//                   >
//                     {" "}
//                     I learned how to crochet in 2021, and then started to run an
//                     Etsy shop for my pieces, which you can check out{" "}
//                     <a
//                       href="#"
//                       className={`text-purple-400 hover:underline ${
//                         theme === "dark" ? "dark:text-purple-300" : ""
//                       }`}
//                     >
//                       here
//                     </a>
//                     ! Being a part of the small business community has been
//                     incredibly fulfilling.
//                   </p>
//                 </div>
//                 <div>
//                   <h4
//                     className={`mb-2 text-lg font-semibold flex items-center ${
//                       theme === "dark" ? "text-gray-100" : "text-gray-900"
//                     }`}
//                   >
//                     {" "}
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-mountain mr-2"
//                     >
//                       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//                     </svg>
//                     Hiking
//                   </h4>
//                   <p
//                     className={` ${
//                       theme === "dark" ? "text-gray-100" : "text-gray-700"
//                     }`}
//                   >
//                     {" "}
//                     I love spending time in nature, especially hiking and
//                     backpacking, and am working towards getting my Adirondack 46
//                     right now. I have 32/46 so far! Hiking the Tri-Tip Challenge
//                     in SLO with my roommates every year is a staple activity
//                     too.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>
//       <section
//         id="photos"
//         className={`min-h-screen flex items-center justify-center px-4 py-24 ${
//           theme === "dark" ? "bg-gray-900" : ""
//         }`}
//       >
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.25 }}
//           className="container mx-auto"
//         >
//           <motion.h2
//             variants={fadeIn("down", "tween", 0, 0.5)}
//             className={`mb-12 text-center text-4xl font-bold md:text-5xl ${
//               theme === "dark" ? "text-gray-100" : "text-gray-900"
//             }`}
//           >
//             Photo Gallery
//           </motion.h2>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
//             {[
//               "/gallery/arches.jpg",
//               "/gallery/friends.jpg",
//               "/gallery/craterlake.jpg",
//               "/gallery/beans.jpg",
//               "/gallery/frisbee.jpg",
//               "/gallery/colorado.JPG",
//               "/gallery/dixpeak.jpg",
//               "/gallery/trot.jpg",
//               "/gallery/tswift.jpg",
//             ].map((photo, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeIn("up", "tween", index * 0.1, 0.5)}
//                 className={`relative overflow-hidden rounded-lg shadow-lg ${
//                   theme === "dark" ? "border border-gray-700" : ""
//                 }`}
//                 style={{ aspectRatio: "1/1", maxWidth: "400px" }} // Ensure square shape
//               >
//                 <Image
//                   src={photo}
//                   alt={`Gallery photo ${index + 1}`}
//                   fill
//                   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" // Responsive sizes
//                   className="object-cover transition-transform hover:scale-105"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       <section
//         id="projects"
//         className={`min-h-screen flex items-center justify-center px-4 py-24 ${
//           theme === "dark" ? "bg-gray-900" : ""
//         }`}
//       >
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.25 }}
//           className="container mx-auto"
//         >
//           <motion.h2
//             variants={fadeIn("down", "tween", 0, 0.5)}
//             className={`mb-12 text-center text-4xl font-bold md:text-5xl ${
//               theme === "dark" ? "text-gray-100" : "text-gray-900"
//             }`}
//           >
//             My Projects
//           </motion.h2>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.title}
//                 variants={fadeIn("up", "tween", index * 0.1, 0.5)}
//                 className={`group flex flex-col rounded-lg border ${
//                   theme === "dark"
//                     ? "border-gray-700 bg-gray-800"
//                     : "border-border bg-card"
//                 } shadow-lg transition-transform hover:scale-105`}
//               >
//                 <div className="relative h-48 overflow-hidden rounded-t-lg">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover transition-transform group-hover:scale-110"
//                   />
//                 </div>
//                 <div className="flex flex-1 flex-col p-6">
//                   <h3
//                     className={`mb-2 text-xl font-semibold ${
//                       theme === "dark" ? "text-gray-100" : "text-foreground"
//                     }`}
//                   >
//                     {" "}
//                     {project.title}
//                   </h3>
//                   <div className="mb-4 flex flex-wrap gap-2">
//                     {project.tags.map((tag) => (
//                       <Badge
//                         key={tag}
//                         variant="secondary"
//                         className="bg-pink-200 text-gray-800 hover:bg-pink-300 dark:bg-pink-800 dark:hover:bg-pink-700 dark:text-gray-200"
//                       >
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>
//                   <p
//                     className={`mb-4 flex-1 text-sm ${
//                       theme === "dark"
//                         ? "text-gray-300"
//                         : "text-muted-foreground"
//                     }`}
//                   >
//                     {" "}
//                     <span
//                       dangerouslySetInnerHTML={{ __html: project.description }}
//                     />
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       <section
//         id="contact"
//         className={`min-h-screen flex items-center justify-center px-4 py-24 ${
//           theme === "dark" ? "bg-gray-900" : ""
//         }`}
//       >
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.25 }}
//           className="container mx-auto max-w-2xl"
//         >
//           <motion.h2
//             variants={fadeIn("down", "tween", 0, 0.5)}
//             className={`mb-12 text-center text-4xl font-bold md:text-5xl ${
//               theme === "dark" ? "text-gray-100" : "text-foreground"
//             }`}
//           >
//             Contact Me
//           </motion.h2>

//           <motion.form
//             variants={fadeIn("up", "tween", 0.2, 0.5)}
//             className="space-y-6"
//           >
//             <div>
//               <label
//                 htmlFor="name"
//                 className={`block text-sm font-medium ${
//                   theme === "dark" ? "text-gray-300" : "text-foreground"
//                 }`}
//               >
//                 Name
//               </label>
//               <Input
//                 id="name"
//                 type="text"
//                 required
//                 className={`mt-1 ${
//                   theme === "dark"
//                     ? "bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
//                     : ""
//                 }`}
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="email"
//                 className={`block text-sm font-medium ${
//                   theme === "dark" ? "text-gray-300" : "text-foreground"
//                 }`}
//               >
//                 Email
//               </label>
//               <Input
//                 id="email"
//                 type="email"
//                 required
//                 className={`mt-1 ${
//                   theme === "dark"
//                     ? "bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
//                     : ""
//                 }`}
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="message"
//                 className={`block text-sm font-medium ${
//                   theme === "dark" ? "text-gray-300" : "text-foreground"
//                 }`}
//               >
//                 Message
//               </label>
//               <Textarea
//                 id="message"
//                 required
//                 className={`mt-1 min-h-[150px] ${
//                   theme === "dark"
//                     ? "bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
//                     : ""
//                 }`}
//               />
//             </div>

//             <Button
//               type="submit"
//               className="w-full bg-pink-200 text-gray-800 hover:bg-pink-300 dark:bg-pink-800 dark:hover:bg-pink-700 dark:text-gray-200"
//             >
//               Send Message
//             </Button>
//           </motion.form>

//           <motion.div
//             variants={fadeIn("up", "tween", 0.4, 0.5)}
//             className={`mt-12 flex justify-center space-x-6 ${
//               theme === "dark" ? "text-gray-400" : ""
//             }`}
//           >
//             <a
//               href="https://linkedin.com/molly-sandler"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`hover:text-foreground ${
//                 theme === "dark" ? "text-gray-400 hover:text-gray-300" : ""
//               }`}
//             >
//               <Linkedin className="h-6 w-6" />
//               <span className="sr-only">LinkedIn</span>
//             </a>
//             <a
//               href="https://instagram.com/mollyelaine_"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`hover:text-foreground ${
//                 theme === "dark" ? "text-gray-400 hover:text-gray-300" : ""
//               }`}
//             >
//               <Instagram className="h-6 w-6" />
//               <span className="sr-only">Instagram</span>
//             </a>
//             <a
//               href="https://github.com/mollysandler"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`hover:text-foreground ${
//                 theme === "dark" ? "text-gray-400 hover:text-gray-300" : ""
//               }`}
//             >
//               <Github className="h-6 w-6" />
//               <span className="sr-only">GitHub</span>
//             </a>
//           </motion.div>
//         </motion.div>
//       </section>
//     </main>
//   );
// }
