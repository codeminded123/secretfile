'use client'
import { IoMdMail } from 'react-icons/io'
import { FaBusinessTime, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('')

  useEffect(() => {
    // Get the current year in IST
    const istDate = new Date().toLocaleDateString('en-IN', {
      year: 'numeric',
      timeZone: 'Asia/Kolkata',
    })
    setCurrentYear(istDate)
  }, [])

  return (
    <div className='p-3 text-center space-y-6 bottom-0 left-0 w-full z-50 bg-black text-white'>
      <div className='font-bold font-cormorant'>Made by Disha Dutta</div>
      <div className='flex flex-row items-center space-x-6 justify-center'>
        <Link href='mailTo:duttadisha12345@gmail.com'>
          <IoMdMail />
        </Link>
        <Link href='https://www.linkedin.com/in/dishadutta14/'>
          <FaLinkedin />
        </Link>
        <Link href='https://portfolio-phi-six-91.vercel.app/'>
          <FaBusinessTime />
        </Link>
      </div>
      <div className='text-sm font-semibold'>
        © {currentYear} All rights reserved.
        <br />
        <span className='text-xs'>Kanika & Harsh</span>
      </div>
    </div>
  )
}
