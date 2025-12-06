import React from 'react'
import { Link } from "react-router-dom";

function Meta() {
  return (
    <div>
        <div>
  <h1 className=" mb-[16px] mt-[50px]">Our Blogs</h1>

  <div className="w-[100%] mb-[50px] mx-auto border-2 border-[#B4B4B4]"></div>

  <div className="flex items-center justify-center gap-[25px] h-[433px] mt-0 otadiv">
    <div>
      <Link to={"/blog/1"}>
        <div className="flex flex-col items-center justify-start gap-[5px] rounded-[8px] shadow-[-2px_2px_20px_-1px_#71717133]">
          <img
            src="https://diplo-media.s3.eu-central-1.amazonaws.com/2023/08/businesswoman-with-metaverse-word-cyberspace.jpg"
            alt=""
            className="w-[392px] h-[204px] rounded-t-[8px]"
          />

          <div className="flex items-center justify-center gap-[240px] mb-[10px]">
            <p className="text-[12px] text-[#9E9E9E]">August , 8 , 2023</p>
            <p className="text-[12px] text-[#9E9E9E]">3 min read</p>
          </div>

          <h3 className="font-medium text-[20px] text-[#0C0C0C] max-w-[360px]">
            Meta Platforms plans to release free software that...
          </h3>

          <h4 className="font-light text-[16px] text-[#0C0C0C] leading-[24px] max-w-[360px] mt-[10px] mb-[10px]">
            The parent company of Facebook, Meta Platforms, is introducing
            software to help developers
          </h4>
        </div>
      </Link>
    </div>

    <div className="flex flex-col justify-center gap-[92px]">
      <Link to={"/blog/2"}>
        <div className="flex items-center justify-center gap-[15px] rounded-[8px] shadow-[-2px_2px_20px_-1px_#71717133]">
          <img
            src="https://static.toiimg.com/thumb/msid-108706412,imgsize-26240,width-400,resizemode-4/108706412.jpg"
            alt=""
            className="w-[240px] h-[156px] rounded-l-[8px]"
          />

          <div>
            <h2 className="font-medium text-[16px] text-[#0C0C0C]">
              8 Things You Probably Didn’t Know About Headphones
            </h2>

            <h5 className="font-light text-[14px] text-[#717171] max-w-[550px] mt-[15px] mb-[15px]">
              Owning a headphone could mean a different thing for different
              people. For some, it act as a fashion statement. It’s easy to
              spot these people, the headphone are almost always just hanging
              around the neck.
            </h5>

            <p className="text-[12px] text-[#9E9E9E]">March , 28 , 2023</p>
          </div>
        </div>
      </Link>

      <Link to={"/blog/3"}>
        <div className="flex items-center justify-center gap-[15px] rounded-[8px] shadow-[-2px_2px_20px_-1px_#71717133]">
          <img
            src="https://img.freepik.com/premium-vector/bitcoin-price-going-down-bitcoin-price-falls-all-time-low-bitcoin-crash-design-vector_32996-1576.jpg"
            alt=""
            className="w-[240px] h-[156px] rounded-l-[8px]"
          />

          <div>
            <h2 className="font-medium text-[16px] text-[#0C0C0C]">
              Analyzing the August 17th Bitcoin Price Drop
            </h2>

            <h5 className="font-light text-[14px] text-[#717171] max-w-[550px] mt-[15px] mb-[15px]">
              On August 17th at 9:30PM UTC, Bitcoin’s price dropped more than
              8% in a 10-minute window, to a two-month low of under $26k. This
              pulled
            </h5>

            <p className="text-[12px] text-[#9E9E9E]">August , 17 , 2023</p>
          </div>
        </div>
      </Link>
    </div>
  </div>
</div>

    </div>
  )
}

export default Meta