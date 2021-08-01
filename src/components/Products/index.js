import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from './data';
import Toppings from './toppings';


const Products = ({ heading }) => {
    const [pizza, setPizza] = useState(getProducts());

    function buttonClick(id) {
        console.log("Button click", id);
        setPizza(id);
    }

    return (
        <div className="ProductContainer">

            <h1>{heading}</h1>

            <div className="ProductWrapper">

                {pizza.map(product => (
                    <div className="ProductCard" key={product.id}>
                        <img className="ProductImg" src={product.img} alt={product.alt} />
                        <div className="ProductInfo">
                            <p className="ProductTitle">{product.name}</p>
                            <p className="ProductDesc">{product.desc}</p>
                            <p className="ProductPrice">${product.price}</p>
                            <button className="ProductButton" onClick={() => buttonClick(product)}>
                                Select
                            </button>
                        </div>
                    </div>
                ))}

            </div>

            <Toppings />

            <Link
                to="/address"
                style={{ marginBottom: 20 }}
            >

                <button className="OrderButton">
                    Place Order
                </button>
            </Link>

        </div>
    );
}

export default Products;
