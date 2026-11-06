
import Style from '../BestSelling/BestSelling.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AllProducts } from '../../data';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { wishlistContext } from '../../Context/wishlistContext';

function Selling() {

    // Cart Context
    const { dispatch } = useContext(CartContext);

    const handleAddToCart = (product) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: product
        });
    };

    // Wishlist Context
    const { wishlist, dispatch: wishlistDispatch } = useContext(wishlistContext);

    const handleWhislist = (product) => {

        const AlreadyAdded = wishlist.some(
            (item) => item.id === product.id
        );

        if (AlreadyAdded) {
            wishlistDispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: product.id
            });
        } else {
            wishlistDispatch({
                type: "ADD_TO_WISHLIST",
                payload: product
            });
        }
    };

    // Best Selling Products
    const BestSellingProduct = AllProducts.filter(
        (item) => item.tag === "bestSelling"
    );

    // View All Products
    const start = 0;

    const [end, setEnd] = useState(6);

    const handleCategory = () => {

        if (end === 6) {
            setEnd(BestSellingProduct.length);
        } else {
            setEnd(6);
        }
    };

    return (

        <div className={Style.SellingContainer}>

            <Row className="g-2 mx-0">

                {/* Heading */}

                <Col xs={12} className="mt-0 px-0">

                    <div className="d-flex justify-content-between align-items-center px-1 mb-0">

                        <div className={Style.BestSelling}>

                            <h3 className={`${Style.BestSellingProduct} m-0`}>
                                Best Selling Products
                            </h3>

                        </div>

                        <div className={Style.ViewAll}>

                            <p
                                className={`mb-0 d-flex align-items-center ${Style.BestSellingDes}`}
                                onClick={handleCategory}
                            >
                                {end === 6
                                    ? "View All Products"
                                    : "Show Less Products"
                                }

                                <i className="fa-solid fa-arrow-right"></i>

                            </p>

                        </div>

                    </div>

                </Col>

                {/* Product Cards */}

                <Col xs={12} className="mx-0 px-0">

                    <Row className={`mx-0 ${Style.CardsRow}`}>

                        {BestSellingProduct.slice(start, end).map((product) => (

<Col
    xs={6}
    sm={4}
    md={3}
    lg={3}
    xl={2}
    key={product.id}
    className={`px-1 mb-2 ${Style.BestSellPadd}`}
>

                                <Link
                                    to={`/DetailPage/${product.id}`}
                                    className={Style.cardLink}
                                >

                                    <div className={Style.card}>

                                        {/* Product Image */}

                                        <div className={`pb-1 pb-lg-2 ${Style.ProductBorder}`}>

                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    handleWhislist(product);
                                                }}
                                                type="button"
                                                aria-label="Add to wishlist"
                                                className={Style.WishlistBtn}
                                            >

                                                <i
                                                    className={`fa-heart ${
                                                        wishlist.some(
                                                            (item) => item.id === product.id
                                                        )
                                                            ? `fa-solid ${Style.activeHeart}`
                                                            : "fa-regular"
                                                    }`}
                                                ></i>

                                            </button>

                                            <img
                                                src={product.image}
                                                className={Style.productImages}
                                                alt={product.productName}
                                            />

                                        </div>

                                        {/* Product Details */}

                                        <div className={Style.Caption}>

                                            <h4 className={`mb-1 mt-1 ${Style.productName}`}>
                                                {product.productName}
                                            </h4>

                                            <h5 className={`mb-1 ${Style.category}`}>
                                                {product.category}
                                            </h5>

                                            {/* Price */}

                                            <div className={`mb-1 ${Style.oldprice}`}>

                                                <span className={Style.price}>
                                                    ₹{product.price}
                                                </span>

                                                <span className={Style.Cutprice}>
                                                    ₹{product.Cutprice}
                                                </span>

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
                                                    ({product.reviews}) reviews
                                                </span>

                                            </p>

                                        </div>

                                        {/* Add To Cart */}

                                        <div className={Style.btn}>

                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    handleAddToCart(product);
                                                }}
                                                className={Style.button}
                                            >

                                                <i className={`fa-solid fa-cart-shopping ${Style.Cart}`}></i>

                                                Add to Cart

                                            </button>

                                        </div>

                                    </div>

                                </Link>

                            </Col>

                        ))}

                    </Row>

                </Col>

            </Row>

        </div>

    );
}

export default Selling;
