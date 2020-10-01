import React, { useEffect, useState } from 'react'; 

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (id, quantity) => {
        setCart([
            ...cart,
            {
                id: id,
                quantity: quantity
            }
        ]);
    };

    return(
        <CartContext.Provider value={ { addProduct, cart } }>
            { children }
        </CartContext.Provider>
    );
};
