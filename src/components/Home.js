import React from 'react';
import logo from '../logo.svg';

function Home()
{
    return(
        <React.Fragment>
            <div className='container p-3'>
            <p>Welcome To My Website</p>
            <img src={logo} width="1000" alt="logo"/>
            </div>
        </React.Fragment>

    );

}

export default Home; 