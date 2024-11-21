import React, { useEffect, useState } from 'react'
import SingleProducts from './SingleProducts'

export default function Home() {
    const [myData, setMyData] = useState([])

    useEffect(() =>{
        fetch('AllProductsData.json')
       .then(res => res.json())
       .then(data => setMyData(data))
    }, [])


  return (
    <>
      <div className=' grid grid-cols-4 container mx-auto gap-5 my-10'>
        <div>
            <div className=' bg-gray-100 flex flex-col gap-5 py-10 rounded-lg'>
                <span className=' w-44 py-3 px-5 rounded-full cursor-pointer bg-gray-200 hover:bg-green-500 hover:text-white mx-auto font-bold text-gray-500'>All Product</span>
                <span className=' w-44 py-3 px-5 rounded-full cursor-pointer bg-gray-200 hover:bg-green-500 hover:text-white mx-auto font-bold text-gray-500'>Laptops</span>
                <span className=' w-44 py-3 px-5 rounded-full cursor-pointer bg-gray-200 hover:bg-green-500 hover:text-white mx-auto font-bold text-gray-500'>Phones</span>
                <span className=' w-44 py-3 px-5 rounded-full cursor-pointer bg-gray-200 hover:bg-green-500 hover:text-white mx-auto font-bold text-gray-500'>Accessories</span>
                <span className=' w-44 py-3 px-5 rounded-full cursor-pointer bg-gray-200 hover:bg-green-500 hover:text-white mx-auto font-bold text-gray-500'>Smart Watches</span>
                <span className=' w-44 py-3 px-5 rounded-full cursor-pointer bg-gray-200 hover:bg-green-500 hover:text-white mx-auto font-bold text-gray-500'>MacBook</span>
                <span className=' w-44 py-3 px-5 rounded-full cursor-pointer bg-gray-200 hover:bg-green-500 hover:text-white mx-auto font-bold text-gray-500'>Iphone</span>
            </div>
        </div>

        {/* side nav end here */}

         <div className=' col-span-3 grid grid-cols-3 gap-5'>
            {myData.map(product => <SingleProducts key={product.product_id} product = {product} ></SingleProducts>)}
        </div> 
      </div>
    </>
  )
}
