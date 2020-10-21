import React, { useState, useEffect } from 'react';
import { getFirestore } from '../../Firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const Dropdown = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        const categoryCollection = db.collection('categories');
        categoryCollection.get()
        .then((querySnapshot) => {
            if(!querySnapshot.size === 0) {
                console.log('Categories don\'t exist');
                setCategories([]);
            } else {
                console.log('Categories found');
                const categories = querySnapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()};
                });
                setCategories(categories);
            } 
        })
        .catch((error) => {
            console.log("Error searching categories: ", error);
        })
    }, []);

    return(
        <>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    PRODUCTS
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    { categories.map(category => 
                        <NavLink key={category.id} exact to={`/categories/${category.id}`} activeClassName="active" className="dropdown-item">
                            {category.name}
                        </NavLink>)
                    }
                </div>
            </div>
        </>
    );
};

export default Dropdown;