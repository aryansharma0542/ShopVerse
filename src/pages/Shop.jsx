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

useEffect(() => {
  if (search && search.trim() !== "") {
    SetSelectedCategory("");
    SetSelectedBrand("");
    SetMinPrice(0);
  }
}, [search]);


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
console.log("Selected Category:", selectedCategory);
console.log("Selected Brand:", selectedBrand);
console.log("First Product:", AllProducts[0]);





// const filteredProducts = 
// (selectedCategory === "" ? AllProducts : AllProducts.filter((product)=> product.mainCategory?.toLowerCase() === selectedCategory.toLowerCase()))
// .filter((product) => product.price >= MinPrice && product.price <= maxPrice).filter((product) =>
//     selectedBrand === "" ||
//     product.brand?.toLowerCase() === selectedBrand.toLowerCase()
//   );



















const filteredProducts = 
(selectedCategory === "" ? AllProducts : AllProducts.filter((product)=> product.mainCategory?.toLowerCase() === selectedCategory.toLowerCase()))
.filter((product) => product.price >= MinPrice && product.price <= maxPrice).filter((product) =>
    selectedBrand === "" ||
    product.brand?.toLowerCase() === selectedBrand.toLowerCase()
  );
  console.log("Selected Category:", selectedCategory);
console.log("Selected Brand:", selectedBrand);
console.log("First Product:", AllProducts[0]);
const SortedProducts = [...filteredProducts].sort((a , b) => {
if(sortOrder === "lowToHigh"){
return a.price - b.price;
}else if(sortOrder === "highToLow") {
  return b.price - a.price;
}
return 0;
})
const searchProducts = SortedProducts.filter((product) => product.productName?.toLowerCase().includes(search?.toLowerCase()));
return(
<>

<ShopBanner />
<div className={Style.ShopContainer}>
<Row className="g-2 m-0">
<Col lg={2} className='mt-lg-0 ps-lg-0'>
  <ShopSideBar
    selectedCategory={selectedCategory}
    SetSelectedCategory={SetSelectedCategory}
    MinPrice={MinPrice}
    SetMinPrice={SetMinPrice}
    selectedBrand={selectedBrand}
    SetSelectedBrand={SetSelectedBrand}
  />
</Col>

<Col lg={10} className='mt-lg-0'>
  <ShopProducts 
    searchProducts={searchProducts}
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