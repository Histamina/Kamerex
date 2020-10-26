import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import "./Cart.scss";

const BackToHome = () => {
    return(
        <>
            <div className="container mt-5 back-to-home">
                <div className="jumbotron text-center">
                    <h1 className="display-4">There's nothing in your CART!</h1>
                    <h2 className="lead">Why don't you take a look again?</h2>
                    <hr className="my-4"/>
                    <p>See what's for you</p>
                    <NavLink exact to="/" className="btn btn-primary btn-lg" role="button">
                        HOME
                    </NavLink>
                </div>
            </div>
        </>
    );
}; 

export default BackToHome;