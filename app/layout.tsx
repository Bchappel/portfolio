import type { Metadata } from "next"
import type { ReactNode } from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import {
  PERSON_SAME_AS,
  SITE_DESCRIPTION,
  SITE_JOB_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_JOB_TITLE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "Braedan Chappel",
    "software engineer",
    "University of Guelph",
    "portfolio",
    "full-stack developer",
    "Guelph Ontario",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_JOB_TITLE}`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_JOB_TITLE}`,
    description: SITE_DESCRIPTION,
  },
  category: "portfolio",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "en-CA",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: SITE_URL,
      email: "braedanchappel@gmail.com",
      jobTitle: SITE_JOB_TITLE,
      description: SITE_DESCRIPTION,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Guelph",
        addressRegion: "ON",
        addressCountry: "CA",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Guelph",
      },
      sameAs: [...PERSON_SAME_AS],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en-CA" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/sf-pro-display" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%23292524'/%3E%3Ctext x='16' y='22' text-anchor='middle' fill='white' font-size='13' font-family='system-ui,sans-serif' font-weight='600'%3EBC%3C/text%3E%3C/svg%3E"
          type="image/svg+xml"
        />
      </head>
      <body className="min-h-screen font-sf-pro antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
