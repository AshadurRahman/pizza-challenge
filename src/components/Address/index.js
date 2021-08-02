import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Address = (props) => {
    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [house, setHouse] = useState("");
    const [post, setPost] = useState("");
    const [city, setCity] = useState("");
    const [mobile, setMobile] = useState("");

    const addressInfo = () => {
        let address = {
            id: Date.now(),
            name: name,
            street: street,
            house: house,
            post: post,
            city: city,
            mobile: mobile,
        }
        return address;
    }

    return (
        <div className="create">
            <h1> Provide the Delivery Address </h1>
            <form>
                <div >
                    <label>Full Name: </label>
                    <input
                        type="text"
                        required
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Street Name: </label>
                    <input
                        type="text"
                        required
                        value={street}
                        placeholder="Street"
                        onChange={(e) => setStreet(e.target.value)}
                    />
                </div>
                <div>
                    <label>House Number: </label>
                    <input
                        type="text"
                        required
                        value={house}
                        placeholder="House Number"
                        onChange={(e) => setHouse(e.target.value)}
                    />
                </div>
                <div>
                    <label>Postal Code: </label>
                    <input
                        type="text"
                        required
                        value={post}
                        placeholder="Postal Code"
                        onChange={(e) => setPost(e.target.value)}
                    />
                </div>
                <div>
                    <label>City: </label>
                    <input
                        type="text"
                        required
                        value={city}
                        placeholder="City"
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div>
                    <label>Mobile: </label>
                    <input
                        type="text"
                        required
                        value={mobile}
                        placeholder="Mobile"
                        onChange={(e) => setMobile(e.target.value)}
                    />
                </div>
                <div className="create button">
                    <Link
                        to={{
                            pathname: "/cardInfo",
                            state: {
                                price: props.location.state.totalPrice,
                                size: props.location.state.size,
                                toppings: props.location.state.toppings,
                                address: addressInfo()
                            }
                        }}
                        style={{ marginBottom: 20 }}
                    >
                        <button onClick={addressInfo}>
                            Submit
                        </button>
                    </Link>
                </div>

            </form>
        </div>
    );
}

export default Address;
