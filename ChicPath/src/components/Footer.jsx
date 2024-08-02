import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-100">
      <div className="flex justify-around">
        <section>
          <h2>
            <a className=" content-center " href="http://localhost:5173/">
              <h1 className="slogan text-4xl m-2">ChicPath</h1>
            </a>
          </h2>
          <h3 className="text-xl">Contact</h3>
          <p>
            <i className="m-2 fa-solid fa-location-dot"></i>
            Square des Martyrs, 6000 Charleroi
          </p>
          <p>
            <i className="m-2 fa-solid fa-phone"></i>
            (123) 456-7890
          </p>
          <h3 className="text-xl">Social Media</h3>
            <p>
              <i className="m-2 fa-brands fa-facebook-f"></i>
              <i className="m-2 fa-brands fa-instagram"></i>
            </p>
        </section>
        <section>
          <h3 className="mt-4 text-xl">About</h3>
          <p className="m-2">About us</p>
          <p className="m-2">Delevry information</p>
          <p className="m-2">Privacy</p>
          <p className="m-2">Contact us</p>
        </section>
        <section>
          <h3 className="mt-4 text-xl">My account</h3>
          <Link className="m-2" to="/login">Sign in</Link><br />
          <Link className="m-2" to="/Shopping">View Cart</Link><br />
          <Link className="m-2" to="/Wishlist">My wishlist</Link><br />
          <p className="m-2">Help</p>
        </section>
      </div>
      <p className="py-4 text-center">Copyright © 2022 • ChicPath Inc.</p>
    </footer>
  );
}

export default Footer;