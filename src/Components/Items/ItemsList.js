import React, { useState } from 'react';
import Items from './Items';
import fujifilmCamera from './fujifilmCamera.jpg';
import nikonCamera from './nikonCamera.jpg';
import canonCamera from './canonCamera.jpg';
import leicaCamera from './leicaCamera.jpeg';

const products = [
    {
        id: 1,
        name: 'Canon',
        img: canonCamera,
        stock: 23
    },
    {
        id: 2,
        name: 'Nikon',
        img: nikonCamera,
        stock: 65
    },
    {
        id: 3,
        name: 'Fujifilm',
        img: fujifilmCamera,
        stock: 14
    },
    {
        id: 4,
        name: 'Leica',
        img: leicaCamera,
        stock: 9
    }
];

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => resolve(products), 2000);
});

const ItemsList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

getProducts.then((products) => {
    setProducts(products);
}).catch((error) => {
    setError(error);
});

if(!error) {
    return(
        <Items list={products} />
    );
} else {
    return(
        <span>{error}</span>
    );
}
};

export default ItemsList;