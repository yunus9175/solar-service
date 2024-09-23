import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  // Close the menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      const btn = document.querySelector("#hamburger-btn");

      if (navRef.current && !navRef.current.contains(event.target)) {
        if (!btn.contains(event.target)) {
          setIsOpen(false);
        }
      }
    };

    // Add event listener to detect clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-white font-bold text-2xl flex items-center gap-2"
        >
          <img src={logo} alt="logo" className="h-12 rounded-3xl object-fit" />
          <h2 className="text-lg sm:text-3xl ">S.B Electrical Solutions</h2>
        </NavLink>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          id="hamburger-btn"
          className="block lg:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Links */}
        <ul
          ref={navRef} // Attach ref to the nav list
          className={`lg:flex lg:space-x-4 text-white lg:static absolute bg-gray-800 w-full left-0 lg:w-auto lg:bg-transparent transition-all duration-500 ${
            isOpen ? "top-16" : "top-[-300px]"
          }`}
        >
          <li className="px-4 py-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block ${isActive ? "text-blue-500" : "text-white"}`
              }
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              Home
            </NavLink>
          </li>
          <li className="px-4 py-2">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `block ${isActive ? "text-blue-500" : "text-white"}`
              }
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
          </li>
          <li className="px-4 py-2">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `block ${isActive ? "text-blue-500" : "text-white"}`
              }
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
          </li>
          {/* <li className="px-4 py-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-white"
              }
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>
          </li> */}
          <li className="px-4 py-2">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block ${isActive ? "text-blue-500" : "text-white"}`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
          <li className="px-4 py-2">
            <NavLink
              to="/visitors"
              className={({ isActive }) =>
                `block ${isActive ? "text-blue-500" : "text-white"}`
              }
              onClick={() => setIsOpen(false)}
            >
              Visitors
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
