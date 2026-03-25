'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'

export interface ProjectHeroData {
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
  /** 미디어 영역 패딩 (기본 p-6). 작을수록 썸네일이 더 크게 보임 */
  mediaPaddingClass?: string
  /** 미디어 영역 최소 높이 (기본 19/23/28rem) */
  mediaMinHeightClass?: string
  /** 미디어 flex 정렬 (기본 items-center justify-center) */
  mediaFlexClass?: string
  /** 왼쪽 텍스트 열 flex (기본 lg:flex-[3]) */
  contentColumnClass?: string
  /** 오른쪽 미디어 열 flex (기본 lg:flex-[2]) */
  mediaColumnClass?: string
  /** 미디어 래퍼 추가 클래스 (scale은 잘림 유발하므로 비권장) */
  mediaInnerClass?: string
  /** object-contain 뒤에 붙는 object-position 등 */
  mediaObjectClass?: string
}

interface ProjectCardHeroProps {
  project: ProjectHeroData
}

/** 첫 문단/첫 문장(메인)과 나머지(보조)로 나눔 — 줄바꿈 우선, 없으면 마침표+공백 기준 */
function splitProjectDescription(text: string): { lead: string; rest: string | null } {
  const trimmed = text.trim()
  if (!trimmed) return { lead: '', rest: null }

  const nlParts = trimmed
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
  if (nlParts.length >= 2) {
    return { lead: nlParts[0], rest: nlParts.slice(1).join('\n') }
  }

  const single = nlParts[0] ?? trimmed
  const m = single.match(/^(.+?[.!?。])(?:\s+)([\s\S]+)$/)
  if (m?.[2]?.trim()) {
    return { lead: m[1].trim(), rest: m[2].trim() }
  }

  return { lead: single, rest: null }
}

export default function ProjectCardHero({ project }: ProjectCardHeroProps) {
  const isColoredSection = !!project.infoBgClass
  const videoRef = useRef<HTMLVideoElement>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const videos = project.videos || (project.video ? [project.video] : [])
  const currentVideo = videos[currentVideoIndex]
  const isGif = currentVideo?.toLowerCase().endsWith('.gif')

  const { lead: descLead, rest: descRest } = splitProjectDescription(project.description)

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

  const descLeadClass = 'text-gray-900'
  const descRestClass = isColoredSection ? 'text-black/70' : 'text-gray-600'

  const mediaPadding = project.mediaPaddingClass ?? 'p-5 sm:p-6'
  const mediaMinH =
    project.mediaMinHeightClass ?? 'min-h-[19rem] sm:min-h-[23rem] lg:min-h-[28rem]'
  const mediaFlex = project.mediaFlexClass ?? 'items-center justify-center'
  const contentCol = project.contentColumnClass ?? 'lg:flex-[3]'
  const mediaCol = project.mediaColumnClass ?? 'lg:flex-[2]'
  const mediaInner = project.mediaInnerClass ?? ''
  const mediaObject = project.mediaObjectClass ?? ''

  return (
    <div
      className={`group rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col-reverse lg:flex-row lg:items-stretch min-h-0 w-full overflow-hidden ${
        isColoredSection
          ? `${project.infoBgClass} border-black/10`
          : 'bg-gray-200 border-gray-300'
      }`}
    >
      {/* 왼쪽: 제목·설명·기술·버튼을 한 덩어리로 */}
      <div
        className={`flex flex-col w-full min-w-0 justify-center gap-6 sm:gap-7 p-6 sm:p-7 lg:pl-9 lg:pr-7 lg:py-8 ${contentCol}`}
      >
        <div className="flex items-start gap-3 sm:gap-4 min-w-0">
          <div
            className={`relative w-24 h-24 rounded-xl overflow-hidden shrink-0 shadow-sm ${
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
                className={`w-full h-full flex items-center justify-center text-sm font-bold ${
                  isColoredSection ? 'text-gray-700' : 'text-gray-500'
                }`}
              >
                {project.title.slice(0, 2)}
              </div>
            )}
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            <h3 className="text-2xl sm:text-3xl font-bold leading-tight text-gray-900 min-w-0">
              {project.title}
            </h3>
            {descRest ? (
              <>
                <p
                  className={`text-base font-medium leading-relaxed max-w-xl ${descLeadClass}`}
                >
                  {descLead}
                </p>
                <p
                  className={`text-sm leading-relaxed max-w-xl whitespace-pre-line ${descRestClass}`}
                >
                  {descRest}
                </p>
              </>
            ) : (
              <p
                className={`text-base font-medium leading-relaxed max-w-xl whitespace-pre-line ${descLeadClass}`}
              >
                {descLead}
              </p>
            )}
          </div>
        </div>

        <div className="ml-3 sm:ml-5 z-10 mt-4 sm:mt-5 flex w-full min-w-0 flex-col translate-y-2 sm:translate-y-3">
          <div className="flex w-full min-w-0 flex-wrap gap-1.5 sm:gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full ${
                  isColoredSection
                    ? 'bg-white/90 text-gray-900 shadow-sm border border-black/5'
                    : 'bg-white text-gray-900 border border-gray-300 shadow-sm'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 sm:mt-8 w-full min-w-0 pr-10 sm:pr-14">
            <Link href={project.link || `/project/${project.id}`} className="block w-full min-w-0">
              <button
                type="button"
                className="w-full py-1 rounded-lg font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer hover:scale-[1.02] shadow-sm bg-white text-gray-900 border border-gray-200/90 hover:bg-gray-50 leading-tight"
              >
                자세히 보기
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 오른쪽: 미디어 — 기본 패딩·최소 높이로 프레임 확보, object-contain */}
      <div
        className={`relative w-full min-w-0 overflow-hidden flex ${mediaCol} ${mediaFlex} ${mediaMinH} ${mediaPadding}`}
      >
        <div className={`relative w-full h-full min-h-0 ${mediaInner}`}>
          {currentVideo ? (
            isGif ? (
              <Image
                key={`${currentVideo}-${currentVideoIndex}`}
                src={currentVideo}
                alt={project.title}
                fill
                className={`object-contain ${mediaObject} transition-opacity duration-500`.trim()}
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
                className={`absolute inset-0 w-full h-full object-contain ${mediaObject} transition-opacity duration-500`.trim()}
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
              className={`object-contain ${mediaObject} transition-opacity duration-500 group-hover:opacity-95`.trim()}
            />
          )}
        </div>
      </div>
    </div>
  )
}
