import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import axios from 'axios'

const Home = () => {
    const[products,setProduct]=useState([])
const fetchProduct=async()=>{
    const response=await axios.get("https://67af5ebedffcd88a67867978.mockapi.io/products/")
    const result=await response.data
    if(response.status===200){
      setProduct(result)
    }
}

    useEffect(()=>{
fetchProduct()
    },[])
  return (
    <>
 <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div
        className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
        <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Product to enrich your</span>
                <span className="block text-indigo-600 xl:inline">online business</span>
            </h1>
            <p
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                    
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                    
                </div>
            </div>
        </div>

        <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""/>
        </div>
    </div>

</section>
<div className='flex gap-[100px] flex-wrap m-[80px]'>
    {
        products.map((product,index)=>{
             return(
              <ProductCard key={index} product={product}/>
            )
        })
    }

</div>

    </>
  )
}

export default Home