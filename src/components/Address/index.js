import React from 'react';

const Address = () => {
    let addresses = [];

    const addressInfo = (ev) => {
        ev.preventDefault();
        let address = {
            id: Date.now(),
            name: document.getElementById('name').value,
            street: document.getElementById('street').value,
            house: document.getElementById('house').value,
            post: document.getElementById('post').value,
            city: document.getElementById('city').value,
            mobile: document.getElementById('mobile').value,
        }
        addresses.push(address);
        // document.forms[0].reset();

        console.warn('Added', { addresses });
        let pre = document.querySelector(`msg pre`);
        pre.textContent = '\n' + JSON.stringify(addresses, '\t', 2);
    }
    const addAddress = () => {

        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('btn').addEventListener('click', addressInfo);
        })
    }

    return (
        <div>
            <h1> Provide the Delivery Address </h1>
            <form>
                <div>
                    <label>Full Name: </label>
                    <input type="text" id="name" placeholder="Name" />
                </div>
                <div>
                    <label>Street Name: </label>
                    <input type="text" id="street" placeholder="Street" />
                </div>
                <div>
                    <label>House Number: </label>
                    <input type="text" id="house" placeholder="House Number" />
                </div><div>
                    <label>Postal Code: </label>
                    <input type="text" id="post" placeholder="Postal Code" />
                </div>
                <div>
                    <label>City: </label>
                    <input type="text" id="city" placeholder="City" />
                </div>
                <div>
                    <label>Mobile: </label>
                    <input type="text" id="mobile" placeholder="Mobile" />
                </div>
                <div>
                    <button onClick={addAddress}>Submit</button>
                </div>
                <div id="msg">
                    <pre></pre>
                </div>

            </form>
        </div>
    );
}

export default Address;