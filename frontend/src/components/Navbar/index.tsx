import React, { useState, useEffect} from "react";
import {
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";
import { ImYoutube } from "react-icons/im";
import WebsiteLogo from "../../assets/WebsiteLogo.png";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../context-Api/AuthProvider";

interface NavbarProps {
  handleNavigation: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleNavigation }) => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("home");
  const {authData} = useAuth();

  const handleNav = () => {
    setNav(!nav);
  };
  const handleYoutubeRedirect = () => {
    window.open("https://www.youtube.com/@nfcgalaxy", "_blank");
  };
  const handleTwitterRedirect = () => {
    window.open("https://twitter.com/nfcgalaxy", "_blank");
  };
  const handleInstagramRedirect = () => {
    window.open("https://instagram.com/nfcgalaxy", "_blank");
  };
  return (
    <div className="z-50 relative">
      <div className="hidden md:flex mb-[100px]">
        <div className="fixed bg-white w-screen h-[86px] text-bold text-black text-xl flex flex-row justify-evenly pl-8 p-3 gap-5">
          <NavLink to="/" className="mt-1">
            <img className="min-w-fit h-[46px] mt-2" src={WebsiteLogo} alt="Me!" />
          </NavLink>
          <ul className="flex justify-end flex-row items-center pl-5 gap-8 mt-2">
            <li className="h-[50px]">
              <button
                className={`mt-[5px] hover:mt-[1px] hover:mb-[10px] ${
                  location.pathname === "/"
                    ? "underline underline-offset-[10px]  hover:underline hover:underline-offset-[16px]"
                    : ""
                }`}
              >
                <NavLink to="/">خانه</NavLink>
              </button>
            </li>
            <li className="h-[50px]">
              <button
                className={`mt-[5px] hover:mt-[1px] hover:mb-[10px] ${
                  location.pathname === "/shop"
                    ? "underline underline-offset-[10px]  hover:underline hover:underline-offset-[16px]"
                    : ""
                }`}
              >
                <NavLink to="/shop">محصولات</NavLink>
              </button>
            </li>
            <li className="h-[50px]">
              <button
                className={`mt-[5px] hover:mt-[1px] hover:mb-[10px] ${
                  location.pathname === "/about-us"
                    ? "underline underline-offset-[10px]  hover:underline hover:underline-offset-[16px]"
                    : ""
                }`}
              >
                <NavLink to="/about-us">درباره ما</NavLink>
              </button>
            </li>
            <li className="h-[50px]">
              <button
                className={`mt-[5px] hover:mt-[1px] hover:mb-[10px] ${
                  location.pathname === "/contact-us"
                    ? "underline underline-offset-[10px]  hover:underline hover:underline-offset-[16px]"
                    : ""
                }`}
              >
                <NavLink to="/contact-us">تماس با ما</NavLink>
              </button>
            </li>
          </ul>
          <ul className="flex gap-6 pt-3 pr-10 mt-1">
            <li className="h-[50px]">
              <button
                className="mt-[-3px] hover:mt-[-7px] text-black font-bold py-2 rounded"
                onClick={handleInstagramRedirect}
              >
                <SiInstagram size={25} />
              </button>
            </li>
            <li className="h-[50px]">
              <button
                className="mt-[-3px] hover:mt-[-7px] text-black font-bold py-2 rounded"
                onClick={handleTwitterRedirect}
              >
                <RiTwitterXLine size={25} />
              </button>
            </li>
            <li className="h-[50px]">
              <button
                className="mt-[-3px] hover:mt-[-7px] text-black font-bold py-2 rounded"
                onClick={handleYoutubeRedirect}
              >
                <ImYoutube size={28} />
              </button>
            </li>
          </ul>
          <button className={`flex justify-center border ${localStorage.getItem("firstname") ? 'bg-gray-800 text-white hover:bg-gray-900' : 'hover:bg-gray-100'} border-black rounded-3xl h-[48px] p-3 items-center mt-2 hover:mt-[6px] hover:mb-[10px]`}>
                <div className="">
                {localStorage.getItem("firstname") ? (<NavLink to="/my-account">پنل کاربری {localStorage.getItem("firstname")}</NavLink>):(
                <NavLink to="/login"> ورود / عضویت</NavLink>
                )}
                </div>
          </button>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed flex justify-between right-0 left-0"
            : "md:hidden fixed flex justify-between right-0"
        }
      >
        <div
          className={
            nav
              ? " bg-black text-white w-[220px] h-screen"
              : "fixed right-[-100%]"
          }
        >
          <h1 className="text-gray-400 text-bold text-3xl pl-3 pt-3">Menu</h1>
          <ul className="pt-1 pl-4 text-lg">
            <li className="mr-8 px-2 pt-8 pb-2 border-b border-b-gray-500">
              Home
            </li>
            <li className="mr-8 px-2 pt-8 pb-2 border-b border-b-gray-500">
              Section A
            </li>
            <li className="mr-8 px-2 pt-8 pb-2 border-b border-b-gray-500">
              Section B
            </li>
            <li className="mr-8 px-2 pt-8 pb-2 border-b border-b-gray-500">
              Section C
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-5 pt-10 justify-items-center px-9">
            <button
              className=" hover:bg-[#1E1E1E] hover:rounded-2xl text-white font-bold py-2 px-4 rounded"
              onClick={handleTwitterRedirect}
            >
              <RiTwitterXLine size={43} />
            </button>
            <button
              className=" hover:bg-[#1E1E1E] hover:rounded-2xl text-white font-bold py-2 px-4 rounded"
              onClick={handleInstagramRedirect}
            >
              <SiInstagram size={40} />
            </button>
            <button
              className=" hover:bg-[#1E1E1E] hover:rounded-2xl text-white font-bold py-2 px-4 rounded"
              onClick={handleYoutubeRedirect}
            >
              <ImYoutube size={40} />
            </button>
          </div>
        </div>
        <div
          onClick={handleNav}
          className={nav ? "md:hidden p-5" : "right-0 top-0 p-5"}
        >
          {!nav ? <AiOutlineMenu size={24} /> : <AiOutlineClose size={24} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
