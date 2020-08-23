import React from 'react';
import './CartIcon.scss';
import {Icon} from '@mdi/react';
import {mdiCart} from '@mdi/js';


function CartIcon() {
    return <Icon path={mdiCart} className="cart" />;
}

export default CartIcon;