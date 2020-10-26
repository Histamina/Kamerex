import React, { useContext, useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout.scss'
import { CartContext } from '../../Contexts/cartContext';

const CheckoutForm = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [repeatEmail, setRepeatEmail] = useState('');
    const { userData } = useContext(CartContext);

    const handleName = (e) => setName(e.target.value);

    const handleLastName = (e) => setLastName(e.target.value);

    const handleEmail = (e) => setEmail(e.target.value);

    const handleRepeatEmail = (e) => setRepeatEmail(e.target.value);

    const compareEmailValues = () => {
        if(email !== repeatEmail) {
            alert('Emails must match. Try again.');
        } else if(name === "" || lastName === "" || email === "" || repeatEmail === "") {
            alert('You must complete the form. Try again.')
        } else {
            userData(name, lastName, email);
        };
    };
    
    return (
        <>  
            <div className="container-fluid container-form">
                <div className="row no-gutters justify-content-center">
                    <div className="d-flex flex-column form-wrapper py-2 px-4">
                        <h2 className="text-center">Enter Your Data To Finish Your Order</h2>
                        <form className="col-md-8 mx-auto">
                            <div class="form-group">
                                <label for="inputName">Name</label>
                                <input type="text" class="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Juana" onChange={handleName} value={name}/>
                            </div>
                            <div class="form-group">
                                <label for="inputLastName">Last Name</label>
                                <input type="text" class="form-control" id="inputLastName" placeholder="Lopez" onChange={handleLastName} value={lastName}/>
                            </div>
                            <div class="form-group">
                                <label for="inputEmail">Email</label>
                                <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="jlopez@mail.com" onChange={handleEmail} value={email}/>
                            </div>
                            <div class="form-group">
                                <label for="inputEmail">Repeat Email</label>
                                <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="jlopez@mail.com" onChange={handleRepeatEmail} value={repeatEmail}/>
                            </div>
                            <button onClick={() => compareEmailValues()} type="button" class="btn btn-primary mb-3">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutForm; 