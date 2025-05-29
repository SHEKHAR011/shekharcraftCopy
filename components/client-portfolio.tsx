"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Calendar,
  Award,
  Users,
  Code2,
  Server,
  Database,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { PortfolioData } from "@/types/portfolio"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

interface ClientPortfolioProps {
  data: PortfolioData
}

export default function ClientPortfolio({ data }: ClientPortfolioProps) {
  const { profile, experiences, projects, skills, testimonials } = data

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-gray-900">
              {profile.name}
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["about", "experience", "projects", "skills", "contact"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-600 hover:text-gray-900 transition-colors capitalize font-medium"
                >
                  {item}
                </motion.button>
              ))}
            </div>
            <Button variant="outline" className="hidden md:flex">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="initial" animate="animate" variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge variant="secondary" className="mb-4">
                  {profile.availability}
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {profile.title.split(" ").slice(0, -1).join(" ")}
                  <span className="text-blue-600"> {profile.title.split(" ").slice(-1)}</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">{profile.description}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => scrollToSection("projects")}>
                  View My Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                  Get In Touch
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {profile.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {profile.experience}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-3xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                  <Avatar className="w-64 h-64">
                    <AvatarImage src={profile.avatar || "/placeholder.svg"} alt={profile.name} />
                    <AvatarFallback className="text-6xl font-bold">{profile.initials}</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{profile.about}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp}>
                <Card className="text-center h-full border-0 shadow-lg">
                  <CardHeader>
                    <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>{profile.stats.experience}</CardTitle>
                    <CardDescription>Professional Experience</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="text-center h-full border-0 shadow-lg">
                  <CardHeader>
                    <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>{profile.stats.projects}</CardTitle>
                    <CardDescription>Successfully Delivered</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="text-center h-full border-0 shadow-lg">
                  <CardHeader>
                    <Code2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Clean Code</CardTitle>
                    <CardDescription>Quality & Best Practices</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Experience</h2>
              <p className="text-lg text-gray-600">My journey through various roles and companies</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={fadeInUp} className="mb-8">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                          <CardDescription className="text-lg font-medium text-blue-600">{exp.company}</CardDescription>
                        </div>
                        <div className="text-sm text-gray-500 mt-2 md:mt-0">
                          <div>{exp.period}</div>
                          <div>{exp.location}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
              <p className="text-lg text-gray-600">A showcase of my recent work and achievements</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                        <CardDescription className="text-gray-600">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <Button size="sm" variant="outline">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                          <Button size="sm">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>

            <motion.div variants={fadeInUp} className="text-center mt-12">
              <Button variant="outline" size="lg">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Skills</h2>
              <p className="text-lg text-gray-600">Technologies and tools I work with</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => {
                const IconComponent =
                  skillGroup.icon === "Code2"
                    ? Code2
                    : skillGroup.icon === "Server"
                      ? Server
                      : skillGroup.icon === "Database"
                        ? Database
                        : Globe
                return (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="border-0 shadow-lg h-full">
                      <CardHeader className="text-center">
                        <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                        <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {skillGroup.skills.map((skill) => (
                            <div key={skill} className="text-sm text-gray-600 text-center">
                              {skill}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What People Say</h2>
              <p className="text-lg text-gray-600">Testimonials from colleagues and clients</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="border-0 shadow-lg h-full">
                    <CardContent className="pt-6">
                      <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">
                            {testimonial.role} at {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-xl text-gray-300 mb-12">
                Ready to bring your next project to life? I'm always interested in discussing new opportunities and
                exciting challenges.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-300">{profile.contact.email}</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">{profile.contact.phone}</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-300">{profile.contact.location}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex justify-center gap-6">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Mail className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-gray-400 text-center">
        <div className="container mx-auto px-6">
          <p>© 2024 {profile.name}. Built with Next.js, TypeScript, and Framer Motion.</p>
        </div>
      </footer>
    </div>
  )
}
