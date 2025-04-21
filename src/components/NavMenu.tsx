import React from "react";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <ul className="flex items-center gap-3 text-white text-lg font-medium">
      {navLinks.map((item) => (
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "underline hover:text-purple-400"
              : "hover:underline hover:text-purple-400 hoverEffect"
          }
          to={item.path}
          key={item.id}
        >
          {item.title}
        </NavLink>
      ))}
    </ul>
  );
};

export default NavMenu;
