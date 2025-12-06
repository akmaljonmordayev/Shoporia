import React from 'react'
import { BsBookmark } from 'react-icons/bs'
const RecentPosts = ({ title, desc, date, img }) => {
  return (
    <div>
      <div className='news-card flex gap-[20px] bg-white rounded-[14px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] max-w-[900px] transition cursor-pointer group'>
        <img
          src={img}
          alt={title}
          className='news-img w-[240px] h-[160px] object-cover rounded-l-[12px]'
        />

        <div className='news-content flex flex-col justify-center flex-1'>
          <h2 className='news-title text-[20px] font-semibold mb-[6px] text-[#222] transition-colors duration-200 group-hover:text-[#ff6b00]'>
            {title}
          </h2>

          <p className='news-desc text-[15px] text-[#555] leading-[1.4] mb-[12px]'>
            {desc}
          </p>

          <div className='news-date-box flex items-center justify-between mr-[30px]'>
            <p className='news-date text-[14px] text-[#777]'>{date}</p>

            <BsBookmark className='news-icon text-[22px] text-[#ff6b00] opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentPosts
