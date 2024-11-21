import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStoreHeat, getStoreCart, removeFromCart} from '../Utilis/Utilis';
import HeartSelect from './HeartSelect';
import CartSelect from './CartSelect';
import { MyContext } from '../../App';
import { MyHeartContext } from '../../App';
// import { Group } from '../../assets/images/group.png';
export default function SelectedData() {

    const [count, setCount] = useContext(MyContext);
    const [totalHeart, setTotalHeart] = useContext(MyHeartContext);

    const [bookHeart, setBookHeart] = useState([]);
    const [bookCart, setBookCart] = useState([]);
    const [acctive, setAcctive] = useState(false);
    

    const AllData = useLoaderData()
     
    useEffect(()=>{
        const StoredHearts = getStoreHeat();
        const stroedRedListInt = StoredHearts.map(id => parseInt(id));
        const totalHearts = AllData.filter(Heart => stroedRedListInt.includes(Heart.product_id))
        setBookHeart(totalHearts);
        setTotalHeart(totalHearts.length);

    }, [])

      /// StoreCart section start here now
      /// StoreCart section start here now

    useEffect(()=>{
        const StoredCarts = getStoreCart();
        const stroedRedCarts = StoredCarts.map(title => title);
        const totalcarts = AllData.filter(Cart => stroedRedCarts.includes(Cart.product_title))
        setBookCart(totalcarts);
        setCount(totalcarts.length);
        
    }, [])


    /// showing the cart section start here now
    /// showing the cart section start here now

    const haldleCart = () => {
        setAcctive(true);
    }
    const haldleHeart = () => {
        setAcctive(false);
    }

    //// sort by price button functionality start here now
    //// sort by price button functionality start here now


   const sortByPrice = ()=>{
    const sortedCarts = [...bookCart].sort((a, b) => b.price - a.price);
    setBookCart(sortedCarts);
    
   }
    //// purchase button functionality start here now
    //// purchase button functionality start here now


   const purchase = ()=>{
    my_modal_5.showModal()
    setCount(0)
   }

  //  delete data from localStorage
  //  delete data from localStorage

  const deleteCarted = (productId) => {
    removeFromCart(productId)
    const favirites = getStoreHeat();
    setBookCart(favirites);
  }



  return (
    <>


{/* purchase functionality is start here now */}

{/* Open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box text-center">
    {/* <div><img src={Group} alt="" /></div> */}
    <h3 className="font-bold text-2xl border-b-2 pb-2">Payment Successfully</h3>
    <p className="py-3 text-xl font-semibold text-gray-500">Thanks for purchasing.</p>
    <p className="font-semibold text-gray-500">Total cost: $2449.96</p>
    <div className="modal-action">
      <div className=' w-full'>
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="w-full bg-gray-200 hover:bg-slate-300 py-2 font-bold text-black rounded-full">Close</button>
        </form>
      </div>
    </div>
  </div>
</dialog>

{/* purchase functionality is start here now */}



      <div className=''>
        <div className=' text-center bg-[#9538E2] py-10 mb-10'>
          <h2 className=' text-white text-2xl font-bold'>Dashboard</h2>
          <p className=' text-gray-100 text-lg my-5'>Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
            <button onClick={()=> haldleHeart()} className={`border-2 py-2 px-10 rounded-full text-white text-xl font-semibold mr-5 ${acctive? '': 'bg-white text-blue-700'} `}>Cart</button>
            <button onClick={()=> haldleCart()} className={`border-2 py-2 px-10 rounded-full text-white text-xl font-semibold ${acctive? 'bg-white text-blue-700': ''} `}>WishList</button>
        </div>
        {
           acctive? (
            
                <div className=' container mx-auto'>
                    <h2 className='text-xl font-bold'>WishList</h2>
                    {
                    bookCart.length? bookHeart.map(singleHearts => <HeartSelect key={singleHearts.product_id} singleHearts={singleHearts}></HeartSelect>): <div className=' text-3xl font-bold text-center my-5 bg-gray-200 container mx-auto rounded-lg py-10'>No Data Here 02</div>
                    }
                </div>
            ):
                    (
                        <div>
                        <div className=' container mx-auto flex justify-between items-center'>
                            <div>
                                <h2 className='text-xl font-bold'>Cart</h2>
                            </div>
                            <div className=' flex items-center gap-5'>Ekhane total cost bosbe
                                {/* <div><h2 className='text-xl font-bold'>
                                Total Cost: ${bookCart.map(acc => parseInt(acc.price + acc.price)   //// total cost ki vabe dekhabo
                                )}
                                </h2></div> */}
                                <div><button onClick={sortByPrice} className='border-2 py-2 px-6 rounded-full text-xl text-white font-semibold bg-gradient-to-r from-sky-500 to-indigo-500'>Sort by Price</button></div>
                                <div><button onClick={purchase} className='border-2 py-2 px-6 rounded-full text-xl font-semibold text-white bg-gradient-to-r from-violet-500 to-fuchsia-500'>purchase</button></div>
                            </div>
                        </div>
                         {bookCart.length? bookCart.map(singleCarts => <CartSelect  key={singleCarts.product_id} deleteCarted={deleteCarted} singleCarts={singleCarts}></CartSelect>): <div className=' text-3xl font-bold text-center my-5 bg-gray-200 container mx-auto rounded-lg py-10'>No Data Here 01</div>}
                       </div>
             )
        }
      </div>
    </>
  )
}
