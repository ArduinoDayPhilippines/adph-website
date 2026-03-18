'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Import images from merchs folder
import Merch12 from '../../../public/images/merchs/12.png'
import Merch13 from '../../../public/images/merchs/13.png'
import Merch15 from '../../../public/images/merchs/15.png'
import Merch16 from '../../../public/images/merchs/16.png'
import Merch17 from '../../../public/images/merchs/17.png'
import Merch18 from '../../../public/images/merchs/18.png'
import Merch19 from '../../../public/images/merchs/19.png'
import Merch20 from '../../../public/images/merchs/20.png'
import Merch21 from '../../../public/images/merchs/21.png'
import Merch22 from '../../../public/images/merchs/22.png'
import Merch23 from '../../../public/images/merchs/23.png'
import ArduinoCoreKit from '../../../public/images/merchs/Arduino Core Kit.png'
import ArduinoCreatorBundleCoreKit from '../../../public/images/merchs/Arduino Creator BundleCore Kit.png'
import ArduinoGearSetTechSetStartupBundleCreatorBundleCoreKit from '../../../public/images/merchs/Arduino Gear SetTech SetStartup BundleCreator BundleCore Kit.png'
import ArduinoProBuilderKit from '../../../public/images/merchs/Arduino Pro Builder Kit.png'
import ArduinoStarterSetGearSetTechSetStartupBundleCreatorBundleCoreKit from '../../../public/images/merchs/Arduino Starter Set Gear SetTech SetStartup BundleCreator BundleCore Kit.png'
import ArduinoStartupBundleCreatorBundleCoreKit2 from '../../../public/images/merchs/Arduino Startup BundleCreator BundleCore Kit (2).png'
import ArduinoStartupBundleCreatorBundleCoreKit from '../../../public/images/merchs/Arduino Startup BundleCreator BundleCore Kit.png'
import ArduinoSwagsPackStarterSetGearSetTechSetStartupBundleCreatorBundleCoreKit from '../../../public/images/merchs/Arduino Swags Pack Starter Set Gear SetTech SetStartup BundleCreator BundleCore Kit.png'
import ArduinoTechSetStartupBundleCreatorBundleCoreKit from '../../../public/images/merchs/Arduino Tech SetStartup BundleCreator BundleCore Kit.png'
import ArduinoUltimate2026Kit from '../../../public/images/merchs/Arduino Ultimate 2026 Kit.png'

const MERCH_STORE_URL = 'https://merch.arduinodayphilippines.cc/'

interface MerchItem {
  image: StaticImageData
  alt: string
  name: string
  category: string
  price: string
  href: string
}

