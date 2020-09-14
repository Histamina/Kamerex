import React, { useEffect, useState } from 'react';
import Items from './Items';
import { Icon } from '@mdi/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { mdiLoading } from '@mdi/js';
import fujifilmCamera from './fujifilmCamera.jpg';
import nikonCamera from './nikonCamera.jpg';
import canonCamera from './canonCamera.jpg';
import leicaCamera from './leicaCamera.jpeg';

const productsList = [
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

const ItemsList = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getProducts = 
            new Promise((resolve, reject) => setTimeout(() => resolve(productsList), 2000))
                .then((products) => setProducts(products))
                .catch((error) => setError(error))
                .finally(data => setLoading(false));
    }, []);

    if(loading) {
        return (
            <div className="container text-center py-3">
                <Icon path= { mdiLoading } className="mdi-spin" spin size="50px" />
            </div>
        );
    } else if(error) {
        return (
            <div className="container text-center py-4">
                <p> Looks like there's an error {error}</p>
            </div>
        );
    } else {
        return(
            <Items list={products} />
        );
    }
};

export default ItemsList;