'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SKILLS_BY_CATEGORY = {
  Frontend: ['JavaScript', 'TypeScript', 'React', 'Next.js'],
  Backend: ['Node.js', 'Express.js', 'SpringBoot', 'JavaScript', 'TypeScript', 'Java', 'AWS EC2', 'AWS S3', 'Git Actions'],
  Tools: ['GitHub', 'Docker', 'Sentry', 'Slack', 'Zep', 'Notion', 'Discord', 'Swagger'],
  Database: ['Mysql', 'MariaDB', 'H2', 'PostgreSQL']
}

type Category = keyof typeof SKILLS_BY_CATEGORY

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

interface SkillsSectionProps {
  titleRef?: React.RefObject<HTMLDivElement>
}

export default function SkillsSection({ titleRef }: SkillsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('Frontend')
  const categories = Object.keys(SKILLS_BY_CATEGORY) as Category[]

  return (
    <section>
      {/* 제목 부분 - 남색 배경 (전체 너비) */}
      <div ref={titleRef as React.RefObject<HTMLDivElement>} className="bg-background pt-12 pb-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <h2 
            className="text-2xl sm:text-3xl font-bold text-white text-center"
          >
            기술 스택
          </h2>
        </div>
      </div>

      {/* 내용 부분 - 남색 배경 (전체 너비) */}
      <div className="bg-background pt-12 pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                  activeCategory === category
                    ? 'bg-white text-background'
                    : 'bg-card text-foreground hover:bg-card/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="min-h-[280px] pb-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {(SKILLS_BY_CATEGORY[activeCategory] || []).map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 hover:shadow-md transition-all"
                  >
                    <p className="font-semibold text-foreground">{skill}</p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
