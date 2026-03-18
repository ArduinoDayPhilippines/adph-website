'use client'

import { useState } from 'react'
import Heading from '@/components/ui/heading'
import { cn } from '@/lib/utils'
import {
  hackathonFlowItems,
  programFlowItems,
  type HackathonFlowItem,
  type ProgramFlowItem,
} from '@/data/agenda'

type AgendaTab = 'program' | 'hackathon'

const tabMeta: Record<AgendaTab, { label: string; description: string }> = {
  program: {
    label: 'Program Flow',
    description: 'Main stage sequence, sponsor slots, and closing segments.',
  },
  hackathon: {
    label: 'Hackathon Flow',
    description: 'Pitch order, pacing, and judging transition flow.',
  },
}

const AgendaSchedule = () => {
  const [activeTab, setActiveTab] = useState<AgendaTab>('program')

  return (
    <div className="relative px-4">
      <div className="relative isolate mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-cyan-300/20 bg-[radial-gradient(circle_at_15%_0%,rgba(0,179,179,0.18),transparent_35%),radial-gradient(circle_at_100%_100%,rgba(0,104,122,0.22),transparent_40%),linear-gradient(180deg,rgba(1,22,30,0.92),rgba(3,11,18,0.95))] px-4 py-10 shadow-[0_24px_120px_rgba(0,0,0,0.48)] sm:rounded-3xl sm:px-6 sm:py-14 lg:px-12 lg:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(120,237,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(120,237,255,0.07)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-300/15 to-transparent" />

        <div className="relative flex flex-col items-center gap-4 text-center sm:gap-6">
          <div className="flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-400/5 px-3 py-1.5 uppercase tracking-[0.28em] text-cyan-100/85 sm:px-4 sm:py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_0_7px_rgba(89,223,255,0.16)]" />
            <span className="text-[10px] sm:text-xs">Agenda</span>
          </div>

          <Heading text="Program Flow and Hackathon" glowAll className="text-3xl leading-tight sm:text-4xl md:text-6xl" />
          <p className="max-w-3xl text-xs text-cyan-50/75 sm:text-sm md:text-lg">
            Full run-of-show with a dedicated hackathon track. Flip views below.
          </p>

          <div className="mt-1 inline-flex items-center rounded-full border border-[#cdc6ba] bg-[#e8e4dc] p-1 shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
            {(['program', 'hackathon'] as const).map((tab) => {
              const isActive = activeTab === tab

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    'rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:px-6 sm:text-sm',
                    isActive
                      ? 'bg-[#1d5d42] text-[#f5f5ee] shadow-[inset_0_-1px_0_rgba(0,0,0,0.25),0_6px_12px_rgba(23,70,50,0.45)]'
                      : 'text-[#3d5a50] hover:bg-[#d7d1c6]'
                  )}
                >
                  {tabMeta[tab].label}
                </button>
              )
            })}
          </div>

          <p className="text-xs text-cyan-50/70 sm:text-sm">{tabMeta[activeTab].description}</p>
        </div>

        <div className="mt-8 sm:mt-10">
          {activeTab === 'program' ? (
            <ProgramFlowView items={programFlowItems} />
          ) : (
            <HackathonFlowView items={hackathonFlowItems} />
          )}
        </div>
      </div>
    </div>
  )
}

const ProgramFlowView = ({ items }: { items: ProgramFlowItem[] }) => {
  return (
    <>
      <div className="hidden overflow-hidden rounded-2xl border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(8,73,87,0.72),rgba(3,21,30,0.88))] shadow-[inset_0_1px_0_rgba(135,252,255,0.2)] md:block">
        <div className="flex items-center justify-between border-b border-cyan-200/20 bg-black/20 px-4 py-3">
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-100">Program Flow Main</h3>
          <span className="text-[11px] uppercase tracking-[0.12em] text-cyan-100/70">{items.length} slots</span>
        </div>

        <table className="w-full text-left text-sm text-cyan-50/90">
          <thead className="bg-[#0d313f]/90 text-[11px] uppercase tracking-[0.12em] text-cyan-100/80">
            <tr>
              <th className="px-3 py-3">Time</th>
              <th className="px-3 py-3">Activity</th>
              <th className="px-3 py-3">Speaker</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={`${item.time}-${index}`} className="border-t border-cyan-100/10 align-top odd:bg-black/10 hover:bg-cyan-200/5">
                <td className="px-3 py-3 text-cyan-50/85">{item.time}</td>
                <td className="px-3 py-3 leading-relaxed">{item.activity}</td>
                <td className="px-3 py-3 text-cyan-50/85">{item.speaker}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 gap-3 md:hidden">
        {items.map((item, index) => (
          <article
            key={`${item.time}-${index}`}
            className="rounded-xl border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(8,73,87,0.58),rgba(3,21,30,0.82))] p-3 text-left shadow-[inset_0_1px_0_rgba(135,252,255,0.16)]"
          >
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="text-[11px] text-cyan-50/70">{item.time}</span>
            </div>
            <p className="text-sm text-cyan-50">{item.activity}</p>
            <p className="mt-2 text-xs text-cyan-50/70">{item.speaker}</p>
          </article>
        ))}
      </div>
    </>
  )
}

const HackathonFlowView = ({ items }: { items: HackathonFlowItem[] }) => {
  return (
    <>
      <div className="hidden overflow-hidden rounded-2xl border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(8,73,87,0.72),rgba(3,21,30,0.88))] shadow-[inset_0_1px_0_rgba(135,252,255,0.2)] md:block">
        <div className="flex items-center justify-between border-b border-cyan-200/20 bg-black/20 px-4 py-3">
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-100">Hackathon Session and Competition</h3>
          <span className="text-[11px] uppercase tracking-[0.12em] text-cyan-100/70">{items.length} segments</span>
        </div>

        <table className="w-full text-left text-sm text-cyan-50/90">
          <thead className="bg-[#0d313f]/90 text-[11px] uppercase tracking-[0.12em] text-cyan-100/80">
            <tr>
              <th className="px-3 py-3">Minutes</th>
              <th className="px-3 py-3">Start</th>
              <th className="px-3 py-3">End</th>
              <th className="px-3 py-3">Segment</th>
              <th className="px-3 py-3">Person In Charge</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={`${item.startTime}-${index}`} className="border-t border-cyan-100/10 align-top odd:bg-black/10 hover:bg-cyan-200/5">
                <td className="px-3 py-3 text-cyan-50/85">{item.minutes}</td>
                <td className="px-3 py-3 text-cyan-50/85">{item.startTime}</td>
                <td className="px-3 py-3 text-cyan-50/85">{item.endTime}</td>
                <td className="px-3 py-3 leading-relaxed">{item.segment}</td>
                <td className="px-3 py-3 text-cyan-50/85">{item.personInCharge || 'TBA'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 gap-3 md:hidden">
        {items.map((item, index) => (
          <article
            key={`${item.startTime}-${index}`}
            className="rounded-xl border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(8,73,87,0.58),rgba(3,21,30,0.82))] p-3 text-left shadow-[inset_0_1px_0_rgba(135,252,255,0.16)]"
          >
            <p className="text-[11px] text-cyan-50/70">
              {item.minutes} min · {item.startTime} - {item.endTime}
            </p>
            <p className="mt-1 text-sm text-cyan-50">{item.segment}</p>
            <p className="mt-2 text-xs text-cyan-50/70">{item.personInCharge || 'TBA'}</p>
          </article>
        ))}
      </div>
    </>
  )
}

export default AgendaSchedule