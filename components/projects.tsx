"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Fitness",
    description:
      "A Fitness website is a fitness information, class schedules,membership options, and tools to help users achieve their fitness goals",
    image: "/fitness.png?height=300&width=500",
    tags: ["React", "Vanila CSS" ,"React DOM"],
    demoUrl: "https://fitness-website-teal.vercel.app/",
    githubUrl: "https://github.com/silonrajthala/fitnessWebsite",
    category: "web",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "web",
  },
  {
    id: 3,
    title: "Finance Dashboard",
    description:
      "An interactive dashboard for tracking personal finances with data visualization and budget planning tools.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "D3.js", "Express", "PostgreSQL"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "web",
  },
  {
    id: 4,
    title: "Weather App",
    description: "A mobile application that provides real-time weather forecasts and alerts based on user location.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React Native", "Redux", "Weather API"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "mobile",
  },
]

const categories = ["all", "web", "mobile", "design"]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    
  }

  return (
    <div className="container mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Projects</h2>
        <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Here are some of my recent projects. Each project is a unique piece of development.
        </p>
      </div>

      <motion.div
        className="flex justify-center mb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 50 }, // Start from below
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 2, // Slow entering animation
                  ease: [0.22, 1, 0.36, 1], // Custom easing
                },
              },
              exit: {
                opacity: 0,
                y: -50,
                transition: {
                  duration: 1, // Fast exiting animation
                },
              },
            }}
          >
            <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
              <div className="overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  // className="w-full h-48 object-cover transition-transform duration-300 hover:translate-y-[-100%]"
               
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

