"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  SiReact,
  SiNextdotjs,
  SiFigma,
  SiVercel,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiGithub,
  SiCplusplus,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiOpengl,
  SiShopify,
  SiLinkedin
} from "react-icons/si"
import { VscCode } from "react-icons/vsc"
import { Download, Mail, MapPin, Phone, ExternalLink, Code, Briefcase, GraduationCap } from "lucide-react"
import UnicornStudioEmbed from "@/components/UnicornStudioEmbed"

export default function Home() {
  const handleDownloadResume = async (event: React.MouseEvent<HTMLButtonElement>) => {
    // Add click animation
    const button = event.currentTarget
    button.style.transform = 'scale(0.95)'
    button.style.transition = 'transform 0.1s ease'

    setTimeout(() => {
      button.style.transform = 'scale(1)'
    }, 100)

    // Force download using fetch
    try {
      const response = await fetch('/ZorianHudym.pdf')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'ZorianHudym-Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download failed:', error)
    }
  }

  const handleEmailContact = () => {
    window.open('mailto:zorian.hudym@gmail.com?subject=Opportunity Inquiry&body=Hi Zorian,%0D%0A%0D%0AI came across your portfolio and would like to discuss...%0D%0A%0D%0ABy the way, the website looks great!', '_blank')
  }

  const technologies = [
    { name: "React", icon: SiReact, color: "text-blue-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-600 dark:text-gray-300" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
    { name: "OpenGL", icon: SiOpengl, color: "text-blue-400" },
    { name: "GitHub", icon: SiGithub, color: "text-gray-800 dark:text-gray-200" },
    { name: "Figma", icon: SiFigma, color: "text-purple-500" },
    { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
    { name: "Photoshop", icon: SiAdobephotoshop, color: "text-blue-700" },
    { name: "Premiere Pro", icon: SiAdobepremierepro, color: "text-purple-700" },
    { name: "Shopify", icon: SiShopify, color: "text-green-600" },
    { name: "VS Code", icon: VscCode, color: "text-blue-500" },
  ]

  const projects = [
    {
      title: "3D Interactive Software",
      description: "Comprehensive 3D graphics engine built from scratch in C++ using OpenGL over 4 months for CS 409.",
      technologies: ["C++", "OpenGL", "Visual Studio"],
      features: [
        "Camera controls and 3D rendering pipeline",
        "Physics simulation and vector mathematics",
        "AI character behavior and pathfinding algorithms",
        "Performance optimizations for smooth frame rates"
      ]
    },
    {
      title: "Ecommerce Web Store",
      description: "Full-stack web store developed as a capstone project using the MERN tech stack.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      features: [
        "Complete ecommerce functionality",
        "Server management and database design",
        "Product catalog and inventory management",
        "User authentication and order processing"
      ]
    }
  ]

  const experiences = [
    {
      title: "Store Attendant",
      company: "Handmade Saskatchewan",
      period: "Jun 2024 — Jun 2025",
      location: "Regina, SK",
      highlights: [
        "Achieved customer satisfaction by recommending products and processing orders",
        "Managed online Shopify store and processed delivery orders",
        "Maintained accurate inventory records of 100+ locally produced products",
        "Trained new staff members on store policies and customer service"
      ]
    },
    {
      title: "Math Instructor",
      company: "Mathnasium",
      period: "Nov 2020 — Nov 2021",
      location: "Regina, SK",
      highlights: [
        "Provided personalized math tutoring to children ages 6-14",
        "Collaborated with instructors to offer variety of teaching methods",
        "Inspired students in problem solving and enriched high-achieving students"
      ]
    },
    {
      title: "Shipping Assistant",
      company: "Meest",
      period: "Jan 2016 — Jan 2020",
      location: "Regina, SK",
      highlights: [
        "Prepared, stored, and shipped hundreds of parcels to Ukraine and Eastern Europe",
        "Ensured compliance with shipping regulations and documentation standards",
        "Demonstrated ability to handle physically demanding work"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            {/* Header Content - Fixed to Left */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
                Zorian Hudym
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 font-light">
                Computer Science Graduate & Software Developer
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Recent BSc Computer Science graduate with diverse experience spanning education, retail, and development.
                Passionate about creating innovative solutions with modern technologies.
              </p>

              {/* Contact Information - Two Row Layout */}
              <div className="mb-8 space-y-3">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Regina, SK, Canada</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>(306) 550-4380</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>zorian.hudym@gmail.com</span>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/zorianhudym/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <SiLinkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/Brunsos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <SiGithub className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="font-medium" onClick={handleDownloadResume}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                <Button size="lg" variant="outline" className="font-medium" onClick={handleEmailContact}>
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Unicorn Studio Animation - Right Side - Hidden on mobile */}
            <div className="hidden lg:block order-first lg:order-last flex justify-center lg:justify-end">
              <div className="w-full h-[600px] flex items-center justify-center">
                <UnicornStudioEmbed
                  projectId="OzOEPvbvwDYvt8F4Ao95"
                  darkProjectId="J9H9FLiwiigfRplzx4qL"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Technologies & Tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced in modern development tools and technologies across various domains
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center p-6 rounded-lg hover:bg-accent transition-colors duration-200"
              >
                <tech.icon className={`h-12 w-12 mb-3 ${tech.color} group-hover:scale-110 transition-transform duration-200`} />
                <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Code className="h-8 w-8" />
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing key projects that demonstrate technical skills and problem-solving abilities
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-medium">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Briefcase className="h-8 w-8" />
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diverse background spanning education, retail, and technical development
            </p>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="group hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-base font-medium text-foreground">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <GraduationCap className="h-8 w-8" />
              Education
            </h2>
          </div>
          <Card className="max-w-2xl mx-auto hover:shadow-md transition-shadow duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">
                Bachelor of Science in Computer Science
              </CardTitle>
              <CardDescription className="text-lg">
                University of Regina, Regina SK
              </CardDescription>
              <div className="text-muted-foreground font-medium">
                September 2019 — April 2025
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Let&apos;s Connect
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in discussing new opportunities, innovative projects, 
            or just having a conversation about technology and development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-medium" onClick={handleEmailContact}>
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </Button>
            <Button size="lg" variant="outline" className="font-medium" onClick={handleDownloadResume}>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-medium"
              onClick={() => window.open('https://www.linkedin.com/in/zorianhudym/', '_blank')}
            >
              <SiLinkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-medium"
              onClick={() => window.open('https://github.com/Brunsos', '_blank')}
            >
              <SiGithub className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2025 Zorian Hudym. Built with Next.js, TypeScript, and my local library&apos;s WiFi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}