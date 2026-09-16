import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/home`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/resume`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/projects`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/personal`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ]
}
