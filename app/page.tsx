import About from '@/components/About'
import Counter from '@/components/Counter'
import Couple from '@/components/Couple'
import Events from '@/components/Events'
import Gallery from '@/components/Gallery'
import Location from '@/components/Location'
import Moments from '@/components/Moments'
import PlayMusicButton from '@/components/PlayMusicButton'
import PreWedding from '@/components/PreWedding'
import Reminder from '@/components/Reminder'
import Slideshow from '@/components/SlideShow'
import Wishes from '@/components/Wishes'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <PlayMusicButton />
      <Slideshow />
      <Counter />
      <About />
      <div className='text-center bg-white space-y-9 flex flex-col p-8 md:p-16 mx-auto text-black'>
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
      </div>
      <Events />
      <Couple />
      <Moments />
      <PreWedding />
      <Wishes />
      <Gallery />
      <Location />
      <Reminder />
    </div>
  )
}
