import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderSlogan from "./HeaderSlogan";

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  return (
    <header className="bg-gray-100 p-4">
      <div>
        <div className="flex justify-between items-center">
          <nav>
            <a className="hover:bg-white rounded-lg p-2 md:p-3" href="/">
              Home
            </a>
            <a className="hover:bg-white rounded-lg p-2 md:p-3" href="/">
              Women
            </a>
            <a className="hover:bg-white rounded-lg p-2 md:p-3" href="/">
              Men
            </a>
          </nav>
          <a href="http://localhost:5173/">
            <h1 className="text-5xl">ChicPath</h1>
          </a>
          <nav className="flex flex-col md:flex-row mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-4">
            <a className="hover:bg-white rounded-lg p-2 md:p-3" href="./Shopping">
              <i class="fa-solid fa-magnifying-glass"></i>
            </a>
            <a className="hover:bg-white rounded-lg p-2 md:p-3" href="">
              <i class="fa-solid fa-heart"></i>
            </a>
            <div 
              className="relative flex justify-between items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a className="hover:bg-white rounded-lg p-2 md:p-3">
                <i class="fa-solid fa-user"></i>
              </a>
              {showDropdown && (
                <div className="absolute right-0 mt-32 bg-white shadow-lg rounded-lg border border-gray-200 w-40">
                  <a href="./Login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded">
                    Login
                  </a>
                  <a href="./Signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded">
                    Sign Up
                  </a>
                </div>
              )}
            </div>
            <a className="hover:bg-white rounded-lg p-2 md:p-3" href="./Shopping">
              <i className="fa-solid fa-bag-shopping"></i>
            </a>
          </nav>
        </div>
        {isHomePage && <HeaderSlogan />}
      </div>
    </header>
  );
}

export default Header;
