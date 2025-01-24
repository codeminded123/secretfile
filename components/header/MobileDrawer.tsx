import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MobileDrawer({ isOpen, onClose }: any) {
  return (
    <div
      className={` fixed flex flex-col text-left z-10 top-14 right-0 h-max w-full md:w-1/2 lg:w-1/3 bg-white text-black transition-transform duration-300 transform opacity-90 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <ul className='flex flex-col text-left space-y-4'>
        <li className='text-sm font-semibold grid grid-flow-row'>
          <Link
            className='py-3 px-5 border-gray-500 border-b-[0.5px] hover:bg-gray-700 hover:text-white'
            href='#home'
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            className='py-3 px-5 border-gray-500 border-b-[0.5px] hover:bg-gray-700 hover:text-white'
            href='#ourwedding'
            onClick={onClose}
          >
            Our Wedding
          </Link>
          <Link
            className='py-3 px-5 border-gray-500 border-b-[0.5px] hover:bg-gray-700 hover:text-white'
            href='#events'
            onClick={onClose}
          >
            Wedding Events
          </Link>
          <Link
            className='py-3 px-5 border-gray-500 border-b-[0.5px] hover:bg-gray-700 hover:text-white'
            href='#couple'
            onClick={onClose}
          >
            Meet the Couple
          </Link>
          <Link
            className='py-3 px-5 border-gray-500 border-b-[0.5px] hover:bg-gray-700 hover:text-white'
            href='#guestwishes'
            onClick={onClose}
          >
            Guest Wishes
          </Link>
          <Link
            className='py-3 px-5 border-gray-500 border-b-[0.5px] hover:bg-gray-700 hover:text-white'
            href='#gallery'
            onClick={onClose}
          >
            Gallery
          </Link>
          <Link
            className='py-3 px-5 border-gray-500 border-b-[0.5px] hover:bg-gray-700 hover:text-white'
            href='#venuw'
            onClick={onClose}
          >
            Wedding Venue
          </Link>
        </li>
      </ul>
    </div>
  )
}
