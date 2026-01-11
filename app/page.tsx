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
  const projectsTitleRef = useRef<HTMLDivElement>(null)
  const skillsTitleRef = useRef<HTMLDivElement>(null)
  const experienceTitleRef = useRef<HTMLDivElement>(null)


  const scrollToTitle = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      const elementTop = ref.current.getBoundingClientRect().top + window.pageYOffset
      const navHeight = 64 // 네비게이션 바 높이
      const offsetPosition = elementTop - navHeight + 4 // 네비게이션 바 하단과 섹션 경계선이 겹치도록 (4px 아래로 조정)
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        onNavigate={{
          home: () => homeRef.current?.scrollIntoView({ behavior: 'smooth' }),
          projects: () => scrollToTitle(projectsTitleRef),
          skills: () => scrollToTitle(skillsTitleRef),
          experience: () => scrollToTitle(experienceTitleRef),
        }}
      />
      
      <main>
        <section ref={homeRef}>
          <HeroSection onProjectsClick={() => scrollToTitle(projectsTitleRef)} />
        </section>

        <ProjectsSection titleRef={projectsTitleRef} />

        <SkillsSection titleRef={skillsTitleRef} />

        <ExperienceSection titleRef={experienceTitleRef} />
      </main>

      <ContactFooter />
    </div>
  )
}
