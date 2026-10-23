import Carousel from 'react-bootstrap/Carousel';
import ImageOne from '../../assets/6c86c8fc-71a2-49d6-81fe-db13fc8e8fca.png'
import Styles from '../Banner/Banner.module.css';
import { Link } from 'react-router-dom';

function Banner(){
return(
<div className={Styles.BannerContainer}>
<Carousel className='position-relative'>

{/* First */}
<Carousel.Item className={Styles.Caption}>
<img src={ImageOne} className={Styles.BannerOne} alt="" />
<Carousel.Caption className={Styles.BannerCaption}>
<h4 className={`mb-lg-1 mb-0 mb-md-0 ${Styles.SummerSale}`}>SUMMER SALE</h4>
<h2 className={`mb-lg-1 mb-1 mb-md-1 ${Styles.DiscountOff}`}>Get Up to <span className={Styles.highlight}>50% Off</span></h2>
<h3 className={`mb-lg-2 mb-1 mb-md-1 ${Styles.LatestCollection}`}>On Latest Collections</h3>
<p  className={`${Styles.DiscoverAmazing} mb-1 mb-md-1 mb-lg-2`}>Discover the latest styles and enjoy exclusive deals on your favourite brands.</p>
<p className={`mb-lg-3 mb-1 mb-md-2 ${Styles.LimitedOffer}`}>Limited Time Offer</p>
<Link to="/Deals/Men" className={Styles.ShopNowButton}>Shop Now <i className="fa-solid fa-arrow-right ps-1"></i></Link>
</Carousel.Caption>
</Carousel.Item >

{/* Second */}
<Carousel.Item className={Styles.Caption}>
<img src={ImageOne} className={Styles.BannerOne} alt="" />
<Carousel.Caption className={Styles.BannerCaption}>
<h4 className={`mb-lg-1 mb-0 mb-md-0 ${Styles.SummerSale}`}>SUMMER SALE</h4>
<h2 className={`mb-lg-1 mb-1 mb-md-1 ${Styles.DiscountOff}`}>Get Up to <span className={Styles.highlight}>50% Off</span></h2>
<h3 className={`mb-lg-1 mb-1 mb-md-1 ${Styles.LatestCollection}`}>On Latest Collections</h3>
<p  className={`${Styles.DiscoverAmazing} mb-1 mb-md-1 mb-lg-2`}>Discover the latest styles and enjoy exclusive deals on your favourite brands.</p>
<p  className={`mb-lg-3 mb-1 mb-md-2 ${Styles.LimitedOffer}`}>Limited Time Offer</p>
<Link to="/Deals/Men" className={Styles.ShopNowButton}>Shop Now <i className="fa-solid fa-arrow-right ps-1"></i></Link>
</Carousel.Caption>
</Carousel.Item>

{/* Third */}
<Carousel.Item className={Styles.Caption}>  
<img src={ImageOne} className={Styles.BannerOne} alt="" />
<Carousel.Caption className={Styles.BannerCaption}>
<h4 className={`mb-lg-1 mb-0 mb-md-0 ${Styles.SummerSale}`}>SUMMER SALE</h4>
<h2 className={`mb-lg-1 mb-1 mb-md-1 ${Styles.DiscountOff}`}>Get Up to <span className={Styles.highlight}>50% Off</span></h2>
<h3 className={`mb-lg-2 mb-1 mb-md-1 ${Styles.LatestCollection}`}>On Latest Collections</h3>
<p  className={`${Styles.DiscoverAmazing} mb-1 mb-md-1 mb-lg-2`}>Discover the latest styles and enjoy exclusive deals on your favourite brands.</p>
<p  className={`mb-lg-3 mb-1 mb-md-2 ${Styles.LimitedOffer}`}>Limited Time Offer</p>
<Link to="/Deals/Men" className={Styles.ShopNowButton}>Shop Now <i className="fa-solid fa-arrow-right ps-1"></i></Link>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
</div>
)
}
export default Banner;