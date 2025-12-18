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
    video?: string; // 단일 비디오 (하위 호환성)
    videos?: string[]; // 여러 비디오 배열 (순차 재생)
    logo?: string
    tech: string[]
    link?: string
    infoBgClass?: string;
    logoPadding?: string;
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isColoredSection = !!project.infoBgClass;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  // 여러 비디오가 있으면 videos 배열 사용, 없으면 video 단일 사용
  const videos = project.videos || (project.video ? [project.video] : []);
  const currentVideo = videos[currentVideoIndex];
  const isGif = currentVideo?.toLowerCase().endsWith('.gif');

  // 영상 속도 조절 (2.0배속 - 더 빠르게) - 비디오 파일만 (GIF는 속도 조절 안함)
  useEffect(() => {
    if (videoRef.current && currentVideo && !isGif) {
      videoRef.current.playbackRate = 2.0; // 2.0배속
    }
  }, [currentVideo, isGif]);

  // 여러 비디오 순차 재생 처리
  useEffect(() => {
    if (videos.length <= 1) return; // 비디오가 1개 이하면 처리 불필요
    if (!currentVideo) return;

    const currentIsGif = currentVideo.toLowerCase().endsWith('.gif');

    if (currentIsGif) {
      // GIF의 경우 Image 태그로 로드되므로 정확한 재생 시간을 알 수 없음
      // 충분히 긴 타이머를 사용하여 GIF가 끝까지 재생되도록 함
      // 각 GIF마다 다른 시간을 설정할 수 있도록 인덱스 기반으로 처리
      const gifDurations = [15000, 25000]; // demo1: 15초, demo2: 25초 (demo2가 더 길어서 늘림)
      const duration = gifDurations[currentVideoIndex] || 20000;
      
      console.log(`GIF ${currentVideoIndex + 1} 재생 시작, ${duration}ms 후 전환`);
      
      const timer = setTimeout(() => {
        console.log(`GIF ${currentVideoIndex + 1} 재생 완료, 다음으로 전환`);
        setCurrentVideoIndex((prev) => {
          const next = (prev + 1) % videos.length;
          console.log(`다음 비디오 인덱스: ${next}`);
          return next;
        });
      }, duration);

      return () => {
        console.log(`타이머 정리: GIF ${currentVideoIndex + 1}`);
        clearTimeout(timer);
      };
    } else {
      // 비디오의 경우 ended 이벤트로 정확히 처리
      const video = videoRef.current;
      if (!video) return;

      const handleEnded = () => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
      };

      video.addEventListener('ended', handleEnded);
      return () => video.removeEventListener('ended', handleEnded);
    }
  }, [currentVideoIndex, videos.length, currentVideo]);

  return (
    <div className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      
      {/* 1. 상단 미디어 영역 (영상/GIF or 이미지) */}
      <div className="relative h-[24rem] w-full overflow-hidden bg-white flex items-center justify-center">
        {/* video가 있으면 video/GIF 태그를, 없으면 Image 태그를 렌더링 */}
        {currentVideo ? (
          // GIF 파일인 경우 Image 태그 사용, 그 외는 video 태그 사용
          isGif ? (
            <Image
              key={`${currentVideo}-${currentVideoIndex}`} // 인덱스 포함하여 강제 리렌더링
              src={currentVideo}
              alt={project.title}
              fill
              className="object-contain transition-opacity duration-500"
              unoptimized // GIF는 최적화 비활성화
              priority={currentVideoIndex === 0} // 첫 번째만 priority
            />
          ) : (
            <video
              key={currentVideo} // key를 변경하여 강제 리렌더링
              ref={videoRef}
              src={currentVideo}
              autoPlay
              muted
              playsInline
              loop={videos.length === 1} // 단일 비디오만 loop, 여러 비디오는 순차 재생
              className="w-full h-full object-contain transition-opacity duration-500"
              onLoadedMetadata={(e) => {
                // 영상 메타데이터 로드 시 속도 설정
                const video = e.currentTarget;
                video.playbackRate = 2.0; // 2.0배속 (더 빠르게)
              }}
            />
          )
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