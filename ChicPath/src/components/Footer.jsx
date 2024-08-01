import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-100">
      <div className="flex justify-around">
          <a className=" content-center " href="http://localhost:5173/">
            <h1 className="slogan text-4xl">ChicPath</h1>
          </a>
        <div>
          <h3>About Us</h3>
          <p>
            <span>
              <i className="fa-solid fa-location-dot"></i>
            </span>
            Square des Martyrs, 6000 Charleroi
          </p>
          <div>
            <p>
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              (123) 456-7890
            </p>
          </div>
          <div>
            <h3>Social Media</h3>
            <p>
              <span className="mx-5">
                <i className="fa-brands fa-facebook-f"></i>
              </span>
                <i className="fa-brands fa-instagram"></i>
            </p>
          </div>
        </div>
        <div>
          <nav>
            <Link to="/">HOME</Link>
            <Link to="/">Women</Link>
            <Link to="/">Men</Link>
          </nav>
        </div>
      </div>
      <p className="py-4 text-center">Copyright © 2022 • ChicPath Inc.</p>
    </footer>
  );
}

export default Footer;