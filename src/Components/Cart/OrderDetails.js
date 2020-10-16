import React, { useContext } from 'react'; 
import { CartContext } from '../../Contexts/cartContext';

const OrderData = () => {
    const { order } = useContext(CartContext);

    return(
        <>
            { order.id ? 
                <div>
                <h3>Order Details</h3>
                    <p>Name: {order.buyer.name}</p>
                    <p>Email: {order.buyer.email}</p>
                    <p>Total Price: ${order.total}</p>
                    <p>Order ID: #{order.id}</p>
                </div> :
                <div></div>
            }
        </>
    );
};

export default OrderData;