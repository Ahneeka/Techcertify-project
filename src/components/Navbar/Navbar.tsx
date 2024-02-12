import React, { useState } from "react";
import Group from "../../assets/Images/Group1.svg";
import Button from "../Button";
import { ChevronDown, Menu } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#0C2027]">
      <div className="flex flex-col md:flex-row items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full h-88 flex justify-between">
          <img src={Group} alt="group 1" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <Menu
              className="text-white"
              name={`${open ? "close" : "menu"}`}
            ></Menu>
          </div>
        </div>

        <ul className="md:flex hidden  items-center gap-8 ">
          <li>
            <a
              className="py-7 px-3 text-regular font-normal text-16 leading-22 inline-block text-white"
              href="/"
            >
              About
            </a>
            <a
              className="py-7 px-3 text-regular  font-normal text-16 leading-22 inline-block text-[#F06523]"
              href="/"
            >
              Our Solutions
            </a>
            {/* <a
              className=" py-7 px-3 text-regular font-normal text-16 leading-22 inline-block  text-white"
              href="/"
            >
              Sectors
              <div className="ml-2">
                <ChevronDown />
              </div>
            </a> */}
            <a
              className="py-7 px-3 text-regular  font-normal text-16 leading-22 inline-block text-white"
              href="/"
            >
              Knowledge
            </a>
            <a
              className="py-7 px-3 text-regular  font-normal text-16 leading-22 inline-block text-white"
              href="/"
            >
              Company
            </a>
          </li>

          <div>
            <Button />
          </div>
        </ul>

        <ul
          className={`
        md:hidden bg-[#0C2027]  absolute z-20  w-full button-0 py-24 pl-4
        duration-500 top-0 ${open ? "left-0" : "left-[-100vw]"}
        `}
        >
          <li className="flex flex-col ">
            <a
              className="py-7 px-3 text-regular font-normal text-16 leading-22 inline-block text-white"
              href="/"
            >
              About
            </a>
            <a
              className="py-7 px-3 text-regular  font-normal text-16 leading-22 inline-block text-[#F06523]"
              href="/"
            >
              Our Solutions
            </a>
            <a
              className="py-7 px-3 text-regular  font-normal text-16 leading-22 flex items-center text-white"
              href="/"
            >
              Sectors
              <div className="ml-2">
                <ChevronDown />
              </div>
            </a>
            <a
              className="py-7 px-3 text-regular  font-normal text-16 leading-22 inline-block text-white"
              href="/"
            >
              Knowledge
            </a>
            <a
              className="py-7 px-3 text-regular  font-normal text-16 leading-22 inline-block text-white"
              href="/"
            >
              Company
            </a>
          </li>

          <div>
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
