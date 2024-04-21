import React from 'react'
import { FcDeleteDatabase } from 'react-icons/fc'

const CartItem = ({post, postIndex}) => {
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
                        <FcDeleteDatabase/>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default CartItem