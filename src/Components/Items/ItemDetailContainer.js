import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loading/Loader';
import fujifilmCamera from './fujifilmCamera.jpg';
import nikonCamera from './nikonCamera.jpg';
import canonCamera from './canonCamera.jpg';
import leicaCamera from './leicaCamera.jpeg';
import ItemDetails from './ItemDetails';

const productsList = [
    {
        id: 1,
        name: 'Canon',
        img: canonCamera,
        description: 'Compatible with a wide variety of different lenses, from fast and bright ultra-wide-angle lenses with great detail to long-range telephoto lenses that bring you closer to the world. Plus, they offer a great platform for creativity.',
        stock: 23
    },
    {
        id: 2,
        name: 'Nikon',
        img: nikonCamera,
        description: 'Nikon cameras have been trusted by photographers and picture takers of every caliber for their enduring performance and outstanding image quality, empowering them to capture the essence of the moment.',
        stock: 65
    },
    {
        id: 3,
        name: 'Fujifilm',
        img: fujifilmCamera,
        description: 'Simplicity and elegance. The camera is a precision instrument, but one that’s combined with a functional beauty.',
        stock: 14
    },
    {
        id: 4,
        name: 'Leica',
        img: leicaCamera,
        description: 'Accept nothing but perfection. A perfect symbiosis of the essentials with innovation, pristine performance with connectivity, and resilience balanced with elegance.',
        stock: 9
    }
];

const ItemsListLoading = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const [error, setError] = useState('');
    const {id} = useParams();

    useEffect(() => {
        const details = 
            new Promise((resolve, reject) => setTimeout(() => resolve(productsList), 3000))
            .then((response) => setProduct(response[id - 1]))
            .catch((error) => setError(error))
            .finally((data) => setLoading(false));
    }, []);

    return(
        <>
            { loading ? <Loader /> : <ItemDetails {...product} /> }
        </>
    );
};

export default ItemsListLoading;

        
