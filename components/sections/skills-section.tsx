'use client'

import { useState } from 'react'

const SKILLS_BY_CATEGORY = {
  Frontend: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Vite', 'Vercel', 'Docker'],
  Database: ['Supabase', 'PostgreSQL'],
  Other: ['Zustand', 'React-Query', 'REST API', 'Styled-Components']
}

type Category = keyof typeof SKILLS_BY_CATEGORY

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('Frontend')
  const categories = Object.keys(SKILLS_BY_CATEGORY) as Category[]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            기술 스택
          </h2>
          
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {SKILLS_BY_CATEGORY[activeCategory].map((skill) => (
            <div
              key={skill}
              className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-foreground">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
