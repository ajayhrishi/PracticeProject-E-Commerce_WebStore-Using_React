import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import ShoppingPage from './pages/ShoppingPage';
import Cart from './pages/Cart';
import Navbar from "./components/Navbar";
import Addnew from './pages/Addnew';

function App() {

    return <div>
                <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ShoppingPage/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/addnew" element={<div><Addnew/></div>}/>
            </Routes>
                </Router>
        </div>
}

export default App; 