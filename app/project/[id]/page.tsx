'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'

const PROJECT_DETAILS: Record<string, any> = {
  '1': {
    title: 'HMH - 소소공인을 위한 육아광고 원스톱 서비스',
    subtitle: '소상공인 커뮤니티 플랫폼',
    period: '2024.08 ~ 2025.02',
    description: 'HMH는 소상공인을 위한 육아광고 및 원스톱 서비스 플랫폼입니다. 사용자들이 쉽게 육아용품과 서비스를 발견할 수 있도록 설계되었습니다.',
    
    overview: `
      본 프로젝트는 Fullstack 웹 애플리케이션으로, React 프론트엔드와 Express 백엔드를 함께 개발했습니다. 
      사용자 경험을 최우선으로 생각하여, 직관적인 UI와 빠른 로딩 속도를 중시했습니다.
      Zustand를 활용한 상태 관리로 복잡한 컴포넌트 로직을 효율적으로 처리했습니다.
    `,
    
    tech: [
      { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Vidu'] },
      { category: 'Backend', items: ['Express.js', 'Node.js'] },
      { category: 'Database', items: ['PostgreSQL'] },
      { category: 'Tools', items: ['Git', 'Vercel', 'Docker'] }
    ],
    
    features: [
      {
        title: '사용자 인증',
        description: '안전한 회원가입 및 로그인 시스템'
      },
      {
        title: '제품 검색 및 필터링',
        description: '카테고리별 검색, 가격대별 필터링'
      },
      {
        title: '리뷰 시스템',
        description: '사용자 리뷰 및 평점 기능'
      },
      {
        title: '장바구니 관리',
        description: '직관적인 장바구니 및 주문 관리'
      }
    ],

    challenges: [
      {
        title: '상태 관리의 복잡성',
        solution: 'Zustand를 도입하여 Redux 대비 간단하고 효율적인 상태 관리 구현'
      },
      {
        title: '성능 최적화',
        solution: 'React.memo, useMemo를 활용하여 불필요한 리렌더링 제거'
      },
      {
        title: '반응형 디자인',
        solution: 'Tailwind CSS로 모바일부터 데스크탑까지 완벽한 반응형 구현'
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

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
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

      {/* Content */}
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <p className="text-primary font-semibold">{project.period}</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {project.subtitle}
            </p>
          </div>

          {/* Overview */}
          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">프로젝트 개요</h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {project.overview}
            </p>
          </div>

          {/* Tech Stack */}
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
    </div>
  )
}
