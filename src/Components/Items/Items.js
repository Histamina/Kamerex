import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from '../Counter/Counter'; 
import './Items.scss';

const Items = (props) => {
    return(
        <div className="container-fluid mt-5">
            <div className="row no-gutters justify-content-center">    
                    <ul className="row-products d-flex flex-row justify-content-between">
                        {props.list.map(product =>
                            <li key={product.id} className="col-3">
                                <div className="card">
                                    <img src={product.img} className="card-img-top img-fluid shadow border" height="250" alt="Camera Product"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{product.name}</h5>
                                        <p class="card-text"> Stock: {product.stock}</p>
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