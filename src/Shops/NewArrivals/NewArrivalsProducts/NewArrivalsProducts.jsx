import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Style from '../../ShopProducts/ShopProducts.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../Context/CartContext';
import { useState, useEffect } from 'react';
import ImageOne from '../../../assets/1624bd56-2b6c-4d27-8933-7f3491fc9d2c.png'
import { wishlistContext } from '../../../Context/wishlistContext';


function NewArrivalsProducts({priceFilteredProducts}) {

const [currentPage, setCurrentPage] = useState(1);
const productsPerPage = 12;

useEffect(() => {
setCurrentPage(1);
}, [priceFilteredProducts]);

const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

const currentProducts = priceFilteredProducts.slice(indexOfFirstProduct,indexOfLastProduct);

const totalPages = Math.ceil(
  priceFilteredProducts.length / productsPerPage
);

const { dispatch } = useContext(CartContext);
const handleAddToCart = (product) => {
dispatch({
type: "ADD_TO_CART",
payload: product
});
};

const{wishlist  , dispatch : wishlistDispatch} = useContext(wishlistContext);
const handleWhislist = (product) => {
    wishlistDispatch({
        type : "ADD_TO_WISHLIST",
        payload : product,
    })
}
return (
<div className={Style.ProductContainer}>
<div className={Style.ProductsBox}>
<h3 className={Style.AllProducts}>New Arrivals</h3>
{priceFilteredProducts.length === 0 ? (
  <div className={Style.EmptyState}>
  <i className="fa-solid fa-box-open"></i>
  <h4>No Products Found!</h4>
  <p className='mb-lg-2'>We couldn't find any products matching your selected filters.</p>
  <small>
    Try adjusting your filters or clearing them to explore more products.
  </small>
  <img src={ImageOne} className={Style.ImageOne} alt="" />
</div>
):(
<>
<Row className="g-3">
{currentProducts.map((product) => (
<Col lg={2} key={product.id} className=''>
<Link to={`/DetailPage/${product.id}`}className={Style.CardLinks}>
<div className={Style.ProductCard}>
<button onClick={(e) => {
  e.stopPropagation();
  e.preventDefault();
  handleWhislist(product);
}} type="button" className={Style.WishlistBtn}>
        <i className={`fa-heart ${wishlist.some((item) => item.id === product.id) ? `fa-solid ${Style.activeHeart}` : "fa-regular"}`}></i>
</button>
<div className={Style.ProductImageBox}>
<img src={product.image} alt={product.productName} />
</div>
<div className={Style.ProductContent}>
<h5 className="mb-lg-1">{product.productName}</h5>
<h4 className={`mb-lg-0 ${Style.category}`}>{product.category}</h4>
<div className={`d-flex gap-2 align-items-center ${Style.oldprice}`}>
<span className={Style.price}>₹{product.price}</span>
<span className={Style.Cutprice}>₹{product.Cutprice}</span>
</div>
<p className="d-flex gap-lg-1 mb-lg-1">
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
<div>
<button onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    handleAddToCart(product);}}className={Style.button}>
<i className={`fa-solid fa-cart-shopping ${Style.Cart}`}></i>
Add to Cart
</button>
</div>
</div>
</div>
</Link>
</Col>
))}
</Row>
<div className="d-flex justify-content-center gap-4 mt-4">
<button className={Style.pageBtn} disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
Prev
</button>
{Array.from(
{ length: totalPages },
(_, i) => i + 1).map((pageNum) => (
<button key={pageNum} className={currentPage === pageNum ? Style.activePage : Style.pageBtn} onClick={() => setCurrentPage(pageNum)}>{pageNum}</button>
))}
<button className={Style.pageBtn} disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
</div>
</>
)}
</div>
</div>
);
}

export default NewArrivalsProducts;