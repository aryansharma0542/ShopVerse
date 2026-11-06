import Style from '../AboutUsTrust/AboutUsTrust.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { QualityPurposes } from '../../../data';

function AboutUsTrust(){
    return(
<div className={`${Style.FourthContainer}`}>
<Row className='g-3'> 
<Col lg={12} className='px-0'>
<div className='text-center'>
<span className={Style.OurValues}>OUR VALUES</span>
<h2 className={`${Style.WhatWeStand} mb-0`}>What we Stand for</h2>
</div>
</Col>
{QualityPurposes.map((items) => (
<Col lg={3} sm={6} xs={6} className='px-2 d-flex'>
<div className={` ${Style.QualityPurposesCard} d-flex  align-items-center`}>
<div className={`${Style.QualityPurposesBox}`}>
<img src={items.image} className={Style.QualityPurposesImage} alt="" />
</div>
<div className={Style.QualityPurposesContent}>
<h5 className={`${Style.heading} mb-lg-1 mb-md-1 mb-1`}>{items.heading}</h5>
<p className={`${Style.text} mb-lg-0 mb-md-0 mb-0`}>{items.text}</p>
</div>
</div>
</Col>
))}
</Row>
</div>

    )
}
export default AboutUsTrust;