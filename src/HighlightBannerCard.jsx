import React from 'react';
import './HighlightBannerCard.css';

const HighlightBannerCard = () => {
    return (
        <div className="banner-card-container">
            <div className="banner-text-content">
                <h2 className="banner-title">Plan Your Next Adventure</h2>
                <p className="banner-subtitle">Discover Amazing Flight Deals with Shopkart!</p>
                
                <button className="explore-button">
                    Explore Flights <span>❯</span>
                </button>
            </div>
        </div>
    );
};

export default HighlightBannerCard;