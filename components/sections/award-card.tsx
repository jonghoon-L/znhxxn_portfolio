'use client'

import { Trophy } from 'lucide-react'

export interface AwardCardProps {
  titlePrimary: string
  titleSecondary: string
  metaLine: string
}

export function AwardCard({ titlePrimary, titleSecondary, metaLine }: AwardCardProps) {
  return (
    <div
      className="
        relative w-full overflow-hidden rounded-xl
        border border-zinc-700/80 border-l-4 border-l-blue-500
        bg-gradient-to-br from-zinc-800/85 via-zinc-900/90 to-zinc-950
        p-5 sm:p-6
        shadow-2xl shadow-black/50
        ring-1 ring-inset ring-white/[0.08]
        [box-shadow:0_25px_50px_-12px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.06),4px_0_28px_-6px_rgba(59,130,246,0.45)]
      "
    >
      <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:gap-8">
        <div className="flex shrink-0 justify-center lg:min-w-[160px] lg:max-w-[200px] lg:flex-[0_0_32%] lg:justify-start">
          <div
            className="
              relative flex h-32 w-36 shrink-0 items-center justify-center
              sm:h-36 sm:w-40 lg:h-36 lg:w-40
            "
          >
            <div
              className="pointer-events-none absolute flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500/15 blur-2xl"
              aria-hidden
            />
            <Trophy
              className="relative z-10 h-16 w-16 text-yellow-400 opacity-90 sm:h-20 sm:w-20"
              strokeWidth={1.5}
              aria-hidden
            />
          </div>
        </div>

        <div className="min-w-0 flex-1 text-center lg:text-left">
          <h3
            className="
              flex flex-nowrap items-baseline justify-center gap-x-2 whitespace-nowrap
              leading-tight sm:gap-x-3 lg:justify-start
              [-webkit-overflow-scrolling:touch] overflow-x-auto pb-0.5
            "
          >
            <span className="shrink-0 text-lg font-bold text-white sm:text-xl lg:text-2xl">
              {titlePrimary}
            </span>
            <span className="inline-flex shrink-0 items-baseline text-sm font-semibold text-zinc-400 sm:text-base">
              {' - '}
              <span className="pl-2 sm:pl-3">{titleSecondary}</span>
            </span>
          </h3>
          <p className="mt-2 whitespace-pre-line text-xs tabular-nums text-zinc-500 sm:text-sm">
            {metaLine}
          </p>
        </div>
      </div>
    </div>
  )
}
