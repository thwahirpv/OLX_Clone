import React, { createContext, useState } from "react";
import logo from "../assets/images/logo.png";
import { IoSearch, IoSettings } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";
import DefaultUser from "../assets/images/user.png";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { HiLogout, HiPlus } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoHelpCircleOutline } from "react-icons/io5";
import Login from "./Login";
import { UserAuth } from "../context/AuthContextProvider";
import { loginPopUpContext } from "../context/LoginPopUpContextProvider"


const NavBar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const { user, logOut } = UserAuth();
  const { loginPop, setLoginPop } = loginPopUpContext()

  const hangleLogOut = async () => {
    try {
      await logOut()
      setProfileOpen(false)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className="w-full bg-gray-100 flex items-center justify-evenly px-4 py-3">
        {/* Logo */}
        <div className="w-full md:w-fit flex md:block justify-between items-center">
          <div className="flex items-center space-x-2">
            <div
              className="md:hidden w-fit cursor-pointer"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
            </div>
            <img className="w-12 " src={logo} alt="/" />
          </div>
          <div className="flex md:hidden items-center space-x-1 ">
            <h3 className="font-bold text-sm">India</h3>
            <IoLocationOutline size={18} />
          </div>
        </div>

        {/* Search */}
        <div className="w-[80%] md:w-[60%] flex items-center space-x-5 -z-10 md:z-0 absolute top-[70px] md:static md:top-0">
          <div className="w-[30%] relative hidden md:flex justify-center items-center">
            <IoSearch size={20} className="absolute left-2" />
            <input
              className="w-[100%] p-3 pl-10 rounded border-2 border-black focus:outline-none"
              type="text"
              placeholder="Location"
            />
            <IoIosArrowDropdown size={20} className="absolute right-2" />
          </div>
          <div className="w-full md:w-[70%] flex justify-center items-center">
            <input
              className="w-[100%] p-3 rounded-s border-2 border-black focus:outline-none focus:border-blue-200"
              type="text"
              placeholder="Find Cars, Mobile Phone and more..."
            />
            <button className="p-3 text-white bg-[#002f34] rounded-e">
              <IoSearch size={27} />
            </button>
          </div>
        </div>

        {/* Account */}
        <div className="relative w-32 hidden md:flex flex-col items-center justify-center">
          {user?.email ? (
            <div>
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <img 
                className="w-10 rounded-full" 
                src={
                  `${user?.photoURL}` || DefaultUser
                } 
                alt="User" />
                <button>
                  {profileOpen ? (
                    <IoMdArrowDropup size={20} />
                  ) : (
                    <IoMdArrowDropdown size={20} />
                  )}
                </button>
              </div>
              {profileOpen && (
                <div
                  className="absolute w-full bg-gray-200 top-16 rounded transform transition-transform"
                  style={{
                    transform: "transform 0.3s ease, opacity 0.3s ease",
                  }}
                >
                  <ul className="">
                    <li className="py-3 px-6 font-bold text-sm flex items-center justify-between hover:bg-[#3a77ff]/30 rounded">
                      <span>
                        <IoMdSettings />
                      </span>
                      Settings
                    </li>
                    <li 
                    onClick={hangleLogOut}
                    className="py-3 px-6 font-bold text-sm flex items-center justify-between hover:bg-[#3a77ff]/30 rounded">
                      <span>
                        <RiLogoutBoxLine />
                      </span>
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setLoginPop(!loginPop)}
              className="font-bold border-b-2 border-black hover:border-0"
            >
              Login
            </button>
          )}
        </div>

        {/* sell Button */}
        <div className="hidden md:block">
          <a
            className="flex items-center text-sm font-semibold py-2 px-7 bg-white rounded-full cursor-pointer
                border-[7px] border-s-[#ffce32] border-t-[#23e5db] border-r-[#3a77ff] border-b-[#3a77ff]"
          >
            <span>
              <HiPlus size={18} />
            </span>
            SELL
          </a>
        </div>
      </div>

      {/* under md navbar options */}
      <div
        className={`${
          menu ? "flex" : "hidden"
        } w-full h-screen bg-gray-200 z-50 flex-col justify-start items-center py-2 transform transition-transform`}
      >
        <div className="w-full flex justify-center items-center space-x-3 border-2 border-b-gray-400 py-6">
          <img 
          className="w-16 rounded-full" 
          src={
            user?.photoURL || DefaultUser
          } 
          alt="" />
          <div>
          <h1 className="font-bold text-lg">
              {
                user?.email ? (
                  `${user?.displayName}`
                ): (
                  "Welcome to OLX!"
                )
              }
            </h1>
            <p className="text-xs text-gray-500">
              Take charge of your buying and selling <br /> journey.
            </p>
          </div>
        </div>
        <div className="w-full border-2 border-b-gray-400">
          <ul>
            <li className="py-5 flex items-center space-x-2 hover:bg-[#3a77ff]/30 cursor-pointer px-5">
              <MdAccountCircle size={22} />
              <p className="font-semibold text-sm">Account</p>
            </li>
            <li className="py-5 flex items-center space-x-2 hover:bg-[#3a77ff]/30 cursor-pointer px-5">
              <IoSettings size={22} />
              <p className="font-semibold text-sm">settings</p>
            </li>
            <li className="py-5 flex items-center space-x-2 hover:bg-[#3a77ff]/30 cursor-pointer px-5">
              <IoLocationOutline size={22} />
              <p className="font-semibold text-sm">Location</p>
            </li>
            <li className="py-5 flex items-center space-x-2 hover:bg-[#3a77ff]/30 cursor-pointer px-5">
              <IoHelpCircleOutline size={22} />
              <p className="font-semibold text-sm">Help</p>
            </li>
          </ul>
        </div>
        <div className="mt-10 w-full flex justify-center items-center">
          {
            user ? (
              <button 
              onClick={hangleLogOut}
              className="bg-green-950 py-2 w-[90%] rounded font-bold text-white">
                Logout
              </button>
            ) : (
              <button
                onClick={() => setLoginPop(!loginPop)}
                className="font-bold border-b-2 border-green-950 hover:border-0"
              >
                Login
              </button>
            )
          }
        </div>
      </div>
      {loginPop && <Login />}
    </>
  );
};

export default NavBar;
