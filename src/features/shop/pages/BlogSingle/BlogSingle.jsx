import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useGetOne from "../../../../hooks/useGetOne";

function BlogSingle() {
  const { id } = useParams();
  // Hook ga faqat endpoint va id yuboramiz
  const { data, isError, isLoading } = useGetOne("/blogCart", id, ["blogCart"]);

  const [comment, setComment] = useState("");

  if (isLoading) return <h1>Loading...</h1>;
  if (isError || !data) return <h1>Error loading blog</h1>;

  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-12 mt-24 px-4">
      <div className="max-w-[800px] font-sans text-gray-900">
        <div className="article-card">
          <h2 className="text-[28px] font-extrabold mb-2 max-w-[810px]">
            {data.titleBlog}
          </h2>

          <p className="text-sm text-gray-500 mb-4">{data.date}</p>

          <img
            className="w-[808px] h-[414px] rounded-md object-cover mb-5"
            src={data.imageBlog}
            alt={data.titleBlog}
          />

          <p className="text-base leading-6 text-gray-800">{data.Bigdesc}</p>

          <div className="w-[808px] border-2 border-[#B4B4B4] mt-6" />

          <div className="max-w-[900px] m-5 mx-auto">
            <h3 className="text-lg font-semibold mb-2">Leave a Comment</h3>

            <form className="flex flex-col comment-form">
              <textarea
                placeholder="Share your thoughts about this blog here"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full h-[277px] p-4 rounded-md border border-gray-300 text-sm resize-y outline-none transition focus:border-blue-500 focus:shadow-md"
              />
              <button
                type="submit"
                className="px-4 py-2 h-11 rounded-md text-white font-semibold mt-4 self-end bg-blue-600 active:translate-y-[1px]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <aside className="w-full md:w-[300px] max-w-[300px] mt-12 md:mt-0">
        <h3 className="pt-[90px] mb-3 text-lg font-semibold">Categories</h3>
        <ul className="space-y-2">
          <li>Technology Trends and News</li>
          <li>Gaming Insights</li>
          <li>Security and Privacy</li>
          <li>Tech Lifestyle and Productivity</li>
          <li>Product Spotlight</li>
          <li>How-to Guides and Tutorials</li>
          <li>Buying Guides and Tips</li>
        </ul>

        <div className="mt-[50px]">
          <h2 className="text-2xl font-semibold mb-[24px]">Tags</h2>
          <div className="flex flex-wrap gap-4 max-w-[492px]">
            {["Technology", "Headset", "Phone", "Wireless", "Apple"].map((tag) => (
              <div
                key={tag}
                className="w-[108px] h-[48px] flex items-center justify-center rounded-[8px] border-2 border-[#0c68f4] text-[#3b82f6] font-inter font-[530] text-[16px] leading-[100%] hover:border-[#002f6c] hover:text-[#002f6c] cursor-pointer"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </aside>

      <style>{`
        @media (max-width: 560px) {
          textarea { width: 100% !important; }
          button { width: 40% !important; margin-left: 0 !important; align-self: flex-end; }
        }
      `}</style>
    </div>
  );
}

export default BlogSingle;
