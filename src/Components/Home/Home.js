import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';

const Greetings = (props) => {
    return (
        <div className="container-fluid p-0">
            <div className="row no-gutters">
                <div className="home-wrapper d-flex">
                    <img src="https://images.unsplash.com/photo-1516906953530-a82dfcd4c2a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1946&q=80" alt="Camera Home Background" className="img-fluid" />
                    <div className="col-4 text-center py-5 greeting-style">
                        <h1>Welcome</h1>
                        <h2>{props.range} {props.name}</h2>
                    </div>
                </div>
            </div>
            
        </div>
    );
};


export default Greetings;