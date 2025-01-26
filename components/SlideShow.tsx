'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const images = [
  '/landscape/image1.jpg',
  '/landscape/image2.jpg',
  '/landscape/image3.jpg',
  '/landscape/image4.jpg',
  '/landscape/image5.jpg',
]

const Slideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 10000) // Change image every 10 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [])

  return (
    <div id='home' className='relative w-full overflow-hidden'>
      {/* Container for desktop view */}
      <div className='hidden md:block h-max overflow-hidden relative'>
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          layout='responsive'
          width={1000} // Set the width according to your design
          height={500} // Half height for desktop
          className='object-cover' // Ensures the image covers the container
        />
        <div className='font-cormorant absolute top-0 left-0 right-0 text-center text-white text-xl font-bold py-3 bg-opacity-50'>
          || Shree Ganeshaye Namah ||
          <Image
            src='/ganeshji.png'
            alt='Ganesh Ji'
            width={50}
            height={50}
            className='z-50 mx-auto'
          />
        </div>
        <div className='opacity-50 font-greatVibes absolute inset-0 flex flex-col space-y-4 items-center justify-center text-white text-5xl font-bold bg-black bg-opacity-50'>
          <h3>Kanika & Harsh</h3>
          <h3 className='font-semibold'>#KAnHA</h3>
        </div>
      </div>

      {/* Container for mobile and tablet view */}
      <div className='block md:hidden h-full relative'>
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          layout='responsive'
          width={1000} // Set the width according to your design
          height={1000} // Full height for mobile
          className='object-cover' // Ensures the image covers the container
        />
        <div className='absolute top-0 left-0 right-0 text-center text-white text-lg font-bold'>
          || Shree Ganeshaye Namah ||
          <Image
            src='/ganeshji.png'
            alt='Ganesh Ji'
            width={45}
            height={45}
            className='z-50 mx-auto'
          />
        </div>
        <div className='opacity-50 font-greatVibes absolute inset-0 flex flex-col space-y-4 items-center justify-center text-white text-3xl font-bold bg-black bg-opacity-50'>
          <h3>Kanika & Harsh</h3>
          <h3 className='font-semibold'>#KAnHA</h3>
        </div>
      </div>
    </div>
  )
}

export default Slideshow
