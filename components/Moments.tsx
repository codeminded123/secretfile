'use client'

import Image from 'next/image'
import { useState } from 'react'

const images = [
  '/potrait/image1.jpg', // Replace with your image paths
  '/potrait/image2.jpg',
  '/potrait/image3.jpg',
  '/potrait/image4.jpg',
  '/potrait/image5.jpg',
  '/potrait/image6.jpg',
  '/potrait/image7.jpg',
  '/potrait/image8.jpg',
  '/potrait/image9.jpg',
  '/potrait/image10.jpg',
  '/potrait/image11.jpg',
  '/potrait/image12.jpg',
  '/potrait/image13.jpg',
]

export default function Moments() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  const getVisibleImages = () => {
    const visibleImages = []
    for (let i = 0; i < 3; i++) {
      visibleImages.push(images[(currentIndex + i) % images.length])
    }
    return visibleImages
  }
  return (
    <div id='moments' className='bg-white space-y-6'>
      <div className='mx-auto'>
        <Image
          width='150'
          height='150'
          src='/new-logos/moments.png'
          alt='Our Beautiful Moments'
          className='mx-auto w-35 h-35'
        />
      </div>
      <h1 className='text-4xl md:text-5xl px-3 text-balance italic text-center text-[#990000] font-bold font-tangerine'>
        Our Beautiful Moments
      </h1>
      <div className='relative w-full p-3'>
        <div className='flex justify-between items-center'>
          <button
            onClick={prevSlide}
            className='absolute left-3 z-10 p-2 text-white rounded-full'
          >
            &#10094; {/* Left Arrow */}
          </button>
          <div className='flex overflow-hidden'>
            {getVisibleImages().map((src, index) => (
              <div
                key={index}
                className='flex-shrink-0 w-full md:w-1/2 lg:w-1/3  h-[534px] md:h-[593px] lg:h-[716px]'
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  layout='fixed'
                  width={500} // Adjust width as needed
                  height={300} // Adjust height as needed
                  className='object-cover '
                />
              </div>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className='absolute right-3 z-10 p-2 text-white rounded-full'
          >
            &#10095; {/* Right Arrow */}
          </button>
        </div>
      </div>
    </div>
  )
}
