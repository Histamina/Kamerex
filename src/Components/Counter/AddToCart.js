import React, { useContext } from 'react'; 
// import { CartContext } from '../../Contexts/CartContext';
// import Counter from '../Counter/Counter';

const AddToCart = ({id, counter}) => {
    return(
        <button type="button" className="btn btn-success btn-lg px-4" id={id}>Add To Cart ({counter})</button> 
    );
};

export default AddToCart;