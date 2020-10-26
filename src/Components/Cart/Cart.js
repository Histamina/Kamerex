import React, { useContext } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../../Contexts/cartContext';
import GoToCheckout from './GoToCheckout';
import './Cart.scss';
import BackToHome from './BackToHome';

const Cart = (props) => {
    const { cart } = useContext(CartContext);

    return(
        <>
            { cart.length === 0  ?

                <BackToHome />
                :
                <div className="container cart-wrapper">
                    <div className="row no-gutters justify-content-center">
                        <h2 className="text-center mt-5 cart-title">Products In CART</h2>
                        <ul className="products-in-cart d-flex mt-5 flex-wrap px-0">
                            { cart.map( product => 
                                <li key={product.id} className="col-md-3">
                                    <div className="card card-cart-wrapper">
                                        <img src={product.img} className="card-img-top img-fluid shadow border" width="100" alt="Camera Product" />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{product.name}</h5>
                                            <p className="card-description">{product.description}</p>
                                            <span className="qty-style">Quantity: {product.quantity}</span>
                                            <p className="mx-2 price-style">Price: ${product.price}</p>
                                        </div>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="container">
                        <div className="row no-gutters flex-column justify-content-between">
                            <GoToCheckout />
                        </div>
                    </div>
                </div>
            }
        </>
    )
};

export default Cart;