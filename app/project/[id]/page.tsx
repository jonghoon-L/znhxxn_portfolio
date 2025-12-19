'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const PROJECT_DETAILS: Record<string, any> = {
  '1': {
    title: 'Woogyeol - 우리 결혼해요',
    subtitle: '커스텀 모바일 청첩장',
    period: '2025.01 ~ 2025.07',
    description: 'Woogyeol은 사용자가 직접 청첩장을 제작하고 공유할 수 있는 모바일 청첩장 서비스입니다. 참석 여부 조사, 축하 메시지, 실시간 포토월 기능을 통해 결혼 준비부터 당일까지 완전한 디지털 웨딩 솔루션을 제공합니다.',
    
    overview: `Woogyeol은 사용자가 직접 청첩장을 제작하고 공유할 수 있는 모바일 청첩장 서비스입니다. 참석 여부 조사, 축하 메시지, 실시간 포토월 기능을 통해 결혼 준비부터 당일까지 완전한 디지털 웨딩 솔루션을 제공합니다.`,
    
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
    title: 'Woogyeol - 우리 결혼했어요',
    subtitle: '커스텀 모바일 청첩장 서비스',
    period: '2024.11 ~ 진행중',
    description: 'Woogyeol은 커스텀 가능한 디지털 청첩장을 손쉽게 만들 수 있는 모바일 서비스입니다.',
    
    overview: `
      모바일 우선 설계로 스마트폰에서 최적화된 사용자 경험을 제공합니다.
      드래그 앤 드롭 인터페이스로 누구나 쉽게 청첩장을 커스터마이징할 수 있습니다.
      React Query를 사용하여 서버 상태 관리를 효율적으로 처리하고 있습니다.
    `,
    
    tech: [
      { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'React-Query', 'Zustand'] },
      { category: 'Tools', items: ['Vite', 'Git', 'Figma'] }
    ],
    
    features: [
      {
        title: '템플릿 기반 커스터마이징',
        description: '다양한 템플릿 중에서 선택 후 커스터마이징'
      },
      {
        title: '실시간 미리보기',
        description: '수정사항 즉시 반영되는 실시간 미리보기'
      },
      {
        title: '손님 관리',
        description: '초대 대상자 관리 및 응답 현황 추적'
      },
      {
        title: '공유 기능',
        description: '카카오톡, 문자 등 다양한 채널로 공유'
      }
    ],

    challenges: [
      {
        title: '모바일 최적화',
        solution: 'Mobile-first 접근으로 작은 화면에서도 완벽한 UX 제공'
      },
      {
        title: '성능 최적화',
        solution: 'Code splitting과 lazy loading으로 초기 로딩 시간 단축'
      },
      {
        title: '크로스 브라우저 호환성',
        solution: '다양한 모바일 브라우저 테스트 및 호환성 보장'
      }
    ],

    outcomes: [
      '현재 진행 중인 프로젝트로 지속적인 학습 기회 제공',
      '사용자 피드백을 반영한 반복적 개선 경험',
      '프론트엔드 심화 기술 습득'
    ]
  }
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

  // 우결 프로젝트인 경우 특별한 레이아웃
  const isWoogyeol = projectId === '1'

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
      {isWoogyeol ? (
        <>
          {/* 상단 섹션 - 남색 배경, 흰색 글씨 */}
          <div className="bg-background text-white pt-8 pb-8 px-4 sm:px-6 lg:px-8">
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
                  src="/woogyeol-logo.png"
                  alt="Woogyeol Logo"
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
          <div className="bg-gray-200 text-gray-900 pt-24 pb-24 px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              style={{ willChange: 'opacity, transform' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* 좌측: 텍스트 영역 */}
                <div className="space-y-6">
                  <motion.h2 className="text-2xl font-bold text-gray-900" variants={itemVariants}>
                    프로젝트 개요
                  </motion.h2>
                  <motion.p className="text-base text-gray-700 leading-relaxed" variants={itemVariants}>
                    {project.overview}
                  </motion.p>

                  {/* 기술 스택 */}
                  <motion.div className="flex flex-wrap gap-2 mt-6" variants={itemVariants}>
                    {project.tech.map((tech: string) => (
                      <span 
                        key={tech} 
                        className="px-4 py-2 bg-background text-white rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  {/* 버튼들 */}
                  <motion.div className="flex flex-col sm:flex-row gap-4 mt-8" variants={itemVariants}>
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
                  </motion.div>
                </div>

                {/* 우측: 이미지 영역 */}
                <motion.div className="relative" variants={itemVariants}>
                  <Image
                    src="/woogyeol-photo.png"
                    alt="Woogyeol Project"
                    width={600}
                    height={600}
                    className="object-contain w-full h-auto"
                    loading="lazy"
                  />
                </motion.div>
              </div>

              {/* 프로젝트 기능 섹션 */}
            </motion.div>
          </div>

          {/* 프로젝트 기능 섹션 - 남색 배경 (전체 너비) */}
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
                  {[
                    {
                      title: 'Woogyeol 메인 페이지',
                      description: '청첩장을 생성, 수정, 조회, 삭제할 수 있는 인터페이스',
                      video: '/woogyeol1'
                    },
                    {
                      title: '청첩장 만들기',
                      description: '청첩장의 원하는 기능과 테마를 커스터마이징할 수 있는 기능',
                      video: '/woogyeol2'
                    },
                    {
                      title: '청첩장 공유',
                      description: 'URL, 카카오톡, QR 코드를 통해 청첩장을 공유할 수 있는 기능',
                      video: '/woogyeol3'
                    },
                    {
                      title: 'RSVP 관리',
                      description: '하객들의 참석 여부를 조사하고 엑셀 파일로 관리할 수 있는 기능',
                      video: '/woogyeol4'
                    },
                    {
                      title: '실시간 포토월',
                      description: '하객들로부터 실시간으로 축하 사진을 받을 수 있는 기능',
                      video: '/woogyeol5'
                    },
                    {
                      title: '다크 모드',
                      description: '청첩장 및 서비스의 색감 반전을 경험할 수 있는 기능',
                      video: '/woogyeol6'
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all"
                      variants={itemVariants}
                    >
                      {/* 영상 영역 */}
                      <div className="relative w-full h-[24rem] bg-gray-200 flex items-center justify-center">
                        <Image
                          src={`${feature.video}.gif`}
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

          {/* 기술적 문제 및 해결 섹션 - 회색 배경 */}
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
                기술적 문제 및 해결
              </motion.h2>
              
              <div className="space-y-8">
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
                        이미지 로딩 속도 문제
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-gray-50 border-l-4 border-background p-4 rounded">
                          <p className="text-base font-semibold text-gray-900 mb-2">
                            문제
                          </p>
                          <p className="text-base text-gray-700 leading-relaxed">
                            청첩장 특성 상 관리할 이미지가 많아 AWS S3를 통해 관리하였으나, 이미지 로딩 시 속도가 많이 지연되는 문제가 발생했습니다.
                          </p>
                        </div>
                        <div className="bg-gray-50 border-l-4 border-green-500 p-4 rounded">
                          <p className="text-base font-semibold text-gray-900 mb-2">
                            해결
                          </p>
                          <p className="text-base text-gray-700 leading-relaxed">
                            이미지를 바로 저장하지 않고, 450px로 크기를 줄이고 webp 포맷으로 리사이징한 후 저장하도록 하여 이미지 조회 시 로딩 속도를 약 1~2초 단축할 수 있었습니다.
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
                        POST 요청 시 과도한 데이터 전송 문제
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-gray-50 border-l-4 border-background p-4 rounded">
                          <p className="text-base font-semibold text-gray-900 mb-2">
                            문제
                          </p>
                          <p className="text-base text-gray-700 leading-relaxed">
                            청첩장 생성 시 모든 값을 한 번에 전송하여 에러 트래킹과 디버깅이 어려웠고, 검증되지 않은 상태에서 요청을 보내는 문제가 있었습니다.
                          </p>
                        </div>
                        <div className="bg-gray-50 border-l-4 border-green-500 p-4 rounded">
                          <p className="text-base font-semibold text-gray-900 mb-2">
                            해결
                          </p>
                          <p className="text-base text-gray-700 leading-relaxed">
                            생성 단계를 나누어 필요한 데이터만 단계별로 전송하도록 API를 개선했습니다. 이를 통해 에러 발생 시 특정 단계에서 확인이 가능해져 디버깅 시간이 단축되었고, 사용자 플로우에도 더 적합한 방식이 되었습니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
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
