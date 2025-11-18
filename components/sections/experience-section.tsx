'use client'

const EXPERIENCES = [
  {
    id: 1,
    title: '신한 스퀘어 브릿지 해커톤',
    period: '2025.07 ~ 2025.09',
    status: '완료',
    description: '해커톤을 통해 실제 기업재의 문제를 해결하는 솔루션 구현',
    results: [
      '기획적 부분과 비즈니스 인사이트를 언고 떨어 문제 해결의 대해서 더 depth있게 고민하는 경험을 했습니다.'
    ],
    tags: ['Hackathon', 'Team Project', 'Problem Solving']
  },
  {
    id: 2,
    title: '프로그래머스 풀스택 데브코스 4기',
    period: '2024.08 ~ 2025.02',
    status: '완료',
    description: 'KDT 타입스크립트로 함께하는 웹 풀 사이클 개발(React, Node.js)',
    results: [
      'React와 Express 배우 닫시 Fullstack 개발 경험을 했고, Woogyeol과 함께 팀 프로젝트 진행'
    ],
    tags: ['React', 'Express', 'TypeScript', 'Fullstack']
  },
  {
    id: 3,
    title: '글또 9기',
    period: '2023.11 ~ 2024.05',
    status: '완료',
    description: '긱을 작성하는 개발자들이 모여서 솔은 영양을 주고 서로 간이 자실 수 있는 커뮤니티 활동',
    results: [
      '글또 9기 활동을 통해 개발자로서 구조적이고 명확히 생각을 정리하는 능력 및 인터넥션 흥음까지 세심하게 고려하는 개발자가 되는 것이 저의 목표입니다.'
    ],
    tags: ['Writing', 'Community', 'Learning', 'Networking']
  }
]

export default function ExperienceSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            활동 경험
          </h2>
        </div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className="relative">
              {idx !== EXPERIENCES.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-border" />
              )}
              
              <div className="flex gap-6">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {exp.status === '완료' ? '✓' : '진행중'}
                  </div>
                </div>

                <div className="flex-1 bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-primary font-semibold mt-1">
                        {exp.period}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {exp.status}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">성과:</h4>
                    <ul className="space-y-1">
                      {exp.results.map((result, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">→</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
