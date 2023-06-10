import doveImage from "../images/dove.jpg"
import JBLBlack from "../images/headset.jpg"
import ERBOLOGY  from "../images/oil.jpg"
import KIIKII from  "../images/shirt.jpg"
import ShoeBlack from "../images/shoe.jpg"
import shoe1 from "../images/shoe1.jpg"
import shoe2 from "../images/shoe2.jpg"
import shoe3 from "../images/shoe3.jpg"
import shoe4 from "../images/shoe4.jpg"
import shoe5  from "../images/shoe5.jpg"
import shoe6 from "../images/shoe6.jpg"
import Tshirts from "../images/Tshirts.jpg"

function idMaker(word){return word.slice(0,3)+Math.floor(Math.random()*9999);}

function data (){
return [
    {img: doveImage,name: "Dove",id: idMaker("Dove"), price:20},
    {img:  JBLBlack,name: "HeadSet JBL Black",id: idMaker("JBL Black"), price:80},
    {img: ERBOLOGY, name: "ERBOLOGY HairOil", id: idMaker("ERBOLOGY"), price:30},
    {img: KIIKII, name: "KIIKII - Tshirts", id: idMaker("KIIKII"), price:40},
    {img: ShoeBlack, name: "Shoe Black",id: idMaker("Shoe"), price:50},
    {img: shoe1,name: "Nike Shoe Black", id: idMaker("Nike"), price:80},
    {img: shoe2, name: "Shoe Rainbow Color", id: idMaker("Rainbow"), price:70},
    {img: shoe3, name: "Shoe White", id: idMaker("White"), price:85},
    {img: shoe4, name: "Shoe blue and white", id: idMaker("blue"), price:95},
    {img: shoe5, name: "Shoe Red", id: idMaker("Redx"), price:39},
    {img: shoe6, name: "Shoe Green", id: idMaker("Green"), price:79},
    {img: Tshirts, name: "T-Shirts", id: idMaker("Shirts"), price:70}];

}
    export default data;