import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AllProducts} from '../data';
import { useParams } from 'react-router-dom';
import Style from '../pages/ProductDetail.module.css'
import ImageOne from '../assets/4232b002-c97a-4d20-976f-7585beb5e8f7.png'
import ImageTwo from '../assets/7083328e-8d3a-4a32-b32a-ba266da8a230 (1).png'
import ImageThree from '../assets/b08efb55-be80-4ab9-b9e8-bfc252d63943.png'
import ImageFour from '../assets/2f98f726-31e9-4e03-a58e-ac293c53b5bd.png'
import { useState } from 'react';
import ShippingWar from '../component/ShippingWarrenty/ShippingWar';


function DetailPage(){
const {ProductID} = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedShade, setSelectedShade] = useState("");
const [selectedStorage, setSelectedStorage] = useState("");
const findProduct = AllProducts.find((item)=> item.id === Number(ProductID));
console.log(findProduct);
if(!findProduct){
    return <h2>Product Not Found !</h2>
}
const Saving = findProduct.Cutprice - findProduct.price;
const discount = Math.floor((Saving / findProduct.Cutprice) * 100);

const handleAddToCart = () => {
  if (findProduct.options?.sizes && !selectedSize) {
    alert("Please select a size");
    return;
  }

  if (findProduct.options?.colors && !selectedColor) {
    alert("Please select a color");
    return;
  }
    alert("Size and Color selected successfully!");
}


return(
    <>
<div className={Style.DetailPageContainer}>
{/* BreadCrumb  */}
<div className={Style.BreadCrumb}>
Home 
<i className="fa-solid fa-angle-right"></i>
Shop
<i className="fa-solid fa-angle-right"></i>
{findProduct.mainCategory}
<i className="fa-solid fa-angle-right"></i>
<span className={Style.CurrentProduct}>
{findProduct.productName}
</span>
</div>

<Row className={`align-items-stretch pb-lg-4 ${Style.ProductRow}`}>
<Col lg={7} className='d-flex flex-column justify-content-center'>
<Row className={`align-items-stretch`}>
{/* ThumbNail */}
<Col lg={2} className='px-lg-2 d-flex justify-content-center align-items-center'>
<div className={`d-flex align-items-center flex-column gap-lg-3 ${Style.ThumbNails}`}>
<div className={Style.ThumNailBox}>
<img src={ImageOne} className={Style.ThumNailImage} alt="" />
</div>
<div className={Style.ThumNailBox}>
<img src={ImageOne} className={Style.ThumNailImage} alt="" />
</div>
<div className={Style.ThumNailBox}>
<img src={ImageOne} className={Style.ThumNailImage} alt="" />
</div>
<div className={Style.ThumNailBox}>
<img src={ImageOne} className={Style.ThumNailImage} alt="" />
</div>
</div>
</Col>
{/* Main Image */}
<Col lg={10} className='px-lg-2'>
<div className={Style.ProductImage}>

<span className={Style.DiscountBadge}>
-{discount}%
</span>

<button className={Style.Wishlist}>
<i className="fa-regular fa-heart"></i>
</button>

<img src={findProduct.image} className={Style.MainImage} alt="" />
</div>
    </Col>
</Row>
</Col>

{/* Right Side */}
<Col lg={5} className='d-flex flex-column justify-content-center'>
<div className={Style.ProductsDetails}>
{/* First */}
<div className={`${Style.productDetail} mb-lg-0`}>
<span className={`${Style.InStock} mb-lg-1`}>In stock</span>
<h1 className={`${Style.productName} mt-lg-0 mb-lg-0`}>{findProduct.productName}</h1>
<p className={`${Style.ProductCategory} mb-lg-1`}>{findProduct.category}</p>

<div className={`${Style.RatingBox} mb-lg-1`}>
<span className={Style.Stars}>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-regular fa-star"></i>
</span>
<span className={Style.Reviews}>({findProduct.reviews} Reviews)</span>
</div>
</div>
{/* Second */}
<div className={Style.PriceBox}>
<div className='d-flex gap-2 align-items-center'>
<span className={Style.price}>₹{findProduct.price}</span>
<span className={Style.OldPrice}>₹{findProduct.Cutprice}</span>
<span className={Style.Off}>{discount}% OFF</span>
</div>
<p className={`mb-lg-1 ${Style.Saving}`}>you save ₹{Saving}</p>
<p className={`${Style.Description} my-lg-0`}>
Shop premium quality products from ShopVerse at
the best prices. Designed for comfort, style and
everyday use, this product is a great addition to
your collection.
</p>
{findProduct.options && (
<div className= {`${Style.ProductOptions} mt-lg-2`}>
    {findProduct.options?.sizes && (
<div className={`${Style.OptionGroups} mb-lg-2`}>
<h5 className='mb-lg-2'>Select Sizes</h5>
<div className={Style.OptionsButtons}>
        {findProduct.options.sizes.map((size) => (
            <button onClick={() => setSelectedSize(size)} key={size} type='button' className={`${Style.OptionButton}  ${selectedSize === size ? Style.selectedOptions : ""}`}>
                {size}
            </button>
        ))}
    </div>
</div>
    )}
{findProduct.options?.colors && (
    <div className={` ${Style.OptionGroups} mb-lg-2`}>
    <h5 className='mb-lg-2'>Select Colors</h5>

    <div className={Style.OptionsButtons}>
        {findProduct.options?.colors.map((color) => (
            <button onClick={() => setSelectedColor(color)} key={color} type='button' className={`${Style.OptionButton}  ${selectedColor === color ? Style.selectedOptions : ""}`}>
               {color}
            </button>
        ))}
    </div>
</div>
)}
{findProduct.options?.shades && (
    <div className={` ${Style.OptionGroups} mb-lg-2`}>
    <h5 className='mb-lg-1'>Select Shades</h5>
    <div className={Style.OptionsButtons}>
        {findProduct.options?.shades.map((shade) => (
            <button onClick={() => setSelectedShade(shade)} key={shade} type='button' className={`${Style.OptionButton}  ${selectedShade === shade ? Style.selectedOptions : ""}`}>
               {shade}
            </button>
        ))}
    </div>
</div>
)}
{findProduct.options?.storage && (
    <div className={` ${Style.OptionGroups} mb-lg-2`}>
    <h5 className='mb-lg-1'>Select Storage</h5>
    <div className={Style.OptionsButtons}>
        {findProduct.options?.storage.map((storage) => (
            <button onClick={() => setSelectedStorage(storage)} key={storage} type='button' className={`${Style.OptionButton}  ${selectedStorage === storage ? Style.selectedOptions : ""}`}>
               {storage}
            </button>
        ))}
    </div>
</div>
)}
</div>
)}
<div className={Style.ActionsButton}>
<button className={Style.AddToCartButton} onClick={handleAddToCart}>Add to Cart</button>
<button className={Style.BuyButton} type='button'>Buy Now</button>
</div>
</div>
</div>
</Col>
</Row>
</div>

<div>
<ShippingWar />
</div>    
    </>

    )
}
export default DetailPage;