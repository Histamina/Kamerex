import React, { useContext } from 'react';
import { CartContext } from '../../Contexts/cartContext';

const EndPurchase = () => {

    const { createOrder } = useContext(CartContext);

    return(
        <>
            <button onClick={() => createOrder()} type="button" className="btn btn-success m-auto">END PURCHASE</button>
        </>
    );
};

export default EndPurchase;

