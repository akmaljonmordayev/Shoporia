import React from 'react'
import BlogCard from '../../components/BlogCard/BlogCard'
import useGetAll from '../../../../hooks/UseGetAll'
import VideoCard from '../../components/videoCard/videoCard'
function Blog () {
  const { data, isError, isLoading } = useGetAll('/blogCart')
  const { data1, isError1, isLoading1 } = useGetAll('/youtubeVideos')
  return (
    <>
      <div className='flex gap-10'>
        {data?.map(({ id, titleBlog, imageBlog, suntitle, date, timeRead }) => (
          <div>
            <BlogCard
              img={imageBlog}
              title={titleBlog}
              date={date}
              time={timeRead}
              desc={suntitle}
            />
          </div>
        ))}
      </div>
      <div className='flex gap-10'>
        {data?.map(({ id, videoCode }) => (
          <div>
            <VideoCard iframe={videoCode} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Blog
