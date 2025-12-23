import React from 'react';
import './ProductGrid.css';

const ProductGrid = () => {
    const products = [
        { id: 1, name: "Projector", price: "₹2,999", oldPrice: "₹5,999", discount: "50% off", img: "https://rukminim2.flixcart.com/image/120/120/xif0q/projector/x/s/t/i9-pro-max-fhd-1080p-e03i31-10-e03i31-led-projector-egate-original-imahgxvbyhh7uejw.jpeg?q=80", rating: 4.5 },
        { id: 2, name: "Bluetooth Speaker Pro", price: "₹1,499", oldPrice: "₹3,999", discount: "62% off", img: "https://rukminim2.flixcart.com/image/120/120/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=80", rating: 4.2 },
        { id: 3, name: "Monitors", price: "2999", oldPrice: "₹5,999", discount: "50% off", img: "https://rukminim2.flixcart.com/image/120/120/xif0q/monitor/c/n/8/-original-imahf4rbgwtzquxh.jpeg?q=80", rating: 4.0 },
        { id: 4, name: "Fastrack Smartwatch", price: "₹1,299", oldPrice: "₹2,499", discount: "48% off", img: "https://rukminim2.flixcart.com/image/120/120/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=80", rating: 4.7 },
        { id: 5, name: "Printers", price: "₹1,299", oldPrice: "₹2,499", discount: "48% off", img: "https://rukminim2.flixcart.com/image/120/120/xif0q/printer/s/8/d/-original-imafkykednshkhx5.jpeg?q=80", rating: 4.7 }
    ];

    return (
        <div className="product-container-full">
            <div className="grid-header">
                <h2>Top Deals</h2>
            </div>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <div className="product-img-wrapper">
                            <img src={product.img} alt={product.name} />
                        </div>
                        <div className="product-info">
                            <h4 className="product-name">{product.name}</h4>
                            <div className="rating-pill">{product.rating} ★</div>
                            <div className="price-row">
                                <span className="current-price">{product.price}</span>
                                <span className="old-price">{product.oldPrice}</span>
                                <span className="discount-percent">{product.discount}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;