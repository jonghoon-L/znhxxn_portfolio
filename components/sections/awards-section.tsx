'use client'

import { AwardCard } from './award-card'

interface AwardsSectionProps {
  titleRef?: React.RefObject<HTMLDivElement>
}

export default function AwardsSection({ titleRef }: AwardsSectionProps) {
  return (
    <section>
      <div
        ref={titleRef as React.RefObject<HTMLDivElement>}
        className="bg-background pt-12 pb-8"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">Awards</h2>
        </div>
      </div>

      <div className="bg-background pt-6 pb-20">
        <div className="max-w-6xl mx-auto space-y-6 px-4 sm:px-6 lg:px-8">
          <AwardCard
            titlePrimary="우수상(2위)"
            titleSecondary="모바일 청첩장 서비스 '우리 결혼해요'"
            metaLine={`프로그래머스 웹 풀스택 데브코스\n2025.02.06`}
          />
          <AwardCard
            titlePrimary="인기상(5위)"
            titleSecondary="부모·자녀 건강 모니터링 서비스 '늘편안'"
            metaLine={`단국대학교 SW 중심대학사업단\n2024.11.28`}
          />
        </div>
      </div>
    </section>
  )
}
