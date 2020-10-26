import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@mdi/react';
import { mdiInstagram } from '@mdi/js';
import {mdiWhatsapp } from '@mdi/js';
import { mdiTwitter } from '@mdi/js';
import './Footer.scss';

const Footer = () => {
    return(
        <>
            <footer>
                <div className="container-fluid bg-dark">
                    <div className="row no-gutters">
                        <div className="col-md-6 text-center my-5">
                            <h3 className="footer-text">FIND US</h3>
                        </div>
                        <div className="d-flex col-md-3 text-center my-5 justify-content-around mx-auto">
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><Icon path={mdiInstagram} className="instagram-icon" /></a>
                            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><Icon path={mdiWhatsapp} className="whatsapp-icon" /></a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><Icon path={mdiTwitter} className="twitter-icon" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    ); 
};

export default Footer;