const merchItems: MerchItem[] = [
  // Apparel & soft goods (numbered canvases)
  {
    image: Merch12,
    alt: 'Vest I',
    name: 'Vest I',
    category: 'Apparel',
    price: '₱350',
    href: MERCH_STORE_URL
  },
  {
    image: Merch13,
    alt: 'Vest II',
    name: 'Vest II',
    category: 'Apparel',
    price: '₱350',
    href: MERCH_STORE_URL
  },
  {
    image: Merch15,
    alt: 'Shirt I',
    name: 'Shirt I',
    category: 'Apparel',
    price: '₱300',
    href: MERCH_STORE_URL
  },
  {
    image: Merch16,
    alt: 'Shirt II',
    name: 'Shirt II',
    category: 'Apparel',
    price: '₱300',
    href: MERCH_STORE_URL
  },
  {
    image: Merch17,
    alt: 'Badge Pin',
    name: 'Badge Pin',
    category: 'Accessories',
    price: '₱30',
    href: MERCH_STORE_URL
  },
  {
    image: Merch18,
    alt: 'ADPH Mug',
    name: 'ADPH Mug',
    category: 'Drinkware',
    price: '₱100',
    href: MERCH_STORE_URL
  },
  {
    image: Merch19,
    alt: 'Tote Bag',
    name: 'Tote Bag',
    category: 'Bags',
    price: '₱150',
    href: MERCH_STORE_URL
  },
  {
    image: Merch20,
    alt: 'Gaming Mouse Pad',
    name: 'Gaming Mouse Pad',
    category: 'Gaming',
    price: '300',
    href: MERCH_STORE_URL
  },
  {
    image: Merch21,
    alt: 'Gaming Mouse Pad',
    name: 'Gaming Mouse Pad',
    category: 'Drinkware',
    price: '₱130',
    href: MERCH_STORE_URL
  },
  {
    image: Merch22,
    alt: 'ADPH Cap',
    name: 'ADPH Cap',
    category: 'Apparel',
    price: '₱150',
    href: MERCH_STORE_URL
  },
  {
    image: Merch23,
    alt: 'ADPH Sticker Sheet',
    name: 'Sticker Sheet',
    category: 'Collectibles',
    price: '₱10',
    href: MERCH_STORE_URL
  },

  // Arduino hardware kits & bundles
  {
    image: ArduinoCoreKit,
    alt: 'Arduino Core Kit',
    name: 'Arduino Core Kit',
    category: 'Bundles',
    price: '₱899',
    href: MERCH_STORE_URL
  },
  {
    image: ArduinoCreatorBundleCoreKit,
    alt: 'Arduino Creator Bundle Core Kit',
    name: 'Arduino Creator Bundle',
    category: 'Bundles',
    price: '₱699',
    href: MERCH_STORE_URL
  },
  {
    image: ArduinoGearSetTechSetStartupBundleCreatorBundleCoreKit,
    alt: 'Arduino Gear Set Tech Set Startup Bundle',
    name: 'Arduino Gear Set Bundle',
    category: 'Bundles',
    price: '₱499',
    href: MERCH_STORE_URL
  },
  {
    image: ArduinoProBuilderKit,
    alt: 'Arduino Pro Builder Kit',
    name: 'Arduino Pro Builder Kit',
    category: 'Bundles',
    price: '₱1,149',
    href: MERCH_STORE_URL
  },
  {
    image: ArduinoStarterSetGearSetTechSetStartupBundleCreatorBundleCoreKit,
    alt: 'Arduino Starter Set Bundle',
    name: 'Arduino Starter Set',
    category: 'Bundles',
    price: '₱349',
    href: MERCH_STORE_URL
  },
  {
    image: ArduinoStartupBundleCreatorBundleCoreKit2,
    alt: 'Arduino Startup Bundle Creator Bundle Core Kit',
    name: 'Arduino Startup Bundle',
    category: 'Hardware Bundle',
    price: '₱649',
    href: MERCH_STORE_URL
  },
  {
    image: ArduinoStartupBundleCreatorBundleCoreKit,
    alt: 'Arduino Startup Bundle Creator Bundle Core Kit',
    name: 'Arduino Startup Bundle (Alt)',
    category: 'Hardware Bundle',
    price: '₱649',
    href: MERCH_STORE_URL
  },
  {
    image: ArduinoSwagsPackStarterSetGearSetTechSetStartupBundleCreatorBundleCoreKit,
    alt: 'Arduino Swags Pack Starter Set',
    name: 'Arduino Swags Pack',
    category: 'Accessories Bundle',
    price: '₱199',
    href: MERCH_STORE_URL
  },
  {
    image: ArduinoTechSetStartupBundleCreatorBundleCoreKit,
    alt: 'Arduino Tech Set Startup Bundle',
    name: 'Arduino Tech Set',
    category: 'Bundles',
    price: '₱399',
    href: MERCH_STORE_URL
  },
  {
    image: ArduinoUltimate2026Kit,
    alt: 'Arduino Ultimate 2026 Kit',
    name: 'Arduino Ultimate 2026 Kit',
    category: 'Bundles',
    price: '₱1,399',
    href: MERCH_STORE_URL
  }
]

