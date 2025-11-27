import React from "react";
import { NavLink } from "react-router-dom";

import { FaUserEdit, FaBox } from "react-icons/fa";
import { CiDollar, CiShoppingBasket, CiHeart } from "react-icons/ci";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMessageCircleWarning } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineDiscount } from "react-icons/md";

export default function ProfileSidebar({ name, imgAva }) {
  const menu = [
    { label: "Personal Data", path: "personal-data", icon: <FaUserEdit /> },
    {
      label: "Payment & Instalments",
      path: "payment-instalments",
      icon: <CiDollar />,
    },
    { label: "Orders", path: "orders", icon: <CiShoppingBasket /> },
    { label: "Wish List", path: "wish-list", icon: <CiHeart /> },
    { label: "Discounts", path: "discounts", icon: <MdOutlineDiscount />
 },
    {
      label: "Security & Access",
      path: "security-access",
      icon: <AiOutlineSecurityScan />,
    },
    {
      label: "Notification",
      path: "notification",
      icon: <IoMdNotificationsOutline />,
    },
    {
      label: "Contact Us",
      path: "/contact-us",
      icon: <LuMessageCircleWarning />,
    },
  ];

  return (
    <div className="w-[260px] bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex flex-col items-center mb-8">
        <img
          src={imgAva}
          alt="avatar"
          className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
        />
        <h3 className="mt-3 text-lg font-semibold text-gray-800">{name}</h3>
      </div>

      <ul className="space-y-2">
        {menu.map((item, i) => (
          <li key={i}>
            <NavLink
              to={
                item.path.startsWith("/") ? item.path : `/profile/${item.path}`
              }
              className={({ isActive }) =>
                `relative flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200
    before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:rounded-r
    ${
      isActive
        ? " text-blue-600 font-medium before:bg-blue-600"
        : "text-gray-600 "
    }`
              }
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <button className="mt-6 w-full flex items-center gap-3 px-4 py-2 text-red-500 rounded-lg transition-colors duration-200 font-medium">
        <FiLogOut className="text-xl" />
        Log out
      </button>
    </div>
  );
}
