import React, { useState } from "react";

function ReviewModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    comment: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
    if (errors.rating) {
      setErrors((prev) => ({
        ...prev,
        rating: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (formData.rating === 0) {
      newErrors.rating = "Please select a rating";
    }

    if (!formData.comment.trim()) {
      newErrors.comment = "Comment is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Simulate API call
    // Simulate API call
    console.log("Review submitted:", formData);

    setShowSuccess(true);

    setFormData({
      name: "",
      email: "",
      rating: 0,
      comment: "",
    });

    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 1500);
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      rating: 0,
      comment: "",
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/45 backdrop-blur-[10px] z-[999] animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] bg-white rounded-[20px] p-[30px] shadow-[0_12px_38px_rgba(0,0,0,0.15)] z-[1000] animate-in scale-in-95 fade-in duration-300 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-[22px] font-semibold text-[#0a1b3f] m-0">
            Leave a Comment
          </h2>
          <button
            className="bg-transparent border-none text-[28px] text-[#0a1b3f] cursor-pointer p-0 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 hover:text-[#2d7cff] hover:bg-[#eaf1ff]"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="h-px bg-[#d8e2ff] mb-6"></div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-[#0a1b3f]">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className={`px-[14px] py-3 border rounded-[12px] text-sm font-inherit text-[#0a1b3f] bg-white transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:border-[#2d7cff] focus:shadow-[0_0_0_3px_rgba(45,124,255,0.1)] ${
                errors.name ? "border-[#ef4444] focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]" : "border-[#d8e2ff]"
              }`}
            />
            {errors.name && <span className="text-xs text-[#ef4444] font-medium">{errors.name}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-[#0a1b3f]">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className={`px-[14px] py-3 border rounded-[12px] text-sm font-inherit text-[#0a1b3f] bg-white transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:border-[#2d7cff] focus:shadow-[0_0_0_3px_rgba(45,124,255,0.1)] ${
                errors.email ? "border-[#ef4444] focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]" : "border-[#d8e2ff]"
              }`}
            />
            {errors.email && <span className="text-xs text-[#ef4444] font-medium">{errors.email}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#0a1b3f]">Rating</label>
            <div className="flex gap-2 items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`bg-none border-none text-[28px] cursor-pointer p-1 leading-none transition-all duration-200 ${
                    star <= formData.rating
                      ? "text-[#2d7cff] drop-shadow-[0_0_8px_rgba(45,124,255,0.4)]"
                      : "text-gray-300 hover:text-[#2d7cff] hover:scale-110"
                  }`}
                  onClick={() => handleRatingChange(star)}
                  aria-label={`Rate ${star} stars`}
                >
                  ★
                </button>
              ))}
            </div>
            {errors.rating && <span className="text-xs text-[#ef4444] font-medium">{errors.rating}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="comment" className="text-sm font-medium text-[#0a1b3f]">
              Your Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              placeholder="Share your thoughts..."
              className={`px-[14px] py-3 border rounded-[12px] text-sm font-inherit text-[#0a1b3f] bg-white transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:border-[#2d7cff] focus:shadow-[0_0_0_3px_rgba(45,124,255,0.1)] min-h-[160px] resize-vertical max-h-[300px] ${
                errors.comment ? "border-[#ef4444] focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]" : "border-[#d8e2ff]"
              }`}
            ></textarea>
            {errors.comment && <span className="text-xs text-[#ef4444] font-medium">{errors.comment}</span>}
          </div>

          <div className="flex gap-3 justify-end mt-2">
            <button
              type="button"
              className="px-6 py-3 rounded-[14px] text-sm font-semibold cursor-pointer transition-all duration-200 bg-transparent text-[#0a1b3f] border-[1.5px] border-[#0a1b3f] hover:bg-[#eaf1ff] hover:border-[#2d7cff] hover:text-[#2d7cff] active:bg-[#d8e2ff]"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-[14px] text-sm font-semibold cursor-pointer transition-all duration-200 bg-[#2d7cff] text-white hover:bg-[#1f5acc] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(45,124,255,0.3)] active:translate-y-0"
            >
              Submit Review
            </button>
          </div>
        </form>

        {showSuccess && (
          <div className="fixed top-5 right-5 bg-emerald-500 text-white px-6 py-4 rounded-[12px] font-semibold shadow-[0_12px_38px_rgba(0,0,0,0.15)] z-[1001] animate-in slide-in-from-top duration-300">
            ✓ Your comment has been added!
          </div>
        )}
      </div>
    </>
  );
}

export default ReviewModal;
