import Style from '../DealProducts/DealProducts.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState  } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { wishlistContext } from '../../Context/wishlistContext';

function DealProducts({dealProducts}){
const{dispatch} = useContext(CartContext);

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

const[end , setEnd] = useState(18);
const handleViewAllDeals = ()=> (
  setEnd(dealProducts.length)
)
return(
<section className={Style.DealsProductContainer}>
<Row className='g-3 m-0'>
<Col lg={12} className='mt-0 px-md-0 px-1'>
<div className='d-flex justify-content-between mb-2 align-items-center'>
<div>
<h4 className={`${Style.TodayDeals} mb-lg-0 mb-0`}>Today's Deals</h4>
<p className={`${Style.HurryUp} mb-lg-0 mb-0`}>Hurry up! These deals won't last long.</p>
</div>
<div>
<button onClick={handleViewAllDeals} className={Style.ViewAllDeals}>View All Deals <i className={`fa-solid fa-arrow-right`}></i></button>
</div>
</div>
</Col>
{dealProducts.slice(0 , end).map((product , index) => {
  const Saving = product.Cutprice - product.price;
  const discount = Math.floor((Saving / product.Cutprice) * 100);
return(
<Col lg={2} md={3} sm={4} xs={6} key={index} className='g-md-2 g-2  mb-lg-1'>
<Link to={`/DetailPage/${product.id}`} className={Style.CardLinks}>
<div className={`${Style.card}`}>
<button onClick={(e) => {
    e.stopPropagation();
    e.preventDefault();
    handleWhislist(product);
  }} type="button" className={Style.WishlistBtn}>
  <i className= {`fa-heart ${wishlist.some((item) => item.id === product.id) ? `fa-solid ${Style.activeHeart}` : "fa-regular"}`}></i>
  </button>
<div className={`pb-1 pb-lg-2  ${Style.ProductBorder} ${Style.ProductImageBox}`}>
  <span className={Style.DiscountBadge}>-{discount}%</span>
    <img src={product.image} className={Style.productImages} alt="" />
</div>
<div className={` ${Style.Caption} px-0`} >
<h4 className={` ${Style.productName} mb-lg-0 my-1 mt-lg-1`}>{product.productName}</h4>
<h5 className={`my-lg-1 ${Style.category} mb-1`}>{product.category}</h5>

<div className={`${Style.oldprice} d-flex align-items-center gap-2 mb-lg-0 mb-md-1`}>
<span className={`${Style.price}`}>₹{product.price}</span>
<span className={Style.Cutprice}>₹{product.Cutprice}</span>
</div>
<p className={`${Style.reviews} d-flex gap-lg-1 align-items-center  mb-md-2 mb-lg-2`}>
<span className={`${Style.rating} d-flex`}>
<i className={`fa-solid fa-star`}></i>
<i className={`fa-solid fa-star`}></i>
<i className={`fa-solid fa-star`}></i>
<i className={`fa-solid fa-star`}></i>
<i className={`fa-regular fa-star`}></i>
</span>
<span className={Style.reviewCount}>
{product.reviews} (reviews)
</span>
</p>
</div>
<div className={`${Style.btn} d-flex`}>
<button onClick={(e) => {
  e.preventDefault();
  e.stopPropagation();
  handleAddToCart(product);
}} className={Style.button}><i className={`fa-solid fa-cart-shopping ${Style.Cart}`}></i> Add to Cart</button>
</div>
</div>
</Link>
</Col>
)
})}
</Row>
</section>
    )
}
export default DealProducts;