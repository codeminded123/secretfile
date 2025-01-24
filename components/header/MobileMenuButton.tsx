import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MobileMenuButton({ onClick, isOpen }: any) {
  return (
    <button className='absolute right-2 top-2 p-3' onClick={onClick}>
      <div className='bg-white p-1 rounded'>
        {isOpen ? (
          <ImCross size={20} className='text-black' />
        ) : (
          <GiHamburgerMenu size={19} className='text-black' />
        )}
      </div>
    </button>
  )
}
