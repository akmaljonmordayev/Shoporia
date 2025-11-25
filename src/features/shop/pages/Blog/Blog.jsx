import React, { useState } from "react";
import ReviewModal from "../../components/ReviewModal/ReviewModal";

function Blog() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="blog-page">
      <div className="blog-content">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#2d7cff] text-white rounded-lg font-semibold hover:bg-[#1f5acc] transition-all"
        >
          Leave a Comment
        </button>
      </div>
      <ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default Blog;
