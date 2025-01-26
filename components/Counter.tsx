'use client'
import { useEffect, useState } from 'react'

const Countdown: React.FC = () => {
  const targetDate = new Date('2025-02-24T00:00:00+05:30').getTime() // 24th Feb 2025 IST
  const [timeLeft, setTimeLeft] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference <= 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        )
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      }
    }, 1000)

    return () => clearInterval(timer) // Cleanup interval on component unmount
  }, [targetDate])

  return (
    <div className='flex flex-col items-center space-y-4 p-6 bg-gray-100'>
      <h1 className='text-xl md:text-3xl text-center text-amber-950 font-bold font-tangerine'>
        OUR FOREVER STARTS IN
      </h1>
      <div className='w-screen flex items-center text-[#d64c33]'>
        <div className='flex justify-evenly w-full text-center'>
          <div>
            <p className='text-3xl md:text-7xl font-bold'>{timeLeft.days}</p>
            <p className='text-lg md:text-2xl text-gray-400'>Days</p>
          </div>
          <div>
            <p className='text-3xl md:text-7xl font-bold'>{timeLeft.hours}</p>
            <p className='text-lg md:text-2xl text-gray-400'>Hours</p>
          </div>
          <div>
            <p className='text-3xl md:text-7xl font-bold'>{timeLeft.minutes}</p>
            <p className='text-lg md:text-2xl text-gray-400'>Minutes</p>
          </div>
          <div>
            <p className='text-3xl md:text-7xl font-bold'>{timeLeft.seconds}</p>
            <p className='text-lg md:text-2xl text-gray-400'>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countdown
