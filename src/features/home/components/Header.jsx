import { useState, useEffect } from "react"

export default function Header() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      if (scrollPosition < 200) {
        setActiveSection("home")
        return
      }

      for (const section of sections.slice(1)) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }

      const contactElement = document.getElementById("contact")
      if (contactElement) {
        const contactTop = contactElement.offsetTop
        const documentHeight = document.documentElement.scrollHeight
        const windowHeight = window.innerHeight

        if (scrollPosition + windowHeight >= documentHeight - 50) {
          setActiveSection("contact")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="font-serif font-bold text-xl text-primary">Your Name</h1>
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className={`transition-colors ${
                activeSection === "home" ? "text-accent font-medium" : "text-muted-foreground hover:text-primary"
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`transition-colors ${
                activeSection === "about" ? "text-accent font-medium" : "text-muted-foreground hover:text-primary"
              }`}
            >
              About
            </a>
            <a
              href="#skills"
              className={`transition-colors ${
                activeSection === "skills" ? "text-accent font-medium" : "text-muted-foreground hover:text-primary"
              }`}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`transition-colors ${
                activeSection === "projects" ? "text-accent font-medium" : "text-muted-foreground hover:text-primary"
              }`}
            >
              Projects
            </a>
            <a
              href="#experience"
              className={`transition-colors ${
                activeSection === "experience" ? "text-accent font-medium" : "text-muted-foreground hover:text-primary"
              }`}
            >
              Experience
            </a>
            <a
              href="#contact"
              className={`transition-colors ${
                activeSection === "contact" ? "text-accent font-medium" : "text-muted-foreground hover:text-primary"
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}