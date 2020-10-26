import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Contexts/cartContext';

const EndPurchase = () => {
    const { createOrder } = useContext(CartContext);

    return(
        <>
            <div className="container-fluid endpurchase-container">
                <div className="row no-gutters justify-content-center">
                    <div className="jumbotron text-center shadow">
                        <h2>Do you want to finish shopping?</h2>
                        <Link exact to="/order" type="button" class="btn btn-success mt-4 text-center endpurchase-button" onClick={() => createOrder()}>
                            END PURCHASE
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EndPurchase;