import logo from "../assets/img/logoNavbar.svg";
import arrow from "../assets/img/arrow.png";
import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const Nav = () => {
  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 relative ">
        <div className="md:flex items-center justify-between bg-transparent py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
          >
            <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <img src={logo} className="w-28" />
            </span>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`gap-8 w-full md:flex md:items-center md:bg-transparent md:pb-0 md:p-0 px-8 py-16 absolute md:static bg-neutral-600 bg-opacity-25 rounded-2xl backdrop-blur-xl flex flex-col md:flex-row justify-center items-center z-10 md:z-auto  left-0  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-16 " : "top-[-490px]"
            }`}
          >
            <li>
              <Menu className="bg-transparent">
                <MenuHandler className="bg-transparent  font-artega text-base text-white flex flex-row justify-center items-center gap-1 md:text-xs ">
                  <div className="cursor-pointer">
                    About
                    <span>
                      <img src={arrow} className="w-4" />
                    </span>
                  </div>
                </MenuHandler>
                <MenuList className="bg-transparent bg-neutral-600 bg-opacity-25 rounded-2xl backdrop-blur-xl font-artega text-base text-white border-none">
                  <a href="/meettheteam">
                    <MenuItem className=" cursor-pointer md:text-xs bg-transparent text-white text-base active:bg-transparent ">
                      Meet The Team
                    </MenuItem>
                  </a>
                  <a href="/grandtheme">
                    <MenuItem className=" cursor-pointer md:text-xs bg-transparent text-white text-base active:bg-transparent ">
                      Grand Theme
                    </MenuItem>
                  </a>
                  <a href="/whatistedx">
                    <MenuItem className=" cursor-pointer md:text-xs bg-transparent text-white text-base active:bg-transparent ">
                      What is TEDX
                    </MenuItem>
                  </a>
                </MenuList>
              </Menu>
            </li>
            <li>
              <Menu className="bg-transparent">
                <MenuHandler className="bg-transparent font-artega text-base text-white flex flex-row justify-center items-center gap-1 md:text-xs">
                  <div>
                    Event
                    <span>
                      <img src={arrow} className="w-4" />
                    </span>
                  </div>
                </MenuHandler>

                <MenuList className="bg-transparent bg-neutral-600 bg-opacity-25 rounded-2xl backdrop-blur-xl font-artega text-base text-white border-none">
                  <a href="/speaker">
                    <MenuItem className=" cursor-pointer md:text-xs bg-transparent text-white text-base active:bg-transparent ">
                      Speaker
                    </MenuItem>
                  </a>
                  <a href="/merchandise">
                    <MenuItem className=" cursor-pointer md:text-xs bg-transparent text-white text-base active:bg-transparent ">
                      Merchandise
                    </MenuItem>
                  </a>
                </MenuList>
              </Menu>
            </li>
            <button className="md:px-2 md:py-1 md:text-xxs bg-[#EB0028] font-artega text-xs px-6 py-4 text-white drop-shadow-none">
              Get The Ticket
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
