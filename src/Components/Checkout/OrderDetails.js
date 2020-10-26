import React, { useContext } from 'react'; 
import { CartContext } from '../../Contexts/cartContext';

const OrderDetails = () => {
    const { order } = useContext(CartContext);

    return(
        <>
            { order.id ?
                <div className="container-fluid order-container">
                    <div className="row no-gutters justify-content-center">
                        <div className="jumbotron shadow">
                            <h3>Order Details</h3>
                            <p>Name: {order.buyer.name}</p>
                            <p>Last Name: {order.buyer.lastName}</p>
                            <p>Email: {order.buyer.email}</p>
                            <p>Items: {order.items.map(data => <ul><li>{data.name} x {data.quantity}</li></ul>)}</p>
                            <p>Total Price: ${order.total}</p>
                            <p>Order ID: #{order.id}</p>
                        </div>
                    </div>
                </div> 
                :
                <div className="container-fluid no-order-container">
                    <div className="row no-gutters justify-content-center">
                        <div className="jumbotron shadow">
                            <h3>NOTHING TO SEE HERE!</h3>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default OrderDetails;