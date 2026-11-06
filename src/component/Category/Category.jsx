import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Products} from '../../data';
import Styles from '../Category/Category.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Category() {
let start = 0;
const [end , setEnd] = useState(6);   
const handleCategory = () =>{ 
if(end === 6 ){
setEnd(Products.length)
}else{
setEnd(6)
}
}
return (
<div className={`${Styles.ProductsCategory} mx-0`}>
<Row className='g-2 mx-0 g-md-2 m-0'>
<Col lg={12} className='mt-0 px-0'>
<div className='d-flex justify-content-between align-items-center px-1 mb-0 mb-md-0 mb-lg-0 mx-0'>
<div className='mx-0 mb-0 mb-lg-1 '>
<h3 className={`${Styles.FeaturedCategory} mb-0`}>Featured Categories</h3>
</div>
<div className='mx-0'>
<p className={`${Styles.ViewAll} mb-0 mx-0 px-0`} onClick={handleCategory}>{end === 6 ? "View All Categories" : "Show less"}<i className={`fa-solid fa-arrow-right`}></i></p>
</div>
</div>
</Col>
<Col xs={12} className='mx-0 px-0'>
<Row className={`mx-0  ${Styles.CardsRow}`}>
{Products.slice(start, end).map((product, index) => (
<Col xs={6} lg={2} sm={3} md={3} className={`px-md-1 mx-lg-0 mb-2  ${Styles.CategoryCol}`} key={index}>
<Link to={`/shop/${(product.category)}`} className={Styles.CategoryCards}>
<div className={`text-center ${Styles.cards}`}>
<div className={`${Styles.cardImg} my-lg-0 mb-lg-1 mb-md-1 mb-lg-0`}>
<img src={product.images} className={`${Styles.Images}`} alt={product.category}/>
</div>
<div>
<h5 className={`${Styles.categoryProduct} mb-md-1 mb-lg-1`}>{product.category}</h5>
<p className={`${Styles.items} mb-md-1 mb-lg-2`}> {product.items} items</p>
</div>
</div>
</Link>
</Col>
))}
</Row>
</Col>
</Row>
</div>
);
}
export default Category;  