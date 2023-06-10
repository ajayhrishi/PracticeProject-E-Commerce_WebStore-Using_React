import React, { useContext} from 'react'
import productsListAndFunctions from '../context/ProductContext'
import { Link } from 'react-router-dom';

import '../styles/index.css'

export default function JSXmakerCart() {

  const {cartItems,AddToCart,ReduceFromCart,getCount}=useContext(productsListAndFunctions);

  function makeAsJSX(el){
    return <div className='ProductInCart' key={Math.floor(Math.random()*99999)}>
    <img src={el.img} alt='' className='CartImages'/>
    <div className='CartItemValue'>
        <div className='CartItemTitle'>{el.name}</div>
        <div className='CartButtonBox'>
            <button className='Button' onClick={()=>{ReduceFromCart(el.id);}}> - </button>
            <div className='CountDisplayInCart'>{getCount(el.id)} </div>
            <button className='Button' onClick={()=>{AddToCart(el.id);}}> + </button>
        </div>
    </div>
  </div>
  
  }
  

  return <div>
    <div>{}</div>
    <Link to="/" id="">Continue Shopping</Link>
    <div className='CartList'>{cartItems.map((el)=>{return makeAsJSX(el)})}</div>
    
    </div>
 
}


