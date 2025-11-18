'use client'

import { Mail, Phone } from 'lucide-react'

export default function ContactFooter() {
  return (
    // 1. py-16 -> py-8 : 위아래 전체 여백을 절반으로 줄임
    <footer className="bg-white text-slate-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* 2. gap-12 -> gap-6, mb-12 -> mb-6 : 내부 간격과 아래 여백을 줄임 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            {/* 3. text-3xl -> text-xl : 제목 글자 크기를 줄임 */}
            <h2 className="text-xl font-bold mb-3">연락하기</h2>

            <div className="space-y-3">
              <a 
                href="mailto:ghoon7777@naver.com"
                className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors group"
              >
                {/* 4. w-5 h-5 -> w-4 h-4 : 아이콘 크기 축소 */}
                <Mail className="w-4 h-4 group-hover:text-slate-900" />
                {/* 5. text-sm 추가 : 이메일 글자 크기를 작게 설정 */}
                <span className="text-sm">ghoon7777@naver.com</span>
              </a>

              <a 
                href="tel:+821012345678"
                className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:text-slate-900" />
                <span className="text-sm">010-9450-1594</span>
              </a>
            </div>
          </div>
        </div>

        {/* 6. pt-8 -> pt-4 : 구분선 위쪽 여백 줄임 */}
        <div className="border-t border-slate-300 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* 7. text-sm -> text-xs : 하단 저작권 문구를 더 작게 (선택사항, 너무 작으면 sm으로 유지) */}
          <p className="text-slate-600 text-xs">
            © 2025 포트폴리오. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Designed & Built by 이종훈
          </p>
        </div>
      </div>
    </footer>
  )
}