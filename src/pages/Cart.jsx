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
            (<div>
                <div>
                    {
                        cart.map ( (post, index) => {
                            return <CartItem key={post.id} post={post} postIndex={index}/>
                        } )
                    }
                </div>


                <div>
                  <div> Your Cart</div>
                  <div> Summary</div>

                  <p>
                    <span>Total items : {cart.length}</span>
                  </p>
                  <button>
                    Checkout
                  </button>
                </div>


                <div>
                    <p>Total Amount: {totalAmount} </p>
                </div>

            </div>) :
            (<div> 
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