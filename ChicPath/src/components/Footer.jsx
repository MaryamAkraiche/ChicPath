import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <hr/>
      <div>
        <h2 className="text-3xl">
          ChicPath
        </h2>
        <div>
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
            <p>
              <span>
                <i className="fa-solid fa-print"></i>
              </span>
              (123) 456-7890
            </p>
          </div>
        </div>
      </div>
      <ul>
        <li>Social Media</li>
        <li>
          <span>
            <i className="fa-brands fa-facebook-f"></i>
          </span>
        </li>
        <li>
          <span>
            <i className="fa-brands fa-instagram"></i>
          </span>
        </li>
      </ul>
      <hr/>
      <div>
        <nav >
          <Link to="/">HOME</Link>
          {/* <Link to="/Invoices" className="hover:text-cogip-color">INVOICES</Link> */}
        </nav>
        <p>Copyright © 2022 • ChicPath Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;