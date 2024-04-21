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
    <div>

        <div>

            <div>
                <img src={post.image}/>
            </div>


            <div>
                <h1>{post.title}</h1>
                <p>
                    {post.description}
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