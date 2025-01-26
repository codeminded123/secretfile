import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Kanika Weds Harsh',
  description: 'Kanika Weds Harsh',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='fixed top-0 left-0 w-full z-50'>
          <Header />
        </div>
        {children}
        <div className='text-center mx-auto bottom-0 left-0 w-full z-50 bg-black text-white'>
          Made by Disha Dutta
        </div>
      </body>
    </html>
  )
}
