import React from 'react'
import { FcDeleteDatabase } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/slice/CartSlice'
import toast from 'react-hot-toast'


const CartItem = ({post, postIndex}) => {

    const {cart} = useSelector((state) => state)
    const dispatch = useDispatch()

    const removeHandler =() =>{
      dispatch(remove(post.id));
      toast.success("Item removed from cart")
    }
  return (
    <div className='w-[90%]'>

        <div className='flex gap-5 border-gray-700 border-b-2 my-2 py-4 '>

            <div className='h-[200px] w-[200px]'> 
                <img src={post.image} className='h-full w-full object-contain '/>
            </div>


            <div>
                <h1 className='mt-5 text-lg font-semibold'>{post.title}</h1>
                <p>
                    {post.description.split(" ").slice(0,15).join(" ") + '...'}
                </p>

                <div>
                    <p>{post.price}</p>
                    <div>
                        <button onClick={()=>removeHandler()}>
                        <FcDeleteDatabase/>
                        </button>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default CartItem