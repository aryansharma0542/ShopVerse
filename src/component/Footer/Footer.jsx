import Style from '../Footer/Footer.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageOne from '../../assets/1624bd56-2b6c-4d27-8933-7f3491fc9d2c (1).png'
import ImageTwo from '../../assets/a8a45d56-7da3-4bc6-a850-9eeb93a00132.png';
import ImageThree from '../../assets/5c42ec84-01ed-4169-b1d2-350dbc3b3dff.png';
import ImageFour from '../../assets/75ef6510-3e66-4509-bc1f-efd7ecc7d0a0.png';
import ImageFive from '../../assets/75ef6510-3e66-4509-bc1f-efd7ecc7d0a0 (1).png';
import ImageSix from '../../assets/1fba7020-8dfa-4b19-83d7-e6c219f39f63.png';
import ImageSeven from '../../assets/7b7c8b3a-9079-446a-81b4-2f9b3b9b394a.png';
import { useRef } from 'react';

function Footer(){
return(

<footer className={Style.footer}>
<div className={Style.FooterContainer}>
<Row>
<Col xs={12} lg={2} md={3} className='ps-lg-0 ps-md-4 pe-md-0 mb-3 mb-md-0'>
<div className='d-flex flex-column me-lg-2'>
<div className='mt-lg-4'>
<img src={ImageOne} className={Style.ImageOne} alt="" />
    </div>
    <div>
<p className={` ${Style.Para} mt-0`}>Your non-stop destination for quality products at the best prices. Happy Shopping</p>
    </div>
    <div className={`d-flex gap-4 ${Style.SocialMediaIcons}`}>
<a href=""><i className="fa-brands fa-instagram"></i></a>
<a href=""><i className="fa-brands fa-twitter"></i></a>
<a href=""><i className="fa-brands fa-facebook"></i></a>
<a href=""><i className="fa-brands fa-youtube"></i></a>
    </div>
</div>
</Col>

<Col xs={6} lg={1} md={3} className='ps-lg-0 ps-md-5 mb-3 mb-md-0'>
<div className='pt-0'>
<h4 className={Style.AllLabel}>Shop</h4>
</div>
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

<Col xs={6} lg={2} md={3} className='mb-3 mb-md-0'>
<div className='pt-0 ps-lg-4'>
<h4 className={Style.AllLabel}>Customer Services</h4>
</div>
<div  className={`${Style.footerLinksOne} ps-lg-4`}>
<a href="">Contact Us</a>
<a href="">FAQs</a>
<a href="">Shipping Policy</a>
<a href="">Track Order</a>
<a href="">Terms & Conditions</a>
<a href="">Privacy Policy</a>
</div>
</Col>


<Col xs={6} lg={1} md={3} className='ps-md-5 mb-3 mb-md-0'>
<div className='pt-0'>
<h4 className={Style.AllLabel}>Company</h4>
</div>
<div  className={`${Style.footerLinksOne}`}>
<a href="">About Us</a>
<a href="">Carrers</a>
<a href="">Blog</a>
<a href="">Press</a>
<a href="">Afflate Program</a>
</div>
</Col>

<Col xs={6} lg={2} md={6} className='ps-lg-4 ps-md-4 mt-md-4 mb-3 mb-md-0'>
<div className='pt-0'>
<h4 className={Style.AllLabel}>Contact</h4>
</div>
<div  className={Style.footerLinksOne}>
<a href="">+91 8278862795</a>
<a href="">support@shopverse.com</a>
<a href="">123. Shopping Street, New Delhi, India - 110010.</a>
<p className='d-lg-none'>ShopVerse.com</p>
</div>
</Col>


<Col xs={12} lg={3} md={6} className='ps-md-4'>
<div  className='mt-md-3 text-md-center'>
    <h5 className={`${Style.AcceptThis} mb-lg-2 mb-md-4`}>We Accept</h5>
</div>
<div className={`${Style.AllLabel} text-center`}>
<img src={ImageTwo} className={`${Style.payementsLogo} me-md-2 mb-md-2`} alt="" />
<img src={ImageThree}  className={`${Style.payementsLogo} me-md-2 mb-md-2`}  alt="" />
<img src={ImageFour}  className={`${Style.payementsLogo} me-md-2 mb-md-2`} alt="" />
<img src={ImageFive}  className={`${Style.payementsLogo} me-md-2 mb-md-2`} alt="" />
<img src={ImageSix}  className={`${Style.payementsLogo} me-md-2 mb-md-2`} alt="" />
<img src={ImageSeven}  className={`${Style.payementsLogo} me-md-2 mb-md-2`}  alt="" />
</div>
</Col>
</Row>
</div>

</footer>

)

}
export default Footer;