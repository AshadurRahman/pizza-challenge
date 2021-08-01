import { useState } from "react";
import { Link } from "react-router-dom";
import { toppings } from "./data";

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

const Toppings = () => {
    const [checkedState, setCheckedState] = useState(
        new Array(toppings.length).fill(false)
    );

    const [total, setTotal] = useState(0);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        const totalPrice = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + toppings[index].price;
                }
                return sum;
            },
            0
        );

        setTotal(totalPrice);
    };

    return (
        <div className="ToppingContainer">
            <h1>Select Toppings</h1>
            <div className="toppings-list">
                {toppings.map(({ name, price }, index) => {
                    return (
                        <div className="toppings-list-item">
                            <div className="left-section">
                                <input
                                    type="checkbox"
                                    id={`custom-checkbox-${index}`}
                                    name={name}
                                    value={name}
                                    checked={checkedState[index]}
                                    onChange={() => handleOnChange(index)}
                                />
                                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                            </div>
                            <div className="right-section">{getFormattedPrice(price)}</div>
                        </div>
                    );
                })}
                <div className="toppings-list-item">
                    <div className="left-section">Total:</div>
                    <div className="right-section">{getFormattedPrice(total)}</div>
                </div>
            </div>

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

export default Toppings;
