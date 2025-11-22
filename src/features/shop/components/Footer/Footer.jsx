import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return <div>
    <div>
    <footer className="w-full bg-[#021736] pt-9 pb-4 mt-[80px]">
  <div className="flex items-start justify-center gap-[163px] ml-[-80px]">

    <div>
      <ul>
        <h4 className="text-white font-medium text-[20px] mb-2">Company</h4>

        <li className="text-[#CBCBCB] text-[16px] leading-[30px]">
          <Link to="/about">About us</Link> blog
        </li>

        <li className="text-[#CBCBCB] text-[16px] leading-[30px]">
          <Link to="/blog">Blog</Link>
        </li>

        <li className="text-[#CBCBCB] text-[16px] leading-[30px]">
          <Link to="/returns">Returns</Link>
        </li>

        <li className="text-[#CBCBCB] text-[16px] leading-[30px]">
          <Link to="/order-status">Order status</Link>
        </li>
      </ul>
    </div>

    <div>
      <ul>
        <h4 className="text-white font-medium text-[20px] mb-2">Info</h4>

        <li className="text-[#CBCBCB] text-[16px] leading-[30px]">
          <Link to="/faq">How it works?</Link>
        </li>

        <li className="text-[#CBCBCB] text-[16px] leading-[30px]">
          <Link to="/faq">Our promises</Link>
        </li>

        <li className="text-[#CBCBCB] text-[16px] leading-[30px]">
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
    </div>

    <div>
      <ul>
        <h4 className="text-white font-medium text-[20px] mb-2">Contact us</h4>

        <li className="text-[#CBCBCB] text-[16px] leading-[30px]">
          <Link to="/contact">123 Main Street, Anytown, USA</Link>
        </li>

        <li className="text-[#CBCBCB] text-[16px] leading-[30px]">
          <Link to="/contact">+1 (555) 123-4567</Link>
        </li>

        <li className="text-[#CBCBCB] text-[16px] leading-[30px]">
          <Link to="/contact">TechHeimSupport@gmail.com</Link>
        </li>
      </ul>
    </div>

    <div>
      <ul>
        <h4 className="text-white font-medium text-[20px] mb-2">
          Sign up for News and updates
        </h4>
        <input
          type="text"
          placeholder="E-mail Address"
          className="w-[288px] h-[48px] rounded-lg border border-white bg-transparent text-white pl-5"
        />
      </ul>
    </div>
  </div>

  <div className="flex items-center gap-2 ml-[110px] mt-8">
    <div className="w-[62px] h-[25px] bg-white rounded flex items-center justify-center">
      <img
        className="w-[50px] h-[20px]"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
        alt=""
      />
    </div>
    <div className="w-[62px] h-[25px] bg-white rounded flex items-center justify-center">
      <img
        className="w-[50px] h-[20px]"
        src="https://marketing.uz/uploads/articles/1192/article-original.png"
        alt=""
      />
    </div>
    <div className="w-[62px] h-[25px] bg-white rounded flex items-center justify-center">
      <img
        className="w-[50px] h-[20px]"
        src="https://1000logos.net/wp-content/uploads/2021/11/VISA-logo.png"
        alt=""
      />
    </div>
    <div className="w-[62px] h-[25px] bg-white rounded flex items-center justify-center">
      <img
        className="w-[50px] h-[20px]"
        src="https://data.cbonds.info/organisations_logos/24325/1609314895logo-mastercard-mobile.png"
        alt=""
      />
    </div>
  </div>
</footer>


      <div className="w-full h-[56px] bg-[#021736] flex items-center justify-between border-t border-[#021736]">
        <p className="text-[#CBCBCB] text-[12px] font-medium ml-[70px]">
          2023 Tech Heim.
        </p>

        <div className="flex items-center gap-[50px] mr-[70px]">
          <p className="text-[#CBCBCB] text-[12px] font-medium">cookie settings</p>
          <p className="text-[#CBCBCB] text-[12px] font-medium">Privacy Policy</p>
          <p className="text-[#CBCBCB] text-[12px] font-medium">Terms and Conditions</p>
          <p className="text-[#CBCBCB] text-[12px] font-medium">Imprint</p>
        </div>
      </div>
    </div>

  </div>;
}

export default Footer;
