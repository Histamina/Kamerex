import React, { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from '../Counter/Counter';
import './ItemDetails.scss';
import AddToCart from '../Counter/AddToCart';

const ItemDetails = (props) => {
    const [itemCount, setItemCount] = useState(1);

    return(
        <div className="container-fluid content-wrapper-details">
            <div className="row no-gutters justify-content-center">
                <div className="col-md-10 d-flex justify-content-around">
                    <div className="img-wrapper col-md-6 p-0">
                        <img src={props.img} alt="Camera Details" className="img-fluid w-100" />
                    </div>
                    <div className="details-wrapper d-flex flex-column col-md-6 text-center justify-content-around">
                        <div className="d-flex flex-column justify-content-between">
                            <h3>{props.name}</h3>
                            <p className="mx-2 mt-3">{props.description}</p>
                            <p className="mb-0 mt-3">Stock: {props.stock}</p>
                            <p className="mb-0 mt-3">Price: ${props.price}</p>
                        </div>
                        <div className="d-flex justify-content-around">
                            <div className="d-flex justify-content-around">
                                <Counter initial={itemCount} min={1} max={props.stock} setCount={setItemCount} />
                            </div>
                            <div className="d-flex align-items-center">
                                <AddToCart id={props.id} counter={itemCount} img={props.img} description={props.description} name={props.name} price={props.price} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;