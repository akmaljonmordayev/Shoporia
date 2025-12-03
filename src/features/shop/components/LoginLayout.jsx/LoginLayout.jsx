import React from "react";
import { Outlet } from "react-router-dom";
import logoShoporia from "/public/logoShoporia.png";
function LoginLayout() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <div className="hidden md:flex flex-col items-center justify-center p-10 text-white bg-gradient-to-br from-blue-600/40 to-indigo-600/30">
          <h1 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
            Shoporia Store
          </h1>
          <p className="text-lg opacity-90 leading-relaxed text-center">
            Discover the latest electronics, smart gadgets and exclusive
            accessories curated just for you.
          </p>
          <img
            src={logoShoporia}
            alt="Ecommerce"
            className="mt-8 rounded-xl shadow-xl border border-white/20 w-64"
          />
        </div>

        <div className="bg-white/80 backdrop-blur-xl p-8 flex items-center justify-center">
          <div className="w-full max-w-sm">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;
