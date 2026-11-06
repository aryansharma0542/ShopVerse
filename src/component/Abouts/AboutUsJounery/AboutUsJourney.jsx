import Style from '../AboutUsJounery/AboutUsJourney.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageTwo from '../../../assets/51f00fb9-4caa-416b-b2ea-0213e567132c.png'

function AboutUsJourney(){
    return(
<div className={Style.FiveContainer}>
<Row className='gx-0'>
<Col lg={12} className='px-0 mx-0'>
<div className="position-relative">
<div className={`${Style.Capital} overflow-hidden px-0 mx-0`}>
<img src={ImageTwo} className={`${Style.PartOfJourney} overflow-hidden px-0 mx-0`}  alt="" />
</div>
<div className={`${Style.ContentBox} text-center text-lg-start`}>
<h1 className={Style.Journey}>Be a Part of Our Journey</h1>
<p className= {`d-inline-block mb-2 ${Style.Joining}`}>Join thousands of happy customers who shop with confidence at ShopVerse.</p>
<p className={` ${Style.Joining} mb-md-2 mb-md-3 mb-lg-2`}>ShopVerse started with a simple data to bring high-quality products to everyone at the best prices . What begans as a small initiative has now grown into a trusted online store serving thousand of customers accross india.</p>
<button className={Style.ShopNow}>Shop Now <i className="fa-solid fa-arrow-right ps-1"></i></button>
</div>
</div>
</Col>
</Row>
</div>
    )
}
export default AboutUsJourney;