'use client'

import { ArrowRight, Github, Mail, BookOpen } from 'lucide-react'
import InteractiveIcons from '../interactive-icons'
import { useState } from 'react'
import ContactModal from '../contact-modal'

export default function HeroSection() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      {/* relative와 overflow-hidden은 혹시 모를 레이아웃 깨짐 방지를 위해 유지해도 괜찮습니다 */}
      <section className="relative min-h-[90vh] pt-20 pb-10 px-4 sm:px-6 lg:px-8 bg-background flex items-center overflow-hidden">
        
        {/* 강아지 코드가 있던 자리 (삭제됨) */}

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full z-10">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                이종훈
              </h1>
              <p className="text-2xl text-primary font-semibold">Backend Developer</p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              사용자에게 더 나은 경험을 제공하기 위해 효율적인 API 설계를 고민하는 백엔드 개발자입니다.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 max-w-xl">
              <button 
                onClick={() => document.querySelector('[data-projects]')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 border border-slate-200"
              >
                <ArrowRight className="w-4 h-4" />
                프로젝트 보기
              </button>
              
              <button 
                onClick={() => setIsContactOpen(true)}
                className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 border border-slate-200"
              >
                <Mail className="w-4 h-4" />
                연락하기
              </button>

              <a 
                href="https://github.com/jonghoon-L" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 border border-slate-200"
              >
                <Github className="w-4 h-4" />
                깃허브 방문하기
              </a>

              <a 
                href="https://velog.io/@znhxxn/posts" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 border border-slate-200"
              >
                <BookOpen className="w-4 h-4" />
                블로그 방문하기
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            {/* onHoverChange props 제거 */}
            <InteractiveIcons />
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}