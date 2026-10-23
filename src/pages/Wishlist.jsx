import Style from './Whislist.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { wishlistContext } from '../Context/wishlistContext';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { AllProducts } from '../data';

function Wishlist(){
const{wishlist , dispatch : wishlistDispatch} = useContext(wishlistContext);
const {dispatch} = useContext(CartContext);
const TotalPrice = wishlist.reduce(
  (total, product) => total + product.price,
0);


const recommendedCount = wishlist.length >= 4 ? wishlist.length : 2;

const RecommendedProducts = AllProducts
    .filter((product) => !wishlist.some((item) => item.id === product.id))
    .slice(0, recommendedCount);

const handleAddToCart = (product) => {
        dispatch({
            type : "ADD_TO_CART",
            payload : product
        })
    }

const handleAddAlltoCart = ()=>{
    wishlist.forEach((product)=>{{
        dispatch({
            type: "ADD_TO_CART",
            payload : product
        })
    }})
}

const handleMoveAllToCart = ()=> {
    wishlist.forEach((product) => {
dispatch({
    type : "ADD_TO_CART",
    payload : product,
});
wishlistDispatch({
    type : "REMOVE_FROM_WISHLIST",
    payload : product.id
})
    })
}
    return(
<div className={Style.WishlistContainer}>
<div className={`${Style.BreadCrumb} mb-lg-2`}>
<span>Home</span>
<i className="fa-solid fa-chevron-right"></i>
<span>Wishlist</span>
</div>
<Row  className={Style.WishlistRow}>
<Col lg={8}  className={Style.WishlistLeftCol}>
<h3 className={Style.wishlist}>My Wishlist <span className={Style.WishlistLength}>({wishlist.length})</span></h3>
{wishlist.length === 0 ? (
<div className={Style.EmptyCartWishlist}>
<i class="fa-solid fa-heart"></i>
    <h3 className='mb-lg-1'>Your Wishlist is Empty</h3>
    <p className='mb-lg-0'>you haven't added any products to your wishlist page.</p>
</div>
) : (
wishlist.map((product) =>(
<div key={product.id} className={Style.CardWishlist}>
<img src={product.image} className={Style.ProductName} alt={product.productName} width="120"/>
<div className={`ms-lg-3 ${Style.ProductsDetails}`}>
<h4 className={`${Style.productName} mb-lg-2`}>{product.productName}</h4>
<div className={`d-flex gap-2 mb-lg-1 ${Style.MixCategory}`}>
<h5 className={`${Style.mainCategory} mb-lg-0`}>{product.mainCategory}</h5>
<h5 className={` ${Style.category} mb-lg-0`}>{product.category}</h5>
</div>
<p className={`mb-md-2 ${Style.reviews} d-flex gap-2 align-items-center`}>
<span className={Style.rating}>
<i className={`fa-solid fa-star`}></i>
<i className={`fa-solid fa-star`}></i>
<i className={`fa-solid fa-star`}></i>
<i className={`fa-solid fa-star`}></i>
<i className={`fa-regular fa-star`}></i>
</span>
<span className={`${Style.reviewCount}`}>
({product.reviews})
</span>
</p>
</div>

<div className={Style.PriceSection}>
<div className={Style.PriceBox}>
<span className={Style.price}>₹{product.price}</span>
<span className={Style.Cutprice}>₹{product.Cutprice}</span>
</div>
<span className={Style.Discount}>
{Math.round(((product.Cutprice - product.price) / product.Cutprice) * 100)}% OFF</span>
</div>

<button onClick={(e) => {
    e.stopPropagation();
    e.preventDefault();
    handleAddToCart(product);
}} className={Style.AddCartBtn}><i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
<i onClick={(e) => {
    e.stopPropagation();
    e.preventDefault();
    wishlistDispatch({
        type : "REMOVE_FROM_WISHLIST",
        payload : product.id,
    })
}} className={`fa-solid fa-xmark ${Style.RemoveWishlist}`}></i>
</div>
))
)}
</Col>
<Col lg={4}>
<div className={Style.Wrapper}>
<h3 className={`${Style.WishlistSummary} mb-lg-0`}>Wishlist Summary</h3>
<div className={Style.WrapperContent}>
<div className={`d-flex justify-content-between px-lg-1 ${Style.TotalItems}`}>
<span>Total Items</span>
<span className={Style.BoldItems}>{wishlist.length}</span>
</div>
<div className={`${Style.TotalPrice} mb-lg-3 px-lg-1 d-flex justify-content-between`}>
<span>Total Price</span>
<span className={Style.BoldPrice}>₹{TotalPrice}</span>
</div>
<div className={Style.buttons}>
<button onClick={handleAddAlltoCart} className='mb-lg-3'><i className={`fa-solid fa-cart-shopping `}></i> Add All to Cart</button>
<button onClick={handleMoveAllToCart} className='mb-lg-3'><i className="fa-solid fa-lock"></i> Move All to Cart</button>
</div>
<p className={`d-flex justify-content-center gap-2 align-items-center mb-lg-0 p-lg-3 ${Style.ItemsSaved}`}><i className="fa-solid fa-heart"></i> Items in your whislist are saved for 30 days</p>
</div>
</div>

</Col>
</Row>
</div>
    )
}
export default Wishlist;