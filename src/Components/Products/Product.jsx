import React from 'react'


const Product = (props) => {
   
const data=props
console.log(data)

  return (
    <div id="container">
        {data.children.map((val)=>{
            return(
                <div>
                    <h1>{val.name}</h1>
                    <h1>{val.id}</h1>
                    <h1>{val.cost}</h1>
                </div>
            )
        })}
    </div>
  )
}


export default Product
