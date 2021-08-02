import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CardInfo = (props) => {
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [security, setSecurity] = useState("");

    var valid = require("card-validator");

    const card = () => {
        let cardDetails = {
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            ccv: security,
        }
        return cardDetails;
    }

    // function Expiry(d) {

    //     var year;
    //     var months;

    //     var today = new Date();
    //     var expiry = new Date(year, months);
    //     if (today.getTime() <= expiry.getTime())

    //         return false;
    //     else
    //         setExpiryDate(d.target.value);
    // };

    const validateCardInfo = () => {
        var numberValidation = valid.number(cardNumber);
        if (!numberValidation.isPotentiallyValid) {
            // renderInvalidCardNumber();
            console.log(numberValidation);
        }

        if (numberValidation.card) {
            console.log(numberValidation.card.type); // 'visa'
        }
        else {
            return card();
        }
    }

    return (
        <div className="create">
            <h1> Provide Payment Information </h1>
            <form>
                <div >
                    <label>Card Number: </label>
                    <input
                        type="text"
                        required
                        value={cardNumber}
                        placeholder="card number"
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                </div>
                <div>
                    <label>Expiry Date: </label>
                    <input
                        type="date"
                        required
                        value={expiryDate}
                        placeholder="Expiry Date"
                        onChange={(e) => setExpiryDate(e.target.value)}
                    />
                </div>
                <div>
                    <label>CVV/CVC: </label>
                    <input
                        type="text"
                        required
                        value={security}
                        placeholder="3-digit CVV/CVC"
                        onChange={(e) => setSecurity(e.target.value)}
                    />
                </div>

                <div className="create button">
                    <Link
                        to={{
                            pathname: "/confirm",
                            state: {
                                price: props.location.state.price,
                                size: props.location.state.size,
                                toppings: props.location.state.toppings,
                                address: props.location.state.address,
                                card: card(),
                            }
                        }}
                        style={{ marginBottom: 20 }}
                    >
                        <button onClick={validateCardInfo}>
                            Submit
                        </button>
                    </Link>
                </div>

            </form>
        </div>
    );
}

export default CardInfo;