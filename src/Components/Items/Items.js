import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Items.scss';
import lens from './lens.jpg';
import { Link } from 'react-router-dom';

const Items = (props) => {
    return(
        <div className="container-fluid mt-5 p-0">
            <div className="row no-gutters justify-content-center">
                <div className="img-wrapper col-md-4">
                    <img src={lens} className="img-fluid" alt="Lens product background" />
                    <h2 className="text-center">Our Cameras</h2>
                </div>
                <div className="cameras-wrapper d-flex align-items-center col-md-8">
                    <ul className="row-products p-0 m-0 d-flex justify-content-between">
                        {props.list.map(product =>
                            <li key={product.id} className="col-md-3">
                                <Link to={'/products/' + product.id}>
                                    <div className="card">
                                        <img src={product.img} className="card-img-top img-fluid shadow border" alt="Camera Product"/>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{product.name}</h5>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Items;