'use client'

import { Github, Mail, BookUser, BookOpen } from 'lucide-react' 
import InteractiveIcons from '../interactive-icons'
import { useState } from 'react'
import ContactModal from '../contact-modal'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const [isContactOpen, setIsContactOpen] = useState(false)

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
    <>
      <section className="relative min-h-[90vh] pt-20 pb-10 px-4 sm:px-6 lg:px-8 bg-background flex items-center overflow-hidden">
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full z-10">
          
          <motion.div 
            className="flex flex-col gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-foreground leading-tight">
                이종훈
              </h1>
              <p className="text-2xl sm:text-3xl text-primary font-semibold">
                Backend Developer
              </p>
            </motion.div>
            
            <motion.p 
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
              variants={itemVariants}
            >
              사용자에게 더 나은 경험을 제공하기 위해 효율적인 API 설계를 고민하는 백엔드 개발자입니다.
            </motion.p>

            <motion.div 
              className="grid grid-cols-2 gap-4 pt-4 max-w-xl"
              variants={containerVariants}
            >
              {/* [수정] 모든 버튼: 흰색 배경(bg-white), 검은 글씨(text-black) */}
              
              {/* 1. 프로젝트 보기 */}
              <motion.button 
                variants={itemVariants}
                onClick={() => document.querySelector('[data-projects]')?.scrollIntoView({ behavior: 'smooth' })}
                className="
                  cursor-pointer 
                  bg-white text-black border border-zinc-200
                  px-6 py-3 rounded-lg font-semibold 
                  flex items-center justify-center gap-2 
                  transition-all duration-300 
                  hover:bg-zinc-200 hover:scale-105 hover:shadow-lg
                "
              >
                <BookUser className="w-4 h-4" />
                프로젝트 보기
              </motion.button>
              
              {/* 2. 연락하기 */}
              <motion.button 
                variants={itemVariants}
                onClick={() => setIsContactOpen(true)}
                className="
                  cursor-pointer 
                  bg-white text-black border border-zinc-200
                  px-6 py-3 rounded-lg font-semibold 
                  flex items-center justify-center gap-2 
                  transition-all duration-300 
                  hover:bg-zinc-200 hover:scale-105 hover:shadow-lg
                "
              >
                <Mail className="w-4 h-4" />
                연락하기
              </motion.button>

              {/* 3. 깃허브 방문하기 */}
              <motion.a 
                variants={itemVariants}
                href="https://github.com/jonghoon-L" 
                target="_blank"
                rel="noopener noreferrer"
                className="
                  cursor-pointer 
                  bg-white text-black border border-zinc-200
                  px-6 py-3 rounded-lg font-semibold 
                  flex items-center justify-center gap-2 
                  transition-all duration-300 
                  hover:bg-zinc-200 hover:scale-105 hover:shadow-lg
                "
              >
                <Github className="w-4 h-4" />
                깃허브 방문하기
              </motion.a>

              {/* 4. 블로그 방문하기 */}
              <motion.a 
                variants={itemVariants}
                href="https://velog.io/@znhxxn/posts" 
                target="_blank"
                rel="noopener noreferrer"
                className="
                  cursor-pointer 
                  bg-white text-black border border-zinc-200
                  px-6 py-3 rounded-lg font-semibold 
                  flex items-center justify-center gap-2 
                  transition-all duration-300 
                  hover:bg-zinc-200 hover:scale-105 hover:shadow-lg
                "
              >
                <BookOpen className="w-4 h-4" />
                블로그 방문하기
              </motion.a>
            </motion.div>
          </motion.div>

          <div className="hidden lg:flex justify-center">
            <InteractiveIcons />
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}