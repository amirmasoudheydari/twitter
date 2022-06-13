import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

const Widgets = () => {
  return (
    <div className='xl:w-[600px] hidden lg:inline ml-8 mt-1 space-y-5'>
      <div className="sticky top-0 w-[90%] xl:w-[70%]">
        <div className="relative flex items-center ">
          <SearchIcon className='h-5 absolute ml-2 cursor-pointer' />
          <input type="text" 
          className="focus:shadow-lg text-gray-500 border-gray-500 rounded-full pl-11 bg-gray-100 focus:bg-white"
           placeholder='Search Twitter' />
        </div>
      </div>
    </div>
  )
}

export default Widgets