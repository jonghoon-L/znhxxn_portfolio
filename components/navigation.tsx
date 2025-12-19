'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface NavigationProps {
  onNavigate: {
    home: () => void
    projects: () => void
    skills: () => void
    experience: () => void
  }
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [showContactModal, setShowContactModal] = useState(false)

  const navItems = [
    { label: 'Home', onClick: onNavigate.home },
    { label: 'Projects', onClick: onNavigate.projects },
    { label: 'Skills', onClick: onNavigate.skills },
    { label: 'About', onClick: onNavigate.experience },
  ]

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white cursor-default">
            Portfolio
          </Link>
          
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.onClick}
                className="
                  text-white text-sm font-medium
                  cursor-pointer
                  transition-all duration-300
                  hover:text-gray-300
                  hover:scale-110
                  hover:font-bold
                "
              >
                {item.label}
              </button>
            ))}
             {/* Contact 버튼 추가가 필요하다면 아래 주석을 해제하여 사용하세요 */}
             {/* <button 
                onClick={() => setShowContactModal(true)}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
             >
                Contact
             </button> 
             */}
          </div>
        </div>
      </nav>

      {showContactModal && (
        <ContactModal onClose={() => setShowContactModal(false)} />
      )}
    </>
  )
}

function ContactModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // 실제 API 엔드포인트가 구현되어 있어야 동작합니다.
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          recipientEmail: 'ghoon7777@naver.com'
        })
      })
      
      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          onClose()
          setSubmitted(false)
        }, 2000)
      }
    } catch (error) {
      console.error('Error sending email:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
      <div className="bg-background rounded-lg p-8 max-w-md w-full max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-foreground">연락하기</h2>
          <button 
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <p className="text-primary font-semibold mb-2">메시지가 전송되었습니다!</p>
            <p className="text-muted-foreground">ghoon7777@naver.com로 메시지를 받으실 수 있습니다.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">이름</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="홍길동"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">이메일</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">메시지</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none h-32"
                placeholder="메시지를 입력하세요..."
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {isLoading ? '전송 중...' : '메시지 보내기'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}