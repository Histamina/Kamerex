import React, { useState } from 'react';
import './Counter.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddToCart from '../Counter/AddToCart';

const Counter = ({id, initial, min, max}) => {
    const [counter, setCounter] = useState(initial);
    
    const increment = () => {
        if(counter < max) {
        setCounter(counter + 1);
        }
    };
    const decrement = () => {
        if(counter > min) {
            setCounter(counter - 1);
        }
    };

    const onAdd = (event) => {
        let counter = event.target.value;
        setCounter({counter});
    };

    
    return (
        <>
            <div className="d-flex flex-column">
                <h5 className="text-center title-style">Add to cart</h5>
                <input className="card-inputValue d-flex mx-auto my-3" type="number"  min="0" max="15" onChange={onAdd} value={counter} />
                <div className="button-Wrapper d-flex justify-content-center">
                    <button type="button" className="btn btn-warning d-inline-block mx-3 button-style" onClick={increment}>+</button>
                    <button type="button" className="btn btn-warning d-inline-block mx-3 button-style decrement-button" onClick={decrement}>-</button>
                </div>
            </div>    
            <div className="d-flex align-items-center">
                <AddToCart counter={counter} id={id} />
            </div>
        </>
    );
};

export default Counter;