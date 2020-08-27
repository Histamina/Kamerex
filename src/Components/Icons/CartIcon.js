import React from 'react'; 
import { Icon } from '@mdi/react';
import {mdiCart} from '@mdi/js';
import './CartIcon.scss';

function CartIcon() {
    return <Icon path={mdiCart} className="cart-icon"/>;
}

export default CartIcon;