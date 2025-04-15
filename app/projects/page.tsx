"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CodeProjectCard } from "@/components/code-project-card"
import { allProjects } from "@/data/projects-data"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Projects</h1>
          <p className="text-lg text-stone-600 mb-12 max-w-3xl">
            A collection of my work across various technologies and domains. Each project represents different
            challenges and solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {allProjects.map((project) => (
              <CodeProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                codeSnippet={project.codeSnippet}
                language={project.language}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
