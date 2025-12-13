import React from "react";
import Image from "../About/Image/Frame 1.png";
import Image from "../../../../assets/imgfayl/aboutimage.png";

function About() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-4xl">
        <img
          src={Image}
          alt="Tech"
          className="w-full rounded-xl shadow-md mb-8"
        />

        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            Shoporia is a modern online marketplace that delivers a wide range
            of high-quality products, available for purchase both with cash and
            through flexible installment plans. Guided by the motto “Smart
            shopping starts here”, the platform offers not only a smooth and
            intuitive buying experience, but also an engaging blog section
            filled with product reviews, articles, and useful shopping tips.
            Users can interact through comments and a Q&A system, creating an
            active and helpful community around the brand.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-6">
            Shoporia Meaning
          </h2>
          <p>
            The name "Tech Heim" cleverly combines two languages (English &
            German), signifying a home of technology that provides all the
            essential tech products and services, making it a one-stop
            destination for tech-savvy individuals seeking the latest and most
            exciting gadgets.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">
            Wide selection of products with both cash and installment purchase
            options{" "}
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Blog filled with helpful reviews, guides, and articles </li>
            <li>Comments and Q&A section to support customer interaction</li>
            <li>
              Represents a joyful, convenient “home of shopping” experience
            </li>
            <li>Clean, easy-to-use interface</li>
            <li>Consistent and modern design</li>
            <li>A hub for users to exchange opinions and shopping insights</li>
            <li>
              Helps customers make smarter and more informed purchasing
              decisions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default About;
