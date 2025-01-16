import React from 'react'
import { IoStar } from "react-icons/io5";


const ProductCard = (props) => {
    const {color, image, model, price, title, brand} = props.item
    const truncateStr = (str, defaultLength) => {
        if(str.length > defaultLength){
            return str.slice(0, defaultLength) + "..."
        }else{
            return str
        }
    }
  return (
    <>
        <div className="bg-white border-2 border-gray-200 rounded-lg shadow py-3 px-3">
            <div className='w-full h-48 md:h-44'>
                <img src={image} className='w-full h-full object-contain' alt="" />
            </div>
            <div className='space-y-2'>
                <h3 className='font-bold text-lg'>$ {price}</h3>
                <p className='text-sm font-semibold'>{brand} - {model}</p>
                <p className='text-sm '>{color}</p>
                <p className='text-gray-500 text-sm'>{truncateStr(title, 30)}</p>
            </div>
        </div>
    </>
  )
}

export default ProductCard
