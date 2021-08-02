import product1 from '../../images/product-1.jpg'
import product2 from '../../images/product-2.jpg'
import product3 from '../../images/product-3.jpg'

const PizzaItems = [
    {
        id: "5b21ca3eeb7f6fbccd47181e",
        img: product1,
        alt: 'Pizza',
        name: 'Small Pizza',
        desc: 10,
        price: 15,
        button: 'Place Order'
    },
    {
        id: "5b21ca3eeb7f6fbccd47181f",
        img: product2,
        alt: 'Pizza',
        name: 'Medium Pizza',
        desc: 12,
        price: 20,
        button: 'Place Order'
    },
    {
        id: "5b21ca3eeb7f6fbccd471821",
        img: product3,
        alt: 'Pizza',
        name: 'Large Pizza',
        desc: 14,
        price: 25,
        button: 'Place Order'
    },
];

export const toppings = [
    {
        name: "Olives",
        price: 3
    },
    {
        name: "Pepperoni",
        price: 4
    },
    {
        name: "Mushrooms",
        price: 2
    },
    {
        name: "Pepper",
        price: 2
    }
];

export function getProducts() {
    return PizzaItems;
}
