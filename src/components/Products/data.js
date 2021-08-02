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
        price: 14.99,
        button: 'Place Order'
    },
    {
        id: "5b21ca3eeb7f6fbccd47181f",
        img: product2,
        alt: 'Pizza',
        name: 'Medium Pizza',
        desc: 12,
        price: 16.99,
        button: 'Place Order'
    },
    {
        id: "5b21ca3eeb7f6fbccd471821",
        img: product3,
        alt: 'Pizza',
        name: 'Large Pizza',
        desc: 14,
        price: 19.99,
        button: 'Place Order'
    },
];

export const toppings = [
    {
        name: "Capsicum",
        price: 1.2
    },
    {
        name: "Paneer",
        price: 2.0
    },
    {
        name: "Red Paprika",
        price: 2.5
    },
    {
        name: "Onions",
        price: 3.0
    }
];

export function getProducts() {
    return PizzaItems;
}

export function getProduct(id) {
    return PizzaItems.find(m => m._id === id);
}