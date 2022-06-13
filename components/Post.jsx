import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from '@heroicons/react/outline'
import Image from 'next/image'

const Post = ({ post }) => {
  return (
    <div className='flex p-3 cursor-pointer border-b border-gray-200'>
      {/* images */}
      <div className="mr-4">
        <Image
          src={post.userImage}
          alt={post.name}
          width='500'
          height='500'
          className='rounded-full'
        />
      </div>

      {/* right side */}
      <div className="">
        {/* headers */}
        <div className="flex items-center justify-between">
          {/* user info */}
          <div className="space-x-2">
            <h4 className='font-bold hover:underline '>{post.name}</h4>
            <span className='text-sm sm:text-[16px]'>@{post.userName} -</span>
            <span className='text-sm sm:text-[16px] underline'>{post.timeStamp}</span>
          </div>
          {/* dot icon */}
          <div className="hoverEffect w-fit p-2 hover:bg-sky-100 hover:text-sky-600">
            <DotsHorizontalIcon className=' h-5 ' />
          </div>
        </div>
        {/* post text */}
        <div className="">
          <p>{post.text}</p>
        </div>
        {/* post image */}
        <div className="">
          <Image 
            src={post.image}
            alt={post.name}
            width='600'
            height='600'
            className='rounded-2xl'
            />
        </div>
        {/* post icons */}
        <div className="flex justify-between text-gray-400 p-2">
          <ChatIcon  className='h-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100'/>
          <TrashIcon  className='h-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100'/>
          <HeartIcon  className='h-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100'/>
          <ShareIcon  className='h-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100'/>
          <ChartBarIcon  className='h-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100'/>
        </div>
      </div>
    </div>
  )
}

export default Post