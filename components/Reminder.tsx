'use client'

import Image from 'next/image'
import React from 'react'

const Reminder = () => {
  const handleAddToGoogleCalendar = () => {
    const eventTitle = 'Wedding Reminder'
    const eventDescription = 'Join us for the wedding celebration!'
    const eventLocation = 'Bhopal, Madhya Pradesh'
    const startDate = '20250222T033000Z' // Format: YYYYMMDDTHHMMSSZ
    const endDate = '20250224T180000Z' // Format: YYYYMMDDTHHMMSSZ

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventTitle
    )}&details=${encodeURIComponent(
      eventDescription
    )}&location=${encodeURIComponent(
      eventLocation
    )}&dates=${startDate}/${endDate}`

    window.open(googleCalendarUrl, '_blank')
  }

  return (
    <div className='bg-white p-6 text-center flex flex-col space-y-6 text-black'>
      <div className='mx-auto'>
        <Image
          width='150'
          height='150'
          src='/rose/couple.jpeg'
          alt='Pink Rose'
          className='mx-auto w-35 h-35'
        />
      </div>
      <div className='text-6xl italic font-bold font-tangerine'>Invitee</div>
      <div className='flex flex-row items-center mx-auto space-x-6'>
        <div className='w-40 h-40 overflow-hidden rounded-full'>
          <Image
            src='/new-logos/invitee1.jpg'
            width={160}
            height={160}
            alt='Kanika'
            className='object-cover'
          />
        </div>
        <div className='flex flex-col space-y-1 font-playfair font-[550]'>
          <div>Smt. Rubika Dewan</div>
          <div>M. 7247373248</div>
        </div>
      </div>
      <div className='flex flex-row items-center mx-auto space-x-6'>
        <div className='w-40 h-40 overflow-hidden rounded-full'>
          <Image
            src='/new-logos/invitee2.jpg'
            width={160}
            height={160}
            alt='Kanika'
            className='object-cover'
          />
        </div>
        <div className='flex flex-col space-y-1 font-playfair font-[550]'>
          <div>Smt. Tanisha Nag</div>
          <div>M. 9827948992</div>
        </div>
      </div>
      <button
        onClick={handleAddToGoogleCalendar}
        className='bg-[#FFABAB] hover:bg-white max-w-max mx-auto justify-center px-3 py-2 rounded-full text-sm hover:border-4 hover:border-[#FFABAB] border-4 border-white hover:text-[#FFABAB] text-white'
      >
        SEND ME A REMINDER
      </button>
    </div>
  )
}

export default Reminder
