import Style from '../AboutUsGrowingComunity/AboutUsGrowingCommunity.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageFive from '../../../assets/6437c161-ae4b-473a-a25b-60776b91477c.png'
function AboutUsGrowingCommunity(){
return(
<div className={Style.containerThree}>
<Row className='d-flex align-items-center'>
<Col lg={6} md={12} className='mb-3  mb-md-4 mb-lg-0'>
<div>
<img src={ImageFive} className={Style.BoxShopVerse} alt="" />
</div>
</Col>
<Col lg={6} md={12} className={`pe-lg-2 mb-3 mb-md-4 mb-md-0 mb-lg-0`}>
<div className={` d-flex align-items-center ${Style.GrowingCommunitysection}`}>
<div className='px-lg-1 text-center text-lg-start'>
<p className={`mb-lg-0 mb-md-1 mb-1 ${Style.OurStory}`}>OUR STORY</p>
<h3 className={`mb-lg-1  ${Style.GrowingCommunity}`}>From a Simple Idea <br /> to a <span className={Style.GrowingCommunityIdeas}>Growing Community</span></h3>
<p className={`${Style.ShopVerseStarted} mb-2 mb-sm-3 mb-md-3 mb-lg-1`}>ShopVerse started with a simple data - to bring high-quality products to everyone at the best prices. What begans as a small initiative has now grown into a trusted online store serving thousand of customers accross india.</p>
<p className={`${Style.ConstantlyWorKing} mb-2 mb-sm-3 mb-md-3 mb-lg-1`}>We are constantly working to improve your shopping experience with better products, faster delivery and dedicated support.</p>
<button className={Style.ReadMore}>Read More <i className="fa-solid fa-arrow-right ps-1"></i></button>    
</div>
</div>
</Col>
</Row>
</div>
)
}
export default AboutUsGrowingCommunity;