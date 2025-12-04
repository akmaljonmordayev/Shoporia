import React from 'react'

function VideoCard ({ iframe, titleVideo }) {
  return (
    <div
      className='
        relative w-[392px] rounded-xl overflow-hidden shadow-xl
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]
        cursor-pointer
      '
    >
      <div className='w-full h-[220px] overflow-hidden'>
        <iframe
          className='
            w-full h-full object-cover 
            transition-all duration-300 
            group-hover:scale-105
          '
          src={iframe}
          title={titleVideo}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>

      <div
        className='
          absolute bottom-0 left-0 w-full
          py-4 px-5 text-center
          bg-black/30 backdrop-blur-xl
          text-white text-lg font-medium
          transition-all duration-300
          translate-y-2 opacity-80
          group-hover:translate-y-0 group-hover:opacity-100
        '
      >
        {titleVideo}
      </div>
    </div>
  )
}

export default VideoCard
