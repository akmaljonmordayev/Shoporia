import React, { useState, useEffect } from 'react'
import BlogCard from '../../components/BlogCard/BlogCard'
import useGetAll from '../../../../hooks/UseGetAll'
import VideoCard from '../../components/videoCard/videoCard'
import { Link } from 'react-router-dom'
import { Pagination } from 'antd'
import RecentPosts from '../../components/RecentPosts/RecentPosts'

function Blog () {
  const { data, isLoading, isError } = useGetAll('/blogCart', ['blogCart'])
  const { data: data1 } = useGetAll('/youtubeVideos', ['youtubeVideos'])

  const [blogs, setBlogs] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 4

  useEffect(() => {
    if (data) {
      setBlogs(data)
      setCurrentPage(1)
    }
  }, [data])

  const start = (currentPage - 1) * pageSize
  const end = start + pageSize
  const paginatedBlogs = blogs.slice(start, end)

  if (isLoading) return <h2>Loading...</h2>
  if (isError) return <h2>Error loading blogs</h2>

  return (
    <>
      <div className='flex'>
        <div>
          <div>
            <div className='flex flex-wrap gap-10'>
              {paginatedBlogs.map(
                ({ id, titleBlog, imageBlog, suntitle, date, timeRead }) => (
                  <div key={id}>
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
                )
              )}
            </div>

            <div className='flex justify-center mt-10'>
              <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={blogs.length}
                onChange={setCurrentPage}
                showSizeChanger={false}
              />
            </div>
          </div>
          <div>
            <h1 className='font-[500] text-[24px]'>Recent posts</h1>
            <div className='recentposts flex flex-col gap-4 mt-32'>
              {data
                ?.sort((a, b) => new Date(b.date) - new Date(a.date)) 
                .slice(0, 3)
                .map(
                  ({ id, titleBlog, imageBlog, suntitle, date, timeRead }) => (
                    <Link key={id} to={`/blog/${id}`}>
                      <RecentPosts
                        img={imageBlog}
                        title={titleBlog}
                        date={date}
                        time={timeRead}
                        desc={suntitle}
                      />
                    </Link>
                  )
                )}
            </div>
          </div>
        </div>

        <div className='flex gap-10 flex-wrap w-[392px] ml-10'>
          {data1?.map(({ id, videoCode, videoTitle }) => (
            <VideoCard key={id} titleVideo={videoTitle} iframe={videoCode} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Blog
