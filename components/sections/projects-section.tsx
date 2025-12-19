'use client'

import ProjectCard from '@/components/project-card'
import { motion } from 'framer-motion'

const PROJECTS = [
  {
    id: 1,
    title: 'Woogyeol',
    description: '커스텀 모바일 청첩장 서비스',
    image: '/wedding-invitation-service.jpg',
    logo: '/woogyeol-logo.png',
    video: '/woogyeol-demo.gif', 
    tech: ['Express.js', 'TypeScript', 'AWS', 'Koyeb', 'MySQL', 'Sentry'],
    link: '/project/1',
    infoBgClass: 'bg-gradient-to-br from-purple-200 to-blue-200', 
    logoPadding: 'p-2',
  },
  {
    id: 2,
    title: 'Minu',
    description: '디지털 디톡스 서비스',
    image: '/digital-detox-service.jpg',
    logo: '/minu-logo.svg',
    videos: ['/minu-demo1.gif', '/minu-demo2.gif'], // 순차 재생
    tech: ['Spring Boot', 'Java', 'AWS', 'MySQL', 'GitHub Actions', 'Docker'],
    link: '/project/2',
    infoBgClass: 'bg-[#7CA3FF]',
    logoPadding: 'p-0',
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.0, ease: "easeOut" } 
  }, 
}

export default function ProjectsSection() {
  return (
    <section data-projects>
      {/* 제목 부분 - 회색 배경 (전체 너비) */}
      <div className="bg-gray-200 pt-12 pb-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 className="text-2xl sm:text-3xl font-bold text-gray-900" variants={itemVariants}>
              My Projects
            </motion.h2>
          </motion.div>
        </div>
      </div>

      {/* 프로젝트 카드 부분 - 옅은 회색 배경 (전체 너비) */}
      <div className="bg-gray-200 pt-12 pb-20">
        <motion.div 
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}