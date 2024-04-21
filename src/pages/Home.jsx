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
            loading ? <div className='flex items-center justify-center h-[100vh] text-2xl'>
                <Spinner/> 
            </div> 
            : post.length > 0 ? 
            (<div className='grid sm:grid-col-2 md:grid-col-3 lg:grid-cols-4 max-w-6xl mx-auto p-2 space-y-10 space-x-5
            min-h-80vh'>
                {
                    post.map( (post) => (
                        <Products key={post.id} post={post}/>
                    ))
                }
            </div>) : 
            (<p className='flex items-center justify-center text-3xl'>
                No data found
            </p>)
        }

    </div>
  )
}

export default Home