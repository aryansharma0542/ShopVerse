import Style from '../pages/Contact.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactUsBanner from '../component/ContactUs/ContactUsBanner/ContactUsBanner';
import ContactUsCustomerSupport from '../component/ContactUs/ContactUsCustomerSupport/ContactusCustomerSupport';
import CustomerUsFeedBackSupport from '../component/ContactUs/ContactUsFeedBack/ContactUsFeedBack';

function Contact(){
return(
    <>

<ContactUsBanner />
<ContactUsCustomerSupport />
<CustomerUsFeedBackSupport />
    </>
)
}
export default Contact;