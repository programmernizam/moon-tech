import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

const Navbar = () => {
  const { state: { cart, whitelist } } = useProducts()
  return (
    <nav className='h-14 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5'>
      <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900'>
        <h1 className='flex-1 font-extrabold'>Moon Tech</h1>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/top-rated'>Top Rated</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li title='Wishlist' className='bg-indigo-500 p-2 rounded-full'>
          <Link to='/list'>
            <span className="relative inline-block">
              <IoIosListBox className='text-white' />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center text-xs font-bold leading-none text-red-500 transform translate-x-1/2 -translate-y-1/2 rounded-full">{whitelist.length}</span>
            </span>
          </Link>
        </li>
        <li title='cart' className='bg-indigo-500 p-2 rounded-full'>
          <Link to='/cart'>
            <span className="relative inline-block">
              <BsFillCartFill className='text-white' />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center text-xs font-bold leading-none text-red-500 transform translate-x-1/2 -translate-y-1/2 rounded-full">{cart.length}</span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
