
import { useContext,useState } from "react";
import productsListAndFunctions from "../context/ProductContext";

import JSXmakerCart from "../components/cartJSX";

const Cart = () => {

  const {cartItems}=useContext(productsListAndFunctions);
    console.log(cartItems.length);
    
    return (
    <div>
       <JSXmakerCart/>
    </div>
  )
}

export default Cart;


