import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {
    const {currency}=useContext(ShopContext);

  return (
  <Link className='  bg-white text-black cursor-pointer hover:scale-90 transition ease-in-out ' to={`/product/${id}`}>
    <div className='overflow-hidden mt-20 flex justify-center'>
      <div className='grid grid-rows-1'>
      <img className='h-80 ' src={image[0]} alt=''/>
      <button class="mt-2 mb-10 pl-2 pr-2 pt-2 pb-1 font-com text-sm capitalize text-black   font  ">Shop now</button>
      </div>

    </div>
   
  </Link>
  

  )


}

export default ProductItem
