import React from "react";
import { useLocation } from "react-router-dom";
import HeaderSlogan from "./HeaderSlogan";

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <header className="bg-orange-100 p-4">
      <div>
        <div className="flex justify-between items-center">
          <nav>
            <a className="hover:bg-white rounded-lg p-2 md:p-3" href="/">
              Home
            </a>
          </nav>
          <a href="http://localhost:5173/">
          <h1 className="text-5xl">ChicPath</h1>
          </a>
          <nav className="flex flex-col md:flex-row mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-4">
            <a className="hover:bg-white rounded-lg p-2 md:p-3" href="./Signup">
              Sign up
            </a>
            <a className="hover:bg-white rounded-lg p-2 md:p-3" href="./Login">
              Login
            </a>
          </nav>
        </div>
        {isHomePage && <HeaderSlogan />}
      </div>
    </header>
  );
}

export default Header;