'use client'

import { useRef } from 'react'
import Navigation from '@/components/navigation'
import HeroSection from '@/components/sections/hero-section'
import ProjectsSection from '@/components/sections/projects-section'
import SkillsSection from '@/components/sections/skills-section'
import ExperienceSection from '@/components/sections/experience-section'
import ContactFooter from '@/components/sections/contact-footer'

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)


  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        onNavigate={{
          home: () => scrollToSection(homeRef),
          projects: () => scrollToSection(projectsRef),
          skills: () => scrollToSection(skillsRef),
          experience: () => scrollToSection(experienceRef),
        }}
      />
      
      <main>
        <section ref={homeRef}>
          <HeroSection />
        </section>

        <section ref={projectsRef}>
          <ProjectsSection />
        </section>

        <section ref={skillsRef}>
          <SkillsSection />
        </section>

        <section ref={experienceRef}>
          <ExperienceSection />
        </section>
      </main>

      <ContactFooter />
    </div>
  )
}
