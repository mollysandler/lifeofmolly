// "use client"

// import { motion } from "framer-motion"
// import { fadeIn, staggerContainer } from "@/lib/animations"

// export default function About() {
//   return (
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       animate="show"
//       className="container mx-auto px-4 pt-32 pb-16"
//     >
//       <motion.h1
//         variants={fadeIn("down", "tween", 0, 0.5)}
//         className="mb-12 text-center text-4xl font-bold text-foreground md:text-5xl"
//       >
//         About Me
//       </motion.h1>

//       <div className="grid gap-8 md:grid-cols-2">
//         <motion.div
//           variants={fadeIn("right", "tween", 0.2, 0.5)}
//           className="rounded-lg border border-border bg-card p-6 shadow-lg"
//         >
//           <h2 className="mb-6 text-2xl font-semibold text-foreground">Online</h2>
//           <div className="space-y-6">
//             <div>
//               <h3 className="mb-2 text-lg font-semibold text-foreground">
//                 Exclusive Networks:
//               </h3>
//               <p className="text-muted-foreground">
//                 I work in software development and product management at Exclusive Networks,
//                 focusing on creating new cybersecurity tools to make cyber safety more
//                 accessible to the average person.
//               </p>
//             </div>
//             <div>
//               <h3 className="mb-2 text-lg font-semibold text-foreground">
//                 Reteti Elephant Sanctuary:
//               </h3>
//               <p className="text-muted-foreground">
//                 I volunteer with a small team to enhance data storage systems for Reteti and
//                 the Sarara Foundation. I am working on connecting their operations to
//                 Salesforce for accurate tracking of donations, milk bottles, and elephant
//                 adoptions.
//               </p>
//             </div>
//             <div>
//               <h3 className="mb-2 text-lg font-semibold text-foreground">
//                 Social Media:
//               </h3>
//               <p className="text-muted-foreground">
//                 I am an avid user of social media, and love using my platforms to promote
//                 positivity and honesty online! I have worked with brands such as{" "}
//                 <a
//                   href="#"
//                   className="text-blue-600 hover:underline dark:text-blue-400"
//                 >
//                   Bragg Live Foods
//                 </a>{" "}
//                 to both run their social media and create content for them as an influencer.
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           variants={fadeIn("left", "tween", 0.2, 0.5)}
//           className="rounded-lg border border-border bg-card p-6 shadow-lg"
//         >
//           <h2 className="mb-6 text-2xl font-semibold text-foreground">Offline</h2>
//           <div className="space-y-6">
//             <div>
//               <h3 className="mb-2 text-lg font-semibold text-foreground">
//                 Ultimate Frisbee:
//               </h3>
//               <p className="text-muted-foreground">
//                 I started playing ultimate frisbee since middle school, and have been playing
//                 ever since! I currently play for Cal Poly San Luis Obispo women's ultimate
//                 (SLO Motion), Santa Barbara mixed gender ultimate (Robot), and pickup
//                 frisbee.
//               </p>
//             </div>
//             <div>
//               <h3 className="mb-2 text-lg font-semibold text-foreground">
//                 Crocheting:
//               </h3>
//               <p className="text-muted-foreground">
//                 I learned how to crochet in 2021, and then started to run an Etsy shop for
//                 my pieces, which you can check out{" "}
//                 <a
//                   href="#"
//                   className="text-blue-600 hover:underline dark:text-blue-400"
//                 >
//                   here
//                 </a>
//                 ! Being a part of the small business community has been incredibly
//                 fulfilling.
//               </p>
//             </div>
//             <div>
//               <h3 className="mb-2 text-lg font-semibold text-foreground">
//                 Hiking:
//               </h3>
//               <p className="text-muted-foreground">
//                 I love spending time in nature, especially hiking and backpacking, and am
//                 working towards getting my Adirondack 46 right now. I have 32/46 so far!
//                 Hiking the Tri-Tip Challenge in SLO with my roommates every year is a staple
//                 activity too.
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   )
// }