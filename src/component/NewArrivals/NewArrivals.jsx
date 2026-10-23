import Style from '../NewArrivals/NewArrivals.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AllProducts } from '../../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { wishlistContext } from '../../Context/wishlistContext';

function NewArrivalProducts(){
const{dispatch} = useContext(CartContext);
const handleAddToCart = ((product) => {
dispatch({
type : "ADD_TO_CART",
payload : product
})
})

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
}}

const NewArrivalProducts = AllProducts.filter((items) => items.tag === "NewArrivals");  // New Arrivals Products 
let start = 0;
const [end , setEnd] = useState(6);   
const handleCategory = () =>{ 
if(end === 6 ){
setEnd(NewArrivalProducts.length)
}else{
setEnd(6)
}}
return(
<div className={Style.SellingContainer}>
<Row className='g-lg-2 m-0'>
<Col lg={12} className='mt-0 px-1'>
<div className='d-flex justify-content-between align-items-center px-0 mb-lg-0 mb-2 mb-sm-2 mb-md-0 mb-1 mx-0'>
<div className={`${Style.BestSelling} mx-0`}>
<h3 className={`${Style.NewArrivals} m-0 `}>New Arrivals Products</h3>
</div>
<div>
<div className={Style.ViewAll}>
<p className={`${Style.NewArrivalDes} d-flex align-items-center mb-0`} onClick={handleCategory} >{end === 6 ? "View All New Arrivals" : "Show Less Products"}<i className={`fa-solid fa-arrow-right`}></i></p>
</div>
</div>
</div>
</Col>
{NewArrivalProducts.slice(start , end).map((product , index) => (
<Col lg={2} xs={6} sm={4} md={3} key={index} className={`g-md-2 mb-2  mb-lg-1 d-flex ${Style.NewArrivalPadd}`}>
<Link to={`/DetailPage/${product.id}`}className={Style.cardLink} >
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
<div className={`${Style.Caption} px-0`}>
<h4 className={`mt-md-1 mt-1 mb-1 mb-md-0 ${Style.productName}`}>{product.productName}</h4>
<h5 className={`mb-md-1 mb-1 mt-lg-1`}>{product.category}</h5>
<div className={`d-flex gap-2 mb-md-1 mb-lg-1 ${Style.oldprice}`}>
<span className={`${Style.price}`}>₹{product.price}</span>
<span className={Style.Cutprice}>₹{product.Cutprice}</span>
</div>
<p className={` d-flex gap-1 gap-lg-1 mb-2 mb-md-1 mb-lg-2 ${Style.reviews}`}>
<span className={`me-md-1 ${Style.rating}`}>
<i className={`fa-solid fa-star`}></i>
<i className={`fa-solid fa-star`}></i>
<i className={`fa-solid fa-star`}></i>
<i className={`fa-solid fa-star`}></i>
<i className={`fa-regular fa-star`}></i>
</span>
<span className={`d-flex gap-1  ${Style.reviewCount}`}>
({product.reviews}) reviews
</span>
</p>
</div>
<div className={Style.btn}>
<button onClick={(e) => {
e.stopPropagation();
e.preventDefault();
handleAddToCart(product);
}}  className={Style.button}><i className={`fa-solid fa-cart-shopping ${Style.Cart}`}></i> Add to Cart</button>
</div>
</div>
</Link> 
</Col>
))
}
</Row>
</div>
)
}
export default NewArrivalProducts;