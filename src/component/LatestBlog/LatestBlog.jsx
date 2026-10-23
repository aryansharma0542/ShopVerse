import Style from '../LatestBlog/Latest.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LatestBlog } from '../../data';
import { useState } from 'react';

function LatestBlogsCard() {
let start = 0;
const [end , setEnd] = useState(3);   
const handleCategory = () =>{ 
if(end === 3 ){
setEnd(LatestBlog.length)
}else{
setEnd(3)
}
}
return (
<div className={Style.LatestBlogContainer}>
<Row className="g-md-1 gx-2 mx-0 px-0">
{/* Heading */}
<Col lg={12} className="px-0 mx-0 mt-0">
<div className="d-flex justify-content-between  mb-1 mb-md-1 align-items-center">
<h3 className={`${Style.LatestBlog} ps-lg-2 mb-0`}>Latest From Our Blog</h3>
<p onClick={handleCategory} className={`${Style.ViewAll} mb-0`}>View All Articles
<i className="fa-solid fa-arrow-right ps-1"></i>
</p>
</div>
</Col>
{/* Blog Cards */}
{LatestBlog.slice(start , end).map((latestBlog, index) => (
<Col lg={4} md={6} key={index} className={`mb-2 ${Style.LatestBlogPadd} px-0 px-md-1`}>
<div className={Style.Card}>
<Row className="m-0 gx-2 h-100 px-0">
{/* Image */}
<Col lg={5} md={5} className="p-0">
<div className={Style.CardImages}>
<img src={latestBlog.image} className={Style.BlogImages} alt={latestBlog.title}/>
</div>
</Col>
{/* Content */}
<Col lg={7} md={7} className="p-0">
<div className={Style.Content}>
<h4 className={`mb-lg-1 ${Style.title}`}>
{latestBlog.title}
</h4>
<p className={Style.description}>
{latestBlog.description}
</p>
<div className={Style.Meta}>
<p className={Style.data}>
{latestBlog.date}
</p>
<p className={Style.readTime}>{latestBlog.readTime}</p>
</div>
<a href="#" className={Style.LearnMore}>Learn More
<i className="fa-solid fa-arrow-right ps-1"></i>
</a>
</div>
</Col>
</Row>
</div>
</Col>
))}
</Row>
</div>
);
}

export default LatestBlogsCard;