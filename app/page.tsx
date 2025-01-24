import About from '@/components/About'
import Couple from '@/components/Couple'
import Events from '@/components/Events'
import Gallery from '@/components/Gallery'
import Location from '@/components/Location'
import Moments from '@/components/Moments'
import PlayMusicButton from '@/components/PlayMusicButton'
import Reminder from '@/components/Reminder'
import Slideshow from '@/components/SlideShow'
import Wishes from '@/components/Wishes'

export default function Home() {
  return (
    <div>
      <PlayMusicButton />
      <Slideshow />
      <About />
      <Events />
      <Couple />
      <Moments />
      <Wishes />
      <Gallery />
      <Location />
      <Reminder />
    </div>
  )
}
