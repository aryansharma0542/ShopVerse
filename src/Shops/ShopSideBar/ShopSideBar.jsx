import Style from './ShopSideBanner.module.css';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import { useState} from 'react';
import { Products } from '../../data';
import { Brands } from '../../data';
import ImageOne from '../../assets/1624bd56-2b6c-4d27-8933-7f3491fc9d2c.png'



function ShopSideBar({ selectedCategory,
SetSelectedCategory,
MinPrice,
SetMinPrice,
selectedBrand,
SetSelectedBrand,
newArrivalCategory,
setNewArrivalCategory,
newArrivalMinPrice,
setNewArrivalMinPrice
}){

const[OpenCategory , SetOpenCategory] = useState(true);
const[OpenRange , SetRange] = useState(true);
const[openBrand , SetOpenBrand] = useState(true);
const maxPrice = 5000;

const handleClearFilters = () => {
  SetSelectedBrand("");
  SetSelectedCategory("");
  SetMinPrice(0);
};

return(
<div className={Style.CategoryBox}>
{/* Part-One */}
<div className={`${Style.CategoryOption} ${OpenCategory ? Style.OpenCategoryMargin : Style.ClosedCategoryMargin}`} onClick={()=> SetOpenCategory(!OpenCategory)}>
<h4 className={`${Style.Category} mb-lg-0`}>Category</h4>
<i className={`${Style.Icons} fa-solid ${OpenCategory ? "fa-angle-up" : "fa-angle-down"}`}></i>
</div>
{/* open - close */}
<Collapse in= {OpenCategory}>
<div className={Style.CategoryList}>
{Products.map((product , index) => (
<div className={Style.CategoryItems} key={index}>
<Form.Check id={product.category}
label={product.category}
type='radio'
name='category'
checked={selectedCategory === product.category}
onChange={()=> SetSelectedCategory(product.category)}
/>
<span className={Style.Item}>({product.items})</span>
</div>
))}
</div>
</Collapse>

{/* Part-Two */}
<div className={`${Style.RangeOption} ${OpenRange ? Style.OpenCategoryMargin : Style.ClosedCategoryMargin}`} onClick={() => SetRange(!OpenRange)}>
<h4 className={`${Style.Category} mb-lg-0`}>Price Range</h4>
<i className={`fa-solid ${OpenRange ? "fa-angle-up" : "fa-angle-down"}`}></i>
</div>
{/* open - close */}
<Collapse in={OpenRange}>
<div className={Style.CategoryList}>
<input type="range" className={Style.PriceRange}
min={0}
max={5000}
value={MinPrice}
onChange={(e) =>  SetMinPrice(Number(e.target.value))}
/>
<div className={`${Style.PriceRangeSetUp} d-flex justify-content-between align-items-start`}>
<span className={Style.Rating}> ₹{MinPrice}</span>
<span className={Style.Rating}> ₹{maxPrice}</span>
</div>
</div>
</Collapse>

{/* Part - Three */}
<div className={`${Style.BrandsOption} ${openBrand ? Style.OpenBrand : Style.ClosedBrandMargin}`} onClick={()=> SetOpenBrand(!openBrand)}>
<h4 className={`${Style.Category} mb-lg-0`}>Brands</h4>
<i className={`${Style.Icons} fa-solid ${openBrand ? "fa-angle-up" : "fa-angle-down"}`}></i>
</div>
{/* open - close */}
<Collapse in= {openBrand}>
<div className={Style.CategoryList}>
{Brands.map((brand , index) => (
<div className={Style.CategoryItems} key={index}>
<Form.Check id={brand.category}
label={brand.category}
type='radio'
name='brand'
checked={selectedBrand === brand.category}
onChange={()=> SetSelectedBrand(brand.category)}
/>
<span>{brand.items}</span>
</div>
))}
</div>
</Collapse>

<button onClick={handleClearFilters} type='button' className={Style.ClearFilter}>Clear Filters</button>
</div>
)
}
export default ShopSideBar;