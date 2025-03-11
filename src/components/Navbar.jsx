import {  NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-2 bg-gray-200">
      <img src={logo} alt="logo" className="h-20" />
      <ul className="flex justify-end space-x-6">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold"
                : "text-blue-900 hover:text-blue-600"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold"
                : "text-blue-900 hover:text-blue-600"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold"
                : "text-blue-900 hover:text-blue-600"
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold"
                : "text-blue-900 hover:text-blue-600"
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold"
                : "text-blue-900 hover:text-blue-600"
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
