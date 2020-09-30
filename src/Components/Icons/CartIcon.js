import React, { useContext, useState } from 'react'; 
import { Icon } from '@mdi/react';
import {mdiCart} from '@mdi/js';
import './CartIcon.scss';

const CartIcon = () => {
    return(
        <>
            <Icon path={mdiCart} className="cart-icon"/>
            <span>(0)</span>
        </>
    );
};

export default CartIcon;