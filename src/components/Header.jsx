import { useState } from "react";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#1b3357] to-[#040C18] p-7 flex items-center justify-around">
        <Logo />
        <div className="w-8/12 hidden lg:flex items-center justify-between">
          <nav className="text-white">
            <ul className="flex gap-5">
              <li className="cursor-pointer border-[#F49867] transition-all duration-75 ease-in hover:border-b-2">
                Home
              </li>
              <li className="cursor-pointer border-[#F49867] transition-all duration-75 ease-in hover:border-b-2">
                What is GPT3
              </li>
              <li className="cursor-pointer border-[#F49867] transition-all duration-75 ease-in hover:border-b-2">
                OpenAI
              </li>
              <li className="cursor-pointer border-[#F49867] transition-all duration-75 ease-in hover:border-b-2">
                Case Studies
              </li>
              <li className="cursor-pointer border-[#F49867] transition-all duration-75 ease-in hover:border-b-2">
                Library
              </li>
            </ul>
          </nav>
          <div>
            <ul className="flex text-white gap-5 items-center">
              <li className="cursor-pointer">Sign In</li>
              <li className="bg-[#FF4820] p-3 rounded-sm w-24 text-center cursor-pointer">
                Sign Up
              </li>
            </ul>
          </div>
        </div>
        <div>
          <FaBars
            className="text-white text-4xl lg:hidden"
            onClick={openMenu}
          />
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-0 bg-gradient-to-br from-[#1b3357] to-[#040C18] w-full h-full text-white p-10 text-center lg:hidden">
          <div className="flex justify-end">
            <FaXmark className="text-4xl" onClick={closeMenu} />
          </div>
          <ul className="mt-16 flex flex-col gap-3 items-center">
            <li className="cursor-pointer border-[#F49867] transition-all duration-75 ease-in hover:border-b-2 p-3 w-2/5">
              Home
            </li>
            <li className="cursor-pointer border-[#F49867] transition-all duration-75 ease-in hover:border-b-2 p-3 w-3/5">
              What is GPT3
            </li>
            <li className="cursor-pointer border-[#F49867] transition-all duration-75 ease-in hover:border-b-2 p-3 w-2/5">
              OpenAI
            </li>
            <li className="cursor-pointer border-[#F49867] transition-all duration-75 ease-in hover:border-b-2 p-3 w-3/5">
              Case Studies
            </li>
            <li className="cursor-pointer border-[#F49867] transition-all duration-75 ease-in hover:border-b-2 p-3 w-2/5">
              Library
            </li>
            <li className="p-3 font-bold mt-8">Sign in</li>
            <li className="bg-[#FF4820] w-4/5 p-3 rounded-lg font-bold">
              Sign Up
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
