'use client'

import Image from 'next/image'

export default function Events() {
  return (
    <div
      id='events'
      className='text-center bg-white space-y-9 flex flex-col p-16 mx-auto text-black'
    >
      <div className='mx-auto'>
        <Image
          decoding='async'
          width='75'
          height='72'
          src='/rose/pink-rose.png'
          alt='Pink Rose'
        />
      </div>
      <h2 className='text-6xl italic font-semibold font-tangerine'>
        Wedding Events
      </h2>
    </div>
  )
}
