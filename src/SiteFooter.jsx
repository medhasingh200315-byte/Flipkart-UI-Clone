import React from 'react';
import './SiteFooter.css';

const SiteFooter = () => {
    return (
        <footer className="footer-main-wrapper">
            {/* Top Section with Links and Addresses */}
            <div className="footer-top-grid">
                <div className="footer-column">
                    <h4 className="column-title">ABOUT</h4>
                    <ul className="footer-links">
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Shopkart Stories</li>
                        <li>Press</li>
                        <li>Corporate Information</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4 className="column-title">GROUP COMPANIES</h4>
                    <ul className="footer-links">
                        <li>Shop</li>
                        <li>Ecommerce</li>
                        <li>Buy</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4 className="column-title">HELP</h4>
                    <ul className="footer-links">
                        <li>Payments</li>
                        <li>Shipping</li>
                        <li>Cancellation & Returns</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4 className="column-title">CONSUMER POLICY</h4>
                    <ul className="footer-links">
                        <li>Cancellation & Returns</li>
                        <li>Terms Of Use</li>
                        <li>Security</li>
                        <li>Privacy</li>
                        <li>Sitemap</li>
                        <li>Grievance Redressal</li>
                        <li>EPR Compliance</li>
                    </ul>
                </div>
                <div className="footer-column divider">
                    <h4 className="column-title">Mail Us:</h4>
                    <p className="address-text">
                         Shopkart Internet Private Limited,<br/>
                        India<br/>
                        CIN : 354657767<br/>
                        Telephone: 123456768 / 1234568897
                    </p>
                    <div className="social-section">
                        <span className="column-title">Social:</span>
                        <div className="social-icons">
                            {/* Placeholders for Social Icons */}
                            <span>f</span> <span>𝕏</span> <span>▶</span> <span>(0)</span>
                        </div>
                    </div>
                </div>
                <div className="footer-column">
                    <h4 className="column-title">Registered Office Address:</h4>
                    <p className="address-text">
                        Shopkart Internet Private Limited,<br/>
                        India<br/>
                        CIN : 354657767<br/>
                        Telephone: 123456768 / 1234568897
                    </p>
                </div>
            </div>

            {/* Bottom Bar Section */}
            <div className="footer-bottom-bar">
                <div className="bottom-item">🛒 Become a Seller</div>
                <div className="bottom-item">🎯 Advertise</div>
                <div className="bottom-item">🎁 Gift Cards</div>
                <div className="bottom-item">❓ Help Center</div>
                <div className="copyright-text">© 2007-2025 Shopkart.com</div>
                <div className="payment-icons">
                    {/* Placeholder for Payment Method Images */}
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-69e7ec.svg" alt="Payments" />
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;