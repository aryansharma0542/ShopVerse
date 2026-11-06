
import Style from './Whislist.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { wishlistContext } from '../Context/wishlistContext';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

function Wishlist() {

    // Wishlist Context
    const { wishlist, dispatch: wishlistDispatch } = useContext(wishlistContext);

    // Cart Context
    const { dispatch } = useContext(CartContext);

    // Total Wishlist Price
    const TotalPrice = wishlist.reduce(
        (total, product) => total + product.price,
        0
    );

    // Add Single Product To Cart
    const handleAddToCart = (product) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: product
        });
    };

    // Remove Single Product From Wishlist
    const handleRemoveWishlist = (product) => {
        wishlistDispatch({
            type: "REMOVE_FROM_WISHLIST",
            payload: product.id
        });
    };

    // Add All Products To Cart
    const handleAddAlltoCart = () => {

        wishlist.forEach((product) => {
            dispatch({
                type: "ADD_TO_CART",
                payload: product
            });
        });

    };

    // Move All Products To Cart
    const handleMoveAllToCart = () => {

        wishlist.forEach((product) => {

            dispatch({
                type: "ADD_TO_CART",
                payload: product
            });

            wishlistDispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: product.id
            });

        });

    };

    return (

        <div className={Style.WishlistContainer}>

            {/* Breadcrumb */}

            <div className={` mb-2 ${Style.BreadCrumb}`}>

                <span>Home</span>

                <i className="fa-solid fa-chevron-right"></i>

                <span>Wishlist</span>

            </div>

            <Row className={Style.WishlistRow}>

                {/* Left Wishlist Section */}

                <Col
                    lg={8}
                    xs={12}
                    className={Style.WishlistLeftCol}
                >

                    <h3 className={Style.wishlist}>

                        My Wishlist

                        <span className={Style.WishlistLength}>
                            ({wishlist.length})
                        </span>

                    </h3>

                    {/* Empty Wishlist */}

                    {wishlist.length === 0 ? (

                        <div className={Style.EmptyCartWishlist}>

                            <i className="fa-solid fa-heart"></i>

                            <h3>Your Wishlist is Empty</h3>

                            <p>
                                You haven't added any products to your wishlist page.
                            </p>

                        </div>

                    ) : (

                        /* Wishlist Products */

                        wishlist.map((product) => (

                            <div
                                key={product.id}
                                className={Style.CardWishlist}
                            >

                                {/* Product Image */}

                                <img
                                    src={product.image}
                                    className={Style.ProductImage}
                                    alt={product.productName}
                                />

                                {/* Product Details */}

                                <div className={Style.ProductsDetails}>

                                    <h4 className={Style.productName}>
                                        {product.productName}
                                    </h4>

                                    <div className={Style.MixCategory}>

                                        <h5 className={Style.mainCategory}>
                                            {product.mainCategory}
                                        </h5>

                                        <h5 className={Style.category}>
                                            {product.category}
                                        </h5>

                                    </div>

                                    {/* Reviews */}

                                    <p className={Style.reviews}>

                                        <span className={Style.rating}>

                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-regular fa-star"></i>

                                        </span>

                                        <span className={Style.reviewCount}>
                                            ({product.reviews})
                                        </span>

                                    </p>

                                </div>

                                {/* Product Price */}

                                <div className={Style.PriceSection}>

                                    <div className={Style.PriceBox}>

                                        <span className={Style.price}>
                                            ₹{product.price}
                                        </span>

                                        <span className={Style.Cutprice}>
                                            ₹{product.Cutprice}
                                        </span>

                                    </div>

                                    <span className={Style.Discount}>

                                        {product.Cutprice > 0
                                            ? Math.round(
                                                ((product.Cutprice - product.price) /
                                                    product.Cutprice) * 100
                                            )
                                            : 0
                                        }% OFF

                                    </span>

                                </div>

                                {/* Add To Cart */}

                                <button
                                    type="button"
                                    onClick={() => handleAddToCart(product)}
                                    className={Style.AddCartBtn}
                                >

                                    <i className="fa-solid fa-cart-shopping"></i>

                                    Add to Cart

                                </button>

                                {/* Remove Wishlist */}

                                <button
                                    type="button"
                                    aria-label="Remove from wishlist"
                                    onClick={() => handleRemoveWishlist(product)}
                                    className={Style.RemoveWishlist}
                                >

                                    <i className="fa-solid fa-xmark"></i>

                                </button>

                            </div>

                        ))

                    )}

                </Col>

                {/* Right Summary Section */}

                <Col
                    lg={4}
                    xs={12}
                    className={Style.WishlistRightCol}
                >

                    <div className={Style.Wrapper}>

                        <h3 className={Style.WishlistSummary}>
                            Wishlist Summary
                        </h3>

                        <div className={Style.WrapperContent}>

                            {/* Total Items */}

                            <div className={Style.TotalItems}>

                                <span>Total Items</span>

                                <span className={Style.BoldItems}>
                                    {wishlist.length}
                                </span>

                            </div>

                            {/* Total Price */}

                            <div className={Style.TotalPrice}>

                                <span>Total Price</span>

                                <span className={Style.BoldPrice}>
                                    ₹{TotalPrice.toLocaleString('en-IN')}
                                </span>

                            </div>

                            {/* Buttons */}

                            <div className={Style.buttons}>

                                <button
                                    type="button"
                                    disabled={wishlist.length === 0}
                                    onClick={handleAddAlltoCart}
                                >

                                    <i className="fa-solid fa-cart-shopping"></i>

                                    Add All to Cart

                                </button>

                                <button
                                    type="button"
                                    disabled={wishlist.length === 0}
                                    onClick={handleMoveAllToCart}
                                >

                                    <i className="fa-solid fa-lock"></i>

                                    Move All to Cart

                                </button>

                            </div>

                            {/* Saved Message */}

                            <p className={Style.ItemsSaved}>

                                <i className="fa-solid fa-heart"></i>

                                Items in your wishlist are saved for 30 days

                            </p>

                        </div>

                    </div>

                </Col>

            </Row>

        </div>

    );

}

export default Wishlist;
