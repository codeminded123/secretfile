'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Gallery() {
  return (
    <div
      id='gallery'
      className='bg-white p-6 text-center flex flex-col space-y-7 text-black'
    >
      <div className='mx-auto'>
        <Image
          width='200'
          height='200'
          src='/new-logos/sehnai.png'
          alt='Pink Rose'
          className='mx-auto w-35 h-35'
        />
      </div>
      <div className='text-6xl italic font-corinthia font-bold text-[#990000]'>
        Gallery
      </div>
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
        className='bg-[#FFABAB] hover:bg-white font-cormorant max-w-max mx-auto justify-center px-3 py-2 rounded-full text-sm hover:border-4 hover:border-[#FFABAB] border-4 border-white hover:text-[#FFABAB] text-white'
      >
        UPLOAD PHOTOS
      </Link>
      <div className='text-lg font-playfair'>See you at the wedding 😉</div>
    </div>
  )
}
