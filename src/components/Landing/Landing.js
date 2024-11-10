import React from 'react';
import './Landing.css';
import AuctionGrid from '../AuctionGrid/AuctionGrid';


const Landing = () => {
    return (
        <div className='container'>
            <img className='landing-container' src="/Images/girl-image.svg" ></img>
            <div>
                <AuctionGrid />
            </div>
        </div>
    );
};

export default Landing;
