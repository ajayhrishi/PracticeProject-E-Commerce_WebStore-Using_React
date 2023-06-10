import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { AiFillEdit,AiFillHome } from "react-icons/ai";


import "../styles/index.css"


function Navbar(){
    return <div id="Navbar">
                <Link to="/addnew" id="GoToAddProduct"> <AiFillEdit/> </Link>
                <Link to="/" id="GoToMainPage"><AiFillHome/></Link>
                <Link to="/cart" id="GoToCart"><BsFillCartFill id="cartIcon"/></Link>
    </div>
}

export default Navbar;