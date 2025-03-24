"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center md:flex-row md:justify-between">
      {/* Text and Buttons Section */}
      <div className="flex flex-col items-center justify-center space-y-4 md:w-1/2">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          <span className="text-primary">Hello, I'm</span> <br />
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text">Silon Rajthala</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mx-auto max-w-2xl text-xl text-muted-foreground"
        >
          A passionate full-stack developer specializing in creating beautiful and functional web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center space-x-4 pt-4"
        >
          <Button onClick={handleContactClick} className="group">
            Contact Me
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">View Projects</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center space-x-4 pt-6"
        >
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:contact@example.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Image Section */}
<div className="flex justify-center items-center h-screen"> {/* Centering container */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    className="relative overflow-hidden rounded-full border-4 border-primary/20 animate-morph"
    style={{ width: '500px', height: '500px' }} // Set width and height of the div
  >
    <img 
      src="/hero.png" 
      alt="Profile" 
      className="h-full w-full object-cover" 
      style={{ width: '500px', height: '500px' }} // Set width and height of the image
    />
  </motion.div>
</div>
    </div>
  )
}