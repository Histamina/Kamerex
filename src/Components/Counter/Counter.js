import React, { useEffect, useState } from 'react';
import './Counter.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Counter = ({ initial, min, max, setCount = () => {} }) => {
    const [counter, setCounter] = useState(initial);
    
    useEffect(() => {
        setCount(counter);
    }, [counter]);

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
                <input className="card-inputValue d-flex mx-auto my-3 mx-2" type="number" onChange={onAdd} value={counter} />
                <div className="button-Wrapper d-flex justify-content-center">
                    <button type="button" className="btn btn-warning d-inline-block mx-3 button-style" onClick={increment}>+</button>
                    <button type="button" className="btn btn-warning d-inline-block mx-3 button-style decrement-button" onClick={decrement}>-</button>
                </div>
            </div>    
        </>
    );
};

export default Counter;