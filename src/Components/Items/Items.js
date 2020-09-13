import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from '../Counter/Counter'; 
import './Items.scss';

const Items = (props) => {
    return(
        <div className="container mt-5">
            <div className="row no-gutters justify-content-center">    
                    <ul className="row-products p-0 d-flex flex-row justify-content-between">
                        {props.list.map(product =>
                            <li key={product.id} className="col-md-3">
                                <div className="card">
                                    <img src={product.img} className="card-img-top img-fluid shadow border" alt="Camera Product"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text"> Stock: {product.stock}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <Counter />
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
    );
};

export default Items;