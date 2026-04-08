'use client'

import Image from 'next/image'

interface EducationSectionProps {
  titleRef?: React.RefObject<HTMLDivElement>
}

export default function EducationSection({ titleRef }: EducationSectionProps) {
  return (
    <section>
      <div
        ref={titleRef as React.RefObject<HTMLDivElement>}
        className="bg-gray-200 pt-12 pb-4"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Education</h2>
        </div>
      </div>

      <div className="bg-gray-200 pt-8 pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="
              relative w-full overflow-hidden rounded-xl
              border border-zinc-700/80 border-l-4 border-l-indigo-500
              bg-gradient-to-br from-zinc-800/85 via-zinc-900/90 to-zinc-950
              p-5 sm:p-6
              shadow-2xl shadow-black/50
              ring-1 ring-inset ring-white/[0.08]
              [box-shadow:0_25px_50px_-12px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.06),4px_0_28px_-6px_rgba(99,102,241,0.45)]
            "
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
              <div className="flex shrink-0 justify-center lg:min-w-[160px] lg:max-w-[200px] lg:flex-[0_0_32%] lg:justify-start">
                <div className="relative h-32 w-36 sm:h-36 sm:w-40 lg:h-36 lg:w-40">
                  <Image
                    src="/dku.svg"
                    alt="단국대학교"
                    fill
                    className="object-contain drop-shadow-md"
                    sizes="(max-width: 1024px) 160px, 160px"
                  />
                </div>
              </div>

              <div className="min-w-0 flex-1 text-center lg:text-left">
                <h3 className="text-lg font-bold leading-tight text-white sm:text-xl lg:text-2xl">
                  단국대학교(학사)
                </h3>
                <p className="mt-1 text-sm font-semibold text-zinc-400 sm:text-base">
                  소프트웨어학과
                </p>
                <p className="mt-2 text-xs tabular-nums text-zinc-500 sm:text-sm">
                  2019.03 ~ 2026.02
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
