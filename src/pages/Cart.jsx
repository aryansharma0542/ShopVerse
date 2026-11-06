import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Style from '../pages/Cart.module.css';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {

    const { cart, dispatch } = useContext(CartContext);

    const subTotal = cart.reduce(
        (Total, item) => Total + item.price * item.quantity,
        0
    );

    return (

        <div className={Style.CartContainer}>

            {cart.length === 0 ? (

                <div className={Style.EmptyCart}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <h3>Your cart is empty</h3>
                    <p>Browse the shop and add products to your cart.</p>
                    <Link to="/shop" className={Style.CartShoppingLink}>
                        Continue shopping
                    </Link>
                </div>

            ) : (

                <Row className={Style.CartRow}>

                    {/* Left Side - Shopping Cart */}

                    <Col lg={7} className={` ${Style.CartLeftCol} px-md-0 px-lg-2`}>

                        <div className={Style.CartWrapper}>

                            <h1 className= { ` ${Style.ShoppingCart} mb-2 mb-md-2 mb-lg-3`}>
                                Shopping Cart
                                <span className={Style.ShoppingCartLength}>
                                    ({cart.length} items)
                                </span>
                            </h1>

                            <div className={Style.ProductContent}>

                                {cart.map((item) => (

                                    <div className={Style.CartItem} key={item.id}>

                                        <img
                                            src={item.image}
                                            alt={item.productName}
                                        />

                                        <div className={Style.CartProductDetails}>

                                            <h4>{item.productName}</h4>

                                            <p className={Style.ItemPrice}>
                                                ₹{item.price.toLocaleString("en-IN")}
                                            </p>

                                            <div className={Style.QuantityControls}>

                                                <button
                                                    type="button"
                                                    aria-label="Decrease quantity"
                                                    onClick={() => dispatch({
                                                        type: "DECREASE_QUANTITY",
                                                        payload: item.id
                                                    })}
                                                >
                                                    -
                                                </button>

                                                <span>{item.quantity}</span>

                                                <button
                                                    type="button"
                                                    aria-label="Increase quantity"
                                                    onClick={() => dispatch({
                                                        type: "INCREASE_QUANTITY",
                                                        payload: item.id
                                                    })}
                                                >
                                                    +
                                                </button>

                                                <button
                                                    type="button"
                                                    className={Style.RemoveBtn}
                                                    onClick={() => dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: item.id
                                                    })}
                                                >
                                                    <i className="fa-regular fa-trash-can"></i>
                                                    Remove
                                                </button>

                                            </div>

                                        </div>

                                        <strong className={` ${Style.Price} d-none d-sm-block`}>
                                            ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                                        </strong>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </Col>

                    {/* Right Side - Order Summary */}

                    <Col lg={5} className={ ` ${Style.CartRightCol} px-md-0 px-lg-2`}>

                        <div className={Style.SummaryWrraper}>

                            <h4>Order Summary</h4>

                            <div className={Style.SummaryContent}>

                                <div className={Style.SummaryItems}>
                                    <span>Items</span>
                                    <strong>{cart.length}</strong>
                                </div>

                                <div className={Style.SubTotal}>
                                    <span>Subtotal</span>
                                    <strong>
                                        ₹{subTotal.toLocaleString("en-IN")}
                                    </strong>
                                </div>

                                <div className={Style.SummaryDelivery}>
                                    <span>Delivery</span>
                                    <strong>Free</strong>
                                </div>

                                <hr />

                                <div className={Style.TotalPrice}>
                                    <span>Total</span>
                                    <strong>
                                        ₹{subTotal.toLocaleString("en-IN")}
                                    </strong>
                                </div>

                                <p className={Style.CodCheckOut}>
                                    COD checkout is a frontend demo.
                                    Online payment is unavailable.
                                </p>

                                <div className={Style.CheckoutBtnWrapper}>

                                    <Link
                                        to="/checkout"
                                        className={Style.CheckoutBtn}
                                    >
                                        Proceed to checkout
                                    </Link>

                                    <Link
                                        to="/shop"
                                        className={Style.ContinueBtn}
                                    >
                                        Continue Shopping
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </Col>

                </Row>

            )}

        </div>

    );
}

export default Cart;