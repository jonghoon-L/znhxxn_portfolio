'use client'

import { Clock, Check, CheckCircle2 } from 'lucide-react'

const BADGE_STYLES: Record<string, string> = {
  창업: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
  '예비 창업': 'bg-emerald-50 text-emerald-600 border border-emerald-100',
  외주: 'bg-violet-50 text-violet-600 border border-violet-100',
  '프리랜서 외주': 'bg-violet-50 text-violet-600 border border-violet-100',
  'IT 연합 동아리': 'bg-sky-50 text-sky-700 border border-sky-100',
  '실무 부트캠프': 'bg-amber-50 text-amber-800 border border-amber-100',
  '캡스톤 대회': 'bg-fuchsia-50 text-fuchsia-800 border border-fuchsia-100',
  프로젝트: 'bg-blue-50 text-blue-600 border border-blue-100'
}

const EXPERIENCES = [
  {
    id: 1,
    title: "입시 관리형 독서실 통합 플랫폼 'Roadmap' 구축 및 운영",
    company: 'Roadmap 입시 관리형 독서실',
    period: '2026.02 ~ 2026.04',
    status: '프리랜서 외주',
    isOngoing: false,
    role: '서비스 기획, UI/UX 디자인, 웹 풀스택 개발 및 운영',
    achievements: [
      '클라이언트 요구사항 분석부터 기획, DB 설계, 배포까지 소프트웨어 개발 전 주기(SDLC) 주도',
      '실제 학원 비즈니스 프로세스를 반영하여 등록 및 상담 예약, 후기 시스템 구축',
      'Solapi 기반의 SMS 본인 인증 로직 구현으로 사용자 온보딩 간편화',
      '이스터에그 라우팅 설계를 활용한 관리자 페이지 은닉 및 시스템 내부 보안성 확보'
    ]
  },
  {
    id: 2,
    title: "B2C/B2B 인플루언서 마켓 서비스 'ShowRoomz' 예비 창업",
    company: '단국대학교 창업지원센터',
    period: '2025.10 ~ 2026.04',
    status: '예비 창업',
    isOngoing: false,
    role: '예비 창업 기획, 백엔드 DB 구조 설계 및 REST API 개발',
    achievements: [
      '프론트엔드 개발자의 타입 로직 간소화를 위한 전역 페이징 응답 구조 통일',
      'Flyway 도입을 통한 DB 형상 관리 자동화 및 협업 안정성 확보',
      'PortOne API 연동을 통한 클라이언트 결제 파이프라인 구축',
      '다양한 검색 조건에 유연하게 대응할 수 있는 확장성 높은 필터 API 설계'
    ]
  },
  {
    id: 3,
    title: "동아리 활동 및 디지털 디톡스 서비스 'Minu' 구축",
    company: 'IT 연합동아리 Designer And Developer(DND)',
    period: '2025.07 ~ 2025.08',
    status: 'IT 연합 동아리',
    isOngoing: false,
    role: '서비스 기획, 데스크/필드 리서치, 백엔드 API 개발',
    achievements: [
      '필드 및 데스크 리서치를 통한 사용자 니즈 분석으로 유사 서비스와의 차별점 도출',
      'OpenAI GPT API 연동을 통한 사용자의 주간 스크린타임 데이터 기반 AI 회고 리포트 생성',
      'Redis 캐시 서버의 Docker 컨테이너화 및 GitHub Actions 기반의 CI/CD 파이프라인 구축'
    ]
  },
  {
    id: 4,
    title: "교육 이수 및 모바일 청첩장 서비스 '우리 결혼해요' 구축",
    company: '프로그래머스 웹 풀스택 데브코스',
    period: '2024.08 ~ 2025.02',
    status: '실무 부트캠프',
    isOngoing: false,
    role: '팀장, 서비스 기획, 백엔드 DB 구조 설계 및 REST API 개발',
    achievements: [
      '이미지 리사이징 및 포맷 변환을 통한 AWS S3 로딩 속도 1.5초 단축',
      'Sentry 툴 연동을 통한 실시간 에러 트래킹 및 모니터링 시스템 구축',
      '하객 참여형 핵심 기능(실시간 포토월, 축하 메세지) 기획 및 양방향 소통 비즈니스 로직 구현'
    ]
  },
  {
    id: 5,
    title: "부모-자녀 건강 모니터링 모바일 애플리케이션 '늘편안' 구축",
    company: '단국대학교 SW 중심대학사업단',
    period: '2024.03 ~ 2024.06',
    status: '캡스톤 대회',
    isOngoing: false,
    role: '팀장, 서비스 기획, React Native 프론트엔드 개발 및 AI 챗봇 최적화',
    achievements: [
      'React Native 및 Expo를 활용한 크로스 플랫폼 모바일 애플리케이션 환경 구축',
      'Cache 적용 및 Debouncing 테스트로 불필요한 API 호출을 최소화하여 AI 챗봇 응답 속도 2초 개선',
      '노년층 대상 사용성 테스트 피드백을 반영한 UI/UX 구성',
      'iOS 환경의 UI 가림 현상을 해결하기 위해 키보드 회피 로직 전역 모듈 구현을 통한 편의성 향상'
    ]
  }
]

