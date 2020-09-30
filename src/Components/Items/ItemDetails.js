import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from '../Counter/Counter';
import './ItemDetails.scss';

const ItemDetails = (props) => {
    return(
        <div className="container-fluid my-5">
            <div className="row no-gutters justify-content-center">
                <div className="col-md-10 d-flex flex-row justify-content-around">
                    <div className="img-wrapper col-md-6 p-0">
                        <img src={props.img} alt="Camera Details" className="img-fluid w-100" />
                    </div>
                    <div className="details-wrapper col-md-6 text-center d-flex flex-column justify-content-around">
                        <h3>{props.name}</h3>
                        <p className="mx-1">{props.description}</p>
                        <p className="mb-0">Stock: {props.stock}</p>
                        <div className="d-flex justify-content-around">
                            <Counter initial={1} min={1} max={props.stock} id={props.id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;