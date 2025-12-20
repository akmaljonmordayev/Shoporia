import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import img1 from "../../../../assets/imgfayl/img1.png";
import img2 from "../../../../assets/imgfayl/img2.png";
import img3 from "../../../../assets/imgfayl/img3.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

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

  const submitForm = async (data) => {
    try {
      const res = await fetch("http://localhost:3001/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Ваша заявка была отправлена");
        reset();
      } else {
        alert("Ошибка");
      }
    } catch (e) {
      alert("Сервер не работает");
    }
  };

  return (
    <div>
      <div className="contact-container px-20 py-10 font-sans mt-20">
        <div className="info-section flex justify-center gap-[170px]">
          <div className="info-box text-center">
            <div className="icon w-[55px] h-[55px] mx-auto flex items-center justify-center">
              <img src={img1} alt="office" />
            </div>
            <h3 className="mt-2 text-[20px] font-semibold">Office</h3>
            <p className="text-[#666] text-[14px] mt-1">
              Toshkent <br /> Uzbekistan
            </p>
          </div>

          <div className="info-box text-center">
            <div className="icon w-[55px] h-[55px] mx-auto flex items-center justify-center">
              <img src={img2} alt="email" />
            </div>
            <h3 className="mt-2 text-[20px] font-semibold">Email</h3>
            <p className="text-[#666] text-[14px] mt-1">
              info@techheim.com
            </p>
          </div>

          <div className="info-box text-center">
            <div className="icon w-[55px] h-[55px] mx-auto flex items-center justify-center">
              <img src={img3} alt="phone" />
            </div>
            <h3 className="mt-2 text-[20px] font-semibold">Phone</h3>
            <p className="text-[#666] text-[14px] mt-1">
              +998 90 123 45 67
            </p>
          </div>
        </div>
        <div className="mt-14 flex justify-center relative z-10">
          <div className="w-[85%] h-[380px] rounded-xl overflow-hidden shadow-md relative z-10">

            <MapContainer
              center={[41.2995, 69.2401]}
              zoom={13}
              scrollWheelZoom={false}
              className="w-full h-full relative z-0"
            >

              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <Marker position={[41.2995, 69.2401]}>
                <Popup>
                  Our Office <br /> Toshkent, Uzbekistan
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        <div className="divbek flex items-center justify-around mt-12">
          <div>
            <h2 className="text-[26px] mb-2">Message us</h2>
            <p className="desc-text text-[#555] mb-6 leading-[1.6] max-w-[496px]">
              We're here to assist you every step of the way. Whether you have a
              question, need technical support, or simply want to share your
              feedback, our dedicated team is ready to listen.
            </p>
          </div>

          <div className="form-section w-[45%]">
            <form
              className="flex flex-col gap-3"
              onSubmit={handleSubmit(submitForm)}
            >
              <input
                type="text"
                placeholder="* Your name"
                {...register("name")}
                className={`p-3 rounded-lg border outline-none ${errors.name ? "border-red-500" : "border-[#ccc]"
                  }`}
              />
              {errors.name && (
                <span className="text-red-500 text-[13px]">
                  {errors.name.message}
                </span>
              )}

              <input
                type="email"
                placeholder="* Email"
                {...register("email")}
                className={`p-3 rounded-lg border outline-none ${errors.email ? "border-red-500" : "border-[#ccc]"
                  }`}
              />
              {errors.email && (
                <span className="text-red-500 text-[13px]">
                  {errors.email.message}
                </span>
              )}

              <textarea
                placeholder="Message"
                {...register("message")}
                className={`p-3 rounded-lg border h-[130px] resize-none outline-none ${errors.message ? "border-red-500" : "border-[#ccc]"
                  }`}
              />
              {errors.message && (
                <span className="text-red-500 text-[13px]">
                  {errors.message.message}
                </span>
              )}

              <button
                type="submit"
                className="bg-[#0057ff] text-white py-3 rounded-lg text-[17px] hover:bg-[#0047d9]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
