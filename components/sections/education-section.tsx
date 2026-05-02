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
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">Education & Languages</h2>
        </div>
      </div>

      <div className="bg-gray-200 pb-32 pt-8">
        <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8">
          <div
            className="
              relative w-full overflow-hidden rounded-xl border border-gray-200
              border-l-4 border-l-blue-500 bg-white p-5 shadow-md sm:p-6
            "
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
              <div className="flex shrink-0 justify-center lg:min-w-[160px] lg:max-w-[200px] lg:flex-[0_0_32%] lg:justify-start">
                <div className="relative h-32 w-36 overflow-hidden sm:h-36 sm:w-40 lg:h-36 lg:w-40">
                  <Image
                    src="/TOEIC/TOEIC.jpg"
                    alt="TOEIC Speaking"
                    fill
                    className="object-contain mix-blend-darken scale-[1.12]"
                    sizes="(max-width: 1024px) 160px, 160px"
                  />
                </div>
              </div>

              <div className="min-w-0 flex-1 text-center lg:text-left">
                <h3 className="text-lg font-bold leading-tight text-gray-900 sm:text-xl lg:text-2xl">
                  TOEIC Speaking
                </h3>
                <p className="mt-1 text-sm font-semibold text-gray-800 sm:text-base">
                  AL
                </p>
                <p className="mt-2 text-xs tabular-nums text-gray-600 sm:text-sm">
                  2026.04.30
                </p>
              </div>
            </div>
          </div>

          <div
            className="
              relative w-full overflow-hidden rounded-xl border border-gray-200
              border-l-4 border-l-blue-500 bg-white p-5 shadow-md sm:p-6
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
                <h3 className="text-lg font-bold leading-tight text-gray-900 sm:text-xl lg:text-2xl">
                  단국대학교(학사)
                </h3>
                <p className="mt-1 text-sm font-semibold text-gray-800 sm:text-base">
                  소프트웨어학과
                </p>
                <p className="mt-2 text-xs tabular-nums text-gray-600 sm:text-sm">
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
