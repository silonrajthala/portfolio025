"use client"
import { Button } from "./ui/button"
import { FileText } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -20 }, // Start from the left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5 }, // Slow entering animation
    },
    exit: {
      opacity: 0,
      x: 20, // Exit to the right
      transition: { duration: 0.1 }, // Fast exiting animation
    },
  }
  const itemVariantsRight = {
    hidden: { opacity: 0, x: 20 }, // Start from the left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2 }, // Slow entering animation
    },
    exit: {
      opacity: 0,
      x: 20, // Exit to the right
      transition: { duration: 0.1 }, // Fast exiting animation
    },
  }
  
  return (
    <div className="container mx-auto px-4">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
        <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
      </div>

      <motion.div // Attach the ref to the motion div
        className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div variants={itemVariantsLeft}>
          <img
            src="/about.png?height=400&width=500"
            alt="About me"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </motion.div>

        <div className="space-y-6">
          <motion.h3 variants={itemVariantsRight} className="text-2xl font-semibold">
            Who am I?
          </motion.h3>

          <motion.p variants={itemVariantsRight} className="text-muted-foreground">
            Passionate and driven computer engineering student with a solid academic foundation and a genuine love for technology. Committed to making a positive impact through innovative solutions while fostering personal growth and continuous learning. Known for being dedicated, reliable, and meticulous, with a deep understanding of computer architecture and operating systems. Actively seeking an internship opportunity to gain hands-on experience and expand my knowledge in the dynamic field of computer engineering.
          </motion.p>

          <motion.div variants={itemVariantsRight} className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <h4 className="font-medium">Name:</h4>
              <p className="text-muted-foreground">Silon Rajthala</p>
            </div>
            <div>
              <h4 className="font-medium">Email:</h4>
              <p className="text-muted-foreground">seelon.rajthala.7@gmail.com</p>
            </div>
            <div>
              <h4 className="font-medium">Location:</h4>
              <p className="text-muted-foreground">Bhaktapur, Nepal</p>
            </div>
            <div>
              <h4 className="font-medium">Availability:</h4>
              <p className="text-muted-foreground">Freelance & Full-time</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariantsRight}>
            <Button className="mt-6" asChild>
              <a href="/resume.pdf" download>
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
