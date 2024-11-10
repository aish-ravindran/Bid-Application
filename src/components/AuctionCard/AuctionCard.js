import React from 'react';
import './AuctionCard.css';

const AuctionCard = ({ auction }) => {
  return (
    <div className='productCard'>
      <div className='productImgContainer'>
        <img className='productImg' src={auction.img} alt={auction.title} />
      </div>
      <h4 className='productTitle'>{auction.title}</h4>
      <div className='priceContainer'>
        <p>Minimum Bid: ${auction.minBid}</p>
        <p>Current Bid: ${auction.currentBid}</p>
      </div>
      <button className='bidButton'>Bid now</button>
    </div>
  );
};

export default AuctionCard;
