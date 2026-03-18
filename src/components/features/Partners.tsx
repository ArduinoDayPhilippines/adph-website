'use client';
import React from 'react'
import Image from 'next/image'
import { sponsors } from '@/data/index'
import GlowingTextOrange from '@/components/ui/glow-text-orange'

const Partners = () => {
  const keystoneSponsors = sponsors.filter(
    (s: { tier?: string }) => s.tier === 'keystone'
  )
  const goldSponsors = sponsors.filter(
    (s: { tier?: string }) => s.tier === 'gold'
  )
  const communityPartners = sponsors.filter(
    (s: { tier?: string }) => s.tier === 'community'
  )
  const mediaPartners = sponsors.filter(
    (s: { tier?: string }) => s.tier === 'media'
  )

  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Section header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-5 font-morganite">
          Special Thanks To Our{' '}
          <GlowingTextOrange className="font-bold">
            Sponsors And Partners
          </GlowingTextOrange>
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-white/50 font-montserrat sm:mb-16 sm:text-base">
          The organizations and communities that make this event possible.
        </p>

        {/* Keystone Sponsors */}
        <div className="mb-14 sm:mb-20">
          <div className="mb-6 flex items-center justify-center gap-3 sm:mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
            <span className="whitespace-nowrap rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary font-montserrat">
              Keystone Sponsors
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            {keystoneSponsors.map((sponsor, index) => (
              sponsor.website ? (
                <a
                  key={index}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.06] sm:p-6 lg:p-8"
                  aria-label={`Visit ${sponsor.name}`}
                >
                  {/* Glow effect on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative h-16 w-24 sm:h-20 sm:w-32 lg:h-24 lg:w-36">
                    <Image
                      src={sponsor.path_to_image}
                      alt={sponsor.name}
                      fill
                      sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 144px"
                      className={`object-contain transition-all duration-300 group-hover:brightness-110 ${
                        sponsor.radius ? 'rounded-full' : ''
                      }`}
                    />
                  </div>

                  {/* Name tooltip on hover */}
                  <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/10 px-3 py-1 text-xs text-white/70 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 font-montserrat">
                    {sponsor.name}
                  </div>
                </a>
              ) : (
                <div
                  key={index}
                  className="group relative flex items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.06] sm:p-6 lg:p-8"
                >
                  {/* Glow effect on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative h-16 w-24 sm:h-20 sm:w-32 lg:h-24 lg:w-36">
                    <Image
                      src={sponsor.path_to_image}
                      alt={sponsor.name}
                      fill
                      sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 144px"
                      className={`object-contain transition-all duration-300 group-hover:brightness-110 ${
                        sponsor.radius ? 'rounded-full' : ''
                      }`}
                    />
                  </div>

                  {/* Name tooltip on hover */}
                  <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/10 px-3 py-1 text-xs text-white/70 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 font-montserrat">
                    {sponsor.name}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-14 sm:mb-20">
          <div className="mb-6 flex items-center justify-center gap-3 sm:mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-300/30" />
            <span className="whitespace-nowrap rounded-full border border-amber-300/25 bg-amber-300/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200 font-montserrat">
              Gold Sponsors
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-300/30" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 lg:gap-6">
            {goldSponsors.map((sponsor, index) => (
              sponsor.website ? (
                <a
                  key={index}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex w-[240px] items-center justify-center rounded-xl border border-white/[0.05] bg-white/[0.025] p-4 backdrop-blur-sm transition-all duration-300 hover:border-amber-300/30 hover:bg-white/[0.06] sm:w-[260px] sm:p-5"
                  aria-label={`Visit ${sponsor.name}`}
                >
                  <div className="relative h-12 w-full sm:h-14 md:h-16">
                    <Image
                      src={sponsor.path_to_image}
                      alt={sponsor.name}
                      fill
                      sizes="(max-width: 640px) 42vw, (max-width: 1024px) 28vw, 20vw"
                      className={`object-contain transition-all duration-300 group-hover:brightness-110 ${
                        sponsor.radius ? 'rounded-full' : ''
                      }`}
                    />
                  </div>

                  <div className="pointer-events-none absolute -bottom-7 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/10 px-2.5 py-1 text-[10px] text-white/70 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 font-montserrat sm:text-xs">
                    {sponsor.name}
                  </div>
                </a>
              ) : (
                <div
                  key={index}
                  className="group relative flex w-[240px] items-center justify-center rounded-xl border border-white/[0.05] bg-white/[0.025] p-4 backdrop-blur-sm transition-all duration-300 hover:border-amber-300/30 hover:bg-white/[0.06] sm:w-[260px] sm:p-5"
                >
                  <div className="relative h-12 w-full sm:h-14 md:h-16">
                    <Image
                      src={sponsor.path_to_image}
                      alt={sponsor.name}
                      fill
                      sizes="(max-width: 640px) 42vw, (max-width: 1024px) 28vw, 20vw"
                      className={`object-contain transition-all duration-300 group-hover:brightness-110 ${
                        sponsor.radius ? 'rounded-full' : ''
                      }`}
                    />
                  </div>

                  <div className="pointer-events-none absolute -bottom-7 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/10 px-2.5 py-1 text-[10px] text-white/70 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 font-montserrat sm:text-xs">
                    {sponsor.name}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Media Partners */}
        {mediaPartners.length > 0 && (
          <div className="mt-16">
            <div className="mb-6 flex items-center justify-center gap-3 sm:mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-pink-400/20" />
              <span className="whitespace-nowrap rounded-full border border-pink-400/20 bg-pink-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-pink-300 font-montserrat">
                Media Partners
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-pink-400/20" />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-5">
              {mediaPartners.map((sponsor, index) => (
                sponsor.website ? (
                  <a
                    key={index}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center rounded-xl border border-white/[0.04] bg-white/[0.02] p-3 backdrop-blur-sm transition-all duration-300 hover:border-pink-400/20 hover:bg-white/[0.05] sm:p-4"
                    aria-label={`Visit ${sponsor.name}`}
                  >
                    <div className="relative h-10 w-full sm:h-14 md:h-16">
                      <Image
                        src={sponsor.path_to_image}
                        alt={sponsor.name}
                        fill
                        sizes="(max-width: 640px) 28vw, (max-width: 1024px) 20vw, 14vw"
                        className={`object-contain transition-all duration-300 group-hover:brightness-110 ${
                          sponsor.radius ? 'rounded-full' : ''
                        }`}
                      />
                    </div>
                    <div className="pointer-events-none absolute -bottom-7 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/10 px-2.5 py-1 text-[10px] text-white/70 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 font-montserrat sm:text-xs">
                      {sponsor.name}
                    </div>
                  </a>
                ) : (
                  <div
                    key={index}
                    className="group relative flex items-center justify-center rounded-xl border border-white/[0.04] bg-white/[0.02] p-3 backdrop-blur-sm transition-all duration-300 hover:border-pink-400/20 hover:bg-white/[0.05] sm:p-4"
                  >
                    <div className="relative h-10 w-full sm:h-14 md:h-16">
                      <Image
                        src={sponsor.path_to_image}
                        alt={sponsor.name}
                        fill
                        sizes="(max-width: 640px) 28vw, (max-width: 1024px) 20vw, 14vw"
                        className={`object-contain transition-all duration-300 group-hover:brightness-110 ${
                          sponsor.radius ? 'rounded-full' : ''
                        }`}
                      />
                    </div>
                    <div className="pointer-events-none absolute -bottom-7 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/10 px-2.5 py-1 text-[10px] text-white/70 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 font-montserrat sm:text-xs">
                      {sponsor.name}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        )}

        {/* Community Partners */}
        <div>
          <div className="mb-6 flex items-center justify-center gap-3 sm:mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-secondary/20" />
            <span className="whitespace-nowrap rounded-full border border-secondary/20 bg-secondary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary font-montserrat">
              Community Partners
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-secondary/20" />
          </div>

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6 lg:gap-5">
            {communityPartners.map((sponsor, index) => (
              sponsor.website ? (
                <a
                  key={index}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center rounded-xl border border-white/[0.04] bg-white/[0.02] p-3 backdrop-blur-sm transition-all duration-300 hover:border-secondary/20 hover:bg-white/[0.05] sm:p-4"
                  aria-label={`Visit ${sponsor.name}`}
                >
                  <div className="relative h-10 w-full sm:h-14 md:h-16">
                    <Image
                      src={sponsor.path_to_image}
                      alt={sponsor.name}
                      fill
                      sizes="(max-width: 640px) 28vw, (max-width: 1024px) 20vw, 14vw"
                      className={`object-contain transition-all duration-300 group-hover:brightness-110 ${
                        sponsor.radius ? 'rounded-full' : ''
                      }`}
                    />
                  </div>

                  {/* Name tooltip on hover */}
                  <div className="pointer-events-none absolute -bottom-7 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/10 px-2.5 py-1 text-[10px] text-white/70 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 font-montserrat sm:text-xs">
                    {sponsor.name}
                  </div>
                </a>
              ) : (
                <div
                  key={index}
                  className="group relative flex items-center justify-center rounded-xl border border-white/[0.04] bg-white/[0.02] p-3 backdrop-blur-sm transition-all duration-300 hover:border-secondary/20 hover:bg-white/[0.05] sm:p-4"
                >
                  <div className="relative h-10 w-full sm:h-14 md:h-16">
                    <Image
                      src={sponsor.path_to_image}
                      alt={sponsor.name}
                      fill
                      sizes="(max-width: 640px) 28vw, (max-width: 1024px) 20vw, 14vw"
                      className={`object-contain transition-all duration-300 group-hover:brightness-110 ${
                        sponsor.radius ? 'rounded-full' : ''
                      }`}
                    />
                  </div>

                  {/* Name tooltip on hover */}
                  <div className="pointer-events-none absolute -bottom-7 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/10 px-2.5 py-1 text-[10px] text-white/70 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 font-montserrat sm:text-xs">
                    {sponsor.name}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
