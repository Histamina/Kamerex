import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Items';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from '../Loading/Loader';
import { getFirestore } from '../../Firebase';

const ItemsList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const categoryDocRef = db.collection('categories').doc(id);
        const itemCollection = db.collection('items');
        const selectCollection = itemCollection.where('category', '==', categoryDocRef);
        selectCollection.get()
        .then((querySnapShot) => {
            if (querySnapShot.size === 0) {
                console.log('No results!');
            }
            setProducts(querySnapShot.docs.map(doc => {
                return ({id: doc.id, ...doc.data() });
            }));
        }).catch((error) => {
            console.log('Error serching Items', error);
        }).finally(() => {
            setLoading(false);
        })
        }, [id]);
    
    return(
        <>
            { loading ? <Loader /> : <Item list={products} />}
        </>
    );
};

export default ItemsList;