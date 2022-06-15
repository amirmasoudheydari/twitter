import { SearchIcon } from '@heroicons/react/outline'
import {useState} from 'react'
import News from './News'

function Widgets({ newsResult, users }) {
  const [articelNum, setArticelNum] = useState(3)
  const [userNumber, setUserNumber] = useState(3)

  const newsArticlesContent = newsResult.slice(0, articelNum).map(news => (
    <News key={news.title} article={news} />
  ))
  const usersUi = users.slice(0, userNumber).map(user => (
    <div key={user.login.uuid} className="flex items-center justify-between px-1 py-2 hover:bg-gray-200">
      <img className='rounded-full' src={user.picture.thumbnail} width={50} height={50} alt={user.name.username} />
      <div className="cursor-pointer ml-1 truncate leading-5">
        <h4 className='font-bold text-sm hover:underline'>{user.login.username}</h4>
        <p className='text-xs text-gray-500'>{user.name.first} {user.name.last}</p>
      </div>
      <button className='ml-auto bg-black hover:opacity-70 text-white px-3.5 py-1.5 rounded-3xl font-bold text-sm '>Follow</button>
    </div>
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
      <div className="text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%] ">
        <h4 className='font-bold px-4 text-xl'>Who to follow</h4>
        {usersUi}
        <button onClick={() => setUserNumber(userNumber + 3)} className='text-blue-300 pl-4 hover:text-blue-400 pb-3'>Show more</button>
      </div>

    </div>
  )
}



export default Widgets