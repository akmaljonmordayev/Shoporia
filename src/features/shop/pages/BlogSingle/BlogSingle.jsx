import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function BlogSingle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `https://shoporia-o6ja.onrender.com/blogCart/${id}`
        );
        if (!res.ok) throw new Error("Network response was not ok");
        const blogData = await res.json();
        setData(blogData);
      } catch (error) {
        console.error("Error fetch blog:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    console.log("Submitted comment:", comment);
    setComment("");
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error loading blog</h1>;
  if (!data) return <h1>Blog not found</h1>;

  return (
    <div className="px-4 mt-24 flex flex-col md:flex-row gap-12 justify-center">
      {/* Left column (blog content + back button) */}
      <div className="max-w-[800px] w-full flex flex-col gap-6">
        {/* Back Button */}
        <button
          onClick={() => navigate("/blog")}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 self-start"
        >
          &larr; Back
        </button>

        {/* Blog Content */}
        <h2 className="text-[28px] font-extrabold mb-2">{data.titleBlog}</h2>
        <p className="text-sm text-gray-500 mb-4">{data.date}</p>
        <img
          className="w-full h-[400px] rounded-md object-cover mb-5"
          src={data.imageBlog}
          alt={data.titleBlog}
        />
        <p className="text-base leading-7 text-gray-800">{data.Bigdesc}</p>

        <div className="border-t border-gray-300 my-6"></div>

        {/* Comment Form */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Leave a Comment</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <textarea
              placeholder="Share your thoughts here"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-4 rounded-md border border-gray-300 resize-y focus:border-blue-500 focus:shadow-md"
              rows={5}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md self-end"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="w-full md:w-[300px] flex-shrink-0">
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <ul className="space-y-2 text-gray-700">
          {[
            "Technology Trends and News",
            "Gaming Insights",
            "Security and Privacy",
            "Tech Lifestyle and Productivity",
            "Product Spotlight",
            "How-to Guides and Tutorials",
            "Buying Guides and Tips",
          ].map((cat) => (
            <li key={cat} className="hover:text-blue-600 cursor-pointer">
              {cat}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-3">
            {["Technology", "Gaming", "Tutorial", "Tips", "Review"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border rounded text-blue-600 border-blue-400 cursor-pointer"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default BlogSingle;
