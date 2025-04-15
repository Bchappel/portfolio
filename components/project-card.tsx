import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  link: string
}

export function ProjectCard({ title, description, tags, imageUrl, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-[16/9] relative">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
          {title}
          <Link href={link} className="text-stone-500 hover:text-stone-900">
            <ArrowUpRight className="h-4 w-4" />
            <span className="sr-only">View project</span>
          </Link>
        </h3>
        <p className="text-stone-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-stone-100 text-stone-700 rounded-md text-xs">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
