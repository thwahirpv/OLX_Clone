import React, { useEffect } from 'react'
import CategoryBar from '../components/CategoryBar'
import ProductCardSpace from '../components/ProductCardSpace'
import request from '../Request'



const Home = () => {

  return (
    <>
        <div className=''>
            <ProductCardSpace fetchURL={request.products}/>
        </div>
    </>
  )
}

export default Home