export default function Merch() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const total = merchItems.length

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrent((index + total) % total)
    },
    [isAnimating, total]
  )

  const prev = useCallback(() => goTo(current - 1), [current, goTo])
  const next = useCallback(() => goTo(current + 1), [current, goTo])

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 400)
    return () => clearTimeout(timer)
  }, [current])

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) goTo(current + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [current, isAnimating, goTo])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) next()
      else prev()
    }
  }

  const getPosition = (index: number) => {
    const diff = (index - current + total) % total
    if (diff === 0) return 'center'
    if (diff === 1 || diff === -(total - 1)) return 'right'
    if (diff === total - 1 || diff === -1) return 'left'
    return 'hidden'
  }

  const item = merchItems[current]

  return (
    <div className='mx-auto w-full max-w-6xl px-5 md:px-8 lg:px-12'>
      {/* Section header */}
      <div className='mb-10 flex flex-col items-center text-center md:mb-14'>
        <div className='bg-white/5 text-white/70 mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] backdrop-blur'>
          <span className='h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_0_6px_rgba(0,178,178,0.18)]' />
          <span className='font-montserrat'>Merch</span>
        </div>
        <h2 className='text-white/95 mb-4 font-morganite text-4xl font-bold leading-none tracking-wide sm:text-5xl md:text-6xl lg:text-7xl'>
          The <span className='text-secondary'>Collection</span>
        </h2>
        <p className='text-white/50 max-w-md font-montserrat text-xs leading-relaxed md:text-sm'>
          From launch-day shirts to Arduino starter kits, this lineup is designed for builders who want to wear and ship
          their ideas.
        </p>
      </div>

      {/* Carousel */}
      <div
        className='relative w-full'
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel viewport */}
        <div className='relative h-[340px] overflow-hidden rounded-3xl sm:h-[400px] md:h-[460px]'>
          {/* Items */}
          <div className='bg-white absolute inset-0 flex items-center justify-center'>
            {merchItems.map((merchItem, index) => {
              const pos = getPosition(index)
              if (pos === 'hidden') return null

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-500 ease-out ${
                    pos === 'center'
                      ? 'z-20 scale-100'
                      : pos === 'left'
                        ? 'z-10 hidden -translate-x-[60%] scale-[0.7] sm:block md:-translate-x-[75%]'
                        : 'z-10 hidden translate-x-[60%] scale-[0.7] sm:block md:translate-x-[75%]'
                  }`}
                >
                  <div
                    className={`relative rounded-2xl border border-slate-200 !bg-[#F3EDEA] p-6 transition-shadow md:p-8 ${
                      pos === 'center' ? 'shadow-lg' : 'shadow-sm'
                    }`}
                    style={{ backgroundColor: '#ffffff' }}
                  >
                    <Image
                      src={merchItem.image}
                      alt={merchItem.alt}
                      width={400}
                      height={400}
                      className={`h-[220px] w-[220px] object-contain transition-opacity sm:h-[280px] sm:w-[280px] md:h-[340px] md:w-[340px] ${
                        pos === 'center' ? 'opacity-100' : 'opacity-40'
                      }`}
                      priority={index <= 2}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          disabled={isAnimating}
          className='border-white/[0.08] bg-white/[0.04] text-white/60 hover:bg-white/[0.08] absolute left-0 top-1/2 z-30 -translate-y-1/2 rounded-full border p-2 backdrop-blur-sm transition-all hover:border-primary/40 hover:text-primary disabled:opacity-30 md:left-4 md:p-3'
          aria-label='Previous item'
        >
          <ChevronLeft className='h-5 w-5 md:h-6 md:w-6' />
        </button>
        <button
          onClick={next}
          disabled={isAnimating}
          className='border-white/[0.08] bg-white/[0.04] text-white/60 hover:bg-white/[0.08] absolute right-0 top-1/2 z-30 -translate-y-1/2 rounded-full border p-2 backdrop-blur-sm transition-all hover:border-primary/40 hover:text-primary disabled:opacity-30 md:right-4 md:p-3'
          aria-label='Next item'
        >
          <ChevronRight className='h-5 w-5 md:h-6 md:w-6' />
        </button>
      </div>

      {/* Product info */}
      <div className='mt-8 flex flex-col items-center text-center md:mt-10'>
        <span className='mb-1 font-montserrat text-[10px] uppercase tracking-[0.16em] text-primary/80 md:text-xs'>
          {item.category}
        </span>
        <h3 className='text-white/95 mb-2 font-morganite text-3xl font-bold leading-none tracking-wide md:text-4xl lg:text-5xl'>
          {item.name}
        </h3>
        <span className='font-montserrat text-lg font-semibold tracking-wide text-price md:text-xl'>{item.price}</span>
      </div>

      {/* Dots */}
      <div className='mt-5 flex items-center justify-center gap-2'>
        {merchItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`rounded-full transition-all duration-300 ${
              index === current ? 'h-2 w-6 bg-primary' : 'bg-white/20 hover:bg-white/40 h-2 w-2'
            }`}
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className='mt-8 flex flex-col items-center md:mt-12'>
        <Link
          href={MERCH_STORE_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='text-white inline-flex items-center justify-center rounded-full bg-primary/90 px-8 py-3 font-montserrat text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-primary hover:shadow-[0_0_20px_rgba(0,128,128,0.25)]'
        >
          Shop All Merch
        </Link>
        <p className='text-white/30 mt-3 font-montserrat text-[10px] uppercase tracking-[0.12em]'>All prices in PHP</p>
      </div>
    </div>
  )
}
