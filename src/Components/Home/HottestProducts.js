import React, { useEffect, useState } from 'react'; 
import { getFirestore } from '../../Firebase';
import { useParams } from 'react-router-dom';
import Loader from '../Loading/Loader';
import HottestDetails from './HottestDetails';

const HottestProducts = () => {
    const [hottest, setHottest] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection('items');
        const getHottest = itemCollection.where('hottest', '==', true);
        getHottest.get()
        .then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('Hottest products not available');
            } else {
                setHottest(querySnapshot.docs.map(doc => {
                    return ({ id: doc.id, ...doc.data()});
                }));
            };
        })
        .catch(error => {
            console.log('Error finding hottest products', error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [id]);

    return (
        <>
            { loading ? <Loader /> : <HottestDetails list={hottest} />}
        </>
    );
};

export default HottestProducts;