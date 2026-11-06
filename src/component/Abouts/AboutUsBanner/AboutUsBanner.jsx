import Style from '../AboutUsBanner/AboutUsBanner.module.css';
import ImageOne from '../../../assets/537fe279-48fe-4c2f-a1de-fd3c48650665.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutUsBanner(){
    return(
<Row>
<Col lg={12} className=''>
<div className={`position-relative ${Style.AboutUsBannerContainer}`}>
<div className=''>
<img src={ImageOne} className={Style.AboutImage} alt="" />
</div>
<div className={Style.ContentAbout}>
<h4 className= {` ${Style.AboutShopVerse} mb-1 mb-md-1`}>About ShopVerse</h4>
<h1 className={`${Style.ShoppingMade} mb-1 mb-md-1`}>
  Shopping Made <br className={Style.hideSm} />Simple for <strong className={Style.EveryOne}>EveryOne</strong>
</h1>
<p className={`${Style.AtShopVerse} mb-1 mb-md-2 mb-lg-2`}>
  At ShopVerse, we believe in making online shopping easy, reliable and enjoyable for every Customer.
</p>
<div>
    <button className={Style.btn}>Our Story <i className="fa-solid fa-arrow-right"></i></button>
</div>
</div>
</div>            
</Col>
</Row>

    )
}
export default AboutUsBanner;