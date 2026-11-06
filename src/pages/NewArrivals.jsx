
import NewArrivalsBanner from "../Shops/NewArrivals/NewArrivalsBanner/NewArrivalsBanner";
import NewArrivalsSidebar from "../Shops/NewArrivals/NewArrivalsSideBar/NewArrivalsSideBar";
import NewArrivalsProducts from "../Shops/NewArrivals/NewArrivalsProducts/NewArrivalsProducts";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Style from './Shop.module.css'
import { useState } from "react";
import { AllProducts } from "../data";


function NewArrivals(){

const [newArrivalCategory, setNewArrivalCategory] = useState("");
const [newArrivalMinPrice, setNewArrivalMinPrice] = useState(0);
const [newArrivalBrand, setNewArrivalBrand] = useState("");
const maxPrice = 5000;

const newArrivalsProducts = AllProducts.filter((product ) => product.tag === "NewArrivals");
const CategoryFilteredProducts = newArrivalsProducts.filter((product) => {
  if(newArrivalCategory === ""){
    return true;
  }
  return (
    product.mainCategory?.toLowerCase() === newArrivalCategory.toLowerCase());
})

const priceFilteredProducts =  CategoryFilteredProducts.filter((product) => (
  product.price >= newArrivalMinPrice && product.price <= maxPrice)).filter((product) => (
      newArrivalBrand === "" ||
      product.brand?.toLowerCase() === newArrivalBrand.toLowerCase()
    ))

return(
    <>
<NewArrivalsBanner />
<div className={Style.ShopContainer}>
<Row className="g-3 m-0">
  {/* Sidebar - 2 columns */}
<Col lg={2} className="ps-lg-0 pe-lg-1">
<NewArrivalsSidebar
  newArrivalCategory={newArrivalCategory}
  setNewArrivalCategory={setNewArrivalCategory}
  newArrivalMinPrice={newArrivalMinPrice}
  setNewArrivalMinPrice={setNewArrivalMinPrice}
  newArrivalBrand={newArrivalBrand}
setNewArrivalBrand={setNewArrivalBrand}
    />
</Col>
<Col lg={10} className="ps-lg-0 pe-lg-1">
<NewArrivalsProducts 
priceFilteredProducts = {priceFilteredProducts}
/>
</Col>
</Row>
</div>


    </>
)
}
export default NewArrivals;