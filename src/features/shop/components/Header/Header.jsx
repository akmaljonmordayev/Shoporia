import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import logo from "./image.png";
import { useLanguageStore } from "../../../../contexts/useLanguageStore";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineDollarCircle } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import LogoShoporia from "../../../../assets/LogoImages/SHOPORIA-logo-transparent.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { language, setLanguage } = useLanguageStore();
  const [profile, setProfile] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Products", path: "/products" },
    { id: 3, name: "Blog", path: "/blog" },
    { id: 4, name: "FAQ", path: "/faq" },
    { id: 5, name: "Contact Us", path: "/contact-us" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
      setSearchQuery("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setProfile(!profile);
    navigate("/auth/login", { replace: true });
  };

  return (
    <div className="py-[50px] w-full">

      <header className="fixed top-0 left-0 right-0 w-full bg-white shadow-sm z-50">

        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <NavLink to="/">
            <img
              src={LogoShoporia}
              alt="Shoporia Logo"
              className="h-[45px] w-auto object-contain scale-[3.5] origin-left"
            />
          </NavLink>

          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <form
              onSubmit={handleSearch}
              className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2"
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none text-sm w-32"
              />
              <button
                type="submit"
                className="text-gray-600 hover:text-gray-900"
              >
                <FiSearch className="text-lg" />
              </button>
            </form>

            <button className="text-gray-700 hover:text-blue-600 transition md:hidden">
              <FiSearch className="text-xl" />
            </button>

            <NavLink
              to="/cart"
              className="text-gray-700 hover:text-blue-600 transition relative"
            >
              <FiShoppingCart className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </NavLink>

            <FiUser onClick={() => setProfile(!profile)} className="text-xl" />

            {/* <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="
        px-4 py-2
        rounded-lg
        border border-gray-300
        dark:border-gray-600
        bg-white dark:bg-gray-800
        text-gray-700 dark:text-gray-200
        shadow-sm
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        cursor-pointer
        transition-all
      "
            >
              <option value="uz">🇺🇿 Uzbek</option>
              <option value="ru">🇷🇺 Russian</option>
              <option value="en">🇺🇸 English</option>
            </select> */}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <FiX className="text-xl" />
              ) : (
                <FiMenu className="text-xl" />
              )}
            </button>
          </div>
        </div>

        <div className="md:hidden px-4 pb-3 border-t border-gray-200">
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-gray-100 rounded-lg px-3 py-2"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none text-sm flex-1"
            />
            <button type="submit" className="text-gray-600 hover:text-gray-900">
              <FiSearch className="text-lg" />
            </button>
          </form>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden bg-gray-50 border-t border-gray-200 px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg text-sm font-medium transition ${isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        )}
      </header>
      {profile && (
        <div className="w-64 bg-white shadow-lg rounded-xl p-4 fixed right-[70px] top-14 z-10">
          <Link onClick={() => setProfile(!profile)} to={"/profile"}>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-blue-600 cursor-pointer hover:underline">
                Jimmy Smith
              </h3>
              <p className="text-sm text-gray-600">Jimmy.smith1996@gmail.com</p>
            </div>
          </Link>

          <ul className=" text-gray-700 flex flex-col gap-4">
            <Link onClick={() => setProfile(!profile)} to={"/profile/orders"}>
              <li className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
                <FiShoppingBag size={20} />
                <span className="text-base">Orders</span>
              </li>
            </Link>
            <Link
              to={"/profile/wish-list"}
              onClick={() => setProfile(!profile)}
            >
              <li className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
                <AiOutlineHeart size={20} />
                <span className="text-base">Wish List</span>
              </li>
            </Link>

            <Link
              onClick={() => setProfile(!profile)}
              to={"/profile/payment-instalments"}
            >
              <li className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
                <AiOutlineDollarCircle size={20} />
                <span className="text-base">Payments</span>
              </li>
            </Link>
            <li
              onClick={handleLogout}
              className="flex items-center gap-3 cursor-pointer hover:text-red-500 mt-2"
            >
              <BiLogOut size={20} />
              <span className="text-base">Log out</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
