import type { PortfolioData } from "@/types/portfolio"

// Simulate API call or database fetch
export async function getPortfolioData(): Promise<PortfolioData> {
  // In a real app, this would fetch from a database or CMS
  // For now, we'll return static data

  return {
    profile: {
      name: "John Doe",
      title: "Senior Full Stack Developer",
      description:
        "I create exceptional digital experiences through clean code, innovative solutions, and user-centered design. Specialized in modern web technologies with 5+ years of experience.",
      availability: "Available for new opportunities",
      location: "San Francisco, CA",
      experience: "5+ Years Experience",
      avatar: "/placeholder.svg?height=256&width=256",
      initials: "JD",
      about:
        "I'm a passionate full-stack developer with a strong foundation in modern web technologies. My journey in software development has been driven by curiosity and a commitment to creating meaningful digital experiences that solve real-world problems.",
      stats: {
        experience: "5+ Years",
        projects: "50+ Projects",
      },
      contact: {
        email: "john.doe@email.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
      },
    },
    experiences: [
      {
        title: "Senior Full Stack Developer",
        company: "TechCorp Solutions",
        period: "2022 - Present",
        location: "San Francisco, CA",
        description:
          "Led development of enterprise-scale applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
        technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"],
      },
      {
        title: "Frontend Developer",
        company: "Digital Innovations Inc",
        period: "2020 - 2022",
        location: "New York, NY",
        description:
          "Developed responsive web applications and improved user experience metrics by 40%. Collaborated with design teams to implement pixel-perfect interfaces.",
        technologies: ["React", "Vue.js", "Sass", "JavaScript", "Figma"],
      },
      {
        title: "Junior Developer",
        company: "StartupXYZ",
        period: "2019 - 2020",
        location: "Austin, TX",
        description:
          "Built and maintained web applications using modern frameworks. Participated in agile development processes and code reviews.",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Git"],
      },
    ],
    projects: [
      {
        title: "Enterprise Dashboard",
        description:
          "A comprehensive analytics dashboard for enterprise clients with real-time data visualization and reporting capabilities.",
        image: "/placeholder.svg?height=300&width=500",
        technologies: ["Next.js", "TypeScript", "D3.js", "PostgreSQL", "Redis"],
        github: "#",
        live: "#",
        featured: true,
      },
      {
        title: "E-Commerce Platform",
        description:
          "Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard.",
        image: "/placeholder.svg?height=300&width=500",
        technologies: ["React", "Node.js", "Stripe", "MongoDB", "AWS"],
        github: "#",
        live: "#",
        featured: true,
      },
      {
        title: "Mobile Banking App",
        description:
          "Secure mobile banking application with biometric authentication and real-time transaction processing.",
        image: "/placeholder.svg?height=300&width=500",
        technologies: ["React Native", "Node.js", "PostgreSQL", "JWT", "Docker"],
        github: "#",
        live: "#",
        featured: false,
      },
    ],
    skills: [
      {
        category: "Frontend",
        icon: "Code2",
        skills: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Sass"],
      },
      {
        category: "Backend",
        icon: "Server",
        skills: ["Node.js", "Python", "Express", "FastAPI", "GraphQL", "REST APIs"],
      },
      {
        category: "Database",
        icon: "Database",
        skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase", "Firebase"],
      },
      {
        category: "DevOps & Tools",
        icon: "Globe",
        skills: ["AWS", "Docker", "Git", "CI/CD", "Vercel", "Linux"],
      },
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "Product Manager",
        company: "TechCorp Solutions",
        content:
          "John consistently delivers high-quality code and has excellent problem-solving skills. His attention to detail and collaborative approach make him an invaluable team member.",
        avatar: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Michael Chen",
        role: "CTO",
        company: "Digital Innovations",
        content:
          "Working with John was a pleasure. He brought innovative solutions to complex problems and helped improve our development processes significantly.",
        avatar: "/placeholder.svg?height=60&width=60",
      },
    ],
  }
}
