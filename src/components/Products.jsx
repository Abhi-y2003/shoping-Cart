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
    <div>
        <div>
            <p>{post.title}</p>
        </div>
        <div>
            <p>{post.description}</p>
        </div>
        <div>
            <img src={post.image}/>
        </div>
        <div>
            <p>{post.price}</p>
        </div>


            {
                cart.some((p) => p.id === post.id) ? 
                <button onClick={() =>removeHandler()}>
                    Remove from Cart
                </button> : 
                <button onClick={() =>addHandler()}>
                    Add to Cart
                </button>
            }
       
    </div>
  )
}

export default Products
