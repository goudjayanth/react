import React from 'react'
import Product from './Product'

const Products = () => {
    const Products=[{id:"hello",name:"laptop" ,cost:"55000"},{id:"world",name:"mobile",cost:"15000"}]
  return (
    <div>
     <Product>{Products }</Product>
    </div>
  )
}

export default Products
