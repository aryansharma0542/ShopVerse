import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Style from './TrackOrder.module.css'
import { OrderContext } from "../Context/OrderContex";

function TrackOrder(){

    const {cart} = useContext(CartContext);
    const { orderDetails } = useContext(OrderContext);
    const [order , setOrder] = useState(null);
    const [OrderID , setOrderID] = useState("");
    const [currentStatus  , setCurrentStatus]  = useState("Order Placed");
    const handleTrackOrder = () => {
       if(OrderID.trim() === ""){
        alert("Please enter your Order ID");
        setOrder(null);
    return;
       }
if (orderDetails && OrderID.trim() === orderDetails.orderId){
    setOrder(orderDetails);
        setCurrentStatus("Order Placed");
       }else{
        setOrder(null);
        alert("Order Not Found!")
       }
    }

    const trackingSteps = [
        "Order Placed",
        "Processing",
        "Shipped",
        "Out for Delivery",
        "Delivered"
    ];

    const currentIndex = trackingSteps.indexOf(currentStatus);
        const subTotal = cart.reduce((Total , item) => Total + item.price * item.quantity, 0);
    return(
<div className={Style.TrackOrderContainer}>
<div className={Style.TracKingBorder}>
<div className={Style.TrackOrderHeading}>
<h2>Track Your Order</h2>
<p>Enter your order ID to track your order status.</p>
</div>
<div className={Style.TrackSearchBox}>
<input type="text" name="" id="" value={OrderID}  onChange={(e) => setOrderID(e.target.value)} placeholder="Enter your Order ID"/>
<button type="button" onClick={handleTrackOrder}>Track Order</button>
</div>
</div>



{order && (
  <div className={Style.OrderDetailsContainer}>


<div className={Style.OrderInfoHeader}>
    <h3>Order Information</h3>
    <span>{order.status}</span>
</div>

<div className={Style.OrderInfoGrid}>
    <div>
        <label>Order ID</label>
        <p>{order.orderId}</p>
    </div>

    <div>
        <label>Order Date</label>
        <p>30 October 2026</p>
    </div>

    <div>
        <label>Customer</label>
        <p>{order.fullName}</p>
    </div>

    <div>
        <label>Payment Method</label>
        <p>{order.paymentMethod ===  "cod"  ? "Cash On Delivery" :"Online Payment"}</p>
    </div>
</div>

<div className={Style.OrderTrackingTimeline}>
 <h3>Order Tracking</h3>
   <div className={Style.TrackingList}>
{trackingSteps.map((steps, index) => (
  <div className={Style.TrackingStep} key={index}>

    <div className={`${Style.TrackingCircle} ${
      index <= currentIndex ? Style.Completed : ""
    }`}>
      {index < currentIndex ? "✓" : index + 1}
    </div>

    <p>{steps}</p>

    {index === currentIndex && <span>Current Status</span>}

  </div>
))}    
</div>
</div>

<div className={Style.OrderTrackingDetails}>
    <div className={Style.ProductDetails}>
    <h3>Product Details</h3>
    {cart.map((item) => (
    <div className={Style.ProductInfo} key={item.id}>
        <div>
            <h4>{item.productName}</h4>
            <p>Category: {item.category}</p>
            <p>Quantity: {item.quantity}</p>
            
        </div>

        <div>
            <p>Price: {item.price}</p>
<p>Total: ₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
        
        </div>
    </div>
    ))}
    <div className={Style.TotalAmount}>
    <span>Total Amount</span>
    <strong>₹{subTotal.toLocaleString("en-IN")}</strong>
</div>
</div>
</div>


<div className={Style.OrderSummary}>
    <h3>Order Summary</h3>

    <div className={Style.SummaryRow}>
        <span>Order Date</span>
        <span>30 October 2026</span>
    </div>

    <div className={Style.SummaryRow}>
        <span>Estimated Delivery</span>
        <span>05 November 2026</span>
    </div>

    <div className={Style.SummaryRow}>
        <span>Payment Method</span>
        <span>{order.paymentMethod === "cod" ? "Cash On Delivery" : "Online Payment"}</span>
    </div>

    <div className={Style.SummaryRow}>
        <span>Payment Status</span>
        <span>Pending</span>
    </div>
</div>
</div>
)}
</div>
)}
export default TrackOrder;






 {/* <button onClick={() => setCurrentStatus("Processing")}>
  Move to Processing
</button>
<button onClick={() => setCurrentStatus("Shipped")}>
  Move to Shipped
</button>

<button onClick={() => setCurrentStatus("Out for Delivery")}>
  Move to Out for Delivery
</button>

<button onClick={() => setCurrentStatus("Delivered")}>
  Move to Delivered
</button>  */}
