import React from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import useGetAll from "../../../../hooks/UseGetAll";
function Blog() {
  const { data, isError, isLoading } = useGetAll("/blogCart");

  return (
    <>
      <div>
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
    </>
  );
}

export default Blog;
