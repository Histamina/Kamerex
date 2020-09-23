import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.scss';
import CartIcon from '../Icons/CartIcon';
import obturadorLogo from './obturadorLogo.png';


const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" exact to="/">
                <img src={obturadorLogo} className="rounded-circle" width="40" height="40" alt="Logo Obturador" loading="lazy" />
                <p className="d-inline-block mb-0 ml-2">KAMEREX</p>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active mx-5">
                        <NavLink exact to="/" activeClassName="activeLink" className="main-nav">
                            Home
                        </NavLink>
                    </li>
                    <li class="nav-item mx-5">
                        <NavLink exact to="/products" activeClassName="activeLink" className="main-nav">
                            Products
                        </NavLink>
                    </li>
                    <li class="nav-item mx-5">
                        <NavLink exact to="/cart" activeClassName="activeLink" className="main-nav">
                            <CartIcon />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;