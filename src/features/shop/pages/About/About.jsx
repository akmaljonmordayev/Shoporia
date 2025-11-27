import React from "react";
import Image from "../About/Image/Frame 1.png";

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
            Tech Heim is an innovative online store that offers a diverse selection of digital gadgets,
            available for purchase in both cash and installment options. Embodying the motto "Join the digital
            revolution today" the website not only provides a seamless shopping experience but also features a
            captivating blog section filled with insightful reviews, articles, and videos about cutting-edge
            technology and digital gadgets. Users can actively engage with the content through comments and a
            question-answer section, fostering a dynamic community of tech enthusiasts.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">Tech Heim Meaning</h2>
          <p>
            The name "Tech Heim" cleverly combines two languages (English & German), signifying a home of
            technology that provides all the essential tech products and services, making it a one-stop
            destination for tech-savvy individuals seeking the latest and most exciting gadgets.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">Some of Tech Heim’s impressive features :</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Diverse digital gadgets for purchase in cash or installments</li>
            <li>A blog with reviews and articles about the latest technology and gadgets</li>
            <li>User comments and Q&A section for community interaction</li>
            <li>Represents a tech-savvy "home" with all necessary technology</li>
            <li>Easy-to-use interface for a great user experience</li>
            <li>Consistent and visually appealing design</li>
            <li>A hub for tech enthusiasts to connect and share insights</li>
            <li>Helps users make informed purchase decisions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default About;
