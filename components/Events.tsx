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
    <div className='relative text-center bg-white space-y-9 flex flex-col mx-auto text-black'>
      {/* Background overlay */}
      <div
        className='absolute inset-0 bg-black opacity-30'
        style={{
          backgroundImage: "url('/background/red-carpet.jpg')", // Background image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 10, // Ensures the overlay stays behind the content
        }}
      ></div>
      <div className='mx-auto'>
        <Image
          width='250'
          height='250'
          src='/rose/brown-couple.jpeg'
          alt='Pink Rose'
          className='mx-auto w-35 h-35'
        />
      </div>
      <h2 className='text-4xl md:text-5xl lg:text-6xl italic font-semibold font-tangerine'>
        Wedding Events
      </h2>
      <div className='mx-auto space-y-3'>
        {eventImage.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Event ${index + 1}`}
            width={1000}
            height={500}
            className='w-full h-full border md:border-2 border-black border-double'
          />
        ))}
      </div>
    </div>
  )
}
