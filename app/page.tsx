import type { Metadata } from "next"
import ClientPortfolio from "@/app/client-page"
import { getPortfolioData } from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: "John Doe - Senior Full Stack Developer",
  description:
    "Professional portfolio of John Doe, a Senior Full Stack Developer with 5+ years of experience in React, Next.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "John Doe - Senior Full Stack Developer",
    description: "Professional portfolio showcasing modern web development projects and expertise",
    url: "https://johndoe.dev",
    siteName: "John Doe Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "John Doe Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe - Senior Full Stack Developer",
    description: "Professional portfolio showcasing modern web development projects and expertise",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default async function HomePage() {
  // Fetch data on the server
  const portfolioData = await getPortfolioData()

  return <ClientPortfolio data={portfolioData} />
}
