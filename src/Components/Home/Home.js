import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';

const Greetings = (props) => {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="home-wrapper d-flex">
                        <img src="https://i.imgur.com/JDg4eKu.jpg" alt="Camera Home Background" className="img-fluid" />
                        <div className="col-4 text-center py-5 greeting-style">
                            <h1>Welcome</h1>
                            <h2>{props.range} {props.name}</h2>
                        </div>
                        <div className="col-md-3 text-center phrase-style">
                            <p>"You can find pictures anywhere.<br></br> It’s simply a matter of noticing things and organizing them."</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Greetings;