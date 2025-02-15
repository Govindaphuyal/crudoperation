import React from 'react'
import { Link } from 'react-router'
const ProductCard = (props) => {
  return (
    
<Link to={`/product/${props.product.id}`}>

    <div className='mt-[15px] '>
    
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={props.product.productImage} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{props.product.productName}</div>
    <p className="text-gray-700 text-base">
        {props.product.productDescription}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.product.productBrand}</span>
    
  </div>
</div>

    </div>


</Link>

    
  )
}

export default ProductCard