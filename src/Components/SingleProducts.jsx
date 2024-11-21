import React from 'react'
import { Link } from 'react-router-dom';

export default function Products({ product }) {
    const { product_id,product_url,product_title, price} = product;
    
  return (
    <div>
        <div className="w-full rounded-lg bg-gray-200">
            <div className=' h-[300px]'>
                    <img className=" p-8 h-full w-full object-cover" src={product_url} alt="product image" />
            </div>
            <div className="px-5 pb-5">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900">{product_title}</h5>
                
                <div className="flex items-center justify-between py-5">
                    <span className="text-xl font-bold text-gray-500">Price: {price}</span>
                    <Link to={`/details/${product_id}`}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> View Details</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
