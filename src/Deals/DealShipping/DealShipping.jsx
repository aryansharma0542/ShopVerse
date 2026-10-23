import Style from './DealShipping.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShippingWar from '../../component/ShippingWarrenty/ShippingWar';
function DealShipping(){
return(
<>
<section>
  <div className={Style.BannerContainer}>
<Row className='gx-0'>
<Col lg={6} md={6} className='px-lg-1 mb-3 mb-md-0 px-md-1'>
  <div className={`${Style.ImageBannerOne} p-md-2 p-lg-3`}>
  <div className={`${Style.Content} ps-md-0 ps-lg-0`}>
    <h3 className={` ${Style.FlashDeals} mb-1`}>Flash Deals<br />On Electronics</h3>
      <p className={` ${Style.Discount} mb-1 mb-md-2 mb-lg-2`}>Up to <span className={Style.PercentOFF}>50% Off</span></p>
      <button className={Style.ShopBtn}>Shop Now <i className="fa-solid fa-arrow-right"></i></button>
  </div>
</div>
</Col>

<Col lg={6} md={6} className='px-lg-1 px-md-1'>
  <div className={`${Style.ImageBannerTwo} p-md-2 p-lg-3`}>
  <div className={`${Style.Content} ps-md-1 ps-lg-0`}>
    <h3 className={` ${Style.FlashDeals} mb-1`}>Home Upgrades<br />For Less</h3>
      <p className={`${Style.Discount} mb-0 mb-md-2 mb-lg-2`}>Up to <span className={Style.PercentOFF}>50% Off</span></p>
      <button className={Style.ShopBtn}>Shop Now <i className="fa-solid fa-arrow-right"></i></button>
  </div>
</div>
</Col>
</Row>
</div>
</section>
<section>
  <ShippingWar />
</section>
</>

)
}
export default DealShipping;