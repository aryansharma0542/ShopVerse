import Style from '../BestSelling/BestSelling.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AllProducts } from '../../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { wishlistContext } from '../../Context/wishlistContext';

function Selling(){
const {dispatch} = useContext(CartContext);
const handleAddToCart = (product) => {
dispatch({
type : "ADD_TO_CART",
payload : product
})
}

const{wishlist ,dispatch : wishlistDispatch} = useContext(wishlistContext);
const handleWhislist = (product) => {
const AlreadyAdded = wishlist.some((item) => item.id === product.id)
if(AlreadyAdded){
wishlistDispatch({
type : "REMOVE_FROM_WISHLIST",
payload : product.id
});
}else{
wishlistDispatch({
type : "ADD_TO_WISHLIST",
payload : product
})
}
}

const BestSellingProduct = AllProducts.filter((item) => (item.tag === "bestSelling"));  // Best Selling Products aagye 
let start = 0;
const [end , setEnd] = useState(6);   
const handleCategory = () =>{ 
if(end === 6 ){
setEnd(BestSellingProduct.length)
}else{
setEnd(6)
}
}

return(
<div className={`${Style.SellingContainer}`}>
<Row className='g-lg-2 m-0'>
<Col lg={12} className='mt-0 px-md-0 px-1'>
<div className='d-flex justify-content-between gap-2 px-0 mx-0 mb-2 mb-md-0  align-items-center'>
<div className={`${Style.BestSelling} mx-0`}>
<h3 className={`${Style.BestSellingProduct} m-0`}>Best Selling Products</h3>
</div>
<div className={Style.ViewAll}>
<p className={`mb-0 d-flex align-items-center ${Style.BestSellingDes}`} onClick={handleCategory}>{end === 6 ? "View All Products " : "Show Less Products"}<i className={`fa-solid fa-arrow-right`}></i></p>
</div>
</div>
</Col>
{BestSellingProduct.slice(start , end).map((product , index) => (
<Col  xs={6}  md={3} sm={4} lg={2} key={index} className={`g-md-2 mb-2 mb-lg-1 d-flex ${Style.BestSellPadd}`}>
<Link to={`/DetailPage/${product.id}`} className={Style.cardLink}>
<div className={`${Style.card}`}>
<div className={`pb-1 pb-lg-2 ${Style.ProductBorder}`}>
<button onClick={(e) => {
e.preventDefault();
e.stopPropagation();
handleWhislist(product);
}} type="button" className={Style.WishlistBtn}>
<i className={`fa-heart ${wishlist.some((item) => item.id === product.id) ? `fa-solid ${Style.activeHeart}` : "fa-regular"}`}></i>
</button>
<img src={product.image} className={Style.productImages} alt="" />
</div>
<div className={Style.Caption}>
<h4 className={`mb-md-0 mt-1 mb-1 mt-md-1 ${Style.productName}`}>{product.productName}</h4>
<h5 className={` mb-md-1  mb-1 mt-lg-1 ${Style.category}`}>{product.category}</h5>
<div className={`mb-md-1 ${Style.oldprice}`}>
<span className={`${Style.price}`}>₹{product.price}</span>
<span className={Style.Cutprice}>₹{product.Cutprice}</span>
</div>
<p className={`mb-md-2 ${Style.reviews} d-flex gap-1`}>
<span className={Style.rating}>
<i className={`fa-solid fa-star`}></i>
<i className={`fa-solid fa-star`}></i>
<i className={`fa-solid fa-star`}></i>
<i className={`fa-solid fa-star`}></i>
<i className={`fa-regular fa-star`}></i>
</span>
<span className={`${Style.reviewCount}`}>
({product.reviews}) reviews
</span>
</p>
</div>
<div className={Style.btn}>
<button onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    handleAddToCart(product);
}} className={Style.button}><i className={`fa-solid fa-cart-shopping ${Style.Cart}`}></i> Add to Cart</button>
</div>
</div>
</Link>
</Col>
))}
</Row>
</div>
)
}
export default Selling;