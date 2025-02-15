import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { useParams } from "react-router"
import { useNavigate } from "react-router";

const SingleProduct = () => {
    const{ id}=useParams()
    const [group,setGroup]=useState({})
    const navigate=useNavigate()
    const fetchProduct=async()=>{
        const response=await axios.get("https://67af5ebedffcd88a67867978.mockapi.io/products/"+ id)
        const result=await response.data
        if(response.status===200){
          setGroup(result)
        }
    }
    
        
       async function handleDelete(id){
            const response=await axios.delete("https://67af5ebedffcd88a67867978.mockapi.io/products/"+ id)
            if(response.status===200){
                navigate('/')
            } 
            else{
                console.log("error in delete")
            }
        }
        useEffect(()=>{
            fetchProduct()
                },[])
                console.log(group)
  return (
    <div className="">
<div className="bg-gray-100 dark:bg-gray-800 py-[70px] ">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src={group.productImage} alt="Product Image"/>
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                    <Link to={`/edit/${group.id}`}>
                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">Edit</button>

                    </Link>
                    </div>
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-200 dark:bg-red-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-red-600 cursor-pointer" onClick={()=>handleDelete(group.id)}>Delete</button>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {group.productName}
                </p>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span className="text-gray-600 dark:text-gray-300">${group.productPrice}</span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                        <span className="text-gray-600 dark:text-gray-300">{group.productBrand}</span>
                    </div>
                </div>
                <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Date:</span>
                    <div className="flex items-center mt-2 text-white">
                       {group.createdAt}
                    </div>
                </div>
                <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Product category:</span>
                    <div className="flex items-center mt-2 text-white">
                        {group.productCategory}
                    </div>
                </div>
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {group.productDescription}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default SingleProduct