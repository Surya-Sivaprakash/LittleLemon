import React from "react";
import footerLogo from "../Assets/footerLogo.png";

function Footer() {
  return (
    <div className="bg-emerald-950 mt-32">
      <div className="flex m-10 justify-around">
        <div className="h-full w-28">
          <img src={footerLogo} alt="footer logo" />
        </div>
        <div>
          <ul className="text-white">
            <li>Navigation</li>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
          </ul>
        </div>
        <div>
          <ul className="text-white">
            <li>Social Links</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Tiktok</li>
          </ul>
        </div>
        <div>
          <ul className="text-white">
            <li>Contact us</li>
            <li>Address</li>
            <li>Email</li>
            <li>Phone</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
