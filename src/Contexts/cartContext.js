import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from '../Firebase';
import userInfo from '../Components/Cart/UserInfo';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);

    const addProduct = (id, quantity, img, description, name, price) => {
        setCart([
            ...cart,
            {
                id: id,
                quantity: quantity,
                img: img,
                description: description,
                name: name,
                price: price
            }
        ]);
    };

    // useEffect(() => console.log(cart) , [cart]);

    const [order, setOrder] = useState({});

    const createOrder = () => {
        let total = 0;
    
        cart.forEach((item) => {
            total += item['price'];
        });

        const db = getFirestore();
        const orders = db.collection('orders');
        const newOrder = {
            buyer: userInfo,
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total
        };
        orders.add(newOrder)
        .then(({ id }) => {
            console.log(id);
            setOrder({ id: id, ...newOrder });
        })
        .catch((error) => {
            console.log('Error creating order', error);
        })
    };

    return(
        <CartContext.Provider value={ { addProduct, cart, createOrder, order } }>
            { children }
        </CartContext.Provider>
    );
};
