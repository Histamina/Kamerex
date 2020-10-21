import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loading/Loader';
import ItemDetails from './ItemDetails';
import { getFirestore } from '../../Firebase';

const ItemsListLoading = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        const item = itemCollection.doc(id);
        item.get()
        .then((doc) => {
            if(!doc.exists) {
                console.log('Item does not exists');
            } 
            console.log('Item found');
            setProduct({ id: doc.id, ...doc.data() });
        })
        .catch((error) => {
            console.log("Error searching Item: ", error);
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [id]);

    return(
        <>
            { loading ? <Loader /> : <ItemDetails {...product} /> }
        </>
    );
};

export default ItemsListLoading;
