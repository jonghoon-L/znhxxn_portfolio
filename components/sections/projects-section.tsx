'use client'

import ProjectCardHero from '@/components/project-card-hero'
import { motion } from 'framer-motion'

const PROJECTS = [
  {
    id: 3,
    title: 'Roadmap',
    description:
      '입시 관리형 독서실 Roadmap 웹 사이트\n실제 운영 중인 입시 관리형 독서실을 위한 웹 플랫폼입니다. \n일반 사용자를 위한 안내 페이지와, 이스터에그 방식으로 숨겨진 비즈니스 운영 목적의 관리자 페이지를 제공합니다.',
    image: '/digital-detox-service.jpg',
    video: '/로드맵1.gif',
    logo: '/images/roadmap-logo.png',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'Java', 'AWS'],
    link: '/project/3',
    infoBgClass: 'bg-gradient-to-br from-sky-100 via-white to-indigo-100',
    logoPadding: 'p-px',
    /** transform(translate)으로 상대 이동 — scale 없음으로 잘림 완화 */
    mediaPaddingClass: 'p-0',
    mediaInnerClass: 'origin-center -translate-x-5',
  },
  {
    id: 2,
    title: 'Minu',
    description:
      '디지털 디톡스 서비스\nAI가 분석한 맞춤형 리포트로 나의 사용 습관을 점검하고, 친구들과의 챌린지를 통해 건강한 일상을 함께 만들어갈 수 있습니다.',
    image: '/digital-detox-service.jpg',
    logo: '/minu-logo.svg',
    videos: ['/minu-demo1.gif', '/minu-demo2.gif'],
    tech: ['Spring Boot', 'Java', 'AWS', 'MySQL', 'GitHub Actions', 'Docker'],
    link: '/project/2',
    infoBgClass: 'bg-[#C8DFFF]',
    logoPadding: 'p-0',
  },
  {
    id: 1,
    title: 'Woogyeol',
    description:
      '커스텀 모바일 청첩장 서비스\n청첩장의 디자인과 기능을 직접 커스터마이징하여 제작할 수 있으며 \n실시간 포토월, RSVP, 축하 메세지를 통해 하객과 소통할 수 있습니다.',
    image: '/wedding-invitation-service.jpg',
    logo: '/woogyeol-logo.png',
    video: '/woogyeol-demo.gif',
    tech: ['Express.js', 'TypeScript', 'AWS', 'Koyeb', 'MySQL', 'Sentry'],
    link: '/project/1',
    infoBgClass: 'bg-gradient-to-br from-purple-200 to-blue-200',
    logoPadding: 'p-2',
  },
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
    transition: { duration: 1.0, ease: 'easeOut' },
  },
}

interface ProjectsSectionProps {
  titleRef?: React.RefObject<HTMLDivElement>
}

export default function ProjectsSection({ titleRef }: ProjectsSectionProps) {
  return (
    <section data-projects>
      <div ref={titleRef as React.RefObject<HTMLDivElement>} className="bg-gray-200 pt-12 pb-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-gray-900"
              variants={itemVariants}
            >
              My Projects
            </motion.h2>
          </motion.div>
        </div>
      </div>

      <div className="bg-gray-200 pt-12 pb-20">
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="flex flex-col gap-6 sm:gap-7">
            {PROJECTS.map((project) => (
              <motion.div key={project.id} variants={itemVariants} className="w-full">
                <ProjectCardHero project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
