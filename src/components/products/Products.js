import React from "react";
import './products.css';
import {DataProducts} from './../../data/Mokup'

const Products= () =>{
    return(
        <div className="productContainer">
         {DataProducts.map((product, name, id, img, price) => (
            <div key={id} className="products">
                <img src={product.img} alt={product.name}/>
                <div>
                    <p>
                        {product.name} -${product.price}
                    </p>
                </div>
                <button onClick={()=> console.log(product)}>Add to cart</button>
            </div>
            ))} 
        </div>
    )
}

export default Products;