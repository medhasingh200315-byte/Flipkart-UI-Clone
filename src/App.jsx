import React from "react";
import Header from "./Header.jsx";
import Categories from "./Categories.jsx";
import BannerCarousel from "./BannerCarousel.jsx";
import ProductGrid from "./ProductGrid.jsx";
import ProductShowcase from "./ProductShowcase.jsx";
import ProductGrid3x3 from "./ProductGrid3x3.jsx";
import HighlightBannerCard from "./HighlightBannerCard.jsx";
import SiteFooter from "./SiteFooter.jsx";
import './ProductGrid3x3.css';
import './Categories.css';
import './Header.css';
import './BannerCarousel.css';
import './ProductGrid.css';
import './ProductShowcase.css';
import './HighlightBannerCard.css';
import './SiteFooter.css';
const App = () => {
    return (
        <div>
            <Header />
            <Categories/>
            <BannerCarousel/>
            <ProductGrid/>
            <ProductShowcase/>
            <ProductGrid3x3/>
            <HighlightBannerCard/>
            <SiteFooter/>
        </div>
    );
}

export default App;