interface ExperienceSectionProps {
  titleRef?: React.RefObject<HTMLDivElement>
}

export default function ExperienceSection({ titleRef }: ExperienceSectionProps) {
  return (
    <section>
      {/* 제목 부분 - 회색 배경 (전체 너비) */}
      <div ref={titleRef as React.RefObject<HTMLDivElement>} className="bg-gray-200 pt-12 pb-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <h2 
            className="text-2xl sm:text-3xl font-bold text-gray-900 text-center"
          >
            Experiences
          </h2>
        </div>
      </div>

      {/* 내용 부분 - 옅은 회색 배경 (전체 너비) */}
      <div className="bg-gray-200 pt-8 pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => {
              const displayStatus =
                exp.status === '창업' ||
                exp.status === '예비 창업' ||
                exp.status === '외주' ||
                exp.status === '프리랜서 외주' ||
                exp.status === 'IT 연합 동아리' ||
                exp.status === '실무 부트캠프' ||
                exp.status === '캡스톤 대회'
                  ? exp.status
                  : '프로젝트'
              return (
                <div key={exp.id} className="relative">
                  {idx !== EXPERIENCES.length - 1 && (
                    <div className={`absolute left-8 top-24 bottom-0 w-0.5 ${exp.isOngoing ? 'bg-blue-200' : 'bg-gray-300'}`} />
                  )}
                  
                  <div className="flex gap-6">
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors ${
                        exp.isOngoing 
                          ? 'bg-blue-500 text-white shadow-md shadow-blue-200' 
                          : 'bg-gray-700 text-gray-200'
                      }`}>
                        {exp.isOngoing ? (
                          <Clock className="w-6 h-6" />
                        ) : (
                          <Check className="w-6 h-6" />
                        )}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start justify-between gap-4 mb-6">
                          <h3 className="text-xl font-bold text-gray-900 flex-shrink-0">
                            {exp.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold flex-shrink-0 ${BADGE_STYLES[displayStatus]}`}>
                            {displayStatus}
                          </span>
                        </div>

                        <div className="space-y-4 text-sm">
                          <p>
                            <span className="text-gray-500">연계/소속회사: </span>
                            <span className="text-gray-800 font-medium">{exp.company}</span>
                          </p>
                          <p>
                            <span className="text-gray-500">수행 기간: </span>
                            <span className="text-gray-800 font-medium">{exp.period}</span>
                          </p>
                          <p>
                            <span className="text-gray-500">주요 역할: </span>
                            <span className="text-gray-800 font-medium">{exp.role}</span>
                          </p>
                          <div className="flex gap-3 pt-1">
                            <span className="text-gray-500 flex-shrink-0">업무 성과: </span>
                            <ul className="flex flex-col gap-2 text-gray-800 font-medium">
                              {exp.achievements.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}