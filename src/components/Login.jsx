import React, { useState } from "react";
import loginEntryPointChat from "../assets/images/loginEntryPointChat.webp";
import loginEntryPointFavorite from "../assets/images/loginEntryPointFavorite.webp";
import loginEntryPointPost from "../assets/images/loginEntryPointPost.webp";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { LuSmartphone } from "react-icons/lu";
import googleLogo from "../assets/images/google-logo.png";
import { IoCloseSharp } from "react-icons/io5";
import { UserAuth } from "../context/AuthContextProvider"
import { useNavigate } from "react-router-dom";
import { loginPopUpContext } from "../context/LoginPopUpContextProvider"

const Login = () => {
  const carousel = [
    {
      id: 0,
      image: loginEntryPointPost,
      text: `Help us become one of the safest places   to buy and sell`,
    },
    {
      id: 1,
      image: loginEntryPointFavorite,
      text: `Close deals from the comfort of your  home.`,
    },
    {
      id: 2,
      image: loginEntryPointChat,
      text: "Keep all your favoritea in one place.",
    },
  ];

  const [currItem, setCurrItem] = useState(0);
  const navigate = useNavigate()
  const { setLoginPop } = loginPopUpContext()

  const prev = () => {
    setCurrItem((curr) => (curr == 0 ? carousel.length - 1 : curr - 1));
  };
  const next = () => {
    setCurrItem((curr) => (curr == carousel.length - 1 ? 0 : curr + 1));
  };

  const { user, signUp } = UserAuth()

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      await signUp()
      navigate("/")
      setLoginPop(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div
        onClick={() => setLoginPop((curr) => !curr)}
        className="fixed top-0 left-0 bottom-0 right-0 z-10 w-full bg-black/70 flex justify-center items-center"
      >
        <div className="relative bg-white h-full lg:h-fit w-full lg:w-[27%] px-5 py-2 rounded">
          <div className="absolute top-2 right-2">
            <button
              onClick={() => setLoginPop((curr) => !curr)}
              className="p-1 cursor-pointer"
            >
              <IoCloseSharp size={33} />
            </button>
          </div>
          <div className="relative w-[100%] h-52 flex items-center overflow-x-hidden">
            {carousel.map((item, id) => (
              <div
                key={item.id}
                className="max-w-[100%] min-w-[100%] space-y-3 flex flex-col justify-center items-center transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${currItem * 100}%)` }}
              >
                <img
                  className="w-24 object-contain"
                  src={item.image}
                  alt="loginEntryPointPost"
                />
                <h3
                  id="text"
                  className="text-wrap px-[40px] font-semibold text-center text-gray-700"
                >
                  {item.text}
                </h3>
              </div>
            ))}
            <div className="absolute w-[100%] flex items-center justify-between">
              <button
                onClick={prev}
                className="p-1 text-gray-500 cursor-pointer"
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="p-1 text-gray-500 cursor-pointer"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
            <div className="absolute bottom-0 right-0 left-0">
              <div className="flex  items-center justify-center gap-2">
                {carousel.map((item, id) => (
                  <div
                    key={item.id}
                    className={`transition-all p-1 rounded-full
                                    ${
                                      currItem == item.id
                                        ? "bg-[#3a77ff]/60"
                                        : "bg-gray-400"
                                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full py-7 space-y-4">
            <div>
              <button className="w-full flex cursor-pointer items-center px-5 py-3 font-bold text-sm space-x-2 border-2 border-black rounded">
                <LuSmartphone size={18} />
                <span>Continue with phone</span>
              </button>
            </div>
            <div>
              <div 
              onClick={handleSignUp}
              className="cursor-pointer relative w-full flex items-center justify-center px-5 py-3 space-x-2 border-2 border-gray-300 rounded">
                <h1 className="font-semibold text-sm text-gray-600">
                  Continue with Google
                </h1>
                <div className="absolute left-2">
                  <img className="w-6" src={googleLogo} alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <p className="font-semibold text-sm">OR</p>
              <a
                className="font-bold text-sm underline underline-offset-4"
                href="#"
              >
                Login with Email
              </a>
            </div>
          </div>
          <div className="absolute bottom-4 right-0 left-0 lg:static flex flex-col items-center space-y-4 py-5 mt-[60px]">
            <p className="text-xs  text-gray-500 text-center">
              All your personal details are safe with us.
            </p>
            <p className="text-xs  text-gray-500 text-center space-x-1">
              <span>If you continue, you are accepting</span>
              <a className="text-xs text-blue-500">
                OLX Terms and <br /> Conditions and Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
