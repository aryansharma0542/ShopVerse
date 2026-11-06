import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Style from './ShopBanner.module.css'

function ShopBanner(){
return(
<div className={Style.ShopContainer}>
<Row className='m-0'>
  <Col lg={12} className='px-0'>
<div className={Style.ShopBanner}>
  <div className={Style.Content}>
  <div className={`${Style.BreadCrumb} mb-md-0`}>
    <span className={Style.Home}>Home  /</span>  
    <span className={Style.Shop}> Shop</span>
</div>
<h1 className={`${Style.ShoppingHeading} mb-lg-0 mt-0 mt-lg-0 mt-md-0`}>Shop</h1>
<p className={`${Style.DiscoverProducts} mt-0 mt-lg-0 mb-0 mt-md-0 mb-md-0 mb-lg-0`}>Discover our wide range of products.</p>
  </div>
</div>
</Col>
</Row>
</div>
)
}
export default ShopBanner;