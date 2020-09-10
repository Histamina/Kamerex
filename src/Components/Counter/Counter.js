import React from 'react';
import './Counter.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            counter : 0,
            currentValue: 0
        }
    }

    onAdd = (event) => {
        let counter = event.target.value;
        this.setState({counter}); 
    }

    increment = () => {
        if(this.state.counter < 10) {
            this.setState((currentValue) => {
                return {counter: currentValue.counter +1};
            });
        }
    }

    decrement = () => {
        if(this.state.counter > 0) {
            this.setState((currentValue) => {
                return {counter: currentValue.counter -1};
            });
        }
    }

    render() {
        return (
            <>
                <input className="card-inputValue d-flex mx-auto my-4" type="number"  min="0" max="15" onChange={this.onAdd} value={this.state.counter} />
                <div className="button-Wrapper d-flex justify-content-center">
                    <button type="button" className="btn btn-warning d-inline-block mx-3 button-style" onClick={this.increment}>+</button>
                    <button type="button" className="btn btn-warning d-inline-block mx-3 button-style decrement-button" onClick={this.decrement}>-</button>
                </div>
            </>
        );
    };
};

export default Counter;