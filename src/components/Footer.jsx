import React from 'react'
import olxImg from "../assets/images/olx.svg"
import catrRadeTechImg from "../assets/images/cartrade_tech.svg"
import carWaleImg from "../assets/images/carwale.svg"
import bikeWaleImg from "../assets/images/bikewale.svg"
import cartRadeImg from "../assets/images/cartrade.svg"
import mobilityImg from "../assets/images/mobility.svg"
import { UserAuth } from '../context/AuthContextProvider' 

const Footer = () => {
  const {user} = UserAuth()
  return (
    <div className='bg-footerbg w-full py-[30px] px-[110px]'>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-flow-col'>
        <div className='md:border-r-2 md:border-r-white px-12'>
            <img className='w-[130px]' src={catrRadeTechImg} alt="cartrade tech" />
        </div>
        <div className='px-12'>
            <img className='w-[40px]' src={olxImg} alt="olx" />
        </div>
        <div className=' px-12'>
            <img className='w-[80px]' src={carWaleImg} alt="" />
        </div>
        <div className=' px-12'>
            <img className='w-[80px]' src={bikeWaleImg} alt="" />
        </div>
        <div className=' px-12'>
            <img className='w-[80px]' src={cartRadeImg} alt="" />
        </div>
        <div className=' px-12'>
            <img className='w-[80px]' src={mobilityImg} alt="" />
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center mt-6 px-12'>
        <p className='text-white text-xs text-nowrap'>Help - Sitemap {user?.email}</p>
        <p className='text-white text-xs text-nowrap mt-2 md:mt-0'>All rights reserved © 2003-2024 MT</p>
      </div>
    </div>
  )
}

export default Footer
