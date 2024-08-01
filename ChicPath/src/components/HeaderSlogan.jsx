import React from "react";
import path from "../assets/path.png";

function Header_slogan() {
  return (
    <div>
      <p className="absolute mt-14 ml-28 text-3xl font-Inter font-black slogan">
        Walk The Path To Chic !
      </p>
      <img 
        src={path} 
        alt="path" 
        className="relative w-64"
      />
    </div>
  );
}

export default Header_slogan;