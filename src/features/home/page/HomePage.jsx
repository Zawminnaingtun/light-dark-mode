import React from "react";
// import { useTranslation } from "react-i18next";
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react"
import Header from "../components/Header";

const HomePage = () => {
  // const { t } = useTranslation();
  return (
    <>
      {/* <div>{t("ask")}</div>
      <p>
        {t("lorem")}
      </p> */}
      <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center">
              <img src="/professional-headshot.png" alt="Profile" className="w-28 h-28 rounded-full object-cover" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary">
              Hello, I'm <span className="text-accent">Your Name</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A passionate full-stack developer creating beautiful, functional web experiences that solve real-world
              problems and delight users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a dedicated developer with 5+ years of experience building scalable web applications. I love turning
            complex problems into simple, beautiful designs. When I'm not coding, you'll find me exploring new
            technologies, contributing to open source, or enjoying the outdoors.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Vue.js</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">GraphQL</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Tools & Others</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">Jest</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <Card key={project} className="group hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 rounded-t-lg overflow-hidden">
                  <img
                    src={`/modern-web-application-dashboard-project-.png?height=200&width=350&query=modern web application dashboard project ${project}`}
                    alt={`Project ${project}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif">Project Name {project}</CardTitle>
                  <CardDescription>
                    A modern web application built with React and Node.js, featuring real-time updates and responsive
                    design.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                  </div>
                  <div className="flex gap-2">
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
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: "Senior Frontend Developer",
                company: "Tech Company Inc.",
                period: "2022 - Present",
                description:
                  "Led development of user-facing features for a SaaS platform serving 10k+ users. Improved performance by 40% and implemented new design system.",
              },
              {
                title: "Full Stack Developer",
                company: "Startup Co.",
                period: "2020 - 2022",
                description:
                  "Built and maintained multiple web applications using React, Node.js, and PostgreSQL. Collaborated with design team to implement pixel-perfect UIs.",
              },
              {
                title: "Junior Developer",
                company: "Digital Agency",
                period: "2019 - 2020",
                description:
                  "Developed responsive websites and web applications for various clients. Gained experience in modern web technologies and agile development practices.",
              },
            ].map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="font-serif">{job.title}</CardTitle>
                      <CardDescription className="text-accent font-medium">{job.company}</CardDescription>
                    </div>
                    <Badge variant="outline">{job.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </Button>
            <Button variant="outline" size="lg">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Your Name. Built with React, Next.js, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default HomePage;
