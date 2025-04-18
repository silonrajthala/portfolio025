"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { ExternalLink, Github } from "lucide-react"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Ticketing",
    description: "This online ticketing system assigns a unique ticket number to each support request for easy tracking of progress and responses.",
    image: "/ticket.png?height=300&width=500",
    tags: ["OpenSource", "Paid Subscription"],
    demoUrl: "https://osticketsct.supportsystem.com/",
    githubUrl: "",
    category: "web", 
  },
  {
    id: 2,
    title: "Fitness",
    description: "A Fitness website is a fitness information, class schedules, membership options, and tools to help users achieve their fitness goals.",
    image: "/fitness.png?height=300&width=500",
    tags: ["React", "Vanilla CSS", "React DOM"],
    demoUrl: "https://fitness-website-teal.vercel.app/",
    githubUrl: "https://github.com/silonrajthala/fitnessWebsite",
    category: "web",
  },
  {
    id: 3,
    title: "Travel With Us",
    description: "An online platform that allows users to book vehicles and hotels all in one package.",
    image: "/travel.png?height=300&width=500",
    tags: ["React", "Vanilla CSS"],
    demoUrl: "https://travelwithus-sepia.vercel.app",
    githubUrl: "https://github.com/silonrajthala/travelWithUs",
    category: "web",
  },
  {
    id: 4,
    title: "Ecommerce",
    description: "Explore Fashion Store, your go-to online destination for exquisite clothing choices.",
    image: "/ecom.png?height=300&width=500",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "https://github.com/silonrajthala/ecommerceWebsite",
    githubUrl: "https://ecommerce-website-mu-liard.vercel.app",
    category: "web",
  },
  {
    id: 6,
    title: "CRMS",
    description: "COMMING SOON",
    image: "/cards.png?height=300&width=500",
    tags: ["Laravel","Blade", "Jquery", "Bootstrap"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "web",
  },
  {
    id: 7,
    title: "Mobile App",
    description: "COMMING SOON",
    image: "/mob.png?height=300&width=500",
    tags: ["React Native", "Flutter"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "mobile",
  },
  {
    id: 8,
    title: "UI/UX",
    description: "COMMING SOON",
    image: "/design.png?height=300&width=500",
    tags: ["Figma", "Photoshop"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "design",
  },
]

const categories = ["all", "web", "mobile", "design"] as const;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("all");
  const [key, setKey] = useState(0); // Key to force re-render

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory);

  // console.log("Active Category:", activeCategory);
  // console.log("Filtered Projects:", filteredProjects);

  const handleCategoryChange = (category: typeof categories[number]) => {
    setActiveCategory(category);
    setKey((prevKey) => prevKey + 1); // Change the key to force re-render
  };

  return (
    <div className="container mx-auto" key={key}>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Projects</h2>
        <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Here are some of my recent projects. Each project is a unique piece of development.
        </p>
      </div>

      <motion.div
        className="flex justify-center mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => handleCategoryChange(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {filteredProjects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 2,
                    ease: [0.22, 1, 0.36, 1],
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
          ))
        )}
      </motion.div>
    </div>
  )
}