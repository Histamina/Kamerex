import React, { useState } from 'react'; 

export const CartContext = React.createContext([]);

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
        console.log(cart);
    };
    

    return(
        <CartContext.Provider value={ {addProduct} }>
            { children }
        </CartContext.Provider>
    );
};






/* CONTEXT BY LUKS */

// import React, {useState, createContext} from 'react'; 

// export const CartContext = React.createContext();

// export function CartProvider({children}) {

//     const [products, setProducts] = useState([]);

//     const addProduct = (id, quantity) => {
        
//         setProducts([
//             ...products,
//             {
//                 id: id,
//                 quantity: quantity
//             }
//         ])
//         console.log(products);
//     }

//     return (
//         <CartContext.Provider value={{ addProduct }}>
//             {children}
//         </CartContext.Provider>
//     );
// }