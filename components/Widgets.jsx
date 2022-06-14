import { SearchIcon } from '@heroicons/react/outline'
import {useState} from 'react'
import News from './News'

function Widgets({ newsResult }) {
  const [articelNum, setArticelNum] = useState(3)
  const newsArticlesContent = newsResult.slice(0, articelNum).map(news => (
    <News key={news.title} article={news} />
  ))
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
      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className='font-bold text-xl px-4'>whats happening</h4>
        {newsArticlesContent}
        <button onClick={() => setArticelNum(articelNum + 3)} className='text-blue-300 pl-4 pb-3 hover:text-blue-400'>Show more</button>
      </div>

    </div>
  )
}



export default Widgets