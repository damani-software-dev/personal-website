"use client"

import { ArrowLeft } from "lucide-react"
import { ReactNode, useRef } from "react";
import { motion } from "motion/react"
import { useInView } from "motion/react"
import { getAllProjects, getProjectData, type ProjectData } from "@/lib/project"
import { notFound } from "next/dist/client/components/not-found"
import Link from "next/link";
import Image from "next/image"
//Animation component that triggers EVERY time scrolled into view
function AnimateInView({ 
    children, 
    delay = 0, 
    direction = "up" 
}:{
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
  })  
    
{

  const ref = useRef(null)
  // Removed the "once: true" option so animation triggers every time
  const isInView = useInView(ref, { amount: 0.3 })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: delay,
      },
    },
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={variants}>
      {children}
    </motion.div>
  )
}

// For the hero section, we'll use a different approach with useScroll
function FloatingHero({ children }: { children: ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default async function CaseStudy({ params }: { params: { slug: string } }) {

    // Get the slug from params
  const slug = params.slug

  // Try to fetch the project data
  let project
  try {
    project = await getProjectData(slug)
  } catch (error) {
    console.error(`Failed to fetch project with slug "${slug}":`, error)
    notFound()
  }

  // If no project is found, show 404
  if (!project) {
    notFound()
  }
  
  console.log("Usertype Data:", project.usertype);


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between py-7 px-6 border-b">
        <Link href="/">
        <button className="p-1">
          <ArrowLeft size={20} />
        </button>
        </Link>
        <div className="text-sm font-medium">Damani Beckford | Product Designer</div>
      </header>

      {/* Hero Section */}
      <section className="">
        <div className="">
          <div className="relative  overflow-hidden">
            {/* Image */}
            <Image
              src={project.heroImage}
              alt="Design work in progress"
              width={1200}
              height={500}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            
            {/* Overlay - Ensure it's on top */}
            <div className="absolute inset-0 bg-black/80 z-10" ></div>

            {/* Content - Ensure it's above the overlay */}
            <div className="absolute inset-0 flex items-center z-20">
              <div className="ml-2 md:ml-8 px-6">
                <div className="max-w-xl text-white">
                  <h1 className="text-4xl  md:text-5xl font-bold md:leading-[1.2] mb-4 ">
                    {project.title}
                  </h1>
                  <p className="mb-8 text-sm opacity-90 ">
                    {project.descript2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        </section>

      {/* Project Details */}
      <section className="max-w-4xl mx-auto px-6 mt-8">
        <div className="bg-[#f4f4f4] rounded-lg p-6 mb-8">
          <div className="space-y-4 divide-y divide-[#cfcfcf]">
            <div className="pb-4">
              <h3 className="font-bold inline-block mr-2">Role:</h3>
              <p className="inline-block">Lead UX Designer</p>
            </div>
            <div className="py-4">
              <h3 className="font-bold inline-block mr-2">Tools:</h3>
              <p className="inline-block">Figma, FigJam, Maze</p>
            </div>
            <div className="pt-4">
              <h3 className="font-bold inline-block mr-2">Outcome:</h3>
              <p>
                Boosted student engagement by 30% through a personalized gamification user experience, which led to
                success in financial learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="max-w-4xl mx-auto px-6 mb-12">
        <div className="text-sm text-[#b4b4b4] mb-1">Background</div>
        <h2 className="text-2xl font-bold mb-4">How it Started</h2>
        <p className="mb-8">
         {project.background}
        </p>

        {/* Journey Section */}
        <div className="text-sm text-[#b4b4b4] mb-1">My Journey</div>
        <h2 className="text-2xl font-bold mb-4">Week 1: Discovery Phase</h2>
        <p className="mb-6">
          {project.discovery}
        </p>

        <ul className="list-disc pl-8 mb-8 space-y-2">
          <li>{project.stakeholderRes[0]}</li>
          <li>{project.stakeholderRes[1]}</li>
          <li>{project.stakeholderRes[2]}</li>
          <li>{project.stakeholderRes[3]}</li>
          <li>{project.stakeholderRes[4]}</li>
        </ul>

        <p className="mb-8">
          With those business goals in mind, I went ahead and talked to a few potential users, and this is what I
          discovered:
        </p>

        {/* User Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-[#ffe8a3] p-6 rounded-lg">
            <p className="mb-2 italic">
             {project.painpoints[0]}
            </p>
          </div>
          <div className="bg-[#ffe8a3] p-6 rounded-lg">
            <p className="mb-2 italic">
            {project.painpoints[1]}
            </p>
          </div>
          <div className="bg-[#ffe8a3] p-6 rounded-lg">
            <p className="mb-2 italic">
            {project.painpoints[2]}
            </p>
          </div>
          <div className="bg-[#ffe8a3] p-6 rounded-lg">
            <p className="mb-2 italic">
            {project.painpoints[3]}
            </p>
          </div>
        </div>
      </section>
      {/* Brainstorming & iteration Section */}
      <section className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">Week 2: Brainstorming & iterating</h2>
        <p className="mb-8">
         {project.brainstorm}
        </p>

        <ul className="list-disc pl-8 mb-8 space-y-2">
          <li>{project.interviewTakeaway[0]}</li>
          <li>{project.interviewTakeaway[1]}</li>
          <li>{project.interviewTakeaway[2]}</li>
        </ul>

      </section>
    </div>
  )
}
