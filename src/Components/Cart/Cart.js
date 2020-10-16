import React, { useContext } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../../Contexts/cartContext';
import BackToProducts from './BackToProducts';
import EndPurchase from '../Cart/Orders';
import OrderData from '../Cart/OrderDetails';

const Cart = (props) => {
    const { cart } = useContext(CartContext);

    return(
        <>
            { cart.length === 0  ?

                <BackToProducts />
                :
                <div className="container">
                    <div className="row no-gutters justify-content-center">
                        <h2 className="text-center mt-5">Products In CART</h2>
                        <ul className="products-in-cart d-flex mt-5">
                            { cart.map( product => 
                                <li key={product.id} className="col-md-3">
                                    <div className="card">
                                        <img src={product.img} className="card-img-top img-fluid shadow border" width="100" alt="Camera Product" />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{product.name}</h5>
                                            <p className="mx-2">{product.description}</p>
                                            <span>Quantity: {product.quantity}</span>
                                            <p className="mx-2">{product.price}</p>
                                        </div>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="container">
                        <div className="row no-gutters flex-column justify-content-between">
                            <EndPurchase />
                            <OrderData />
                        </div>
                    </div>
                </div>
            }
        </>
    )
};

export default Cart;