'use client'

import React from 'react'

const MapWithLocation = () => {
  const locationLink = 'https://maps.app.goo.gl/jiu2EnpFYsjHA7iW7' // Replace with the direct location link

  return (
    <div className='w-full mx-auto p-6'>
      <div
        className='relative border border-gray-300 rounded-md shadow-lg overflow-hidden cursor-pointer'
        onClick={() => window.open(locationLink, '_blank')}
      >
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.921725270532!2d77.4937647!3d23.1365362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c46eb4e11fbbb%3A0x45fe05994e82171a!2sHotel%20Kanha&#39;s%20Palm%20Springs!5e0!3m2!1sen!2sin!4v1737487777499!5m2!1sen!2sin'
          width='100%'
          height='400'
          loading='lazy'
          className='border-0'
          allowFullScreen
        ></iframe>
        <div className='absolute inset-0 bg-transparent hover:bg-black hover:bg-opacity-20 transition duration-300'></div>
      </div>
    </div>
  )
}

export default MapWithLocation
