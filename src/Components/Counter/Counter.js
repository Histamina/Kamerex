import React from 'react';
import './Counter.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import cartCamera from './cartCamera.jpg';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            counter : 0,
            currentValue: 0
        }
    }

    onAdd = (event) => {
        let currentValue = event.target.value;
        this.setState({currentValue}); 
    }

    increment = () => {
        if(this.state.counter < 10) {
            let counter = this.state.counter +1;
            this.setState({counter});
        }
    }

    decrement = () => {
        if(this.state.counter > 0) {
            let counter = this.state.counter -1;
            this.setState({counter});
        }
    }

    render() {
        return (
            <div className="container my-5">
                <div className="row no-gutters justify-content-center">
                    <div className="card card-Wrapper col-md-7 py-3 d-flex flex-row justify-content-center">
                        <div className="col-md-5">
                            <img src={cartCamera} className="card-img img-fluid shadow border" alt="Camera to buy"  height="250" />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h5 className="card-title text-center">Add your product to the cart</h5>
                                <input className="card-inputValue d-flex mx-auto my-4" type="number"  min="0" max="15" onAdd={this.onAdd} value={this.state.counter} />
                                <div className="button-Wrapper d-flex justify-content-center">
                                    <button type="button" className="btn btn-warning d-inline-block mx-3 button-style" onClick={this.increment}>+</button>
                                    <button type="button" className="btn btn-warning d-inline-block mx-3 button-style decrement-button" onClick={this.decrement}>-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Counter;