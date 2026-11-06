import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Style from './OrderConfirm.module.css'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import { OrderContext } from '../Context/OrderContex';

function OrderConfirm(){
    const {orderDetails} = useContext(OrderContext);
     const {cart} = useContext(CartContext);
          const subTotal = cart.reduce((Total , item) => Total + item.price * item.quantity, 0);
    return(
<div className={Style.OrderConfirmContainer}>
<Row>
    <Col lg={12}>
        <div className={` ${Style.ConfirmOrder} mb-lg-4`}>
            <div className='d-flex flex-column align-items-center'>
        <i className={`fa-solid fa-check mb-md-2 mb-2 mb-lg-2`}></i>
        <p className={`mb-lg-2 mb-md-2 mb-1 ${Style.FrontEnd}`}>FRONTEND DEMO ORDER</p>
        <h2>Thank you - {orderDetails?.fullName}</h2>
        <p className={` ${Style.DemoOrder} px-3 mb-0 mb-md-0 mb-lg-2`}>Your COD demo order has been prepared. No payment or backend order recorded was created.</p>
            </div>
        </div>

<div className={Style.OrderConfirmDtails}>
{/* One */}
<div  className={`d-flex align-items-center justify-content-between pb-md-3 pb-lg-4 ${Style.RefDetailsOne} `}>
<div>
<p className={`mb-lg-1 mb-0 mb-sm-1 mb-md-1 ${Style.DemoRef}`}>Demo order reference</p>
<strong className={` ${Style.OrderRefNumber}`}>{orderDetails?.orderId}</strong>
</div>
<p className={`mb-md-0 ${Style.CashOnDelivery}`}>{orderDetails?.paymentMethod === "cod" ?  "Cash On Delivery - Demo" : "Online payment - Demo"}</p>
</div>
{/* Second */}
{/* Second */}
<div className={`py-lg-3 py-md-3 ${Style.RefDetailsTwo}`}>

    {/* Delivery Address */}
    <div className={`px-3  px-md-2 ${Style.FirstDeliveryAddress}`}>
        <h5>Delivery address</h5>

        <h6>{orderDetails?.fullName}</h6>

        <p className="mb-1 mb-lg-2">
            {orderDetails?.house} ,  {orderDetails?.street} ,
             {orderDetails?.landmark} ,  {orderDetails?.city}  ,
            {orderDetails?.state} - {orderDetails?.pinCode}
        </p>

        <p className="mb-0 mb-lg-0">
            Mobile Number - {orderDetails?.mobile}
        </p>
    </div>

    {/* Order Total */}
    <div className={Style.SecondPaymentOrderDetails}>

        <h5 className={`mb-lg-2 ${Style.OrderTotal}`}>Order total</h5>

        <div className={Style.OrderDetail}>

            <div className={`${Style.SubTotal} mb-md-2 mb-lg-2 mb-2 d-flex justify-content-between align-items-center`}>
                <span>Subtotal</span>
                <strong className="text-secondary">
                    ₹{subTotal.toLocaleString("en-IN")}
                </strong>
            </div>

            <div className={`${Style.SummaryDelivery} d-flex mb-md-2 mb-2 mb-lg-2 justify-content-between align-items-center`}>
                <span>Delivery</span>
                <strong className="text-secondary">Free</strong>
            </div>

            <div className={`${Style.TotalPrice} py-lg-2 py-md-2 pt-2 d-flex justify-content-between align-items-center`}>
                <span className={Style.Total}>Total</span>
                <strong className={Style.TotalAmount}>
                    ₹{subTotal.toLocaleString("en-IN")}
                </strong>
            </div>

        </div>
    </div>

</div>
{/* Third */}
<div className={`pb-lg-3 ${Style.RefDetailsThree}`}>
    <h5 className={`mb-lg-0 mb-0 pb-lg-3 mb-md-0 py-md-3 pt-0 ${Style.ItemsOrder}`}>Items in this demo order</h5>
{cart.map((item) => (
<div className={Style.ProductDetails}>
        <img src={item.image} alt="" />
 <div className={Style.OrderItemDetails}>
    <h5 className='mb-lg-1'>{item.productName}</h5>
           <p>
                    Qty {item.quantity} × ₹
                    {item.price.toLocaleString("en-IN")}
                </p>
 </div>
                        <strong className={Style.ItemPrice}>
                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
            </strong>

</div>
))}
</div>
<p className={`mb-lg-3 text-center ${Style.FrontEndDemonstration}`}>This is a frontend-only demonstration. Order details are not saved to a server and no email or SMS was sent.</p>
<Link to="/shop" className={Style.ContinueShopping}>Continue Shopping</Link>
</div>
</Col>
</Row>
</div>

    )
}
export default OrderConfirm;