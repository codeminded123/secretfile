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

export default function Home() {
  return (
    <div>
      <PlayMusicButton />
      <Slideshow />
      <Counter />
      <About />
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
