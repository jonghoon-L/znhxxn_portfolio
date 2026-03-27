'use client'

import { Mail, Phone } from 'lucide-react'

export default function ContactFooter() {
  return (
    <footer className="bg-white text-slate-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h2 className="text-xl font-bold mb-3">연락하기</h2>

            <div className="space-y-3">
              <a
                href="mailto:ghoonghoon@gmail.com"
                className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:text-slate-900" />
                <span className="text-sm">ghoonghoon@gmail.com</span>
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

        <div className="border-t border-slate-300 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © 2026 포트폴리오. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Designed & Built by 이종훈
          </p>
        </div>
      </div>
    </footer>
  )
}
