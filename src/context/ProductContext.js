

import { createContext, useState} from "react";

import data from "../components/Data";

const productsListAndFunctions = createContext({});


let ProductList = data();

function ProductContext({children}) {

    const [cartItems, setCartItems] = useState([]); //For Kepping track of the items in Cart
    const valueExports = {ProductList, cartItems,AddToCart, checkCartThenAdd,ReduceFromCart,getCount,getTotal,IncreaseCartCount};
    let added = false;


    function AddToCart(id){(cartItems.length>0)?checkCartThenAdd(id):CheckListAndAdd(id);}

    /*--------------- Cart Operations ------------------------------ */

    function checkCartThenAdd(id){
      cartItems.forEach((product)=>{ //To make sure if the product is already in the cart or not, then to add the count by one.
      if(id===product.id){ IncreaseCount(product); added=true;}});

      if(!added)CheckListAndAdd(id); //if the product is not inside the cart, this call will trigger the CheckAndAdd() then added it to the cart as new product.
    }

    function CheckListAndAdd(id){
      ProductList.forEach((product)=>{   //To find the product from the list of products available and add as a new product to the cart with the count 1
      if(id===product.id){AddNewToCart(product);}
      });}


    function AddNewToCart(product){
      const newCart = [...cartItems,{...product,count:1}];
              setCartItems(newCart);
    }

    function ReduceFromCart(id){ cartItems.forEach((product)=>{if(id===product.id){ DecreaseCount(product);}});}
    function IncreaseCartCount(id){ cartItems.forEach((product)=>{if(id===product.id){ IncreaseCount(product);}});}
    
    function DecreaseCount(product){
      if(product.count>1){
        const updatedCart = cartItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        });
      setCartItems(updatedCart);}else
      {
        DeleteFromCart(product.id);
      }
    }

    function IncreaseCount(product){
        const updatedCart = cartItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
      setCartItems(updatedCart);
    }
 
    function DeleteFromCart(id){
      const newCart = cartItems.filter((element)=>{if(element.id!==id)return element;});
      setCartItems(newCart);
    }

    function getCount(id){
      let countnow =0;
      cartItems.map((product)=>{if(id===product.id){countnow=product.count }});
      return countnow;
    }

    function getTotal(id){
      let countnow =0;
      cartItems.map((product)=>{if(id===product.id){countnow=product.count }});
      return countnow;
    }
  /* --------------------------------------------------------------------- */

  return (
        <productsListAndFunctions.Provider value={valueExports}>{children}</productsListAndFunctions.Provider>
  )
}

export default productsListAndFunctions;
export {ProductContext};