import React, { useState } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";


const CategoryBar = () => {
    const [categoryOpen, setCategoryOpen] = useState(false)
  return (
    <div className='w-full md:px-32 shadow shadow-gray-300 mt-[85px] md:mt-2 py-2'>
      <div className='w-full flex items-center justify-center md:space-x-6'>
        <div className='relative hidden md:flex items-center space-x-1'>
           <h1 className='font-semibold text-nowrap'>ALL CATEGORIES</h1>
            <a href="#" onClick={(e) => {
                e.preventDefault()
                setCategoryOpen(!categoryOpen)
            }}>
                {
                    categoryOpen ? (
                        <RiArrowDropUpLine size={32} />
                    ) : (
                        <RiArrowDropDownLine size={32} />
                    )
                }
            </a>

            <div className={`${categoryOpen ? "block" : "hidden"} absolute bg-gray-200 top-12 left-0 rounded transform transition-transform`}>
                <ul>
                    <li className='md:text-sm text-nowrap hover:bg-[#3a77ff]/30 py-2 px-7 rounded'>
                    <a href="">Car</a>
                </li>
                <li className='text-sm text-nowrap hover:bg-[#3a77ff]/30 py-2 px-7 rounded'>
                    <a href="">MotorCycle</a>
                </li>
                <li className='text-sm text-nowrap hover:bg-[#3a77ff]/30 py-2 px-7 rounded'>
                    <a href="">Mobile Phones</a>
                </li>
                <li className='text-sm text-nowrap hover:bg-[#3a77ff]/30 py-2 px-7 rounded'>
                    <a href="">Scooter</a>
                </li>
                <li className='text-sm text-nowrap hover:bg-[#3a77ff]/30 py-2 px-7 rounded'>
                    <a href="">Commercial & Other Vehicles</a>
                </li>
                <li className='text-sm text-nowrap hover:bg-[#3a77ff]/30 py-2 px-7 rounded'>
                    <a href="">For Reant: House & Apartment</a>
                </li>
                </ul>
            </div>
        </div>
        <div className='w-full px-2'>
            <ul className='w-full flex space-x-5 items-center px-1 overflow-x-scroll whitespace-normal scroll-smooth scrollbar-none'>
                <li className='md:text-sm text-nowrap bg-gray-200 py-1 px-3 rounded'>
                    <a href="">Car</a>
                </li>
                <li className='text-sm text-nowrap bg-gray-200 py-1 px-3 rounded'>
                    <a href="">MotorCycle</a>
                </li>
                <li className='text-sm text-nowrap bg-gray-200 py-1 px-3 rounded'>
                    <a href="">Mobile Phones</a>
                </li>
                <li className='text-sm text-nowrap bg-gray-200 py-1 px-3 rounded'>
                    <a href="">Scooter</a>
                </li>
                <li className='text-sm text-nowrap bg-gray-200 py-1 px-3 rounded'>
                    <a href="">Commercial & Other Vehicles</a>
                </li>
                <li className='text-sm text-nowrap bg-gray-200 py-1 px-3 rounded'>
                    <a href="">For Reant: House & Apartment</a>
                </li>
                <li className='text-sm text-nowrap bg-gray-200 py-1 px-3 rounded'>
                    <a href="">For Reant: House & Apartment</a>
                </li>
                <li className='text-sm text-nowrap bg-gray-200 py-1 px-3 rounded'>
                    <a href="">For Reant: House & Apartment</a>
                </li>
                <li className='text-sm text-nowrap bg-gray-200 py-1 px-3 rounded'>
                    <a href="">For Reant: House & Apartment</a>
                </li>
                <li className='text-sm text-nowrap bg-gray-200 py-1 px-3 rounded'>
                    <a href="">For Reant: House & Apartment</a>
                </li>
                <li className='text-sm text-nowrap bg-gray-200 py-1 px-3 rounded'>
                    <a href="">For Reant: House & Apartment</a>
                </li>
                <li className='text-sm text-nowrap bg-gray-200 py-1 px-3 rounded'>
                    <a href="">For Reant: House & Apartment</a>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default CategoryBar
