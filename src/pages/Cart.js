
import { useContext,useState } from "react";
import productsListAndFunctions from "../context/ProductContext";
import JSXmaker from "../components/JSXmaker";

const Cart = () => {
  const {cartItems}=useContext(productsListAndFunctions)

  
  
    return (
    <div>
       {cartItems.map((items)=>{return JSXmaker;})}
    </div>
  )
}

export default Cart;


