import React, { useContext, useState } from 'react'
import productsListAndFunctions from '../context/ProductContext'

import '../styles/index.css'

export default function JSXmaker(data,) {


  return (
    <div className='ProductBox' key={Math.floor(Math.random()*99999)}>
      <img src={data.img} alt='' className='Images'/>
      <div className='ProductTitle'>
        {data.name}
      </div>
      <div>
      </div>
    </div>
  )
}


