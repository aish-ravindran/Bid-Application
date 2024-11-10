import React from 'react';
import './Landing.css';
import AuctionGrid from '../AuctionGrid/AuctionGrid';


const Landing = () => {
    return (
        <div>
            <div className='landing-container' />
            <div>
                <AuctionGrid />
            </div>
        </div>
    );
};

export default Landing;
