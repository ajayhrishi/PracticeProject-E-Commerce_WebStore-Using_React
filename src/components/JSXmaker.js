import React, { useContext, useState, useEffect } from 'react'
import productsListAndFunctions from '../context/ProductContext'

import '../styles/index.css'

export default function JSXmaker(data,) {
  const {AddToCart,getCount} = useContext(productsListAndFunctions);
  const [count,setcount]=useState();

  useEffect(updatecount,[updatecount])

  function countDisplay(){
    if(count>0){return `(${count})`}
  }

  function updatecount(){
    setcount(getCount(data.id)); //state inside the context won't get updated immediately so to diplay the correct number added
  }

  return (
    <div className='ProductBox' key={Math.floor(Math.random()*99999)}>
      <img src={data.img} alt='' className='Images'/>
      <div className='ProductTitle'>
        {data.name}
      </div>
      <div className='ProductPrice'>
        ${data.price}
      </div>
      <div>
      <button className='MainPageButton' onClick={()=>{AddToCart(data.id);updatecount();}}>Add To Cart {countDisplay()} </button>
      
      </div>
    </div>
  )
}


