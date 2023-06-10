import React from 'react'
import JSXmaker from './JSXmaker';
import { useContext} from 'react';
import productsListAndFunctions from '../context/ProductContext';

export default function Products() {

const {ProductList} = useContext(productsListAndFunctions);

  return (
    <div id="ShoppingBox">
      {ProductList.map((element)=>{return JSXmaker(element);})}
    </div>
  )
}
