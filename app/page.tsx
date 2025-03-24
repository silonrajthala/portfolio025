"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section id="home" className="py-20">
          <Hero />
        </section>

        <section id="about" className="py-20">
          <AnimatedSection>
            <About />
          </AnimatedSection>
        </section>

        <section id="projects" className="py-20">
          <AnimatedSection>
            <Projects />
          </AnimatedSection>
        </section>

        <section id="skills" className="py-20">
          <AnimatedSection>
            <Skills />
          </AnimatedSection>
        </section>

        <section id="contact" className="py-20">
          <AnimatedSection>
            <Contact />
          </AnimatedSection>
        </section>
      </div>
      <Footer />
    </main>
  )
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

