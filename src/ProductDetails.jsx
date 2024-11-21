import { useLoaderData, useParams } from 'react-router-dom'
import { FaRegStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { addToStoredReadList, addToStoredCartList, getStoreHeat} from './Components/Utilis/Utilis';
// import { useContext } from 'react';
// import { MyContext } from '../../App';



export default function ProductDetails() {

  // const [count, setCount] = useContext(MyContext);

  const { product_id} = useParams();
  const id = parseInt(product_id);
  
  const data = useLoaderData();
  
  const singleProduct = data.find(product => product.product_id === id);
   
   const {product_url, product_title, price, rating, availability, description, specification} = singleProduct;


   // handle Heart section functionality start here now
   // handle Heart section functionality start here now

   const handleHeart = (product_id) =>{
    addToStoredReadList(product_id)
    console.log(getStoreHeat().length);
    
    
    // setCount(addToStoredCartList().length)
    
   }
   // handle Heart section functionality start here now
   // handle Heart section functionality start here now

   const handleCart = (product_title) =>{
    addToStoredCartList(product_title)
   }


  return (
      <>
        <div className=' bg-gray-100 container mx-auto grid grid-cols-2 rounded-3xl my-10 p-8 gap-10'>
          <div><img className=' rounded-3xl w-full h-full object-cover' src={product_url} alt="" /></div>
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900">{product_title}</h1>
            <h2 className="text-2xl my-5 font-bold text-gray-700">Price: {price}</h2>
            <h2 className=' bg-green-100 text-green-400 rounded-full py-2 px-4 w-32 text-center font-bold'>{availability}</h2>
            <p className="text-xl my-5 font-bold text-gray-800">{description}</p>
            <h2 className=' text-2xl mb-2 font-bold text-gray-800'>Specification: </h2>
            {specification.map((singleSpecification, index) => <div key={index}>
              <p className=' text-md font-bold text-gray-800 my-2'>{index+1}. {singleSpecification}</p>
            </div>
            )}
            <h2 className='font-semibold text-2xl mt-2 text-gray-800 flex items-center gap-2'>Rating: <span className=' text-yellow-300'><FaRegStar /></span></h2>
            <div className=' flex items-center gap-3 my-3'>
                <span>
                   <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </span>
                <span className=' bg-slate-200 p-2 rounded-full text-gray-700 font-bold'>{rating}</span>
              </div>
              <div className=' flex items-center gap-5'>
                <button onClick={()=> handleCart(product_title)} className=" flex items-center gap-2 text-white bg-[#9538E2] hover:bg-[#7d2ebd] focus:ring-4 focus:outline-none focus:ring-[#642399] font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to Cart <FaCartPlus /></button>
                <button onClick={()=> handleHeart(product_id)} className=' text-lg p-3 border rounded-full text-[#9538E2] border-gray-400 hover:border-[#9538E2] hover:text-[#9538E2] focus:ring-1 focus:border-[#8932cf] focus:ring-[#8932cf]'><FaRegHeart /></button>
              </div>
          </div>
        </div>


      </>
  )
}
