import React from 'react';
import './ProductShowcase.css';

const ProductShowcase = () => {
    // 9 items to create exactly 3 rows of 3
    const products = [
        { id: 1, title: "Wireless Headphones", img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/76b00ca7f79b8c25.jpg?q=80" },
        { id: 2, title: "Smart Watch", img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/bbd0f624384b2368.jpg?q=80" },
        { id: 3, title: "Bluetooth Speaker",img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/7b7192e5bcaad206.jpg?q=80" },
        { id: 4, title: "Power Bank", img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/6cffa3fff32ba438.jpg?q=80" },
        { id: 5, title: "Gaming Keyboard", img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ab238cef85625011.jpg?q=80" },
        { id: 6, title: "Gaming Mouse", img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ae9288e493e946e7.jpg?q=80" },
        { id: 7, title: "USB-C Hub",img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/49ebcb61294a66b1.jpg?q=80" },
        { id: 8, title: "Webcam 1080p", img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/e09de41ee78bd4d0.jpg?q=80" },
        { id: 9, title: "Laptop Stand",  img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/20b1822720e11aad.jpg?q=80" }
    ];

    return (
        <div className="card-only-grid">
            {products.map((item) => (
                <div key={item.id} className="shelf-card">
                    <div className="img-wrapper">
                        <img src={item.img} alt={item.title} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductShowcase;