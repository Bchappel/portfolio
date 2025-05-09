"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface Album {
  id: string
  title: string
  year: string
  description: string
  imageUrl: string
}

interface AlbumCarouselProps {
  albums: Album[]
  artistName: string
}

export function AlbumCarousel({ albums, artistName }: AlbumCarouselProps) {
  // Track which album is in the middle (active) position
  const [activeIndex, setActiveIndex] = useState(0)

  // Set initial index when component mounts
  useEffect(() => {
    // Start with the first album active if there are albums
    if (albums.length > 0) {
      setActiveIndex(0)
    }
  }, [albums.length])

  // Get the current album
  const currentAlbum = albums[activeIndex]

  // Move to the previous album
  const prevAlbum = () => {
    setActiveIndex((prev) => (prev - 1 + albums.length) % albums.length)
  }

  // Move to the next album
  const nextAlbum = () => {
    setActiveIndex((prev) => (prev + 1) % albums.length)
  }

  // Calculate which albums should be in left, middle, and right positions
  const getPositionIndex = (position: "left" | "middle" | "right") => {
    if (position === "middle") return activeIndex

    if (position === "left") {
      return (activeIndex - 1 + albums.length) % albums.length
    }

    // right position
    return (activeIndex + 1) % albums.length
  }

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Album Stack */}
        <div className="w-full md:w-1/3 relative">
          <div className="aspect-square relative">
            {/* Create a stack of albums with just slivers visible */}
            <div className="relative w-full h-full">
              {albums.map((album, index) => {
                // Determine position relative to active index
                let position: "left" | "middle" | "right" | "hidden" = "hidden"

                if (index === activeIndex) {
                  position = "middle"
                } else if (index === getPositionIndex("left")) {
                  position = "left"
                } else if (index === getPositionIndex("right")) {
                  position = "right"
                }

                // Skip rendering if not in one of the three positions
                if (position === "hidden") return null

                const isActive = position === "middle"

                // Calculate offset based on position
                let offsetX = 0
                if (position === "left") offsetX = -12
                if (position === "right") offsetX = 12

                // Determine which function to call when clicked
                const handleClick = position === "left" ? prevAlbum : position === "right" ? nextAlbum : undefined

                return (
                  <div
                    key={album.id}
                    className="absolute inset-0 rounded-lg overflow-hidden shadow-md transition-all duration-300 cursor-pointer"
                    style={{
                      transform: `translateX(${offsetX}px)`,
                      zIndex: isActive ? albums.length : position === "right" ? 2 : 1,
                      filter: isActive ? "none" : "grayscale(0.8) brightness(0.8)",
                    }}
                    onClick={handleClick}
                  >
                    <Image
                      src={album.imageUrl || "/placeholder.svg"}
                      alt={`${album.title} by ${artistName}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Album details */}
        <div className="w-full md:w-2/3">
          <div className="flex flex-col h-full justify-center">
            <div className="flex items-baseline mb-1">
              <h2 className="text-2xl font-semibold">{currentAlbum.title}</h2>
              <span className="text-stone-500 ml-3">({currentAlbum.year})</span>
            </div>
            <h3 className="text-xl text-stone-700 mb-4">{artistName}</h3>
            <p className="text-stone-600">{currentAlbum.description}</p>

            {/* Album selection dots */}
            <div className="mt-6 flex justify-center gap-2">
              {albums.map((album, index) => (
                <button
                  key={album.id}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? "bg-stone-800 w-4" : "bg-stone-300"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View ${album.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
