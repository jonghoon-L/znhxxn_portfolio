'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const PROJECT_DETAILS: Record<string, any> = {
  '1': {
    title: 'Woogyeol - 우리 결혼해요',
    subtitle: '커스텀 모바일 청첩장',
    period: '2025.01 ~ 2025.07',
    description: '커스텀 모바일 청첩장 서비스',

    overview: `커스텀 모바일 청첩장 서비스
청첩장의 디자인과 기능을 직접 커스터마이징하여 제작할 수 있으며 
실시간 포토월, RSVP, 축하 메세지를 통해 하객과 소통할 수 있습니다.`,
    
    tech: ['Express.js', 'TypeScript', 'AWS', 'Koyeb', 'MySQL', 'Sentry'],
    
    features: [
      {
        title: '청첩장 관리',
        description: '나만의 청첩장을 생성, 수정, 조회, 삭제할 수 있습니다.'
      },
      {
        title: '3단계 입력과 8가지 선택 기능',
        description: '기본 정보, 선택 기능, 테마 설정을 통해 완벽한 청첩장 제작'
      },
      {
        title: 'RSVP 관리',
        description: '참석여부 데이터를 받고 관리하며 엑셀 파일로 다운로드 가능'
      },
      {
        title: '실시간 포토월',
        description: '하객들로부터 실시간 포토월 데이터를 받을 수 있습니다.'
      }
    ],

    challenges: [
      {
        title: '다양한 기술 스택 활용',
        solution: '기존에 경험해보지 못한 라이브러리, 인프라, 번들러 등을 적극 활용'
      },
      {
        title: '사용자 친화적 서비스',
        solution: '소셜 로그인, 자동 저장, 미리 보기 기능 구현'
      },
      {
        title: '코드 그라운드 룰 기반 협업',
        solution: '커밋 컨벤션 및 브랜치 전략을 사전에 정의하여 원활한 협업 진행'
      }
    ],

    outcomes: [
      '완성된 Fullstack 프로젝트로 엔드-투-엔드 개발 경험 확보',
      '팀 프로젝트를 통해 협업 및 커뮤니케이션 능력 향상',
      '프로덕션 배포 경험 및 실제 사용자 피드백 수집'
    ]
  },
  '2': {
    title: 'Minu - 디지털 디톡스 서비스',
    subtitle: '디지털 디톡스 서비스',
    period: '2024.11 ~ 진행중',
    description: 'Minu는 디지털 디톡스 서비스로서 개인의 스크린타임을 조회하며 관리할 수 있습니다.',

    overview: `Minu는 개인의 스크린타임을 관리할 수 있는 디지털 디톡스 서비스입니다. 
AI 리포트 기능을 통해 자신의 생활 습관에 대해 피드백을 받을 수 있고, 친구들과 디톡스 챌린지를 하며 함께 동기부여를 만들어갈 수 있습니다.`,
    
    tech: ['Spring Boot', 'Java', 'AWS', 'MySQL', 'GitHub Actions'],
    
    features: [
      {
        title: '스크린타임 관리',
        description: '개인의 스크린타임을 조회하고 관리할 수 있는 기능'
      },
      {
        title: 'AI 리포트',
        description: '자신의 생활 습관에 대해 AI 피드백을 받을 수 있는 기능'
      },
      {
        title: '디톡스 챌린지',
        description: '친구들과 디톡스 챌린지를 통해 동기부여를 함께 공유하는 기능'
      }
    ],

    challenges: [
      {
        title: '스크린타임 데이터 수집',
        solution: '모바일 기기와의 연동을 통한 정확한 데이터 수집'
      },
      {
        title: 'AI 리포트 생성',
        solution: '사용자 데이터를 분석하여 유의미한 피드백 제공'
      },
      {
        title: '챌린지 시스템 구현',
        solution: '친구들과의 소셜 기능을 통한 동기부여 시스템 구축'
      }
    ],

    outcomes: [
      '디지털 웰빙 서비스 개발 경험 확보',
      'AI 기술을 활용한 데이터 분석 경험',
      '소셜 기능을 포함한 서비스 설계 경험'
    ]
  },
  '3': {
    title: 'Roadmap - 입시 관리형 독서실 웹 사이트',
    subtitle: '입시 관리형 독서실 웹 플랫폼',
    period: '2025.10 ~ 2026.07',
    description: '입시 관리형 독서실 Roadmap 웹 사이트',

    overview: `Roadmap은 실제 입시 관리형 독서실의 비즈니스 관리를 돕는 웹 플랫폼입니다.
일반 안내 페이지를 통해 예비 등록자들에게 시설과 시스템 정보를 제공할 수 있으며, 특정 이스터에그로 접속하는 숨겨진 관리자 페이지를 통해 운영 업무를 관리할 수 있습니다.`,

    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'Java', 'AWS'],

    features: [
      {
        title: '클라이언트 페이지',
        description: '시설 소개, 위치 지도, 시스템 안내 등 다양한 정보를 제공합니다.',
        video: '/로드맵2',
      },
      {
        title: '이용 후기',
        description: '관리자가 승인한 후기들을 조회할 수 있으며 개인 후기를 작성할 수 있습니다.',
        video: '/로드맵3',
      },
      {
        title: '학업 자료',
        description: '선생님들이 정리한 자료를 pdf로 다운받을 수 있습니다.',
        video: '/로드맵4',
      },
      {
        title: '상담 신청',
        description: '본인 인증 하에 원하는 관, 날짜, 시간에 상담을 신청할 수 있습니다.',
        video: '/로드맵5',
      },
      {
        title: '등록 예약',
        description: '본인 인증 하에 원하는 관, 시즌에 등록을 예약할 수 있습니다.',
        video: '/로드맵6',
      },
      {
        title: '관리자 시스템',
        description: '숨겨진 이스터에그를 통해 진입할 수 있으며, 다양한 비즈니스 업무를 수행할 수 있습니다.',
        video: '/로드맵7',
      },
    ],

    challenges: [
      {
        title: '공개·관리 영역 분리',
        problem:
          '일반 사용자에게 노출되는 범위와 운영·관리 기능의 접근 경로를 어떻게 나눌지 초기 설계가 필요했습니다.',
        solution:
          '사용자 안내와 운영 기능의 접근 경로를 명확히 나누고, 관리자 진입을 노출 최소화 방식으로 설계했습니다.',
      },
      {
        title: '풀스택 연동',
        problem: 'Next.js 프론트엔드와 Spring Boot API 간 계약·환경 설정을 일관되게 맞추는 과제가 있었습니다.',
        solution: 'Next.js와 Spring Boot 간 API 계약을 정리하고 환경별 설정을 분리했습니다.',
      },
      {
        title: '운영 환경 안정성',
        problem: '실제 운영 트래픽과 배포 흐름에 맞는 인프라 구성이 필요했습니다.',
        solution: 'AWS 인프라와 배포 파이프라인을 정리해 실사용 트래픽에 대응했습니다.',
      },
    ],

    outcomes: [
      '실제 운영 독서실을 위한 웹 플랫폼 기획·구현 경험',
      'Next.js와 Spring Boot를 연계한 풀스택 구성 경험',
      '공개 서비스와 운영 도구를 분리한 정보 구조 설계 경험',
    ],
  },
}

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const projectId = params.id as string
  const project = PROJECT_DETAILS[projectId]

  if (!project) {
    return (
      <div className="min-h-screen bg-background pt-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">프로젝트를 찾을 수 없습니다</h1>
          <Link href="/" className="text-primary hover:text-primary/80">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  // 우결·Minu·Roadmap 프로젝트는 동일 계열의 특수 레이아웃 (Roadmap 우측은 Minu와 동일 5/3 슬롯 + 정적 이미지)
  const isWoogyeol = projectId === '1'
  const isMinu = projectId === '2'
  const isRoadmap = projectId === '3'
  const isSpecialLayout = isWoogyeol || isMinu || isRoadmap
  const isMinuLike = isMinu || isRoadmap

  // Minu 이미지 캐러셀
  const minuImages = Array.from({ length: 16 }, (_, i) => `/${i + 1}.jpg`)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? minuImages.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === minuImages.length - 1 ? 0 : prev + 1))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen">
      {isSpecialLayout ? (
        <>
          {/* 상단 섹션 - 남색 배경, 흰색 글씨 */}
          <div className="bg-background text-white px-4 sm:px-6 lg:px-8 pt-8 pb-8">
            <motion.div 
              className="max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ willChange: 'opacity, transform' }}
            >
              {/* 돌아가기 버튼 */}
              <motion.div variants={itemVariants}>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-all duration-200 hover:scale-110 mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-sm">포트폴리오로 돌아가기</span>
                </Link>
              </motion.div>

              {/* 헤더 */}
              <motion.div className="flex items-center gap-3" variants={itemVariants}>
                <Image
                  src={
                    isMinu
                      ? '/minu-logo.svg'
                      : isRoadmap
                        ? '/images/roadmap-logo.png'
                        : '/woogyeol-logo.png'
                  }
                  alt={isMinu ? 'Minu Logo' : isRoadmap ? 'Roadmap Logo' : 'Woogyeol Logo'}
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                />
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                  {project.title}
                </h1>
              </motion.div>
            </motion.div>
          </div>

          {/* 하단 섹션 - 옅은 회색 배경 */}
          <div className="bg-gray-200 text-gray-900 px-4 sm:px-6 lg:px-8 pt-24 pb-24">
            <motion.div 
              className="max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              style={{ willChange: 'opacity, transform' }}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 ${
                  isMinuLike ? 'gap-8' : 'gap-12'
                } items-center`}
              >
                <div className="space-y-6">
                  <motion.h2 className="text-2xl font-bold text-gray-900" variants={itemVariants}>
                    프로젝트 개요
                  </motion.h2>
                  <motion.p
                    className={`text-base text-gray-700 leading-relaxed ${
                      isMinuLike ? 'whitespace-pre-line' : ''
                    }`}
                    variants={itemVariants}
                  >
                    {project.overview}
                  </motion.p>

                  {/* 기술 스택 — 한 줄 유지(좁은 화면은 가로 스크롤) */}
                  <motion.div
                    className="flex flex-nowrap gap-1.5 sm:gap-2 mt-6 overflow-x-auto pb-0.5 -mx-1 px-1 [scrollbar-width:thin]"
                    variants={itemVariants}
                  >
                    {project.tech.map((tech: string) => (
                      <span
                        key={tech}
                        className="shrink-0 whitespace-nowrap px-2.5 py-1.5 sm:px-3 sm:py-2 bg-background text-white rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  {/* 버튼들 */}
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 mt-8"
                    variants={itemVariants}
                  >
                    {isMinu ? (
                      <>
                        <a
                          href="https://dnd-13th-3-frontend.vercel.app/splash"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-white text-black border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 cursor-pointer hover:scale-105"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Service
                        </a>
                        <a
                          href="https://github.com/dnd-side-project/dnd-13th-3-backend"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-white text-black border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 cursor-pointer hover:scale-105"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      </>
                    ) : isRoadmap ? (
                      <>
                        <a
                          href="https://www.roadmap-edu.kr/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-white text-black border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 cursor-pointer hover:scale-105"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Service
                        </a>
                        <a
                          href="https://github.com/RoadMapSite"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-white text-black border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 cursor-pointer hover:scale-105"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      </>
                    ) : (
                      <>
                        <a
                          href="https://woogyeol.site"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-white text-black border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 cursor-pointer hover:scale-105"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Service
                        </a>
                        <a
                          href="https://github.com/team-wedding"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-white text-black border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 cursor-pointer hover:scale-105"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      </>
                    )}
                  </motion.div>
                </div>

                <motion.div className="relative w-full" variants={itemVariants}>
                  {isMinu ? (
                    <div className="relative w-full group" style={{ aspectRatio: '5/3' }}>
                      <div className="absolute inset-0 flex items-start justify-end">
                        <div className="relative" style={{ width: '110%', height: '110%', marginTop: '-5%', marginRight: '-5%' }}>
                          <Image
                            src={minuImages[currentImageIndex]}
                            alt={`Minu Project ${currentImageIndex + 1}`}
                            fill
                            className="object-contain rounded-lg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      {/* 왼쪽 화살표 */}
                      <button
                        onClick={handlePreviousImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                        aria-label="이전 이미지"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      {/* 오른쪽 화살표 */}
                      <button
                        onClick={handleNextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                        aria-label="다음 이미지"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  ) : isRoadmap ? (
                    <div className="relative w-full" style={{ aspectRatio: '5/3' }}>
                      <div className="absolute inset-0 flex items-start justify-end">
                        <div
                          className="relative rounded-none"
                          style={{
                            width: '120%',
                            height: '120%',
                            marginTop: '-10%',
                            marginRight: '-10%',
                          }}
                        >
                          <Image
                            src="/roadmap1.png"
                            alt="Roadmap Project"
                            fill
                            className="object-contain rounded-none"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src="/woogyeol-photo.png"
                      alt="Woogyeol Project"
                      width={600}
                      height={600}
                      className="object-contain w-full h-auto"
                      loading="lazy"
                    />
                  )}
                </motion.div>
              </div>

              {/* 프로젝트 기능 섹션 */}
            </motion.div>
          </div>

          {/* 프로젝트 기능 섹션 - 남색 배경 (전체 너비) */}
          {isSpecialLayout && (
            <div className="bg-background pt-12 pb-16 px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                style={{ willChange: 'opacity, transform' }}
              >
                <motion.h2 
                  className="text-2xl font-bold text-white mb-16 text-center" 
                  variants={itemVariants}
                >
                  프로젝트 기능
                </motion.h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {(isMinuLike
                      ? isMinu
                        ? [
                            {
                              title: '온보딩',
                              description: '최초 로그인 시 목표와 개인 생활 습관 정보를 입력하는 기능',
                              video: '/온보딩',
                            },
                            {
                              title: '스크린타임 조회',
                              description: '개인의 일간, 주간 스크린타임을 조회하고 리포트를 조회할 수 있는 기능',
                              video: '/스크린타임 조회',
                            },
                            {
                              title: '타이머',
                              description: '개인 학습에 활용할 수 있는 포모도로 타이머 기능',
                              video: '/타이머',
                            },
                            {
                              title: '챌린지 생성',
                              description: '개인 및 공유 챌린지를 생성할 수 있는 기능',
                              video: '/챌린지 생성',
                            },
                            {
                              title: '친구 초대',
                              description: '챌린치에 친구를 초대할 수 있는 기능',
                              video: '/친구 초대',
                            },
                            {
                              title: '챌린지 결과 조회',
                              description: '목표 대비 스크린타임 결과와 친구간의 랭킹을 확인할 수 있는 기능',
                              video: '/챌린지 결과 조회',
                            },
                          ]
                        : project.features
                      : [
                          {
                            title: 'Woogyeol 메인 페이지',
                            description: '청첩장을 생성, 수정, 조회, 삭제할 수 있는 인터페이스',
                            video: '/woogyeol1',
                          },
                          {
                            title: '청첩장 만들기',
                            description: '청첩장의 원하는 기능과 테마를 커스터마이징할 수 있는 기능',
                            video: '/woogyeol2',
                          },
                          {
                            title: '청첩장 공유',
                            description: 'URL, 카카오톡, QR 코드를 통해 청첩장을 공유할 수 있는 기능',
                            video: '/woogyeol3',
                          },
                          {
                            title: 'RSVP 관리',
                            description: '하객들의 참석 여부를 조사하고 엑셀 파일로 관리할 수 있는 기능',
                            video: '/woogyeol4',
                          },
                          {
                            title: '실시간 포토월',
                            description: '하객들로부터 실시간으로 축하 사진을 받을 수 있는 기능',
                            video: '/woogyeol5',
                          },
                          {
                            title: '다크 모드',
                            description: '청첩장 및 서비스의 색감 반전을 경험할 수 있는 기능',
                            video: '/woogyeol6',
                          },
                        ]
                    ).map((feature, index) => (
                      <motion.div
                        key={index}
                        className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all"
                        variants={itemVariants}
                      >
                        {/* 영상 영역 */}
                        <div className="relative w-full h-[24rem] bg-gray-200 flex items-center justify-center">
                          <Image
                            src={isMinuLike ? encodeURI(`${feature.video}.gif`) : `${feature.video}.gif`}
                            alt={feature.title}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                        {/* 텍스트 영역 */}
                        <div className="p-6 bg-white">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {feature.title}
                          </h3>
                          <p className="text-base text-gray-700">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
          )}

          {/* 기술적 문제 및 해결 섹션 - 회색 배경 */}
          {isSpecialLayout && (
            <div className="bg-gray-200 py-16 px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                style={{ willChange: 'opacity, transform' }}
              >
                <motion.h2 
                  className="text-2xl font-bold text-gray-900 mb-12 text-center" 
                  variants={itemVariants}
                >
                  {isMinuLike ? '주요 이슈 및 문제 해결' : '기술적 문제 및 해결'}
                </motion.h2>
                
                <div className="space-y-8">
                  {isRoadmap ? (
                    project.challenges.map(
                      (
                        challenge: { title: string; problem: string; solution: string },
                        idx: number
                      ) => (
                        <motion.div
                          key={idx}
                          className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-all"
                          variants={itemVariants}
                        >
                          <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-background text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                              {idx + 1}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-900 mb-6">{challenge.title}</h3>
                              <div className="space-y-4">
                                <div className="bg-gray-50 border-l-4 border-background p-4 rounded">
                                  <p className="text-base font-semibold text-gray-900 mb-2">문제</p>
                                  <p className="text-base text-gray-700 leading-relaxed">{challenge.problem}</p>
                                </div>
                                <div className="bg-gray-50 border-l-4 border-green-500 p-4 rounded">
                                  <p className="text-base font-semibold text-gray-900 mb-2">해결</p>
                                  <p className="text-base text-gray-700 leading-relaxed">{challenge.solution}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )
                    )
                  ) : (
                    <>
                      {/* 첫 번째 문제 */}
                      <motion.div
                        className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-all"
                        variants={itemVariants}
                      >
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-12 h-12 bg-background text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                            1
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">
                              {isMinu ? '필드/데스크 리서치를 통한 사용자 니즈 파악' : '이미지 로딩 속도 문제'}
                            </h3>
                            <div className="space-y-4">
                              <div className="bg-gray-50 border-l-4 border-background p-4 rounded">
                                <p className="text-base font-semibold text-gray-900 mb-2">문제</p>
                                <p className="text-base text-gray-700 leading-relaxed">
                                  {isMinu
                                    ? '초기 기획 단계에서 디톡스 어플에 대한 사용자의 니즈를 파악하지 못해 기존의 유사 어플들과의 차이점을 두지 못했습니다.'
                                    : '청첩장 특성 상 관리할 이미지가 많아 AWS S3를 통해 관리하였으나, 이미지 로딩 시 속도가 많이 지연되는 문제가 발생했습니다.'}
                                </p>
                              </div>
                              <div className="bg-gray-50 border-l-4 border-green-500 p-4 rounded">
                                <p className="text-base font-semibold text-gray-900 mb-2">해결</p>
                                <p className="text-base text-gray-700 leading-relaxed">
                                  {isMinu
                                    ? '필드 및 데스크 리서치를 수행하여 유사 서비스에 대한 사용자의 리뷰와 행동 패턴을 분석했습니다. 이를 통해 유료화된 주요 기능과 성취감 부족으로 인한 동기부여 부족이라는 사용자의 경험을 인식하게 되었고, 이를 통해 차별화된 minu만의 기능을 기획할 수 있었습니다.'
                                    : '이미지를 바로 저장하지 않고, 450px로 크기를 줄이고 webp 포맷으로 리사이징한 후 저장하도록 하여 이미지 조회 시 로딩 속도를 약 1~2초 단축할 수 있었습니다.'}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* 두 번째 문제 */}
                      <motion.div
                        className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-all"
                        variants={itemVariants}
                      >
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-12 h-12 bg-background text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                            2
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">
                              {isMinu ? '리서치 기반의 AI 피드백 기능 구현' : 'POST 요청 시 과도한 데이터 전송 문제'}
                            </h3>
                            <div className="space-y-4">
                              <div className="bg-gray-50 border-l-4 border-background p-4 rounded">
                                <p className="text-base font-semibold text-gray-900 mb-2">문제</p>
                                <p className="text-base text-gray-700 leading-relaxed">
                                  {isMinu
                                    ? '필드 리서치 분석 결과 단순한 스크린타임 수치 제공은 사용자에게 일시적인 인지만 줄 뿐, 지속적인 동기부여와 실질적인 생활 패턴의 변화로 이어지지는 못한다는 한계를 발견했습니다.'
                                    : '청첩장 생성 시 모든 값을 한 번에 전송하여 에러 트래킹과 디버깅이 어려웠고, 검증되지 않은 상태에서 요청을 보내는 문제가 있었습니다.'}
                                </p>
                              </div>
                              <div className="bg-gray-50 border-l-4 border-green-500 p-4 rounded">
                                <p className="text-base font-semibold text-gray-900 mb-2">해결</p>
                                <p className="text-base text-gray-700 leading-relaxed">
                                  {isMinu
                                    ? 'OpenAI GPT API를 연동하여 AI 피드백을 통한 주간 회고 시스템을 구축했습니다. 단순히 일회성 피드백에 그치지 않도록 매주 생성된 피드백 데이터를 DB에 적재하여 관리하였고, 이를 기반으로 지난주 대비 발전 여부를 분석해주는 로직 또한 구현하였습니다. 결과적으로 사용자에게 연속성 있는 성취감을 부여하며 장기적인 디지털 디톡스 참여를 유도할 수 있었습니다.'
                                    : '생성 단계를 나누어 필요한 데이터만 단계별로 전송하도록 API를 개선했습니다. 이를 통해 에러 발생 시 특정 단계에서 확인이 가능해져 디버깅 시간이 단축되었고, 사용자 플로우에도 더 적합한 방식이 되었습니다.'}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </>
      ) : (
        <>
          {/* 기존 레이아웃 (Minu 등 다른 프로젝트) */}
          <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>돌아가기</span>
              </button>
            </div>
          </nav>

          <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-4">
                <p className="text-primary font-semibold">{project.period}</p>
                <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {project.subtitle}
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">프로젝트 개요</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {project.overview}
                </p>
              </div>

              {Array.isArray(project.tech) ? (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">기술 스택</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech: string) => (
                      <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">기술 스택</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.tech.map((tech: any) => (
                      <div key={tech.category} className="bg-card border border-border rounded-lg p-6">
                        <h3 className="font-semibold text-foreground mb-4">{tech.category}</h3>
                        <div className="flex flex-wrap gap-2">
                          {tech.items.map((item: string) => (
                            <span key={item} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

          {/* Features */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">주요 기능</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature: any, idx: number) => (
                <div key={idx} className="bg-secondary/30 border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">극복한 과제</h2>
            <div className="space-y-4">
              {project.challenges.map((challenge: any, idx: number) => (
                <div key={idx} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    {idx + 1}. {challenge.title}
                  </h3>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-primary">해결방법: </span>
                    {challenge.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">프로젝트 성과</h2>
            <ul className="space-y-3">
              {project.outcomes.map((outcome: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
            <Link
              href="/"
              className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
            >
              포트폴리오로 돌아가기
            </Link>
          </div>
        </div>
      </main>
        </>
      )}
    </div>
  )
}
