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
    video: '/woogyeol-demo.mp4', 
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'React-Query', 'Zustand'],
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
    tech: ['Next.js', 'Firebase', 'Recoil', 'TypeScript', 'Tailwind CSS'],
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
    // [수정] bg-secondary/30 삭제함 -> 이제 투명해져서 글로벌 배경색(진회색)이 보임!
    <section data-projects className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="mb-16 text-center" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}