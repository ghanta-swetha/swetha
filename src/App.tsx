"use client"

import { useState, useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Hero from "./components/Hero"
import About from "./components/About"
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import FadeInSection from "./components/Fadeinsection" // <-- import wrapper

function App() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash) {
      setActiveSection(hash)
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 overflow-y-auto">
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <FadeInSection>
            <About />
          </FadeInSection>
        </section>

        <section id="resume">
          <FadeInSection>
            <Resume />
          </FadeInSection>
        </section>

        <section id="portfolio">
          <FadeInSection>
            <Portfolio />
          </FadeInSection>
        </section>

        <section id="services">
          <FadeInSection>
            <Services />
          </FadeInSection>
        </section>

        <section id="testimonials">
          <FadeInSection>
            <Testimonials />
          </FadeInSection>
        </section>

        <section id="contact">
          <FadeInSection>
            <Contact />
          </FadeInSection>
        </section>
      </main>
    </div>
  )
}

export default App
