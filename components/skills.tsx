"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"

const technicalSkills = [
  { name: "HTML/CSS", level: 92 },
  { name: "JavaScript", level: 74 },
  { name: "Laravel", level: 86 },
  { name: "Next.js", level: 27 },
  { name: "React", level: 53 },
  { name: "Bootstrap", level: 71 },
  { name: "Tailwind CSS", level: 44 },
  { name: "SQL", level: 78 },
]

const softSkills = [
  { name: "Communication", level: 91 },
  { name: "Teamwork", level: 94 },
  { name: "Problem Solving", level: 86 },
  { name: "Time Management", level: 81 },
  { name: "Pressure handle", level: 78 },
  { name: "Adaptability", level: 84 },
]

const skillIcons = [
  "laravel",
  "php",
  "html",
  "css",
  "js",
  "jquery",
  "react",
  "tailwind",
  "postgres",
  "postman",
  "cs",
  "flutter",
  "dart",
  "firebase",
  "nginx",
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }
  const containerVariantsExit = {
      hidden: { opacity: 0, scale: 0.8, y: 20 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
      },
      exit: {
        opacity: 0,
        y: 20,
        transition: {
          duration: 0.1, // Fast exiting animation
          ease: "easeOut",
        },
      },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="container mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Skills</h2>
        <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Here's a breakdown of my technical and soft skills that I've developed over the years.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Technical Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              {technicalSkills.map((skill) => (
                <motion.div key={skill.name} variants={itemVariants} className="mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} />
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Soft Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              {softSkills.map((skill) => (
                <motion.div key={skill.name} variants={itemVariantsRight} className="mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} />
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </div>

      <motion.div
      className="mt-12 hidden md:flex"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.7 }}
    >
      {/* Skill Icons Section */}
    <div className="logo  flex flex-wrap justify-center gap-4">
      {skillIcons.map((skill) => (
        <motion.div
          key={skill}
          variants={containerVariantsExit}
          className="flex flex-col items-center justify-center p-2 bg-card rounded-lg shadow-sm"
        >
          <div className="h-32 w-32 mb-2 flex items-center justify-center transition-transform duration-300 hover:scale-150"> {/* Set height and width to 40px */}
            <img
              src={`https://skillicons.dev/icons?i=${skill}`}
              alt={`${skill} icon`}
              className="h-10 w-10 max-h-full max-w-full" // Set height and width to 40px
            />
          </div>
          <span className="text-sm font-medium uppercase">{skill}</span>
        </motion.div>
      ))}
    </div>
    </motion.div>
    </div>
  )
}

