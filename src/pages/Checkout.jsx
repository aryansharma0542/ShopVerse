import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Style from './Checkout.module.css';
import {  useState , useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link , useNavigate } from 'react-router-dom';
import { OrderContext } from '../Context/OrderContex';

function Checkout(){
  const {setOrderDetails} = useContext(OrderContext);
  const[paymentMethod , setPaymentMethod] = useState("cod");
  const [city  , setCity] = useState("");
  const  [state , setState] = useState("");
  const handlePinCodeChange = async(e) => {
    const pin = e.target.value;
    if (pin.length !== 6) {
  setCity("");
  setState("");
  setErrors((prev) => ({ ...prev, city: "", state: "" }));
  return;
}

      const response = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
    const data = await response.json();
if (data[0].Status === "Success") {
  const postOffice = data[0].PostOffice[0];
  setCity(postOffice.District);
  setState(postOffice.State);

  setErrors((prev) => ({...prev , city: "" , state: ""}))
}else{
  setCity("");
  setState("");
  }
      };
  const navigate = useNavigate();
    const {cart} = useContext(CartContext);
    const subTotal = cart.reduce((Total , item) => Total + item.price * item.quantity, 0);
      const [errors , setErrors] = useState({});

      const handlePlaceOrders = () => {
        const newErrors = {};
// Full Name
        const fullName = document.getElementById("fullName").value.trim();
        if(fullName === ""){
newErrors.fullName ="Please enter your full name"
        } else if(fullName.length <= 3){
          newErrors.fullName = "Name must be more than 3 characters"
        }else if(!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(fullName)){
newErrors.fullName = "Only alphabets and spaces are allowed";

        }
// Mobile
const mobile = document.getElementById("mobile").value.trim();
           if (mobile === "") {
        newErrors.mobile = "Please enter your mobile number";
    }else if(!/^[6-9][0-9]{9}$/.test(mobile)){
newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

// Email
const email = document.getElementById("email-address").value.trim();
if (email !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = "Please enter a valid email address";
    }

// House
const house = document.getElementById("house").value.trim();
if(house === ""){
newErrors.house = "Please enter your house and flat number";
}
else if (!/^(?=.*[A-Za-z0-9])[A-Za-z0-9\s/-]+$/.test(house)) {
        newErrors.house = "Please enter a valid house and flat number";
    }

const street = document.getElementById("street").value.trim();
if (street === "") {
    newErrors.street = "Please enter your street or area";
} else if (street.length < 3) {
    newErrors.street = "Street or area must be at least 3 characters";
} else if (!/^[A-Za-z0-9\s,/-]+$/.test(street)) {
    newErrors.street = "Please enter a valid street or area";
}

// Landmark
const landmark = document.getElementById("landmark").value.trim();
if (landmark !== "" && landmark.length < 3) {
    newErrors.landmark = "Landmark must be at least 3 characters";
}
else if (landmark !== "" && !/^[A-Za-z0-9\s,/-]+$/.test(landmark)) {
    newErrors.landmark = "Please enter a valid landmark";
}

const city = document.getElementById("city").value.trim();
if (city === "") {
newErrors.city = "Please enter your city";
}

const state = document.getElementById("state").value.trim();
    if (state === "") {
        newErrors.state = "Please enter your state";
    }

const pinCode = document.getElementById("pinCode").value.trim();
if (pinCode === "") {
  newErrors.pinCode = "Please enter your PIN code";
} else if (!/^[0-9]{6}$/.test(pinCode)) {
  newErrors.pinCode = "Please enter a valid 6-digit PIN code";
} else if (city === "" || state === "") {
  newErrors.pinCode = "Please enter a valid PIN code";
}

        setErrors(newErrors);
        if(Object.keys(newErrors).length === 0){
 const orderId = `ORD-${Date.now()}`;
          const orderData = {
            fullName, 
            orderId,
            mobile,
            house, 
            street,
            landmark,
            city,
            state,
            pinCode,
            paymentMethod
          };
setOrderDetails(orderData);
    localStorage.setItem("orderDetails", JSON.stringify(orderData));
          navigate("/OrderConfirm")
        }
      }
return(
<div className={Style.CheckOutContainer}>
<Row className='g-3'>
<Col lg={7} className=''>
<div className={Style.FirstWrapper}>
<div>
<h1 className={`mb-lg-0 mb-1 ${Style.Checkout}`}>Checkout</h1>
<p className={Style.Review}>Review your order and provide delivery details.</p>
<div>
<form action="" noValidate className={Style.DeliveryForm}>

<div className={Style.DeliveryHeader}>
    <span className={Style.StepNumber}>1</span>
<div className='px-lg-1'>
<h2 className={`mb-lg-0 mb-md-1 ${Style.DeliveryInf}`}>Delivery information</h2>
<p className={`mb-lg-0  mb-0 ${Style.DeliveryOrder}`}>Where should we deliver your order?</p>
</div>
</div>

<div className={Style.FormGroup}>
{/* Full Name */}
<label htmlFor="fullName">Full Name <span className={Style.star}>*</span></label>       
<input type="text" name='fullName' onChange={() => {setErrors({...errors , fullName : ""})}} required id='fullName' placeholder='Enter your full name'/>
{errors.fullName && (
  <small className={Style.ErrorMessage}>{errors.fullName}</small>
)}
</div>

{/* Mobile & Email */}
<div className={Style.FormRow}>
{/* First */}
<div className={Style.FormGroup}>
<label htmlFor="mobile">Mobile number <span className={Style.star}>*</span></label> 
<input type="tel" name='mobile' onChange={() => setErrors({...errors, mobile: ""})}
 id='mobile' required placeholder='10-digit mobile number' maxLength={10}/>
{errors.mobile && (
    <small className={Style.ErrorMessage}>
        {errors.mobile}
    </small>
)}
</div>
{/* Second */}
<div className={Style.FormGroup}>
<label htmlFor="email-address">Email address (optional)</label>  
<input type="email" id="email-address" onChange={() => setErrors({...errors , email: ""})} name='email' placeholder='you@example.com' />
{errors.email && (
    <small className={Style.ErrorMessage}>{errors.email}</small>
)}
</div>
</div>

{/* House/Flat */}
<div className={Style.FormGroup}>
<label htmlFor="house">House / flat number <span className={Style.star}>*</span></label>      
<input type="text" name='house'  onChange={() => {setErrors({...errors , house : ""})}} id='house' required placeholder='House , flat or building' />
{errors.house && (
<small className={Style.ErrorMessage}>{errors.house}</small>
)}
</div>

{/* Street / area */}
<div className={Style.FormGroup}>
<label htmlFor="street">Street / area <span className={Style.star}>*</span></label> 
<input type="text" id='street'  onChange={() => setErrors({...errors, street: ""})} required name='street' placeholder='Street, locality or area' />    
{errors.street && (
<small className={Style.ErrorMessage}>{errors.street}</small>
)}
</div>

{/* LandMark */}
<div className={Style.FormGroup}>
<label htmlFor="landmark">Landmark (optional)</label>
<input type="text" id="landmark" onChange={() => setErrors({...errors , landmark : ""})} name="landmark" placeholder='Nearby Landmark'/>  
{errors.landmark && (
<small className={Style.ErrorMessage}>{errors.landmark}</small>
)}          
</div>

{/* City  */}
<div className={Style.FormRow}>
{/* First */}
<div className={Style.FormGroup}>
<label htmlFor="city">City <span className={Style.star}>*</span></label>      
<input type="text" value={city} readOnly name='city' id='city' placeholder='City' required/>
{errors.city && (
<small className={Style.ErrorMessage}>{errors.city}</small>
)}
</div>
{/* Second */}
<div className={Style.FormGroup}>
<label htmlFor="state">State <span className={Style.star}>*</span></label>      
<input type="text" name='state' value={state} readOnly id='state' placeholder='State' required/>
{errors.state && (
<small className={Style.ErrorMessage}>{errors.state}</small>
)}
</div>
</div>

{/* Pin-Code */}
<div className={Style.FormGroup}>
<label htmlFor="pinCode">PIN code <span className={Style.star}>*</span></label>      
<input type="text" id='pinCode' maxLength={6} onChange={(e) => {handlePinCodeChange(e);  setErrors({...errors , pinCode : ""}) }} name='pinCode' required placeholder='6-digit PIN code' />
{errors.pinCode && (
<small className={Style.ErrorMessage}>{errors.pinCode}</small>
)}
</div>


</form>
</div>
</div>

{/* Payment-Option */}
<div className={` ${Style.PaymentOptions}`}>
<div className={` ${Style.DeliveryHeader} mb-md-3`}>
<span className={Style.StepNumber}>2</span>
<div>
<h2 className={`mb-1 ${Style.DeliveryInf} mb-lg-0`}>Payment Method</h2>
<p className={`mb-0 ${Style.DeliveryOrder} mb-lg-0`}>choose how you would like to play.</p>
</div>
</div>

{/* Cash on Delivery */}
<div>
<label className={`mt-md-3 ${Style.PaymentOption}  ${paymentMethod === "cod" ? Style.SelectedPayment : ""}`}>
<input type="radio" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} name="payment" value="cod" defaultChecked/>

<span className={Style.PaymentIcon}>
<i className="fa-solid fa-money-bill-wave"></i>
</span>

<div className={Style.PaymentDetails}>
<h3 className={` ${Style.DeliveryInf} mb-lg-0`}>Cash on Delivery</h3>
<p className={`mb-0 ${Style.DeliveryOrder} mb-lg-0`}>Front-end demo order - pay when deliverd.</p>
</div> 
</label>
</div>


<label className={`mt-md-3 ${Style.PaymentOption} ${paymentMethod === "online" ? Style.SelectedPayment : ""}`}>
<input type="radio" checked={paymentMethod === "online"} onChange={() => setPaymentMethod("online")} name="payment" value="online"/>

    <span className={Style.PaymentIcon}>
      <i className="fa-regular fa-credit-card"></i>
    </span>

   <div className={Style.PaymentDetails}>
      <h3>Online payment</h3>
      <p>Unavailable until a payment gateway is integrated.</p>
    </div>

    <span className={Style.Unavailable}>Unavailable</span>
</label>
</div>

</div>

</Col>

<Col lg={5} className='px-lg-2'>
<div className={Style.OrderSummaryWrapper}>
<div className={`d-flex justify-content-between mb-md-1 align-items-center`}>
    <h4 className={`mb-0 ${Style.OrderSummary} mb-md-0`}>Order summary</h4>
    <span className={Style.CartLength}>{cart.length} items</span>
    </div>
{cart.map((item) => (
<div key={item.id} className={`${Style.ProductContent} d-flex gap-lg-3 align-items-center position-relative`}>
{/* <span className={Style.Count}>0</span>  */}
<img src={item.image} alt={item.productName}/>
<div className={Style.CartProductDetails}>
<h4 className='mb-md-0'>{item.productName}</h4>
<p className='mb-md-0'>₹{item.price.toLocaleString("en-IN")} each</p>
<div className={Style.QuantityControls}>
</div>
</div>
<strong className={Style.Price}>₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>
</div>
))}
<div className={ ` ${Style.OrderDetail} mb-2 py-lg-3`}>
<div className={`${Style.SubTotal} mb-md-2 my-sm-2 my-1 d-flex justify-content-between align-items-center`}>
    <span>Subtotal</span>
    <strong>₹{subTotal.toLocaleString("en-IN")}</strong>
</div>
<div className={`${Style.SummaryDelivery} my-1 my-sm-2 d-flex mb-md-2 justify-content-between align-items-center`}>
 <span>Delivery</span>
    <strong>Free</strong>
</div>
<p className={`mb-2 mb-md-0 ${Style.FreeOrders}`}>Free delivery on orders of ₹1000 or more.</p>
</div>
<div className={`${Style.TotalPrice} mb-2 mb-sm-3 py-lg-3 d-flex justify-content-between align-items-center`}>
 <span>Total</span>
    <strong>₹{subTotal.toLocaleString("en-IN")}</strong>    
</div>
<div className={` ${Style.DemoNote} mb-2 mb-sm-3 mb-md-4`}>
  <i className="fa-solid fa-circle-info"></i>
  <p className="mb-0">
    This creates a frontend-only demo order. No real payment, database record, email or SMS is made.
  </p>
</div>
<button onClick={handlePlaceOrders}   className={`${Style.DemoOrder} mb-1 mb-sm-2  mb-md-3`}>{paymentMethod === "cod" ? "Place COD Demo order" : "Place Online Demo order"}</button>
 <Link to="/shop" className={` ${Style.ReturnCart} mb-mb-0`}>return to cart</Link>
</div>
</Col>
</Row>
</div>
)
}
export default Checkout;