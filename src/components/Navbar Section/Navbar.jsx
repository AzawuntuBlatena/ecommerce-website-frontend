import React, { useEffect, useRef, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import DarkMode from "./DarkMode";

const MenuLink = [
  { id: 1, name: "home", link: "#" },
  { id: 2, name: "about", link: "#" },
  { id: 3, name: "shop", link: "#" },
  { id: 4, name: "blogs", link: "#" },
];
const DropdownList = [
  { id: 1, name: "Trending Products", link: "#" },
  { id: 2, name: "Best Selling", link: "#" },
  { id: 3, name: "Top Rated", link: "#" },
];
function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative  bg-white dark:bg-gray-900 dark:text-white duration-200 z-20">
      <div className="py-4 ">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <div className="hidden md:block">
              <ul className="flex items-center gap-4">
                {MenuLink.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}

                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                    onClick={toggleDropdown}
                  >
                    Quick Links
                    <span>
                      <RiArrowDropDownLine
                        className={`group-hover:rotate-180 duration-300 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </a>

                  {isDropdownOpen && (
                    <div
                      ref={dropdownRef}
                      className="absolute z-[9999] block w-[200px] rounded-md bg-white shadow-md"
                    >
                      <ul className="space-y-2">
                        {DropdownList.map((data, index) => (
                          <li key={index}>
                            <a
                              href={data.link}
                              className="inline-block w-full px-2 hover:bg-primary/20 rounded-md font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                            >
                              {data.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            {/* search icon */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search here"
                className="search-bar"
              />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>
            {/* cart-buton */}
            <button className="relative p-3">
              <IoCart className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                4
              </div>
            </button>
            {/* darck mode */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
