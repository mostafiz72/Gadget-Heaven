import React, { createContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BsCartPlus } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";

export const MyContext = createContext(0)
export const MyHeartContext = createContext(0)

export default function App() {
  const [count, setCount] = useState(0)
  const [totalHeart, setTotalHeart] = useState(0)
  return (
    <>
       <nav className="sticky top-0 z-20">
          <div className=" container flex flex-wrap items-center justify-between mx-auto py-4 bg-[#9538E2] px-5 rounded-tl-3xl  rounded-tr-3xl">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Gadget Heaven</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className=' flex justify-center items-center gap-5 p-5'>
              <div className=' bg-white p-3 rounded-full cursor-pointer relative'>
                <span className=' text-xl text-gray-800 font-bold'><BsCartPlus /></span>
                <span className=' absolute -top-4 -right-3 bg-gray-800 text-white py-1 px-3 rounded-full'>{count}</span>
              </div>
              <div className=' bg-white p-3 rounded-full cursor-pointer relative'>
                <span className=' text-xl text-gray-800 font-bold'><FaRegHeart /></span>
                <span className=' absolute -top-4 -right-3 bg-gray-800 text-white py-1 px-3 rounded-full'>{totalHeart}</span>
              </div>
            </div>
              <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row">
              <li>
                <Link to="/" className="block py-2 px-3 md:p-0 text-white rounded md:bg-transparent focus:text-blue-500" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="Statistics" className="block py-2 px-3 md:p-0 text-white rounded md:bg-transparent focus:text-blue-500" aria-current="page">Statistics</Link>
              </li>
              <li>
                <Link to="dashboard" className="block py-2 px-3 md:p-0 text-white rounded md:bg-transparent focus:text-blue-500" aria-current="page">Dashboard</Link>
              </li>
              
            </ul>
          </div>
          </div>
        </nav>
          <MyContext.Provider value={[count, setCount]}>
          <MyHeartContext.Provider value={[totalHeart, setTotalHeart]}>
            <Outlet />
          </MyHeartContext.Provider>
          </MyContext.Provider>
        <footer className="footer px-10 py-48 bg-gray-800 text-white">
        <div className='  container mx-auto flex justify-between'>
          <nav>
            <h6 className="footer-title text-white text-2xl mb-10">Services</h6>
            <p className=' leading-7'>Product Support
            Order Tracking <br />
            Shipping & Delivery
            Returns</p>
          </nav>
          <nav className=' flex flex-col gap-5'>
            <h6 className="footer-title text-white text-2xl mb-10">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav className=' flex flex-col gap-5'>
            <h6 className="footer-title text-white text-2xl mb-10">Legal</h6>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
