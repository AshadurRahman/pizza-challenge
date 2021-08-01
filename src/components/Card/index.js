import React, { useState } from 'react';

const CardInfo = () => {
    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [house, setHouse] = useState("");
    const [addresses, setAddresses] = useState([]);

    // const addressInfo = (ev) => {
    //     let address = {
    //         id: Date.now(),
    //         name: name,
    //         street: street,
    //         house: house,
    //         post: post,
    //         city: city,
    //         mobile: mobile,
    //     }
    //     addresses.push(address);
    //     setAddresses(addresses);
    //     console.log(addresses);
    //     localStorage.setItem('Adresses', JSON.stringify(addresses));
    // }

    return (
        <div className="create">
            <h1> Provide the Card Information </h1>
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

                <div className="create button">
                    <button >
                        Submit
                    </button>
                </div>

            </form>
        </div>
    );
}

export default CardInfo;