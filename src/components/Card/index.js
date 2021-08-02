import React, { useState } from 'react';

const CardInfo = (props) => {
    const [cardNumber, setCardNumber] = useState("");
    const [street, setStreet] = useState("");
    const [house, setHouse] = useState("");
    const [addresses, setAddresses] = useState([]);

    var valid = require("card-validator");


    const validateCardInfo = () => {
        var numberValidation = valid.number(cardNumber);
        if (!numberValidation.isPotentiallyValid) {
            // renderInvalidCardNumber();
            console.log(numberValidation);
        }

        if (numberValidation.card) {
            console.log(numberValidation.card.type); // 'visa'
        }
    }

    return (
        <div className="create">
            <h1> Provide the Card Information </h1>
            <form>
                <div >
                    <label>Card Number: </label>
                    <input
                        type="text"
                        required
                        value={cardNumber}
                        placeholder="Name"
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                </div>
                <div>
                    <label>expiry date: </label>
                    <input
                        type="text"
                        required
                        value={street}
                        placeholder="Street"
                        onChange={(e) => setStreet(e.target.value)}
                    />
                </div>
                <div>
                    <label>ccv: </label>
                    <input
                        type="text"
                        required
                        value={house}
                        placeholder="House Number"
                        onChange={(e) => setHouse(e.target.value)}
                    />
                </div>

                <div className="create button">
                    <button onClick={validateCardInfo}>
                        Submit
                    </button>
                </div>

            </form>
        </div>
    );
}

export default CardInfo;