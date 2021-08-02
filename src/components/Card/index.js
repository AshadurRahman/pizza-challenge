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

    const validateCardInfo = () => {

        var numberValidation = valid.number(cardNumber);
        var expiryValidation = valid.expirationDate(expiryDate);
        var cvvValidation = valid.cvv(security);

        if (!numberValidation.isPotentiallyValid || !numberValidation.isValid || !numberValidation.card) {
            alert("Enter valid card Number");
        }

        else if (!expiryValidation.isPotentiallyValid || !expiryValidation.isValid || !expiryValidation.month || !expiryValidation.year) {
            alert("Enter valid date");
        }

        else if (!cvvValidation.isPotentiallyValid || !cvvValidation.isValid) {
            alert("Enter valid CVV");
        }

        else {
            return card();
        }
    }

    return (
        <div className="create">
            <h1> Provide Payment Information </h1>
            <form onSubmit={validateCardInfo}>
                <div >
                    <label>Card Number: </label>
                    <input
                        type="text"
                        required
                        value={cardNumber}
                        placeholder="Card number"
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                </div>
                <div>
                    <label>Expiry Date: </label>
                    <input
                        type="month"
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

                <div className="Submit Button">
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
