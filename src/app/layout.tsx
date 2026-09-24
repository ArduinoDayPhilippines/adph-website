import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'Arduino Day Philippines 2027',
  description: 'The Official Website of Arduino Day Philippines 2027.',
  keywords: [
    'Arduino Day Philippines',
    'ADPH 2027',
    'Arduino Philippines',
    'Open Source Hardware',
    'Robotics Philippines',
    'IoT Manila'
  ]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${montserrat.variable} min-h-screen overflow-x-hidden text-white antialiased`}>{children}</body>
    </html>
  )
}
