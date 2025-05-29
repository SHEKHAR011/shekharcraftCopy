export interface Profile {
  name: string
  title: string
  description: string
  availability: string
  location: string
  experience: string
  avatar: string
  initials: string
  about: string
  stats: {
    experience: string
    projects: string
  }
  contact: {
    email: string
    phone: string
    location: string
  }
}

export interface Experience {
  title: string
  company: string
  period: string
  location: string
  description: string
  technologies: string[]
}

export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  live: string
  featured: boolean
}

export interface SkillGroup {
  category: string
  icon: string
  skills: string[]
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

export interface PortfolioData {
  profile: Profile
  experiences: Experience[]
  projects: Project[]
  skills: SkillGroup[]
  testimonials: Testimonial[]
}
