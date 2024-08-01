import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { AlignLeft, X } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import * as Icon from 'react-feather'

const Navbar = () => {
  const navigate = useNavigate();
  const [logstate, setLogstate] = useState("");

  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 200
        ? setStickyClass(
            "fixed flex-1 navbar top-0 left-0 z-50 bg-primary smooth sm:px-20 px-6"
          )
        : setStickyClass("relative");
    }
  };

  useEffect(() => {
    const mystate = localStorage.getItem("logstate");
    setLogstate(mystate);
  }, []);

  const handleLogout = () => {
    // Perform logout actions, such as clearing token from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("logstate");
    localStorage.removeItem("user");
    console.log("user logged out");
    navigate("/login");
  };
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      id="navbar"
      className={`top-0 flex-1 fixed navbar top-0 sm:py-6 py-6 sm:px-6 flex justify-between items-center navbar fixed start-0 z-50 w-full border border-r-0 border-l-0 border-t-0 border-slate-300 ${stickyClass}`}
    >


      {/* hidden menu */}
      <div className="md:hidden justify-start items-center flex">
        <div
          onClick={() => setToggle((prev) => !prev)}
          className="cursor-pointer"
        >
          {toggle ? (
            <X color="black" size={30} />
          ) : (
            <AlignLeft color="black" size={30} />
          )}
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-slate-200 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none items-center flex flex-col justify-end flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-slate-500 text-sm mr-10`}
              >
                
                <Link to={`${nav.path}`}><Icon.Airplay color="black" size={10}/> {nav.name}</Link>
              </li>
            ))}
            
          </ul>
        </div>
      </div>

      {/* end of hidden menu */}
      <div className="flex justify-between items-center">
        <div className="md:block hidden flex-row space-x-3 flex justify-between items-center">
          <h1 className="text-sm font-normal p-2 border px-3 border-slate-300 rounded-md font-poppins text-white">
            <span className="text-black font-poppins">Jimmy Wafula</span>
          </h1>
        </div>

        <ul className="list-none items-center hidden md:flex justify-end flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={index}
              className={`font-poppins font-normal cursor-pointer text-[16px]
          ${
            index == navLinks.length - 1 ? "mr-0" : "mr-10"
          } text-white mr-2 tracking-wide
          `}
            >
              <Link
                to={`${nav.path}`}
                className="text-slate-500 font-normal px-3 py-2 rounded-md text-sm"
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center space-x-3">
        <input
          type="text"
          className="border border-slate-300 rounded-lg px-4 h-10 w-full"
          placeholder="search.."
        />
        <div className="md:block hidden rounded-full border border-slate-400 h-10 w-10"></div>
      </div>

      {/* hidden bar */}
    </nav>
  );
};

export default Navbar;
