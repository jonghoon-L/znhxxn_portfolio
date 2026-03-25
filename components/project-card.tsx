'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    video?: string
    videos?: string[]
    logo?: string
    tech: string[]
    link?: string
    infoBgClass?: string
    logoPadding?: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isColoredSection = !!project.infoBgClass
  const videoRef = useRef<HTMLVideoElement>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const videos = project.videos || (project.video ? [project.video] : [])
  const currentVideo = videos[currentVideoIndex]
  const isGif = currentVideo?.toLowerCase().endsWith('.gif')

  useEffect(() => {
    if (videoRef.current && currentVideo && !isGif) {
      videoRef.current.playbackRate = 2.0
    }
  }, [currentVideo, isGif])

  useEffect(() => {
    if (videos.length <= 1) return
    if (!currentVideo) return

    const currentIsGif = currentVideo.toLowerCase().endsWith('.gif')

    if (currentIsGif) {
      const gifDurations = [15000, 25000]
      const duration = gifDurations[currentVideoIndex] || 20000
      const timer = setTimeout(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
      }, duration)
      return () => clearTimeout(timer)
    }

    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
    }

    video.addEventListener('ended', handleEnded)
    return () => video.removeEventListener('ended', handleEnded)
  }, [currentVideoIndex, videos.length, currentVideo])

  const descClass = isColoredSection ? 'text-gray-800' : 'text-gray-600'

  return (
    <div
      className={`group rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full ${
        isColoredSection
          ? `${project.infoBgClass} border-black/10`
          : 'bg-gray-200 border-gray-300'
      }`}
    >
      {/* 상단 미디어: 배경 투명, 패딩으로 여백 */}
      <div className="relative h-[24rem] w-full min-h-0 overflow-hidden flex items-center justify-center p-6">
        <div className="relative w-full h-full min-h-0">
          {currentVideo ? (
            isGif ? (
              <Image
                key={`${currentVideo}-${currentVideoIndex}`}
                src={currentVideo}
                alt={project.title}
                fill
                className="object-contain transition-opacity duration-500"
                unoptimized
                priority={currentVideoIndex === 0}
              />
            ) : (
              <video
                key={currentVideo}
                ref={videoRef}
                src={currentVideo}
                autoPlay
                muted
                playsInline
                loop={videos.length === 1}
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500"
                onLoadedMetadata={(e) => {
                  e.currentTarget.playbackRate = 2.0
                }}
              />
            )
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain transition-opacity duration-500 group-hover:opacity-95"
            />
          )}
        </div>
      </div>

      {/* 내용 영역 (배경은 상위 카드와 동일 — 별도 배경 없음) */}
      <div
        className={`p-5 pt-2 flex flex-col flex-grow border-t ${
          isColoredSection ? 'border-black/5' : 'border-gray-300/80'
        }`}
      >
        <div className="flex items-center gap-4 mt-2 mb-5">
          <div
            className={`relative w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-sm ${
              isColoredSection
                ? 'bg-white/80 border border-white/60'
                : 'bg-white border border-gray-300'
            }`}
          >
            {project.logo ? (
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                fill
                className={`object-contain ${project.logoPadding || 'p-1'}`}
              />
            ) : (
              <div
                className={`w-full h-full flex items-center justify-center text-xs ${
                  isColoredSection ? 'text-gray-700' : 'text-gray-500'
                }`}
              >
                Logo
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold leading-tight mb-1 text-gray-900">
              {project.title}
            </h3>
            <p className={`text-sm leading-snug ${descClass}`}>{project.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                isColoredSection
                  ? 'bg-white/90 text-gray-900 shadow-sm border border-black/5'
                  : 'bg-white text-gray-900 border border-gray-300 shadow-sm'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <Link href={project.link || `/project/${project.id}`} className="block">
            <button className="w-full py-1 rounded-lg font-bold text-sm transition-all duration-200 cursor-pointer hover:scale-[1.02] shadow-sm bg-white text-gray-900 border border-gray-200/90 hover:bg-gray-50 leading-tight">
              자세히 보기
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
