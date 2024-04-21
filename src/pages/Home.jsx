import React, { useEffect, useState } from 'react'
import Products from '../components/Products'
import Spinner from '../components/Spinner'



const Home = () => {

    const API_URL ="https://fakestoreapi.com/products"

    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState([])

    async function fetchProductData () {
        setLoading(true)

        try {

            const res = await fetch(API_URL)
            const data = await res.json()

            setPost(data);
            
        } catch (error) {
            console.error(error);
            setPost([])
        }
        setLoading(false)
    }

    useEffect( () =>{
        fetchProductData();
    },[])
  return (
    <div>
        {
            loading ? <Spinner/> 
            : post.length > 0 ? 
            (<div>
                {
                    post.map( (post) => (
                        <Products key={post.id} post={post}/>
                    ))
                }
            </div>) : 
            (<p> No data found</p>)
        }

    </div>
  )
}

export default Home