import React, { useContext } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../../Contexts/cartContext';

const Cart = (props) => {
    const { cart } = useContext(CartContext);

    return(
        <>
            <div className="container">
                <div className="row no-gutters justify-content-center">
                    <h2 className="text-center mt-5">Products In CART</h2>
                    <ul className="products-in-cart d-flex justify-content-between mt-5">
                        { cart.map( product => 
                            <li key={product.id} className="col-md-3">
                                <div className="card">
                                    <img src={product.img} className="card-img-top img-fluid shadow border" width="100" alt="Camera Product" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{product.name}</h5>
                                        <p className="mx-2">{product.description}</p>
                                        <span>Quantity: {product.quantity}</span>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Cart;