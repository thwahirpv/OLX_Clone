import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {
    const location = useLocation()
    const {brand, title, category, color, description, discount, image, model, price} = location.state.item
    console.log(location.state.item);
    
    
  return (
    <>
        <div className='grid grid-cols-3 px-[20px] sm:px-[40px] md:px-[30px] lg:px-[100px] gap-x-6 gap-y-4 md:gap-y-3 py-10'>
            <div className='bg-black col-span-3 md:col-span-2 row-span-3 min-h-[100px] flex items-center justify-center rounded'>
                <div>
                    <img className='w-[400px] object-contain' src={image} alt="" />
                </div>
            </div>
            <div className='col-span-3 md:col-span-1 border-2 border-gray-200 py-3 px-4 rounded min-h-[100px] space-y-2'>
                <h1 className='text-3xl text-gray-800 font-bold'>₹ {price}</h1>
                <p className=' text-gray-500'>{title}</p>
                <p className='text-gray-500 text-xs py-3'>{model}</p>
            </div>
            <div className='col-span-3 md:col-span-1 border-2 border-gray-200 py-3 px-4 rounded min-h-[100px] space-y-2'>
                <h2 className='text-lg font-bold text-gray-800'>{title}</h2>
                <p className='text-gray-500 text-sm'><span className='uppercase'>{brand}</span> - {model}</p>
                <p className='text-gray-500 text-sm'>{color}</p>
                <p className='text-gray-500 text-sm'>{category}</p>
            </div>
            <div className='border-2 border-gray-200 col-span-3 md:col-span-2 rounded min-h-[100px] py-3 px-4'>
                <div className=''>
                    <h1 className='font-bold text-2xl text-gray-800'>Details</h1>
                    <div className='flex justify-start items-center space-x-[90px] border-b-[1px] border-b-gray-300 py-6'>
                        <div className='space-y-3'>
                            <p className='text-gray-600 text-sm font-[500]'>
                                Brand
                            </p>
                            <p className='text-gray-600 text-sm font-[500]'>
                                Model
                            </p>
                            <p className='text-gray-600 text-sm font-[500]'>
                                Category
                            </p>
                            <p className='text-gray-600 text-sm font-[500]'>
                                Color
                            </p>
                        </div>
                        <div className='space-y-3'>
                            <p className='text-gray-600 text-sm font-[500]'>
                                {brand}
                            </p>
                            <p className='text-gray-600 text-sm font-[500]'>
                                {model}
                            </p>
                            <p className='text-gray-600 text-sm font-[500]'>
                                {category}
                            </p>
                            <p className='text-gray-600 text-sm font-[500]'>
                                {color}
                            </p>
                        </div>
                    </div>
                    <div className='py-4 space-y-4'>
                        <h1 className='font-bold text-2xl text-gray-800'>Description</h1>
                        <p className='text-sm text-gray-600'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDetails
