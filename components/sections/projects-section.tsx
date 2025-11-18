'use client'

import Link from 'next/link'
import { ExternalLink, ChevronRight } from 'lucide-react'
import ProjectCard from '@/components/project-card'

const PROJECTS = [
  {
    id: 1,
    title: 'HMH - 소소공인을 위한 육아광고 원스톱 서비스',
    description: '소상공인을 위한 육아광고 및 원스톱 서비스',
    image: '/flower-delivery.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Vidu'],
    period: '2024.08 ~ 2025.02',
    highlights: [
      'React와 Express 배우 닫시 Fullstack 개발 경험',
      'Woogyeol과 함께 팀 프로젝트 진행'
    ]
  },
  {
    id: 2,
    title: 'Woogyeol - 우리 결혼했어요',
    description: '커스텀 모바일 청첩장 서비스',
    image: '/wedding-invitation-service.jpg',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'React-Query', 'Zustand'],
    period: '2024.11 ~ 진행중',
    highlights: [
      'React 및 TypeScript 활용한 프론트엔드 개발',
      'Tailwind CSS로 반응형 디자인 구현'
    ]
  }
]

export default function ProjectsSection() {
  return (
    <section data-projects className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            My Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
