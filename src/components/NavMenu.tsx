import React from "react";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <ul className="hidden md:flex items-center gap-3 text-primary text-lg font-medium">
      {navLinks.map((item) => (
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "underline hover:text-light-green"
              : "hover:underline hover:text-light-green hoverEffect"
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
