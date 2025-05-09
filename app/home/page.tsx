"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { SimpleCodeBlock } from "@/components/simple-code-block"
import { Footer } from "@/components/footer"
import { featuredProjects } from "@/data/projects-data"
import { LanguageTag } from "@/components/language-tag"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              Hello, I'm <span className="text-stone-700">Braedan Chappel</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 mb-8 max-w-2xl">
              I'm a software engineer focused on creating clean, and reliable software solutions that can effectively solve real world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-stone-800 hover:bg-stone-900">
                <Link href="/projects"> View My Work <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-stone-300">
                <Link href="/resume">My Resume</Link>
              </Button>
            </div>
          </div>

          {/* Background Paths - Same as welcome page */}
          <div className="absolute inset-0 w-full h-full opacity-[0.03] overflow-hidden">
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0,500 C150,300 350,0 500,500 C650,1000 850,700 1000,500"
                stroke="black"
                strokeWidth="2"
                fill="none"
                className="path-animation"
              />
              <path
                d="M0,600 C200,800 300,400 500,400 C700,400 800,800 1000,600"
                stroke="black"
                strokeWidth="2"
                fill="none"
                className="path-animation delay-1"
              />
              <path
                d="M0,400 C250,100 250,900 500,600 C750,300 750,900 1000,400"
                stroke="black"
                strokeWidth="2"
                fill="none"
                className="path-animation delay-2"
              />
              <path
                d="M0,300 C150,500 350,500 500,300 C650,100 850,100 1000,300"
                stroke="black"
                strokeWidth="2"
                fill="none"
                className="path-animation delay-3"
              />
              <path
                d="M0,700 C150,500 350,500 500,700 C650,900 850,900 1000,700"
                stroke="black"
                strokeWidth="2"
                fill="none"
                className="path-animation delay-4"
              />
            </svg>
          </div>
        </section>

        <section className="py-16 bg-stone-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-stone-200">
                  <div className="h-[220px] overflow-hidden bg-[#0d1117] p-4 font-jetbrains text-sm">
                    <SimpleCodeBlock code={project.codeSnippet} language={project.language} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                      {project.title}
                      <Link href={project.link} className="text-stone-500 hover:text-stone-900">
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">View project</span>
                      </Link>
                    </h3>
                    <p className="text-stone-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <LanguageTag key={tag} language={tag} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="border-stone-300">
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        .path-animation {
          stroke-dasharray: 1500;
          stroke-dashoffset: 1500;
          animation: draw 4s infinite alternate;
        }
        .delay-1 {
          animation-delay: 0.25s;
        }
        .delay-2 {
          animation-delay: 0.5s;
        }
        .delay-3 {
          animation-delay: 0.75s;
        }
        .delay-4 {
          animation-delay: 1s;
        }
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  )
}
