import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import CartIcon from '../Icons/CartIcon';


function NavBar() {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="activeLink" className="main-nav">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/products" activeClassName="activeLink" className="main-nav">
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/cart" activeClassName="activeLink" className="main-nav">
                        <CartIcon />
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;