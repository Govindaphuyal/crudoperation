import React, { useEffect, useState } from 'react'
import Form from '../../components/Form'
import { useParams } from "react-router"
import axios from 'axios'

const editProduct = () => {
    const [product,setProduct]=useState({})
    const {id}=useParams()
    const fetchProduct=async()=>{
        const response=await axios.get("https://67af5ebedffcd88a67867978.mockapi.io/products/"+id)
        if(response.status==200){
          setProduct(await response.data)
        }
    }
    
    useEffect(()=>{
    fetchProduct()
        },[])
  return (
    <div>
        <Form type='edit' shop={product}/>
    </div>
  )
}

export default editProduct