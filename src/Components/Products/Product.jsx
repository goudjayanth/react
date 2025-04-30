import React from 'react'

const Product = (props) => {
   
const data=props
console.log(data)

  return (
    <div id="container">
        {data.children.map((val)=>{
            return(
                <div></div>
            )
        })}
    </div>
  )
}


export default Product
