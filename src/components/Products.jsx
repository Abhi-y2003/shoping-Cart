import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slice/CartSlice'
import toast from 'react-hot-toast'

const Products = ({post}) => {

    const {cart} = useSelector((state) => state)
    const dispatch = useDispatch()

    const removeHandler =() =>{
      dispatch(remove(post.id));
      toast.success("Item removed from cart")
    }

    const addHandler =() =>{
      dispatch(add(post))
      toast.success("Item added to cart")
    }
  return (
    <div className='flex flex-col items-center justify-between hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]
    hover:scale-110 transition-all duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] group'>
        <div >
            <p className='text-lg font-semibold truncate w-40 mt-1 '>{post.title.split(" ").slice(0,2).join(" ") + '...'}</p>
        </div>
        <div>
            <p className='w-40 font-normal text-gray-600 text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        </div>
        <div className='h-[180px]'>
            <img src={post.image} className='h-full w-full'/>
        </div>

        <div className='flex  mt-5 mb-4 items-center w-full justify-between' >
        <div>
            <p className='text-green-600 font-semibold'>${post.price}</p>
        </div>


            {
                cart.some((p) => p.id === post.id) ? 
                <button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold
                text-[12px] px-2 p-1 uppercase group-hover:bg-gray-600 group-hover:text-white transition-all duration-300 ease-in'
                onClick={() =>removeHandler()}>
                    Remove from Cart
                </button> : 
                <button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold
                text-[12px] px-2 p-1 uppercase group-hover:bg-gray-600 group-hover:text-white transition-all duration-300 ease-in'
                onClick={() =>addHandler()}>
                    Add to Cart
                </button>
            }
        </div>
       
    </div>
  )
}

export default Products
