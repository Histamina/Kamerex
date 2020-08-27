import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';

const Greetings = (props) => {
    return (
        <div className="container">
            <div className="row justify-content-center row-style shadow">
                <div className="col-10 text-center py-5">
                    <h1>Bienvenida {props.name}, {props.lastName}!</h1>
                </div>
            </div>
        </div>
    );
};


export default Greetings;