import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import CartIcon from '../Icons/CartIcon';

function NavBar() {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/" activeClassName="activeLink">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" activeClassName="activeLink">
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" activeClassName="activeLink">
                        <CartIcon />
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;