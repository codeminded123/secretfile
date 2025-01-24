'use client'

import Image from 'next/image'

export default function Couple() {
  return (
    <div id='couple'>
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
            alt='white rose'
          />
        </div>
        <h2 className='text-6xl text-center italic font-semibold font-tangerine'>
          Meet the lovely couple
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-0 md:px-6'>
          <div>
            <h1 className='text-center text-4xl pb-3 font-bold italic font-lovelight'>
              Kanika
            </h1>
            <Image
              className='w-[315px] h-[315px] md:w-[420px] md:h-[500px] mx-auto'
              src='/couple/image1.jpg'
              alt='Kanika'
              height={100}
              width={100}
            />
          </div>
          <div>
            <h1 className='text-center text-4xl pb-3 font-bold italic font-lovelight'>
              Harsh
            </h1>
            <Image
              className='w-[315px] h-[315px] md:w-[420px] md:h-[500px] mx-auto font-lovelight'
              src='/couple/image2.jpg'
              alt='Harsh'
              height={1000}
              width={1000}
            />
          </div>
        </div>
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
