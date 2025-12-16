import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "HTML", path: "/html" },
  { name: "CSS", path: "/css" },
  { name: "JavaScript", path: "/javascript" },
  { name: "Java", path: "/java" },
  { name: "Python", path: "/python" },
  { name: "Data Structure", path: "/datastructure" },
  { name: "Others", path: "/others" },
];

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-around gap-4 px-10 py-3 bg-black text-white dark:bg-gray-800 not-last:">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            ` font-semibold text-lg px-2  rounded-2xl ${
              isActive
                ? "bg-gray-300 text-black dark:bg-gray-600 dark:text-white"
                : "text-white dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
