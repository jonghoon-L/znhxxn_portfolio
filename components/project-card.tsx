'use client'

import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    video?: string; // [추가] video는 있을 수도 있고 없을 수도 있음
    logo?: string
    tech: string[]
    link?: string
    infoBgClass?: string;
    logoPadding?: string;
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isColoredSection = !!project.infoBgClass;

  return (
    <div className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      
      {/* 1. 상단 미디어 영역 (영상 or 이미지) */}
      <div className="relative h-[24rem] w-full overflow-hidden bg-zinc-800">
        {/* video가 있으면 video 태그를, 없으면 Image 태그를 렌더링 */}
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover" // 꽉 차게
          />
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      {/* 내용 영역 */}
      <div className={`p-5 pt-2 flex flex-col flex-grow ${isColoredSection ? project.infoBgClass : ''}`}>
        
        {/* 2. 로고 및 서비스 명/설명 영역 */}
        <div className="flex items-center gap-4 mt-2 mb-5">
          
          {/* 로고 박스 */}
          <div className={`relative w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-sm ${isColoredSection ? 'bg-white/80 border-white/60' : 'bg-zinc-800 border-zinc-700'}`}>
            {project.logo ? (
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                fill
                className={`object-contain ${project.logoPadding || 'p-1'}`} 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs text-zinc-500">Logo</div>
            )}
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-900 leading-tight mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-gray-700 leading-snug">
              {project.description}
            </p>
          </div>
        </div>

        {/* 3. 기술 스택 (뱃지) */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span 
              key={tech} 
              className={`px-3 py-1 text-xs font-medium rounded-full ${isColoredSection ? 'bg-white text-black shadow-sm' : 'bg-zinc-800 text-zinc-300'}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 4. 자세히 보기 버튼 (하단 고정) */}
        <div className="mt-auto">
          <Link href={project.link || `/project/${project.id}`} className="block">
            <button className={`w-full py-1 rounded-lg font-bold text-sm transition-colors shadow-sm ${
                isColoredSection 
                  ? 'bg-white text-black hover:bg-white/80' 
                  : 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700'
              }`}>
              자세히 보기
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}