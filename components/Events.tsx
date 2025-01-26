'use client'

import Image from 'next/image'

const eventImage = [
  '/events/image1.jpg',
  '/events/image2.jpg',
  '/events/image3.jpg',
  '/events/image4.jpg',
  '/events/image5.jpg',
  '/events/image6.jpg',
]

export default function Events() {
  return (
    <div
      id='events'
      className='text-center bg-white space-y-9 flex flex-col p-8 md:p-16 mx-auto text-black'
    >
      <div className='mx-auto'>
        <Image
          width='150'
          height='150'
          src='/rose/brown-couple.jpeg'
          alt='Pink Rose'
          className='mx-auto w-35 h-35'
        />
      </div>
      <h2 className='text-6xl italic font-semibold font-tangerine'>
        Wedding Events
      </h2>
      <div className='mx-auto space-y-3'>
        {eventImage.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Event ${index + 1}`}
            width={1000} // Adjust width as needed
            height={500} // Adjust height as needed
            className='w-full h-full border-2 border-black'
          />
        ))}
      </div>
    </div>
  )
}
