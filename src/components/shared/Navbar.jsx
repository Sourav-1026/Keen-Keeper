import React from "react";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { RiHome2Line } from "react-icons/ri";
import { LuClock3 } from "react-icons/lu";
import { GoGraph } from "react-icons/go";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">
          <RiHome2Line />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/timeline">
          <LuClock3 />
          Timeline
        </NavLink>
      </li>
      <li>
        <NavLink to="/stats">
          <GoGraph />
          Stats
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {" "}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
            </svg>
          </div>
          <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <img src={logo} alt="" />
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal gap-2.5 px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
