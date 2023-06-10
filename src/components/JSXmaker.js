import React, { useContext, useState } from 'react'
import productsListAndFunctions from '../context/ProductContext'

import '../styles/index.css'

export default function JSXmaker(data,) {
  const {AddToCart,getCount} = useContext(productsListAndFunctions);
  const [count,setcount]=useState();

  function countDisplay(){
    if(count>0){return `(${count})`}
  }
  function updatecount(){
    setcount(getCount(data.id)+1); //state inside the context won't get updated immediately so to diplay the correct number added
  }


  return (
    <div className='ProductBox' key={Math.floor(Math.random()*99999)}>
      <img src={data.img} alt='' className='Images'/>
      <div className='ProductTitle'>
        {data.name}
      </div>
      <div>
      <button className='Button' onClick={()=>{AddToCart(data.id);updatecount();}}>Add To Cart {countDisplay()} </button>
      </div>
    </div>
  )
}


