import Style from './NewArrivalsBanner.module.css'
import ImageOne from '../../../assets/7b5cbd34-4b68-4874-850b-cdb8aec9c470.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NewArrivalsBanner(){
return(
<section className={Style.NewArrivalsBanner}>
<div className={Style.BannerContainer}>
<img src={ImageOne} className={Style.BannerImage} alt="" />
<Row className={`align-items-center ${Style.BannerRow}`}>
<Col lg={6}>
<div className={Style.BannerContent}>
<div className={`${Style.BreadCrumb} mb-lg-0`}>
<span className={Style.Home}>Home  /</span>  
<span className={Style.Shop}> NewArrivals</span>
</div>
<h1 className={Style.NewArrivals}>New <span> Arrivals</span></h1>
<p className={Style.Discover}>Discover our latest trends and fresh styles just for you</p>
</div>
</Col>
</Row>

</div>
</section>

    )
}

export default NewArrivalsBanner;