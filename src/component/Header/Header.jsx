import Styles from './Header.module.css';
import ShopVerseLogo from '../../assets/1624bd56-2b6c-4d27-8933-7f3491fc9d2c.png';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useState , useRef , useEffect } from 'react';
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartImage from '../../assets/1624bd56-2b6c-4d27-8933-7f3491fc9d2c.png'
import { SearchContext } from '../../Context/SearchContext';
import { AllProducts } from '../../data';
import { wishlistContext } from '../../Context/wishlistContext';

function Top() {
const handleSearch = () => {
setSearch(searchInput.trim());
};
const{searchInput, setSearch , setSearchInput} = useContext(SearchContext);
const [showSuggestions, setShowSuggestions] = useState(false);
const searcRef = useRef(null);
const CartRef = useRef(null);
useEffect(() => {
    const handleOutClick = (e) => {
        if(searcRef.current && !searcRef.current.contains(e.target)){
setShowSuggestions(false);
        }
        if(CartRef.current && !CartRef.current.contains(e.target)){
            SetShowCart(false)
        }
    }
    document.addEventListener("mousedown" , handleOutClick);
},[])
const suggestion =  searchInput.trim() ? AllProducts.filter((product) => product.productName?.toLowerCase().includes(searchInput.toLowerCase())).slice(0 , 8) : [];
const { cart  , dispatch} = useContext(CartContext);
const {wishlist} = useContext(wishlistContext);
const TotalPrice =  cart.reduce((total, item) => total + item.price * item.quantity, 0);
const [showCart , SetShowCart] = useState(false);
const[selectCategoryLabel , SetSelectedCategoryLabel ] = useState("All Categories");

return (
<header className={Styles.header}>

{/* Top Bar */}
<div className={Styles.topContainer}>
<div className={Styles.navOne}>
<div className="d-flex gap-2 d-md-block">
<p className={`mb-1 ${Styles.FreeShipping}`}><i className={`fa-solid fa-truck ${Styles.shipping}`}></i>Free Shipping on orders over $999</p>
</div>
<div className="d-none d-md-flex gap-1 align-items-center">
<p className={`mb-0 ${Styles.SummerSale}`}>Summer Sale is Live - Up to 50% Off</p>
<i className={`fa-solid fa-fire ${Styles.saleIcon}`}></i>
</div>
<div className="d-md-flex gap-4 align-items-center">
<a className={`text-decoration-none ${Styles.tel}`}href="tel:8628819766">
<i className={`fa-solid fa-phone ${Styles.phone}`}></i>+91 8278862795</a>
<a className={`text-decoration-none ${Styles.email} ${Styles.textClr} d-lg-block d-none`}href="mailto:taniksharma2000@gmail.com">support@shopverse.com</a>
<a className={`text-decoration-none ${Styles.textClr}`} href="#">
<i className={`fa-solid fa-chevron-down me-1 ${Styles.dropdown}`}></i>Track Order</a></div>
</div>
</div>

{/* Main Navbar */}
<Navbar expand="lg" className="flex-column border-0 align-items-stretch w-100 p-0">
<div className={`${Styles.MiddleContainer} w-100`}>
<div className={` ${Styles.MiddleWrapper} d-flex align-items-center`}>
{/* Mobile + Tablet Hamburger */}
<div className="d-lg-none d-flex align-items-center">
<Navbar.Toggle
aria-controls="navbarScroll" className={Styles.mobileToggle}><i className={`fa-solid fa-bars ${Styles.menuIcon}`}></i></Navbar.Toggle>
</div>
<div className="d-none d-lg-block">
<img src={ShopVerseLogo}className={`${Styles.ShopVerselogoWidth}`}alt="ShopVerse Logo"/>
</div>
<div className={` ${Styles.AllCatInp} d-flex align-items-center`}>
<Dropdown>
<Dropdown.Toggle className={`${Styles.categoryBtn} d-none d-lg-block`}id="dropdown-basic">
{selectCategoryLabel}
</Dropdown.Toggle>
<Dropdown.Menu>
<Dropdown.Item as={Link} to="/shop/Men" onClick={() => SetSelectedCategoryLabel("Men")}>Men </Dropdown.Item> 
<Dropdown.Item as={Link} to="/shop/Women" onClick={() => SetSelectedCategoryLabel("Women")}>Women</Dropdown.Item>
<Dropdown.Item as={Link} to="/shop/Electronics" onClick={() => SetSelectedCategoryLabel("Electronics")}>Electronics</Dropdown.Item>
<Dropdown.Item as={Link} to="/shop/Home & Living" onClick={() => SetSelectedCategoryLabel("Home & Living")}>Home & Living</Dropdown.Item>
<Dropdown.Item as={Link} to="/shop/Footwear" onClick={() => SetSelectedCategoryLabel("Footwear")}>Footwear</Dropdown.Item>
<Dropdown.Item as={Link} to="/shop/Sports" onClick={() => SetSelectedCategoryLabel("Sports")}>Sports</Dropdown.Item>
<Dropdown.Item as={Link} to="/shop/Accessories" onClick={() => SetSelectedCategoryLabel("Accessories")}>Accessories</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
<div ref={searcRef} className={`d-flex flex-grow-1 align-items-center ${Styles.SearchWrapper}`}>
<input type="text" placeholder="Search for products ..." value={searchInput} onKeyDown={(e) => {
    if(e.key === "Enter"){
        handleSearch();
    }
}} onChange={(e) => { setSearchInput(e.target.value); setShowSuggestions(true)} }className={Styles.searchInput}/>
<i className={`fa-solid fa-magnifying-glass ${Styles.search}`} onClick={handleSearch}></i>
{ showSuggestions && suggestion.length > 0 && (
<div className={Styles.SearchDropdown}>
    {suggestion.map((product) => (
<div className={Styles.searchSuggestion} onClick={() =>{ setSearchInput(product.productName); setShowSuggestions(false)  }}>
    <img src={product.image} alt="" />
    <span>{product.productName}</span></div>
    ))}
</div>
)}
</div>
</div>
<div className={`${Styles.AllCart} d-flex justify-content-center align-items-end`}>
{/* Login */}
<Link to="/login" className={`d-none d-md-flex align-items-center ${Styles.cartItems}`}>
<i className={`fa-regular fa-circle-user ${Styles.login}`}></i>
<small className={Styles.loginVal}>Login</small>
</Link>
{/* Wishlist */
}<Link to="/wishlist" className={`d-none d-lg-flex align-items-center position-relative ${Styles.cartItems}`}>
<i className={`fa-regular fa-heart ${Styles.heart}`}></i>
<small className={Styles.whislist}>Wishlist</small></Link>
{/* Cart */}
<div ref={CartRef} className={`d-flex justify-content-center align-items-center position-relative  me-md-0  ps-md-0 ${Styles.cartItems} ${Styles.Wrapper}`} onClick={() => SetShowCart((prev) => !prev)}>   
<i className={`fa-solid fa-cart-shopping ${Styles.Cart}`}></i>
<span className={Styles.cartValTwo}>{cart.length}</span>
<small className={`${Styles.cartHead} d-none d-md-flex`}>Cart</small>
{showCart && (
<div className={Styles.cartDropDown} onClick={(e) => e.stopPropagation()}>
{cart.length === 0 ? (
<>
<div className={Styles.emptyCartWrapper}>
<div className={`d-flex align-items-center justify-content-between ${Styles.emptyCartBorder}`}>
<img src={CartImage} className={Styles.cartImage} alt="" />
<i onClick={() => SetShowCart(false)} className={`fa-regular fa-circle-xmark ${Styles.CrossCart}`}></i>
</div>
<div className={Styles.emptyCartContent}>
<h5 className={`mb-lg-3 ${Styles.Slogan}`}>Your Cart is Empty!</h5>
<p className={`${Styles.LookLikes} mb-lg-1`}>Looks like you haven't added anythingto your cart yet.</p>
<Link to="/shop" onClick={() => SetShowCart(false)} className={Styles.shopNowBtn}>Start Shopping</Link>
<img src={CartImage} className={Styles.cartImageTwo} alt="" />
</div>
</div>
</>
) : (
<>
<div className={`d-flex justify-content-between align-items-center pt-lg-2 pb-lg-4 ${Styles.Opencartlist}`}>
<h5 className={`mb-lg-0 ${Styles.CartLength} `}>
<img src={CartImage} className={Styles.cartImageThree} alt="" />
<i className={`fa-solid fa-cart-shopping ${Styles.cart}`}></i>({cart.length})</h5>
<i onClick={() => SetShowCart(false)} className={`fa-regular fa-circle-xmark ${Styles.CrossCart}`}></i>
</div>
<div className={Styles.cartProducts}>
{cart.map((item) => (
<div key={item.id} className={Styles.cartProduct}>
    <img src={item.image} alt={item.productName} />
    <div className={Styles.CartInfo}>
        <h6>{item.productName}</h6>
        <div className='d-flex gap-2 align-items-center'>
        <p className={Styles.Price}>${item.price}</p>
        <p className={Styles.CutPrice}>${item.Cutprice}</p>
        </div>
<div className={` ${Styles.quantityControl} d-flex`}>
    <div className='d-flex align-items-center gap-3'>   
<button  onClick={() => {
dispatch({
    type : "DECREASE_QUANTITY",
    payload: item.id
})
}} type='button'>-</button>
<span>{item.quantity}</span>
<button onClick={()=> {
    dispatch({
        type: "INCREASE_QUANTITY",
        payload: item.id
    })
}} type='button'>+</button>
    </div>
    <div className='d-flex align-items-center'>
        <button className={Styles.removebtn} onClick={() => {
            dispatch({
                type : "REMOVE_FROM_CART",
                payload : item.id,
            })
        }}>  <i className="fa-regular fa-trash-can"></i>
  Remove</button>
    </div>
    </div>
    </div>
</div>
))}
    </div>
    <div className={Styles.cartTotal}>
    <p className='mb-lg-0'>Estimated Total</p>
    <h5>${TotalPrice.toFixed(2)}</h5>
</div>
    </>
    )}
    </div>
)}
</div>
</div>
</div>
</div>
{/* Bottom Navigation */}
<div className={`${Styles.endContainer} w-100`}>
        <Navbar.Collapse id="navbarScroll" className={Styles.navCollapse}>
        <Nav className={`me-auto p-0 my-2 gap-4 g-lg-0 my-lg-0 flex-column flex-lg-row ${Styles.nav}`}>
        <Link to="/"  className={`${Styles.ActiveLinks} p-0`}>Home</Link>
        <Link to="/shop"  className={`${Styles.links} p-0`}>Shop</Link>
        <Link to="/Deals" className={`${Styles.links} p-0`}>Deals
        </Link>
        <Link to="/NewArrivals" className={`${Styles.links} p-0`}>New Arrivals</Link>
        <Link to="/About" className={`${Styles.links} p-0`}>About Us
        </Link>
        <Link to="/Contact" className={`${Styles.links} p-0`}>Contact Us</Link>
        </Nav>
        </Navbar.Collapse>
        </div>
        </Navbar>
        </header>
        
    );
}
export default Top;