import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.scss';
import CartIcon from '../Icons/CartIcon';
import obturadorLogo from './obturadorLogo.png';


const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" exact to="/">
                <img src={obturadorLogo} className="rounded-circle" width="40" height="40" alt="Logo Obturador" loading="lazy" />
                <p className="d-inline-block mb-0 ml-2">KAMEREX</p>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active mx-5">
                        <NavLink exact to="/" activeClassName="activeLink" className="main-nav">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item mx-5">
                        <NavLink exact to="/products" activeClassName="activeLink" className="main-nav">
                            Products
                        </NavLink>
                    </li>
                    <li className="nav-item mx-5">
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