import React from 'react';
import { Link } from 'react-router-dom';
import { AiTwotoneFire } from 'react-icons/ai';
import './HottestDetails.scss';

const HottestDetails = (props) => {
    return (
        <>
            <div className="container my-4">
                <div className="row no-gutters justify-content-around">
                    <div className="col-md-5 hottest-wrapper d-flex flex-column justify-content-around text-center">
                        <h2 className="mb-0 mt-5">See Our Hottest Products</h2>
                        <AiTwotoneFire className="fire-icon" />
                    </div>
                    <div className="col-md-7">
                        <ul className="p-0 m-0 d-flex justify-content-around">
                            {props.list.map(product => 
                                <li key={product.id} className="col-md-5">
                                    <Link to={'/products/' + product.id}>
                                        <div className="card card-wrapper">
                                            <img src={product.img} className="card-img-top img-fluid shadow border" alt="Camera Product"/>
                                            <div className="card-body">
                                                <h5 className="card-title text-center">{product.name}</h5>
                                                <p className="text-center">Only ${product.price}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HottestDetails;