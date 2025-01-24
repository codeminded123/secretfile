'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Gallery() {
  return (
    <div
      id='gallery'
      className='bg-white p-6 text-center flex flex-col space-y-9 text-black'
    >
      <div className='mx-auto'>
        <Image
          width='75'
          height='72'
          src='/rose/pink-rose.png'
          alt='Pink Rose'
          className='mx-auto w-20 h-20'
        />
      </div>
      <div className='text-6xl italic font-corinthia font-bold'>Gallery</div>
      <div className='text-4xl italic font-semibold font-tangerine'>
        Post Wedding
      </div>
      <div className='text-lg font-playfair'>
        We love the part you have played in our wedding and we&apos;d love to
        see our union through your lens! Hence, do upload the beautiful memories
        you capture throughout the wedding via below link!
      </div>
      <Link
        href='https://photos.app.goo.gl/UHoEKH7nyM1uCMpM9'
        className='bg-[#E0B278] hover:bg-white font-cormorant max-w-max mx-auto justify-center px-3 py-2 rounded-full text-sm hover:border-4 hover:border-[#E0B278] border-4 border-white hover:text-[#E0B278] text-white'
      >
        UPLOAD PHOTOS
      </Link>
      <div className='text-lg font-playfair'>See you at the wedding 😉</div>
    </div>
  )
}
