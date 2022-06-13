import { EmojiHappyIcon, PhotographIcon } from '@heroicons/react/outline'
import Image from 'next/image'

const Input = () => {
  return (
    <div className='flex border-b px-3 py-2 items-start border-gray-200 space-x-3'>
      <Image
        alt="twitter"
        src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
        width='44px'
        height='44px'
        className='rounded-full cursor-pointer hover:brightness-95 '
      ></Image>
      <div className="w-full divide-y divide-gray-400">
        <div className="">
          <textarea
            className=' focus:ring-0 min-h-[50px] text-gray-400 w-full border-none'
            rows="2"
            placeholder="what's happening?"
          ></textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex">
            <PhotographIcon className='h-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100' />
            <EmojiHappyIcon className='h-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100' />
          </div>
          <button 
          disabled
          className='bg-blue-400 disabled:opacity-50 px-4 py-1.5 rounded-full text-white font-bold shadow-md hover:brightness-95'
          >Tweet</button>
        </div>
      </div>
    </div>
  )
}

export default Input