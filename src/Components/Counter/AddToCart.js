import React, { useContext } from 'react'; 
import {CartContext} from '../../Contexts/cartContext';

const AddToCart = ({id, counter, img, description, name, price}) => {
    const { addProduct }  = useContext(CartContext);

    return(
        <button type="button" className="btn btn-success btn-lg px-4" onClick={() => addProduct(id, counter, img, description, name, price)}> Add To Cart ({counter})</button> 
    );
};

export default AddToCart;