import React from 'react'
import './Footer.css'
import FootImage from '../Media/footer.svg'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'

function Footer() {
    return (
        <>
            <div className='footer-container'>
                <div className='footer'>
                    <img className='foot-image' src={FootImage} />
                    <p className='foot-text'> 
                    © 2022 Web3 Platforms Private Limited. All rights reserved.
                    </p>
                </div>
                <hr />
                <h4 className='love'>Made with ❤️ in Bharat.</h4>
                <div className='contacts'>
                    <h3>Contact Us</h3>
                <FaFacebook style={{fontSize:"32px",marginTop:"10px"}}/>
                    <FaTwitter style={{fontSize:"32px",marginTop:"10px"}}/>
                    <FaInstagram style={{fontSize:"32px",marginTop:"10px"}}/>
                    <FaLinkedin style={{fontSize:"32px",marginTop:"10px"}}/>
                </div>

            </div>

        </>
    )
}

export default Footer