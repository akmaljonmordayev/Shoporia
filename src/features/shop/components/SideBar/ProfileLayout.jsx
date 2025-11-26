import React from "react";
import { Outlet } from "react-router-dom";
import ProfileSidebar from "./SideBar";
import Header from "../Header/Header";

export default function ProfileLayout() {
  return (
    <>
      <Header />

      <div className="flex gap-6 p-6 max-w-7xl mx-auto">
        <ProfileSidebar />
        <div className="flex-1 bg-white p-6 rounded-xl shadow">
          <Outlet />
        </div>
      </div>
    </>
  );
}
