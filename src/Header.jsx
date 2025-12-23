const Header = () => {
    return (
        <div className="container">
            <header className="header">

                <div className="logo">
                    <img
                        src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-11f9e2.svg"
                        alt="Flipkart Logo"
                    />
                </div>

                <div className="search-container">
                    <div className="search-wrapper">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4lY9GU0JQoyneV_vVHBbNz5QGioGsOlS9Hw&s"
                            className="search-icon"
                            alt="search"
                        />
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search for Products, Brands and more"
                        />
                    </div>
                </div>

                <div className="nav-actions">
                    <div className="login">
                        <img
                            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-6bae67.svg"
                            className="login-icon"
                            alt="login"
                        />
                        <button className="login-button">Login</button>
                    </div>

                    <div className="cart">
                        <img
                            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-43eb4e.svg"
                            className="cart-icon"
                            alt="cart-logo"
                        />
                        <button className="cart-button">Cart</button>
                    </div>

                    <div className="seller">
                        <img
                            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-134a49.svg"
                            className="seller-icon"
                            alt="seller"
                        />
                        <button className="seller-button">Become a Seller</button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;