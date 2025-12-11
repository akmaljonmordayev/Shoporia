import React from "react";
import { Link } from "react-router-dom";
import useGetAll from "../../../../hooks/UseGetAll";

function Meta()  {
  const fetchData = async () => {
    const res = await axiosClient.get(endpoint);
    return res.data; // faqat data qaytaradi
  };
  
  const { data: blogData, isLoading } = useGetAll("/blogCart", ["blogCart"]);


const firstBlog = blogData?.[0];
const secondBlog = blogData?.[1];
const thirdBlog = blogData?.[2];

  return (
  


      <div>
  <div>
    <h1 className="font-inter font-medium text-[32px] leading-[100%] mb-[16px] mt-[50px]">Our Blogs</h1>

    <div className="w-[100%] mb-[20px] mx-auto border-2 border-[#B4B4B4]"></div>

    <div className="flex items-center justify-center gap-[25px] h-[433px] mt-0 otadiv">
      
      {/* ------ BIRINCHI BLOG ------ */}
      <div>
        <Link to={`/blog/${firstBlog?.id}`}>
          <div className="flex flex-col items-center gap-[5px] rounded-[8px] shadow-[-2px_2px_20px_-1px_#71717133]">
            
            <img
              src={firstBlog?.imageBlog}
              alt={firstBlog?.titleBlog}
              className="w-[392px] h-[204px] rounded-t-[8px]"
            />

            <div className="flex items-center justify-center gap-[230px] mb-[10px]">
              <p className="text-[12px] text-[#9E9E9E]">{firstBlog?.date}</p>
              <p className="text-[12px] text-[#9E9E9E]">
                {firstBlog?.timeRead} min read
              </p>
            </div>

            <h3 className="font-medium text-[16px] text-[#0C0C0C] max-w-[360px]">
              {firstBlog?.suntitle}
            </h3>

            <h4 className="font-light text-[13px] text-[#0C0C0C] leading-[24px] max-w-[360px] mb-[20px]">
              {firstBlog?.Bigdesc?.slice(0, 80)}...
            </h4>
          </div>
        </Link>
      </div>

      {/* ------ 2 va 3 BLOG ------ */}
      <div className="flex flex-col justify-center gap-[50px]">

        {/* 2-blog */}
        <Link to={`/blog/${secondBlog?.id}`}>
          <div className="flex items-center gap-[15px] rounded-[8px] shadow-[-2px_2px_20px_-1px_#71717133]">
            
            <img
              src={secondBlog?.imageBlog}
              className="w-[240px] h-[156px] rounded-l-[8px]"
            />

            <div>
              <h2 className="font-medium text-[16px] text-[#0C0C0C]">
                {secondBlog?.titleBlog}
              </h2>

              <h5 className="font-light text-[14px] text-[#717171] max-w-[550px] mt-[15px] mb-[15px]">
                {secondBlog?.suntitle}
              </h5>

              <p className="text-[12px] text-[#9E9E9E]">
                {secondBlog?.date}
              </p>
            </div>
          </div>
        </Link>

        {/* 3-blog */}
        <Link to={`/blog/${thirdBlog?.id}`}>
          <div className="flex items-center gap-[15px] rounded-[8px] shadow-[-2px_2px_20px_-1px_#71717133]">

            <img
              src={thirdBlog?.imageBlog}
              className="w-[240px] h-[156px] rounded-l-[8px]"
            />

            <div>
              <h2 className="font-medium text-[16px] text-[#0C0C0C]">
                {thirdBlog?.titleBlog}
              </h2>

              <h5 className="font-light text-[14px] text-[#717171] max-w-[550px] mt-[15px] mb-[15px]">
                {thirdBlog?.suntitle}
              </h5>

              <p className="text-[12px] text-[#9E9E9E]">
                {thirdBlog?.date}
              </p>
            </div>

          </div>
        </Link>
      </div>

    </div>
  </div>
</div>

  
  );
}

export default Meta;
