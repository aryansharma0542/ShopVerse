import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Products } from '../data';
import ShopBanner from '../Shops/ShopBanner/ShopBanner';
import ShopProducts from '../Shops/ShopProducts/ShopProducts';
import ShopSideBar from '../Shops/ShopSideBar/ShopSideBar';
import { useEffect , useState } from 'react';
import { AllProducts } from '../data';
import { useParams } from 'react-router-dom';
import Style from './Shop.module.css'
import { useContext } from 'react';
import { SearchContext } from '../Context/SearchContext';

function Shop(){

const{search} = useContext(SearchContext);
const {category} = useParams();
const [selectedCategory , SetSelectedCategory] = useState("");
const[sortOrder , SetSortOrder] = useState("default");
const[MinPrice  , SetMinPrice] = useState(0); 
const[selectedBrand , SetSelectedBrand] = useState("")

// Part 1 : 
useEffect(() => {
if (category) {
const matchedCategory = Products.find((p) => p.category.toLowerCase() === category.toLowerCase());
SetSelectedCategory(matchedCategory ? matchedCategory.category : "");
} else {
SetSelectedCategory("");
}
}, [category]);
// Part 2 
const maxPrice = 5000;
const normalizedSearch = search.trim().toLowerCase();
const filteredProducts = AllProducts.filter((product) => {
const matchesSearch =
  product.productName?.toLowerCase().includes(normalizedSearch) ||
  product.mainCategory?.toLowerCase().includes(normalizedSearch) ||
  product.category?.toLowerCase().includes(normalizedSearch) ||
  false;
  const matchesCategory = selectedCategory === "" ||
    product.mainCategory?.toLowerCase() === selectedCategory.toLowerCase();
  const matchesBrand = selectedBrand === "" ||
    product.brand?.toLowerCase() === selectedBrand.toLowerCase();
  const matchesPrice = product.price >= MinPrice && product.price <= maxPrice;

  return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
});
const SortedProducts = [...filteredProducts].sort((a , b) => {
if(sortOrder === "lowToHigh"){
return a.price - b.price;
}else if(sortOrder === "highToLow") {
  return b.price - a.price;
}
return 0;
})
return(
<>
<ShopBanner />
<div className={Style.ShopContainer}>
<Row className="g-2 m-0">
<Col lg={2} className='mt-lg-0 mb-md-3 mb-lg-0 ps-lg-0'>
  <ShopSideBar
    selectedCategory={selectedCategory}
    SetSelectedCategory={SetSelectedCategory}
    MinPrice={MinPrice}
    SetMinPrice={SetMinPrice}
    selectedBrand={selectedBrand}
    SetSelectedBrand={SetSelectedBrand}
  />
</Col>
<Col lg={10} className='mt-lg-0 p-0'>
  <ShopProducts 
    searchProducts={SortedProducts}
    SortedProducts={SortedProducts}
    sortOrder={sortOrder}
    SetSortOrder={SetSortOrder}
    selectedBrand={selectedBrand}
    search={search}
    selectedCategory={selectedCategory}
    MinPrice={MinPrice}
  />
</Col>
</Row>
</div>
</>
)
}
export default Shop;