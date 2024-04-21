import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    

    const {cart} = useSelector( (state) => state)

    const [totalAmount, setTotalAmount] = useState(0)

    useEffect( () =>{
        setTotalAmount( cart.reduce(  (acc, curr) => acc + curr.price , 0))
    },[cart])
  return (
    <div>
        {
            cart.length > 0 ?
            (<div className='flex max-w-6xl mx-auto p-2 space-y-10 space-x-5
            min-h-80vh'>
                <div>
                    {
                        cart.map ( (post, index) => {
                            return <CartItem key={post.id} post={post} postIndex={index}/>
                        } )
                    }
                </div>

                <div className='flex flex-col gap-96 text-lg font-semibold'> 
                <div>
                  <div> Your Cart</div>
                  <div> Summary</div>

                  <p>
                    <span>Total items :  {cart.length}</span>
                  </p>
                  <button className='mt-10 border  rounded-full px-3 py-1 bg-green-600 text-white'>
                    Checkout
                  </button>
                </div>


                <div className='flex items-center justify-center'>
                    <div>Total Amount: </div> 
                    <div className='text-green-600 text-2xl'>${totalAmount} </div>
                </div>
                </div>

            </div>) :
            (<div className='flex flex-col items-center justify-center text-3xl h-[100vh] gap-5 font-semibold'> 
                <h1>
                   Cart is Empty
                </h1>
                <Link to="/">
                    <button>
                        Shop now
                    </button>
                </Link>
            </div>) 
        }
    </div>
  )
}

export default Cart