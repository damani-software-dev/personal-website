"use client";

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Header from "@/components/header"
import { getAllProjects, type ProjectData } from "@/lib/project"
import { useEffect, useState } from "react"
import Footer from "@/components/footer";

export default function projects() {

  const [isOpen, setIsOpen] = useState(false);
  const [projects, setProjects] = useState<ProjectData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getAllProjects()
        setProjects(projectsData)
      } catch (error) {
        console.error("Failed to fetch projects:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header/>
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col items-center px-4 py-12 text-center">
        <div className="relative mb-6 h-24 w-24 overflow-hidden rounded-full">
          <Image
            src="/profile.svg?height=96&width=96"
            alt="Profile"
            width={96}
            height={96}
            className="object-cover"
            priority
          />
        </div>
        <p className="mb-2 text-gray-500 text-md">Product Designer</p>
        <h1 className="mb-4 text-4xl font-bold">
          Every Great Product Starts
          <br />
          with a Story
        </h1>
        <p className="mx-auto max-w-2xl text-center text-md text-gray-600">
          In my years of experience I've honed my skills in ensuring that every product I work on not only exceeds
          business goals and objectives but is also usable and enjoyable by users.
        </p>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-8">
        {/* Flip Academy Project */}
        <div className="mb-16">
          <h2 className="mb-6 text-xl font-medium">Flip Academy</h2>
          <Link
              href={`/Projects/${projects[0]?.slug}`}
              className="px-4 py-2 text-sm"
            >
              <div className="mb-4 overflow-hidden rounded-lg bg-[#4285F4]">
                <Image
                  src="/case 1.svg?height=300&width=650"
                  alt="Flip Academy Project"
                  width={450}
                  height={300}
                  className="w-full object-cover"
                />
              </div>
              <div className="flex items-start justify-between">
                <h3 className="max-w-md text-lg font-medium">
                  Leveraging AI and Gamification to Improve Kids' Financial Literacy Skills
                </h3>
                <button className=" flex item-center border rounded-md px-4 py-2 text-sm">
                  View Case Study <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </Link>
        </div>

        {/* Airspace Logistics Project */}
        <div className="mb-16">
          <h2 className="mb-6 text-xl font-medium">Airspace Logistics</h2>
          <Link
              href={`/Projects/${projects[1]?.slug}`}
              className=" px-4 py-2 text-sm"
            >
              <div className="mb-4 overflow-hidden rounded-lg bg-[#ffe4e6]">
                <Image
                  src="/case 2.svg?height=300&width=650"
                  alt="Airspace Logistics Project"
                  width={650}
                  height={300}
                  className="w-full object-cover"
                />
              </div>
              <div className="flex items-start justify-between">
                <h3 className="max-w-md text-lg font-medium">Optimizing Airspace User Experience and Efficiency</h3>
                <button className="flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm">
                  View Case Study <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
