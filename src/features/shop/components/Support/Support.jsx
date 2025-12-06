import React from 'react'
import img1 from "../../../../assets/img1.png"
import img2 from "../../../../assets/img2.png"
import img3 from "../../../../assets/img3.png"
import img4 from "../../../../assets/img4.png"
function Support() {
  return (
    <div>
        <div>
  <div className="mt-[56px] flex items-center justify-center gap-[150px] w-[100%] mx-auto">
    {/* card 1 */}
    <div className="flex items-center justify-center gap-[15px]">
      <img
        className="w-[40px] h-[45px]"
        src={img1}
        alt=""
      />
      <p className="font-light text-[18px] leading-[100%] tracking-[0%] text-black">
        Latest and Greatest Tech
      </p>
    </div>

    {/* card 2 */}
    <div className="flex items-center justify-center gap-[15px]">
      <img
        className="w-[40px] h-[45px]"
        src={img2}
        alt=""
      />
      <p className="font-light text-[18px] leading-[100%] tracking-[0%] text-black">
        Guarantee
      </p>
    </div>

    {/* card 3 */}
    <div className="flex items-center justify-center gap-[15px]">
      <img
        className="w-[60px] h-[30px]"
        src={img3}
        alt=""
      />
      <p className="font-light text-[18px] leading-[100%] tracking-[0%] text-black">
        Free Shipping over 1000$
      </p>
    </div>

    {/* card 4 */}
    <div className="flex items-center justify-center gap-[15px]">
      <img
        className="w-[40px] h-[45px]"
        src={img4}
        alt=""
      />
      <p className="font-light text-[18px] leading-[100%] tracking-[0%] text-black">
        24/7 Support
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default Support