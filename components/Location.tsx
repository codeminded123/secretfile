'use client'

import Image from 'next/image'
import Link from 'next/link'
import MapWithLocation from './MapWithLocation'

export default function Location() {
  return (
    <div id='venuw' className='py-6 bg-white'>
      <div className='bg-[#783c4a]' data-negative='false'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1000 100'
          preserveAspectRatio='none'
          className='w-full'
        >
          <path
            className='elementor-shape-fill'
            opacity='0.33'
            fill='#c46e82'
            d='M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z'
          />
          <path
            className='elementor-shape-fill'
            fill='#debfc6'
            opacity='0.66'
            d='M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z'
          />
          <path
            className='elementor-shape-fill'
            fill='white'
            d='M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z'
          />
        </svg>
      </div>
      <div className='bg-[#783c4a] text-black flex flex-col space-y-9'>
        <div className='mx-auto'>
          <Image
            decoding='async'
            width='75'
            height='72'
            src='/rose/white-rose.png'
            className='attachment-large size-large wp-image-12006'
            alt='white-rose'
          />
        </div>
        <h2 className='text-5xl italic text-center font-tangerine font-semibold'>
          Our Wedding Venue
        </h2>
        <Image
          className='mx-auto'
          src='/images/logo.png'
          width={250}
          height={250}
          alt='KANHA PALM SPRINGS'
        />
        <div className='font-semibold text-lg text-center font-playfair'>
          KANHA&apos;s PALM SPRINGS
          <br />
          Hoshangabad Road, Ratanpur, Bhopal (M.P)
        </div>
        <MapWithLocation />
        <Link
          href='https://maps.app.goo.gl/jiu2EnpFYsjHA7iW7'
          className='bg-[#E0B278] hover:bg-white max-w-max mx-auto justify-center px-3 py-2 rounded-full text-sm hover:border-4 hover:border-[#E0B278] border-4 border-white hover:text-[#E0B278] text-white'
        >
          GET DIRECTIONS
        </Link>
      </div>
      <div className='bg-white' data-negative='false'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1000 100'
          preserveAspectRatio='none'
          className='w-full'
        >
          <path
            className='elementor-shape-fill'
            opacity='0.33'
            fill='#c46e82'
            d='M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z'
          />
          <path
            className='elementor-shape-fill'
            fill='#debfc6'
            opacity='0.66'
            d='M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z'
          />
          <path
            className='elementor-shape-fill'
            fill='#783c4a'
            d='M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z'
          />
        </svg>
      </div>
    </div>
  )
}
