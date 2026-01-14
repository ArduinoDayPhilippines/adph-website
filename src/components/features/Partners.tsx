'use client';
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { sponsors } from '@/data/index'
import GlowingTextOrange from '@/components/ui/glow-text-orange'

const Partners = () => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getAdjustedSize = (size: number) => {
    // Adjust these offsets as desired for your breakpoints
    if (windowWidth <= 640) return size - 10   // Mobile
    if (windowWidth <= 768) return size - 20   // Tablet
    if (windowWidth <= 1024) return size - 40  // Desktop
    return size 
  }

  return (
    <div className="py-16">
      <div className="container">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-12 font-morganite">
          Special Thanks To Our{' '}
          <GlowingTextOrange className="font-bold">
            Sponsors And Partners
          </GlowingTextOrange>
        </h1>

        {/* Responsive grid for logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index}
              className="relative flex justify-center items-center p-3 transition-transform duration-300 transform group hover:scale-105"
              style={{
                minHeight: `${getAdjustedSize(sponsor.height)}px`,
              }}
            >
              {/* Gradient border on hover */}
              <div
                className="
                  absolute inset-0 rounded-2xl
                  bg-gradient-to-b from-green-300 to-orange-500
                  p-[2px]
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  pointer-events-none
                "
              >
                <div className="w-full h-full bg-[#0f0f0f] rounded-2xl" />
              </div>

              {/* Logo Container - maintains size */}
              <div 
                className="absolute inset-0 flex items-center justify-center p-3"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              >
                <Image
                  src={sponsor.path_to_image}
                  alt={sponsor.name}
                  width={getAdjustedSize(sponsor.width)}
                  height={getAdjustedSize(sponsor.height)}
                  className={`z-10 object-contain group-hover:opacity-0 transition-opacity duration-300 ${
                    sponsor.radius ? 'rounded-full' : ''
                  }`}
                />
              </div>

              {/* Text overlay - same position */}
              <div
                className="absolute inset-0 z-10 flex opacity-0 group-hover:opacity-100 
                  text-white text-sm sm:text-base lg:text-xl font-semibold text-center 
                  items-center justify-center px-2
                  font-morganite transition-opacity duration-300"
              >
                {sponsor.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Partners
