import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from 'react-router-dom';


export default function HeartSelect( {singleHearts} ) {
    const {product_url, product_title, description, price} = singleHearts;
  return (
    <>
        <div className="love-bookmark bg-gray-200 gap-5 container mx-auto rounded-lg p-6 justify-between flex items-center my-5">
            <div className='flex items-center justify-between w-full'>
              <div className=' flex gap-8'>
                <div className=' w-32 h-[100px]'><img className=' rounded-md w-full h-full object-cover' src={product_url} alt="" /></div>
                <div>
                  <h3 className=' text-xl font-bold'>{product_title}</h3>
                  <p className=' tex-lg font-semibold mt-2'>{description}</p>
                  <p className=' tex-lg font-semibold'>Price: {price}</p>
                  <div className=' py-5'><Link to='/' className='border-2 py-2 px-6 rounded-full text-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500'>purchase</Link></div>
                </div>
              </div>
              <div className='flex justify-end gap-2'>
                <button className='bg-red-500 text-2xl text-white font-bold p-3 rounded-full'><RiDeleteBin5Line /></button>
              </div>
            </div>
        </div>
    </>
  )
}
