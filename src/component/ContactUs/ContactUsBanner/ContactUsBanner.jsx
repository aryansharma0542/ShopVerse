import Style from '../ContactUsBanner/ContactUsBanner.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageOne from '../../../assets/3c4f7905-fd32-4bff-9f40-472ae2dbe0f8 (1).png'

function ContactUsBanner(){
    return(
<div className={`${Style.ContactUsContainer}`}>
<div className={`${Style.BreadCrumb} mb-md-2 mb-1 mb-lg-2`}>
Home  
<i className="fa-solid fa-angle-right"></i>
Contact Us
</div>
<Row className='gx-0'>
<Col md={12} className='px-0 mx-0'>
<div className='position-relative'>
<div  className={Style.ContactImageBanner}>
    <img src={ImageOne} className={Style.ImageOne} alt="" />
</div>
<div className={`${Style.ContactImageBannerContent} p-lg-4`}>
<span className={`${Style.ContactUs} mb-lg-2`}>Contact Us</span>
<h1 className={`${Style.ContactHeading} mb-md-0 mb-lg-2`}>We're Here to <strong className={Style.Help}>Help!</strong></h1>
<p className={`mb-md-0 mb-lg-1 mb-0 mb-sm-0 ${Style.para}`}>Have a question, feedback or need support?</p>
<p className={`${Style.para}  ${Style.Ourteam} mb-md-0`}>Our team is always ready to assist you.</p>
</div>
</div>
</Col>
</Row>
</div>
    )
}
export default ContactUsBanner;