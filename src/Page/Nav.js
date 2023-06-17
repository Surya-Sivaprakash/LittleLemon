import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="py-4">
      <div className=" flex justify-center">
        <ul className="flex space-x-4 text-xl">
          <li className="">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900 no-underline "
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              to="/menu"
              className="text-gray-700 hover:text-gray-900 no-underline "
            >
              Menu
            </Link>
          </li>
          <li className="">
            <Link
              to="/ReservationPage"
              className="text-gray-700 hover:text-gray-900 no-underline"
            >
              Reservation
            </Link>
          </li>
          <li className="">
            <Link
              to="/contact"
              className="text-gray-700 hover:text-gray-900 no-underline"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
