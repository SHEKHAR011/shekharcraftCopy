import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://johndoe.dev"),
  title: {
    default: "John Doe - Senior Full Stack Developer",
    template: "%s | John Doe",
  },
  description:
    "Professional portfolio of John Doe, a Senior Full Stack Developer with 5+ years of experience in React, Next.js, and modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Portfolio",
    "JavaScript",
    "Node.js",
  ],
  authors: [{ name: "John Doe", url: "https://johndoe.dev" }],
  creator: "John Doe",
  publisher: "John Doe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johndoe.dev",
    siteName: "John Doe Portfolio",
    title: "John Doe - Senior Full Stack Developer",
    description: "Professional portfolio showcasing modern web development projects and expertise",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "John Doe Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe - Senior Full Stack Developer",
    description: "Professional portfolio showcasing modern web development projects and expertise",
    images: ["/og-image.jpg"],
    creator: "@johndoe",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://johndoe.dev" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
