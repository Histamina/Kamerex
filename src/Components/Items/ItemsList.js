import React, { useEffect, useState } from 'react';
import Item from './Items';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from '../Loading/Loader';
import { getFirestore } from '../../Firebase';

const ItemsList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection('items');
        itemCollection.get()
        .then((querySnapShot) => {
            if (querySnapShot.size === 0) {
                console.log('No results!');
            }
            setProducts(querySnapShot.docs.map(doc => {
                return ({id: doc.id, ...doc.data() });
            }));
        }).catch((error) => {
            console.log('Error serching Items', error);
            setError(error);
        }).finally(() => {
            setLoading(false);
        })
        }, []);
    
    return(
        <>
            { loading ? <Loader /> : <Item list={products} />}
        </>
    );
};

export default ItemsList;