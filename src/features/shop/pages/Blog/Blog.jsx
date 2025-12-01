import React from 'react'
import BlogCard from '../../components/BlogCard/BlogCard'
import useGetAll from '../../../../hooks/UseGetAll'
import VideoCard from '../../components/videoCard/videoCard'
import { Link } from 'react-router-dom'
function Blog () {
  const { data, isError, isLoading } = useGetAll('/blogCart', ['blogCart'])
  const {
    data: data1,
    isErrorVideo: isErrorVideo1,
    isLoadingVideo: isLoadingVideo1
  } = useGetAll('/youtubeVideos', ['youtubeVideos'])

  return (
    <>
      <div className='flex gap-10'>
        {data?.map(({ id, titleBlog, imageBlog, suntitle, date, timeRead }) => (
          <div>
            <Link to={`/blog/${id}`}>
              <BlogCard
                img={imageBlog}
                title={titleBlog}
                date={date}
                time={timeRead}
                desc={suntitle}
              />
            </Link>
          </div>
        ))}
      </div>
      <div className='flex gap-10'>
        {data1?.map(({ id, videoCode, videoTitle }) => (
          <VideoCard titleVideo={videoTitle} iframe={videoCode} />
        ))}
      </div>
    </>
  )
}

export default Blog
