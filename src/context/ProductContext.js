

import { createContext, useState} from "react";

import data from "../components/Data";

const productsListAndFunctions = createContext({});


let ProductList = data();

function ProductContext({children}) {

    const [cartItems, setCartItems] = useState([]); //For Kepping track of the items in Cart
    const valueExports = {ProductList, cartItems, setCartItems,AddToCart,ReduceFromCart,getCount};
    let added = false;


    function AddToCart(id){
      (cartItems.length>0)?checkCartThenAdd():CheckAndAdd();

      function checkCartThenAdd(){
              cartItems.forEach((product)=>{ //To make sure if the product is already in the cart or not, then to add the count by one.
              if(id===product.id){ IncreaseCount(product); added=true;}});

              if(!added)CheckAndAdd(); //if the product is not inside the cart, this call will trigger the CheckAndAdd() then added it to the cart as new product.
            }

      function CheckAndAdd(){
            ProductList.forEach((product)=>{   //To find the product from the list and add as a brand new product to the cart with the count 1
            if(id===product.id){AddNewToCart(product);}
            });}
      }

      function ReduceFromCart(id){
        cartItems.forEach((product)=>{if(id===product.id){ DecreaseCount(product);}});
      }
    
        
  
    /*--------------- Cart Operations ------------------------------ */
    function AddNewToCart(product){
      const newCart = [...cartItems,{img:product.img,name:product.name,id:product.id,count:1}];
              setCartItems(newCart);
    }

    function IncreaseCount(product){
      const newCart = [...cartItems,{img:product.img,name:product.name,id:product.id,count:product.count+1}];
      setCartItems(newCart);
    }

    function DecreaseCount(product){
      if(product.count>1){
      const newCart = [...cartItems,{img:product.img,name:product.name,id:product.id,count:product.count-1}];
      setCartItems(newCart);}else
      {
        DeleteFromCart(product);
      }
    }

    function DeleteFromCart(product){
      const newCart = cartItems.filter((element)=>{if(element.id!==product.id)return element;});
      setCartItems(newCart);

    }

    function getCount(id){
      let countnow =0;
      cartItems.forEach((product)=>{if(id===product.id){countnow=product.count }});
      return countnow;
    }
  /* --------------------------------------------------------------------- */

  return (
        <productsListAndFunctions.Provider value={valueExports}>{children}</productsListAndFunctions.Provider>
  )
}

export default productsListAndFunctions;
export {ProductContext};