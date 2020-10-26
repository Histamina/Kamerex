import React, { useContext } from 'react'; 
import CheckoutForm from './CheckoutForm';
import { CartContext } from '../../Contexts/cartContext';
import EndPurchase from '../Checkout/EndPurchase';

const Checkout = () => {
    const { user } = useContext(CartContext);
    
    return (
        <>
            { Object.keys(user).length === 0 ? <CheckoutForm /> : <EndPurchase /> }
        </>
    );
};

export default Checkout;