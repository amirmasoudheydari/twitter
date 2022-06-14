import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const News = ({article:news}) => {
  return (
    <Link href={news.url} target='_blank'  >
      <div className='cursor-pointer rounded-xl flex items-center justify-between px-2 py-1 hover:bg-gray-200 transition duration-200'>
        <div className="space-y-1">
          <h6 className='text-sm font-bold'>{news.title}</h6>
          <p className='text-xs font-medium text-gray-500'>{news.source.name}</p>
        </div>
          <img src={news.urlToImage} width='100' alt={news.title} className='rounded-xl'  />
       </div>
    </Link>
  )
}

export default News