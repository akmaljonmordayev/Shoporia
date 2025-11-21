import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import faqImage from "./Frame 26086945.png";

function Faq() {
  const [expandedId, setExpandedId] = useState("all");

  const faqData = [
    {
      id: 1,
      category: "General",
      question: "Can I purchase products from Tech Helm using installment payments?",
      answer:
        "Yes, Tech Helm offers flexible payment options to make shopping more convenient for all our customers. We provide both cash and installment payment methods, allowing you to spread your purchases over time without any hidden charges. Our installment plans are designed to fit your budget, with various payment periods available from 3 to 12 months depending on your purchase amount. You can choose the payment method that suits your needs best during checkout. All installment payments are processed through secure payment gateways, ensuring your financial information is protected. Whether you prefer to pay upfront or split your payments, we've got you covered with transparent terms and conditions.",
    },
    {
      id: 2,
      category: "General",
      question: "How can I engage with the magazine content on Tech Helm?",
      answer:
        "Tech Helm maintains an active community where you can actively engage with our magazine content and fellow tech enthusiasts. You can leave detailed comments on articles, share your thoughts, and participate in our comprehensive question-and-answer section where experts and community members help answer your queries. Feel free to share your experiences, insights, and technical knowledge with others in the community. You can also interact with fellow tech enthusiasts, discuss the latest trends, and build meaningful connections around your shared interests in technology. Our moderated comment sections ensure a respectful and productive environment for all users. Join our growing community and become part of the Tech Helm family today!",
    },
    {
      id: 3,
      category: "Trusts & Safety",
      question: "Does Tech Helm offer a warranty on its products?",
      answer:
        "Yes, Tech Helm is committed to customer satisfaction and provides comprehensive warranty coverage on all eligible products. The specific warranty terms and coverage details may vary depending on the manufacturer, product category, and product type you purchase. Each product comes with detailed warranty information that you can find on the product description page. Our warranty covers manufacturing defects and hardware failures during the warranty period. We also offer extended warranty options for additional peace of mind. For detailed information about a specific product's warranty, we recommend checking the product page or contacting our dedicated customer support team. We want you to shop with confidence, knowing your purchase is protected.",
    },
    {
      id: 4,
      category: "Services",
      question: "Is Tech Helm a secure platform for online shopping?",
      answer:
        "Yes, Tech Helm is a fully secure platform dedicated to providing safe and protected online shopping experiences for all our customers. We implement industry-leading SSL encryption technology to protect all your personal and financial information during transactions. Our payment processing system complies with PCI-DSS standards, ensuring the highest level of security for credit card transactions. We regularly update our security protocols to protect against the latest cyber threats and vulnerabilities. Your data is stored in secure, encrypted databases and is never shared with third parties without your consent. Our privacy policy is transparent and clearly outlines how we handle your information. Shop with complete peace of mind knowing that your security is our top priority.",
    },
    {
      id: 5,
      category: "Billing",
      question: "How can I get assistance with my purchase or any other inquiries?",
      answer:
        "If you need assistance with your purchase, have questions about products, or have any other inquiries, our dedicated and professional customer support team is always here to help you. You can reach out to us through our dedicated contact page on our website, where you'll find multiple contact options including email, phone, and live chat support. Our customer support representatives are available during business hours to assist you with any concerns or questions you may have. We typically respond to all inquiries within 24 hours. Whether you need help with tracking your order, returns, refunds, or technical support, we're committed to providing fast and effective solutions. We also maintain a comprehensive FAQ section and knowledge base that covers common questions and issues. Don't hesitate to contact us - we're happy to assist you promptly and ensure your satisfaction.",
    },
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const categories = ["General", "Trusts & Safety", "Services", "Billing"];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto mb-12">
        <img
          src={faqImage}
          alt="Frequently Asked Questions"
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-32 h-fit">
              <h3 className="text-sm font-bold text-gray-900 mb-4">Table of Contents</h3>
              <nav className="space-y-3">
                {categories.map((category) => (
                  <a
                    key={category}
                    href={`#${category}`}
                    className="text-sm text-blue-600 hover:text-blue-700 hover:underline block"
                  >
                    {category}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="md:col-span-3">
            {categories.map((category) => (
              <div key={category} id={category} className="mb-12">
                <h2 className="text-xl font-bold text-gray-900 mb-6">{category}</h2>
                
                <div className="space-y-4">
                  {faqData
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="border-2 border-blue-500 rounded-lg overflow-hidden bg-white"
                      >
                        <button
                          onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                          className="w-full px-6 py-4 flex justify-between items-center hover:bg-blue-50 transition"
                        >
                          <h3 className="text-left text-base font-medium text-blue-600">
                            {item.question}
                          </h3>
                          <FiChevronUp
                            className={`shrink-0 w-5 h-5 text-red-500 transition-transform duration-300 ${
                              expandedId === item.id ? "" : "transform rotate-180"
                            }`}
                          />
                        </button>

                        {expandedId === item.id && (
                          <div className="px-6 py-4 bg-white border-t-2 border-blue-200 border-dotted">
                            <p className="text-gray-700 leading-relaxed text-sm">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
