import React, { useState } from 'react';

const Address = () => {
    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [house, setHouse] = useState("");
    const [post, setPost] = useState("");
    const [city, setCity] = useState("");
    const [mobile, setMobile] = useState("");
    const [addresses, setAddresses] = useState([]);

    const addressInfo = (ev) => {
        let address = {
            id: Date.now(),
            name: name,
            street: street,
            house: house,
            post: post,
            city: city,
            mobile: mobile,
        }
        addresses.push(address);
        setAddresses(addresses);
        console.log(addresses);
        localStorage.setItem('Adresses', JSON.stringify(addresses));
    }

    return (
        <div>
            <h1> Provide the Delivery Address </h1>
            <form>
                <div>
                    <label>Full Name: </label>
                    <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Street Name: </label>
                    <input type="text" value={street} placeholder="Street" onChange={(e) => setStreet(e.target.value)} />
                </div>
                <div>
                    <label>House Number: </label>
                    <input type="text" value={house} placeholder="House Number" onChange={(e) => setHouse(e.target.value)} />
                </div>
                <div>
                    <label>Postal Code: </label>
                    <input type="text" value={post} placeholder="Postal Code" onChange={(e) => setPost(e.target.value)} />
                </div>
                <div>
                    <label>City: </label>
                    <input type="text" value={city} placeholder="City" onChange={(e) => setCity(e.target.value)} />
                </div>
                <div>
                    <label>Mobile: </label>
                    <input type="text" value={mobile} placeholder="Mobile" onChange={(e) => setMobile(e.target.value)} />
                </div>
                <div>
                    <button onClick={addressInfo}>Submit</button>
                </div>
                <div id="msg">
                    <pre></pre>
                </div>

            </form>
        </div>
    );
}

export default Address;