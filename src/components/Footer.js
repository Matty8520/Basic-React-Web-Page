import React from 'react';
import {FaFacebook, FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa';

function Footer()
{
    return(
        <React.Fragment>
            <footer id="footerbg" className='p-4'>

                <section className='d-flex justify-content-center'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connect with us on Social Media</span>
                    </div>
                    <div>
                    <a href=''><FaFacebook/></a>
                    <a href=''><FaTwitter/></a>
                    <a href=''><FaLinkedin/></a>
                    <a href=''><FaYoutube/></a>

                    </div>

                </section>

                <div className='container p-4'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <h5>About Us</h5>
                        <p>Welcome to my basic react website</p>
                    </div>

                    <div className='col-sm-2'>
                        <h5>Navigation</h5>
                        <p><a href=''>Home</a></p>
                        <p><a href=''>About Us</a></p>
                        <p><a href=''>Contact Us</a></p>
                    </div>

                    <div className='col-sm-2'>
                        <h5>Services</h5>
                        <p><a href=''>Home</a></p>
                        <p><a href=''>About Us</a></p>
                        <p><a href=''>Contact Us</a></p>
                    </div>

                    <div className='col-sm-2'>
                        <h5>Address</h5>
                        <p>Philippines</p>
                        <p>Po box no-1234</p>
                        <p>09622940911</p>
                    </div>


                </div>




                </div>
            </footer>
        </React.Fragment>

    );

}

export default Footer; 