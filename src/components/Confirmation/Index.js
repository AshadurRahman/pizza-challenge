import React from 'react';
import { Link } from 'react-router-dom';

const confirmation = (props) => {

    console.log(JSON.stringify(props.location.state));

    var confirm = props.location.state;

    return (

        <div className="ProductContainer">

            <h1>Your order is Successful</h1>
            <h3>Order Details</h3>

            <div className="ProductWrapper">

                <div className="ProductCard">

                    <p className="ProductTitle"> Pizza Size: {confirm.size}" </p>
                    <p className="ProductTitle">Price: ${confirm.price}</p>
                    {
                        confirm.toppings.length > 0 ?
                            <p className="ProductTitle">Toppings: {confirm.toppings.join(", ")}</p> : ""
                    }

                    <Link
                        to="/"
                        style={{ marginBottom: 20 }}
                    >
                        <button className="ProductButton">
                            Home
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default confirmation;
