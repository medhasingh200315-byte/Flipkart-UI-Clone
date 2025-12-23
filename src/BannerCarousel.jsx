import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import './BannerCarousel.css';

const BannerCarousel = () => {
    // Array of your banner images
    const banners = [
        "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/a64908ba9bf2fe36.jpg?q=80",
        "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1338bd4fc60390d8.jpg?q=80",
        "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/52dd674b71b9ee41.png?q=80",
        "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/66faf3950cda0b7a.png?q=80",
        "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/2ac931fa8d18af31.jpg?q=80"

    ];

    return (
        <div className="carousel-section">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="mySwiper"
            >
                {banners.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Banner ${index + 1}`} className="banner-image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerCarousel;