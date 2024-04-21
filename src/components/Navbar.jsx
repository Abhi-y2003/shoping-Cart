import React from 'react'
import { IoCart } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import image from '../images/31530356_bird_2.jpeg' 
import { useSelector } from 'react-redux';

const Navbar = () => {
    const {cart} = useSelector((state) => state)
  return (
    <div>
        <nav className='flex justify-between item-center h-20 max-w-6xl  mx-auto text-white'>

            <NavLink to="/">
                <div>
            <img className='max-w-20 ml-5'
            src={image}/>
            </div>
            </NavLink>
            <div className='flex items-center gap-x-5 text-2xl font-medium'>

                <NavLink to="/">
                <p>Home</p>
                </NavLink>

                <NavLink to="/cart">
                    <div className='relative'>
                    <IoCart />
                    <span className='absolute -top-2 -right-2 bg-green-600 rounded-full text-xs w-5 h-5 flex item-center 
                    justify-center animate-bounce'>
                        {cart.length}
                    </span>
                    </div>
                </NavLink>
                
                
            </div>

        </nav>
    </div>
  )
}

export default Navbar