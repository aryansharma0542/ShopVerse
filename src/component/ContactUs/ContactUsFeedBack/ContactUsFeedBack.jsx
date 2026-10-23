import Style from '../ContactUsFeedBack/ContactUsFeedback.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Form  from 'react-bootstrap/Form';
import { useState } from 'react';

function CustomerUsFeedBackSupport(){
          const [formMessage, setFormMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formValues = new FormData(form);
        const data = Object.fromEntries(formValues.entries())
        if(!data.name.trim() || !data.email.trim() || !data.subject.trim() || !data.feedback.trim()){
        setFormMessage("please fill all the fields");
        return;
        }
        console.log(data);
        setFormMessage("Your message has been submitted successfully!");
        form.reset();
    }
    return(
<div className={Style.CardBottomContainer}>
<Row className='mx-0 align-items-strech g-4'>
<Col lg={6} md={12} className='px-md-0 px-0 ps-lg-0 pe-lg-2 mb-lg-0'>
<div className={`${Style.FormBox}`}>
<h2 className={Style.Mssg}>Send Us a Message</h2>
<p className={Style.FillFormText}>Fill out the form below and we'll get back to you as soon as possible.</p>
<Form onSubmit={handleSubmit}>
<Row>
<Col md={6}>
    <Form.Group className='mb-lg-3 mb-3'>
    <Form.Control className={Style.FeedbackInput} type="text" name='name' placeholder='Enter Your Name'/>
    </Form.Group>
</Col>
<Col md={6}>
<Form.Group className=''>
<Form.Control className={`mb-md-3 mb-3  ${Style.FeedbackInput}`}name='email'  type="email" placeholder='Enter Your Email'/>
</Form.Group>
</Col>
<Form.Group className='mb-lg-3 mb-3'>
<Form.Control     className={`${Style.FeedbackInput}`}  type="text" name='subject' placeholder='Subject'/>
</Form.Group>
<Form.Group>
<Form.Control className={`mb-3 ${Style.FeedbackInput}`} as="textarea" name='feedback' rows={6} placeholder='Your Feedback'/>
</Form.Group>   
<div className='mt-lg-3 mb-md-0 mt-md-0'>
<button type='submit' className={Style.SendMessage}><i className="fa-regular fa-paper-plane me-2"></i> Send Message</button>
</div>
</Row>
</Form>
{formMessage && (
  <p className="mt-3 text-success">
    {formMessage}
  </p>
)}
</div>
</Col>    

<Col lg={6} md={12} className='mb-md-3 px-0 mb-lg-0 px-md-0 pe-lg-0 ps-lg-2'>
<div className={Style.LocationBox}>
<h2 className={`${Style.location} mb-3`}>Our Location</h2>
<iframe
            title="ShopVerse Location"
            src="https://www.google.com/maps?q=Connaught%20Place%20New%20Delhi&output=embed"
            loading="lazy"
        ></iframe>
</div>
</Col>
</Row>   
</div>
    )
}
export default CustomerUsFeedBackSupport;