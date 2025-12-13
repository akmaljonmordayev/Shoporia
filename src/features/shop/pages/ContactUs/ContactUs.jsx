import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import img1 from "../../../../assets/imgfayl/img1.png"
import img2 from "../../../../assets/imgfayl/img2.png"
import img3 from "../../../../assets/imgfayl/img3.png"

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Email is invalid")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});
function ContactUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = (data) => {
    console.log(data);
    alert("Message sent!");
    reset();
  };
  return <div>
     <div>
      <div className="contact-container px-20 py-10 font-sans mt-20">
        <div className="info-section flex justify-center gap-[170px]">
          <div className="info-box text-center">
            <div className="icon text-[32px] text-[#0057ff] w-[55px] h-[55px] rounded-full mx-auto flex items-center justify-center">
              <img src={
                img1
              } alt="" />
            </div>
            <h3 className="mt-2 text-[20px] font-semibold">Office</h3>
            <p className="text-[#666] text-[14px] mt-1">
              123 Main Street,
              <br />
              Anytown, USA
            </p>
          </div>

          <div className="info-box text-center">
            <div className="icon text-[32px]  text-[#0057ff] w-[55px] h-[55px] rounded-full mx-auto flex items-center justify-center">
            <img src={
                img2
              } alt="" />
            </div>
            <h3 className="mt-2 text-[20px] font-semibold">Email</h3>
            <p className="text-[#666] text-[14px] mt-1">info@techheim.com</p>
          </div>

          <div className="info-box text-center">
            <div className="icon text-[32px]  text-[#0057ff] w-[55px] h-[55px] rounded-full mx-auto flex items-center justify-center">
            <img src={
                img3
              } alt="" />

            </div>
            <h3 className="mt-2 text-[20px] font-semibold">Phone</h3>
            <p className="text-[#666] text-[14px] mt-1">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="divbek flex items-center justify-around mt-12">
          <div>
            <h2 className="text-[26px] mb-2">Message us</h2>
            <p className="desc-text text-[#555] mb-6 leading-[1.6] max-w-[496px]">
              We're here to assist you every step of the way. Whether you have a
              question, need technical support, or simply want to share your
              feedback, our dedicated team is ready to listen and provide prompt
              assistance.
            </p>
          </div>

          <div className="form-section w-[45%]">
        
            <form className="flex flex-col gap-3" onSubmit={handleSubmit(submitForm)}>
              <input
                type="text"
                placeholder="* Your name"
                {...register("name")}
                className={`p-3 rounded-lg border text-[16px] outline-none ${
                  errors.name ? "border-red-500" : "border-[#ccc]"
                }`}
              />
              {errors.name && (
                <span className="err-text text-red-500 text-[13px] -mt-2">
                  {errors.name.message}
                </span>
              )}

              <input
                type="email"
                placeholder="* Email"
                {...register("email")}
                className={`p-3 rounded-lg border text-[16px] outline-none ${
                  errors.email ? "border-red-500" : "border-[#ccc]"
                }`}
              />
              {errors.email && (
                <span className="err-text text-red-500 text-[13px] -mt-2">
                  {errors.email.message}
                </span>
              )}

              <textarea
                placeholder="Message"
                {...register("message")}
                className={`p-3 rounded-lg border text-[16px] h-[130px] resize-none outline-none ${
                  errors.message ? "border-red-500" : "border-[#ccc]"
                }`}
              ></textarea>
              {errors.message && (
                <span className="err-text text-red-500 text-[13px] -mt-2">
                  {errors.message.message}
                </span>
              )}

              <button
                type="submit"
                className="submit-btn bg-[#0057ff] text-white py-3 rounded-lg text-[17px] cursor-pointer mt-3 hover:bg-[#0047d9]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default ContactUs;
