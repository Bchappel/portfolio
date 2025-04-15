"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function WelcomePage() {
  const [loaded, setLoaded] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setLoaded(true)
  }, [])

  // Function to handle the explore button click
  const handleExplore = () => {
    // Set a flag in sessionStorage to indicate we're coming from welcome page
    sessionStorage.setItem("comingFromWelcome", "true")
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div
        className={`text-center transition-all duration-700 ease-out z-10 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-stone-800">Braedan Chappel</h1>
        <p className="text-xl md:text-2xl text-stone-600 mb-12 max-w-md mx-auto">Software Engineer</p>
        <div className="relative inline-block">
          <Button
            asChild
            size="lg"
            className="bg-stone-800 hover:bg-stone-900 px-8 py-6 text-lg relative z-10 overflow-hidden group"
            onClick={handleExplore}
          >
            <Link href="/home">
              Explore
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Background Paths */}
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
