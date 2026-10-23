import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Style from '../SeondBanner/SecondBanner.module.css';

function SecondBanner(){
return(
<div className={Style.SecondBannerContainer}>
<Row  className=''> 
{/* First Banner */}
<Col md={6} lg={4} sm={12}  className={` ${Style.SecondBannerPadd} px-md-1 mb-md-2 mb-sm-2 px-sm-1 mb-lg-0` }>
<div className={Style.SecondBackImgOne}>
<Row className='m-0'>
<Col md={6} sm={6} className='p-0'>
<div className={Style.SecondBannerContent}>
<p className={`mb-lg-1 mb-1 mb-md-1  ${Style.Discount}`}>Up to 30% OFF</p>
<h3 className={`mb-lg-1 ${Style.MegaSale}`}>Electronics Mega <br /> Sale</h3>
<p className={`mb-md-2  ${Style.DealsBrands}`}>Grab the best deals on top brands</p>
<a href="" className={Style.shopNow}>Shop Now</a>
</div>
</Col>
</Row>
</div>
</Col>

<Col md={6} lg={4} sm={12} className={` ${Style.SecondBannerPadd} px-md-1 px-sm-1 mb-sm-2  mb-md-2 mb-lg-0`}>
{/* Second Banner */}
<div className={Style.SecondBackImgTwo}>
<Row className='m-0'>
<Col md={6} sm={6}  className='p-0'>
<div className={Style.SecondBannerContent}>
<p className={`mb-lg-1 mb-md-1 mb-0  ${Style.DiscountTwo}`}>New Collection</p>
<h3 className={`mb-lg-1 ${Style.MegaSale}`}>Trendy Fashion For <br /> You</h3>
<p className={` mb-md-2 ${Style.DealsBrands}`}>Grab the best deals on top brands</p>
<a href="" className={Style.shopNowTwo}>Shop Now</a>
</div>
</Col>
</Row>
</div>
</Col>

<Col md={6} lg={4} sm={12} className={`${Style.SecondBannerPadd} px-md-1 px-sm-1`}>
{/* Third Banner */}
<div className={Style.SecondBackImgThree}>
<Row className='m-0'>
<Col md={6} sm={6} className='p-0'>
<div className={Style.SecondBannerContent}>
<p className={`mb-lg-1 mb-0 mb-md-1 ${Style.DiscountThree}`}>Up to 40% OFF</p>
<h3 className={`mb-lg-1 ${Style.MegaSale}`}>Home & Living<br />Essentials</h3>
<p className={`mb-md-2 ${Style.DealsBrands}`}>Make your home clean, smarter and better</p>
<a href="" className={Style.shopNowThree}>Shop Now</a>
</div>
</Col>
</Row>
</div>
</Col>
</Row>
</div>
)
}
export default SecondBanner;