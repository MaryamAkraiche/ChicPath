import React from "react";
import { useLocation } from "react-router-dom";
import HeaderSlogan from "./HeaderSlogan";

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <header>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-5xl">ChicPath</h1>
          <nav>
            <a href="/">
              Home
            </a>
          </nav>
          <div className="flex justify-around">
            <a href="./Signup">
              Sign up
            </a>
            <a href="./Login">
              Login
            </a>
          </div>
        </div>
        {isHomePage && <HeaderSlogan />}
      </div>
    </header>
  );
}

export default Header;