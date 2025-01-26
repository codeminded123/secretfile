'use client'

import Image from 'next/image'

export default function About() {
  return (
    <div id='ourwedding'>
      <section id='wedding' className='py-16 bg-white text-black'>
        <div className='container mx-auto text-center font-cormorant'>
          <div className='mb-8'>
            <Image
              width='150'
              height='150'
              src='/rose/brown-couple.jpeg'
              alt='Pink Rose'
              className='mx-auto w-35 h-35'
            />
          </div>
          <h2 className='text-3xl font-bold mb-4'>Our Wedding</h2>
          <h2 className='text-xl mb-4 px-3 text-balance justify-center'>
            Excitement fills our hearts, both from us and our families, as we
            extend a warm invitation for you to be a part of the upcoming
            chapter in our shared journey! Your presence has been incredibly
            meaningful, and we would be delighted to have you join us on our
            special day❤
          </h2>
          <h2 className='text-xl font-semibold mb-4'>
            Monday, 24 February, 2025
          </h2>
          <h2 className='text-xl mb-4'>
            Witness the beginning of our forever in
          </h2>
        </div>
      </section>
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
      <div className='bg-[#783c4a] text-center font-semibold font-playfair text-black flex flex-col space-y-9 p-16'>
        <h2 className='text-5xl italic font-lovelight'>Kanika</h2>
        <div className='text-xl'>
          D/O : Mrs Rubika Dewan and Mr. Sunil kumar
          <br />
          G/D : Late Smt. Devika Rai & Late Shri Bhim Bahadur Dewan
          <br />( Bhopal )
        </div>
        <h2 className=''>Weds</h2>
        <h2 className='text-5xl italic font-lovelight'>Harsh</h2>
        <div className='text-xl'>
          S/O : Smt. Ratna & Late Shri Diwakar Sinha
          <br />
          G/S : Late Smt. Kusumlata & Late Shri Binod Bihari Sinha
          <br />( Dehri-on-Sone )
        </div>
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
        <h2 className='text-3xl italic font-semibold font-corinthia'>
          Our Special Request
        </h2>
        <h2 className='text-xl'>
          Since this wedding is as much yours, as it is ours! We’d love for you
          to click as many pictures as you’d like and tag your photos on Social
          Media using <span className='font-bold'>#KAnHA</span> & also upload
          Photos in our Gallery section
        </h2>
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
