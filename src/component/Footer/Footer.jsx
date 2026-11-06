import Style from '../Footer/Footer.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import ImageOne from '../../assets/1624bd56-2b6c-4d27-8933-7f3491fc9d2c (1).png';
import ImageTwo from '../../assets/a8a45d56-7da3-4bc6-a850-9eeb93a00132.png';
import ImageThree from '../../assets/5c42ec84-01ed-4169-b1d2-350dbc3b3dff.png';
import ImageFour from '../../assets/75ef6510-3e66-4509-bc1f-efd7ecc7d0a0.png';
import ImageFive from '../../assets/75ef6510-3e66-4509-bc1f-efd7ecc7d0a0 (1).png';
import ImageSix from '../../assets/1fba7020-8dfa-4b19-83d7-e6c219f39f63.png';
import ImageSeven from '../../assets/7b7c8b3a-9079-446a-81b4-2f9b3b9b394a.png';

function Footer() {
    return (
        <footer className={Style.footer}>

            <div className={Style.FooterContainer}>

                <Row className="g-4">

                    {/* Brand */}
                    <Col xs={12} md={4} lg={2}>
                        <div className={Style.BrandSection}>

                            <img src={ImageOne} className={`mb-0  mb-lg-0 ${Style.ImageOne}`} alt="ShopVerse" />

                            <p className={`mb-1 ${Style.Para}`}>
                                Your non-stop destination for quality products
                                at the best prices. Happy Shopping
                            </p>

                            <div className={Style.SocialMediaIcons}>
                                <a href=""><i className="fa-brands fa-instagram"></i></a>
                                <a href=""><i className="fa-brands fa-twitter"></i></a>
                                <a href=""><i className="fa-brands fa-facebook"></i></a>
                                <a href=""><i className="fa-brands fa-youtube"></i></a>
                            </div>

                        </div>
                    </Col>

                    {/* Shop */}
                    <Col xs={6} md={4} lg={2}>
                        <h4 className={` ${Style.AllLabel} `}>Shop</h4>

                        <div className={Style.footerLinksOne}>
                            <a href="">All Products</a>
                            <a href="">Men</a>
                            <a href="">Women</a>
                            <a href="">Electronics</a>
                            <a href="">Home & Living</a>
                            <a href="">Sports</a>
                            <a href="">Beauty</a>
                        </div>
                    </Col>

                    {/* Customer Services */}
                    <Col xs={6} md={4} lg={2}>
                        <h4 className={Style.AllLabel}>Customer Services</h4>

                        <div className={Style.footerLinksOne}>
                            <a href="">Contact Us</a>
                            <a href="">FAQs</a>
                            <a href="">Shipping Policy</a>
                            <a href="">Track Order</a>
                            <a href="">Terms & Conditions</a>
                            <a href="">Privacy Policy</a>
                        </div>
                    </Col>

                    {/* Company */}
                    <Col xs={6} md={4} lg={2}>
                        <h4 className={Style.AllLabel}>Company</h4>

                        <div className={Style.footerLinksOne}>
                            <a href="">About Us</a>
                            <a href="">Careers</a>
                            <a href="">Blog</a>
                            <a href="">Press</a>
                            <a href="">Affiliate Program</a>
                        </div>
                    </Col>

                    {/* Contact */}
                    <Col xs={6} md={4} lg={2}>
                        <h4 className={Style.AllLabel}>Contact</h4>

                        <div className={Style.footerLinksOne}>
                            <a href="">+91 8278862795</a>
                            <a href="">support@shopverse.com</a>
                            <a href="">
                                123, Shopping Street, New Delhi,
                                India - 110010.
                            </a>
                        </div>
                    </Col>

                    {/* Payment Methods */}
                    <Col xs={12} md={4} lg={2}>

                        <h4 className={` ${Style.AcceptThis} ${Style.AllLabel}`}>
                            We Accept
                        </h4>

                        <div className={Style.PaymentMethods}>
                            <img src={ImageTwo} alt="Visa" />
                            <img src={ImageThree} alt="Mastercard" />
                            <img src={ImageFour} alt="American Express" />
                            <img src={ImageFive} alt="American Express" />
                            <img src={ImageSix} alt="UPI" />
                            <img src={ImageSeven} alt="PayPal" />
                        </div>

                    </Col>

                </Row>

            </div>

        </footer>
    );
}

export default Footer;