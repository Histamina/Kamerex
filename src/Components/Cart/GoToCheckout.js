import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.scss';

const GoToCheckout = () => {
    
    return(
        <>  <NavLink exact to="/checkout" className="btn btn-success m-auto checkout-button" role="button" type="button">
                GO TO CHECKOUT
            </NavLink>
        </>
    );
    
};

export default GoToCheckout;

