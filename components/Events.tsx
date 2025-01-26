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
      className='text-center bg-white space-y-9 flex flex-col mx-auto text-black'
      style={{
        backgroundImage: "url('/background/red-carpet.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='mx-auto space-y-3'>
        {eventImage.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Event ${index + 1}`}
            width={1000}
            height={500}
            className='w-full h-full border-2 border-black'
          />
        ))}
      </div>
    </div>
  )
}
