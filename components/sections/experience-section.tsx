'use client'

import { Clock, Check } from 'lucide-react'

const EXPERIENCES = [
  {
    id: 1,
    title: 'RoadMap 입시 관리형 독서실 홈페이지',
    period: '2026.01 ~ ing',
    status: '외주',
    isOngoing: true,
    description: '입시 관리형 독서실 상담 관리 및 홍보 웹사이트 구축',
    result: '클라이언트 요구사항 분석을 통한 실제 서비스 기획 및 개발 수행'
  },
  {
    id: 2,
    title: 'ShowRoomz',
    period: '2025.10 ~ ing',
    status: '창업',
    isOngoing: true,
    description: 'SNS 인플루언서 기반 마켓 플랫폼 기획 및 개발',
    result: '실제 서비스 런칭을 목표로 한 비즈니스 운영 프로세스 정립 및 개발 수행'
  },
  {
    id: 3,
    title: 'Designer N Developer(DND) 13기',
    period: '2025.07 ~ 2025.08',
    status: '대외활동',
    isOngoing: false,
    description: '디자이너 & 개발자 협업을 통한 사이드 프로젝트 진행',
    result: '사용자 리서치 기반의 UX 고도화 및 유사 서비스와 차별화된 핵심 기능 구현'
  },
  {
    id: 4,
    title: '프로그래머스 웹 풀스택 데브코스 4기',
    period: '2024.08 ~ 2025.02',
    status: '교육',
    isOngoing: false,
    description: 'KDT 타입스크립트 기반 웹 풀 사이클 개발 과정 수료',
    result: 'React, Node.js 기반의 Full Stack 심화 기술 습득 및 최종 프로젝트 우수상 수상'
  },
  {
    id: 5,
    title: '단국대학교 주최 캡스톤 페스티벌',
    period: '2024.03 ~ 2024.06',
    status: '대회',
    isOngoing: false,
    description: '자유 주제 교내 캡스톤 경진대회',
    result: '부모-자녀 건강 모니터링 및 AI 건강 상담 서비스 개발, 인기상 수상'
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
            활동 경험
          </h2>
        </div>
      </div>

      {/* 내용 부분 - 옅은 회색 배경 (전체 너비) */}
      <div className="bg-gray-200 pt-8 pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={exp.id} className="relative">
                {idx !== EXPERIENCES.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gray-300" />
                )}
                
                <div className="flex gap-6">
                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${exp.isOngoing ? 'bg-gray-400' : 'bg-gray-800'} text-white rounded-full flex items-center justify-center`}>
                      {exp.isOngoing ? (
                        <Clock className="w-6 h-6" />
                      ) : (
                        <Check className="w-6 h-6" />
                      )}
                    </div>
                  </div>

                  <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-gray-600 font-semibold mt-2">
                          {exp.period}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-gray-200 text-gray-800 text-xs font-semibold rounded-full">
                        {exp.status}
                      </span>
                    </div>

                    <p className="text-gray-700 mb-4">
                      {exp.description}
                    </p>

                    <div>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold text-gray-900">성과:</span> {exp.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}