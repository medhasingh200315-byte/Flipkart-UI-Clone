import React from 'react';
import './ProductGrid3x3.css';

const ProductGrid3x3 = () => {
    // Data structure: 3 major containers, each with 4 product items
    const sections = [
        {
            id: 1,
            category: "Wedding Specials",
            items: [
                { id: 101, name: "Dry Fruits", img: "https://rukminim2.flixcart.com/image/210/210/xif0q/nut-dry-fruit/y/c/n/1-mix-dry-fruit-panchmeva-1-mason-jar-hariyam-original-imah7ghgafgcsyxq.jpeg?q=80" },
                { id: 102, name: "Womens Lhenga", img: "https://rukminim2.flixcart.com/image/210/210/l3vxbbk0/skirt/k/s/f/m-1-0020-dollfashion-original-imageuhzph4t7yud.jpeg?q=80" },
                { id: 103, name: "Makeup Kits & Combo", img: "https://rukminim2.flixcart.com/image/210/210/xif0q/makeup-kit/k/b/h/-original-imaheppu9bwqmhbt.jpeg?q=80" },
                { id: 104, name: "Men's Sherwani", img: "https://rukminim2.flixcart.com/image/210/210/xif0q/sherwani/a/o/h/m-hoc-kurta-pjma-102-mango-houseofcommon-original-imah5x2zguvyyjx8.jpeg?q=80" }
            ]
        },
        {
            id: 2,
            category: "Shop for Womens Lhenga & Cholis",
            items: [
                { id: 201, name: "Top Rated", img: "https://rukminim2.flixcart.com/image/210/210/xif0q/lehenga-choli/v/f/d/free-3-4-sleeve-big-shagun-white-trivety-original-imahhmzzqpwayerj.jpeg?q=80" },
                { id: 202, name: "Top Quality", img: "https://rukminim2.flixcart.com/image/210/210/xif0q/lehenga-choli/f/u/a/xs-short-sleeve-412-myra-pink-b-wht-purimaa-original-imah8j9ad3x7usk6.jpeg?q=80" },
                { id: 203, name: "Best Brands", img: "https://rukminim2.flixcart.com/image/210/210/xif0q/lehenga-choli/i/h/x/free-full-sleeve-party-wear-lehenga-wedding-lehenga-traditional-original-imahdbh8wqafbhcp.jpeg?q=80" },
                { id: 204, name: "Affordable Prices", img: "https://rukminim2.flixcart.com/image/210/210/xif0q/lehenga-choli/3/h/8/free-3-4-sleeve-l-007-sneha-fashion-original-imah3d3uyyfkkxzu.jpeg?q=80" }
            ]
        },
        {
            id: 3,
            category: "Shop for Speaker",
            items: [
                { id: 301, name: "Upto 70% off", img: "https://rukminim2.flixcart.com/image/210/210/xif0q/speaker/smart-speaker/5/p/a/m3-portable-bluetooth-mini-speaker-dynamic-metal-sound-with-high-original-imah5ghbz6tqn68z.jpeg?q=80" },
                { id: 302, name: "Best Brands", img: "https://rukminim2.flixcart.com/image/210/210/xif0q/speaker/mobile-tablet-speaker/r/j/n/m412sp-portable-dynamic-thunder-sound-with-high-bass-mz-original-imahguccj5mnbmku.jpeg?q=80" },
                { id: 303, name: "Affordable Options", img: "https://rukminim2.flixcart.com/image/210/210/xif0q/speaker/home-audio-speaker/v/o/e/mini-boost-4-bluetooth-speaker-wireless-pocket-size-m4-16-original-imah9a7bhurkzszm.jpeg?q=80" },
                { id: 304, name: "Top Rated", img: "https://rukminim2.flixcart.com/image/210/210/xif0q/bulb/x/j/g/1-wireless-music-playing-light-lamp-with-remote-controller-light-original-imah2p87phpqdhk3.jpeg?q=80" }
            ]
        },
        {
            id: 4,
            category: "Home Decor & Furniture",
            items: [
                { id: 401, name: "Wall Clocks", img: "https://rukminim2.flixcart.com/image/210/210/xif0q/shopsy-wall-clock/g/8/y/cherry-art-amori-small-cherry-amori-1601-analog-maxwell-original-imagjvtdsjfaspzk.jpeg?q=80" },
                { id: 402, name: "Blankets", img: "https://rukminim2.flixcart.com/image/210/210/xif0q/blanket/g/l/f/-original-imahfjgfnexjwg22.jpeg?q=80" },
                { id: 403, name: "Mats", img: "https://rukminim2.flixcart.com/image/210/210/kz5vwy80/mat/v/c/r/medium-cotton-door-mats-5-01-asb-original-imagb85ruu47zzjy.jpeg?q=80" },
                { id: 404, name: "Bedsheet", img: "https://rukminim2.flixcart.com/image/210/210/xif0q/bedsheet/k/x/p/fitted-bedsheet-premium-blue-butterfly-1-fitted-bedsheet-premium-original-imahhgnv7fdj4yvr.jpeg?q=80" }
            ]
        }
    ];

    return (
        <div className="main-grid-row">
            {sections.map((section) => (
                <div key={section.id} className="big-container">
                    <h3 className="category-title">{section.category}</h3>
                    <div className="four-card-grid">
                        {section.items.map((product) => (
                            <div key={product.id} className="small-product-card">
                                <div className="card-img-box">
                                    <img src={product.img} alt={product.name} />
                                </div>
                                <p className="card-label">{product.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid3x3;