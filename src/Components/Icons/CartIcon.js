import React, { useContext, useState } from 'react'; 
import { Icon } from '@mdi/react';
import {mdiCart} from '@mdi/js';
import './CartIcon.scss';
import {CartContext} from '../../Contexts/cartContext'

const CartIcon = ({ quantity }) => {
    const { cart } = useContext(CartContext);
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    
    return(
        <>
            <Icon path={mdiCart} className="cart-icon"/>
            <span>({totalQuantity})</span>
        </>
    );
};

export default CartIcon;