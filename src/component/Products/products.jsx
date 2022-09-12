import React from 'react'
import './products.css'
const Products = ({product}) => {
  return (
    <div className='imgs'>
      {
        product.map((elem, index) =>{
            return(
            <div >
            <img className='' src={elem.images[1]} alt="" />
             {elem.title}
            </div>
            )
        })
      }
    </div>
  )
}

export default Products;
