import Style from '../ContactUsCustomerSupport/ContactUsCustomer.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardContactDetails } from '../../../data';

function ContactUsCustomerSupport(){
return(
<div className={Style.ContactCardContainer}>
<Row className='mx-0 align-items-stretch'>
{CardContactDetails.map((product) => (
<Col lg={3} md={3} sm={6} xs={6} key={product.heading} className='ps-md-1 mb-2 mb-md-0 px-1 pe-md-1 px-md-1'>
<div className={Style.ContactCard}>
<div className={`${Style.CardLogo} d-flex justify-content-center align-items-center`}>
    <img src={product.image} alt="" />
</div>
<div className={`${Style.CardContentCard} flex-grow-1`}>
    <h4 className={`mb-lg-0 mb-0 ${Style.heading}`}>{product.heading}</h4>
    <a href="" className={`mb-lg-0 mb-0 ${Style.Contact} `}>{product.contact}</a>
    <p className={Style.text}>{product.text}</p>
</div>
</div>
</Col>
))}
</Row>
</div>
)
}
export default ContactUsCustomerSupport;