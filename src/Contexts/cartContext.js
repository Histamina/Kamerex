import React, { useEffect, useState } from 'react'; 

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (id, quantity, img, description, name) => {
        setCart([
            ...cart,
            {
                id: id,
                quantity: quantity,
                img: img,
                description: description,
                name: name
            }
        ]);
    };

    useEffect(() => console.log(cart) , [cart]);

    return(
        <CartContext.Provider value={ { addProduct, cart } }>
            { children }
        </CartContext.Provider>
    );
};
