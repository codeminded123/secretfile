'use client'

import Image from 'next/image'

export default function PreWedding() {
  const iframeUrl =
    'https://drive.google.com/file/d/1qudEUTfCCvf5dsmTym8PwtVql8U6u8pU/preview'

  return (
    <div className='bg-white space-y-6 p-5'>
      <div className='mx-auto'>
        <Image
          width='75'
          height='72'
          src='/rose/pink-rose.png'
          alt='Pink Rose'
          className='mx-auto w-20 h-20'
        />
      </div>
      <h1 className='text-4xl md:text-5xl italic text-center text-amber-950 font-bold font-tangerine'>
        Our Pre Wedding Teaser
      </h1>
      <div className=''>
        <div className='border-2 border-black flex flex-col items-center justify-center w-full'>
          <iframe
            src={iframeUrl}
            className='w-full h-[500px]'
            allow='autoplay'
          />
        </div>
      </div>
    </div>
  )
}
