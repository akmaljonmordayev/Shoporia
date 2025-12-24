import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "antd";

import BlogCard from "../../components/BlogCard/BlogCard";
import RecentPosts from "../../components/RecentPosts/RecentPosts";
import VideoCard from "../../components/videoCard/videoCard";
import useGetAll from "../../../../hooks/UseGetAll";

function Blog() {
  // BLOGS
  const {
    data: blogData,
    isLoading,
    isError,
  } = useGetAll("/blogCart", ["blogCart"]);

  // VIDEOS
  const {
    data: videoData,
    isLoading: videoLoading,
    isError: videoError,
  } = useGetAll("/youtubeVideos", ["youtubeVideos"]);

  // XAVFSIZ ARRAY
  const blogs = blogData ?? [];
  const videos = videoData ?? [];

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  // PAGINATION
  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return blogs.slice(start, start + pageSize);
  }, [blogs, currentPage]);

  // RECENT POSTS (YANGI 3 TA)
  const recentPosts = useMemo(() => {
    return [...blogs]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
  }, [blogs]);

  if (isLoading) return <h2>Loading blogs...</h2>;
  if (isError) return <h2>Blogs not found</h2>;

  return (
    <div className="flex gap-10">
      {/* LEFT SIDE */}
      <div className="flex-1">
        {/* BLOG LIST */}
        <div className="flex flex-wrap gap-10">
          {paginatedBlogs.map(
            ({ id, titleBlog, imageBlog, suntitle, date, timeRead }) => (
              <Link key={id} to={`/blog/${id}`}>
                <BlogCard
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

        {/* PAGINATION */}
        <div className="flex justify-center mt-10">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={blogs.length}
            onChange={setCurrentPage}
            showSizeChanger={false}
          />
        </div>

        {/* RECENT POSTS */}
        <div className="mt-20">
          <h2 className="text-[24px] font-semibold">Recent posts</h2>
          <div className="flex flex-col gap-4 mt-6">
            {recentPosts.map(
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

      {/* RIGHT SIDE (VIDEOS) */}
      <div className="w-[392px] flex flex-col gap-6">
        {videoLoading && <p>Loading videos...</p>}
        {videoError && <p>Videos not found</p>}

        {videos.map(({ id, videoCode, videoTitle }) => (
          <VideoCard key={id} titleVideo={videoTitle} iframe={videoCode} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
