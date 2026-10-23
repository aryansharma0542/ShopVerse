import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import Style from './ShopProducts.module.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import ImageOne from '../../assets/1624bd56-2b6c-4d27-8933-7f3491fc9d2c.png'
import { wishlistContext } from '../../Context/wishlistContext';


function ShopProducts({SortedProducts,
  selectedBrand,
  search,
sortOrder,
SetSortOrder,
  searchProducts,
selectedCategory,
MinPrice}) {

const{dispatch} = useContext(CartContext);
const handleAddToCart = ((product) => {
dispatch({
    type : "ADD_TO_CART",
    payload : product
})
})

const{wishlist ,  dispatch : wishlistDispatch} = useContext(wishlistContext);
const handleWhislist = (product) => {
    wishlistDispatch({
        type : "ADD_TO_WISHLIST",
        payload : product,
    })
}

const [currentPage, setCurrentPage] = useState(1);
const productsPerPage = 12;
useEffect(() => {
  setCurrentPage(1);
} , [selectedCategory , MinPrice , sortOrder , selectedBrand , search])
const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
const currentProducts = searchProducts.slice(indexOfFirstProduct,indexOfLastProduct);
const totalPages = Math.ceil(searchProducts.length / productsPerPage)
const visiblePages = totalPages <= 5
  ? Array.from({ length: totalPages }, (_, index) => index + 1)
  : [...new Set([
      1,
      ...(currentPage > 2 ? [currentPage - 1] : []),
      currentPage,
      ...(currentPage < totalPages - 1 ? [currentPage + 1] : []),
      totalPages,
    ])].sort((a, b) => a - b);
const changePage = (page) => {
  setCurrentPage(Math.min(Math.max(page, 1), totalPages));
};
return(
<div className={Style.ProductContainer}> 
<div className={Style.ProductsBox}>
<div className='d-flex justify-content-between mb-lg-3 align-items-center'>
<h3 className={`${Style.AllProducts} mb-lg-0`}>All Products</h3>
<div className={Style.SelectWrapper}>
<select name="" id="" className={`${Style.SelectBorder}`} value={sortOrder} onChange={(e) => SetSortOrder(e.target.value)}>
<option value="default">Sort By : Default</option>
<option value="lowToHigh">Prices : Low To High</option>
<option value="highToLow">Prices : High To Low</option>
</select>
<i className={`fa-solid fa-chevron-down ${Style.SelectIcon}`}></i>
</div>
</div>
{searchProducts.length === 0 ? (
  <div className={Style.EmptyState}>
  <i className="fa-solid fa-box-open"></i>
  <h4>No Products Found!</h4>
  <p className='mb-lg-2'>We couldn't find any products matching your selected filters.</p>
  <small>
    Try adjusting your filters or clearing them to explore more products.
  </small>
  <img src={ImageOne} className={Style.ImageOne} alt="" />
</div>
) : (
  <>
<Row className='g-3'>
{currentProducts.map((product , index) => (
<Col lg={2} key={index}>
<Link to={`/DetailPage/${product.id}`} className={Style.CardLinks}>
<div className={Style.ProductCard}>
<button onClick={(e) => {
  e.stopPropagation();
  e.preventDefault();
  handleWhislist(product);
}} type="button" className={Style.WishlistBtn}>
<i className={`fa-heart ${wishlist.some((item) => item.id === product.id) ? `fa-solid ${Style.activeHeart}`: "fa-regular"}`}></i>
</button>
<div className={Style.ProductImageBox}>
<img src={product.image} alt="" />
</div>
<div className={Style.ProductContent}>
<h5 className='mb-lg-1'>{product.productName}</h5>
<h4 className={`mb-lg-0 ${Style.category}`}>{product.category}</h4>
<div className={`d-flex gap-2 align-items-center ${Style.oldprice}`}>
<span className={`${Style.price}`}>₹{product.price}</span>
<span className={Style.Cutprice}>₹{product.Cutprice}</span>
</div>
<div className={` ${Style.RatingReview} d-flex gap-lg-1 mb-lg-1`}>
<span className={Style.rating}>
<i className={`fa-solid fa-star`}></i>
<i className={`fa-solid fa-star`}></i>
<i className={`fa-solid fa-star`}></i>
<i className={`fa-solid fa-star`}></i>
<i className={`fa-regular fa-star`}></i>
</span>
<span className={Style.reviewCount}>
({product.reviews}) reviews
</span>
</div>
<div>
<button onClick={(e) => {
e.preventDefault(),
e.stopPropagation(),
handleAddToCart(product);
} 
} className={Style.button}><i className={`fa-solid fa-cart-shopping ${Style.Cart}`}></i> Add to Cart</button>
</div>
</div>
</div>
</Link>
</Col>
))} 
</Row>

{/* Pagination */}
<nav className={`${Style.Pagination} mt-4`} aria-label="Product pages">
<button
  className={Style.pageBtn}
  type="button"
  aria-label="Go to previous page"
  disabled={currentPage === 1}
  onClick={() => changePage(currentPage - 1)}
>
  <span aria-hidden="true">‹</span> Previous
</button>
<div className={Style.PageNumbers}>
{visiblePages.map((pageNum, index) => (
  <span className={Style.PageItem} key={pageNum}>
    {index > 0 && pageNum - visiblePages[index - 1] > 1 && (
      <span className={Style.PageEllipsis} aria-hidden="true">…</span>
    )}
    <button
      className={currentPage === pageNum ? Style.activePage : Style.pageBtn}
      type="button"
      aria-label={`Go to page ${pageNum}`}
      aria-current={currentPage === pageNum ? "page" : undefined}
      onClick={() => changePage(pageNum)}
    >
      {pageNum}
    </button>
  </span>
))}
</div>
<button
  className={Style.pageBtn}
  type="button"
  aria-label="Go to next page"
  disabled={currentPage === totalPages}
  onClick={() => changePage(currentPage + 1)}
>
  Next <span aria-hidden="true">›</span>
</button>
</nav>
  </>
)}
</div>
</div>
)
}
export default ShopProducts;