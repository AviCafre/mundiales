import React from "react";
import './Homeindex.css';
import Cart from "../cart/Index";
import Products from '../products/Products'


const Home = () => {
    return(
        <div className="homestyle">
        <Products/>
        <Cart/>
        </div>)
};

export default Home;
