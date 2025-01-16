import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

const ProductCardSpace = ({fetchURL}) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setProducts(response.data.products)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

  return (
    <>
        <div className='w-full px-[60px] sm:px-[50px] md:px-[70px] py-[40px]'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-4 md:gap-3'>
                {
                    products.map((item, id) => (
                        <Link key={item?.id}  to={`/details/${item?.id}`} state={{item: item}}>
                            <ProductCard item={item}/>
                        </Link>
                        
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default ProductCardSpace
