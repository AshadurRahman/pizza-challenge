import React from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from './data';

const Products = ({ heading }) => {
    const pizza = getProducts();

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
                            <Link
                                to={{
                                    pathname: "/toppings",
                                    state: { price: product.price, size: product.desc }
                                }}
                                style={{ marginBottom: 20 }}
                            >
                                <button className="ProductButton">
                                    Select
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
}

export default Products;
