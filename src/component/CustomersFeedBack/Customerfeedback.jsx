import Style from '../CustomersFeedBack/Customerfeedback.module.css';
import { blogData } from '../../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRef, useEffect } from 'react';

function Feedback() {
const prevRef = useRef(null);
const nextRef = useRef(null);
const swiperRef = useRef(null);

useEffect(() => {
const swiper = swiperRef.current;
if (!swiper || !prevRef.current || !nextRef.current) return;
swiper.params.navigation.prevEl = prevRef.current;
swiper.params.navigation.nextEl = nextRef.current;
swiper.navigation.destroy();
swiper.navigation.init();
swiper.navigation.update();
}, []);

return (
<div className={Style.feedbackContainer}>
<Row className='px-0 mx-0 text-center'>
<Col lg={12} className="px-0">
<h3 className={`${Style.CustomerTalk}  mb-2`}>What Our Customers Say</h3>
</Col>
</Row>
<div className={Style.sliderWrapper}>
<div className={Style.Buttons}>
<button ref={prevRef} className={Style.btn} type="button">
<i className="fa-solid fa-arrow-left"></i>
</button>
</div>
<Swiper
modules={[Navigation]}
onSwiper={(swiper) => {
swiperRef.current = swiper;
}}
spaceBetween={8}
breakpoints={{
0: {
slidesPerView: 1,
},
400:{
slidesPerView: 2,
},
576: {
slidesPerView: 2,
},
768: {
slidesPerView: 4,
},
992: {
slidesPerView: 4,
},
}}>
{blogData.map((blog, index) => (
<SwiperSlide key={index}>
<div className={`${Style.blogCard} d-flex d-md-block text-center d-lg-flex`}>
<img src={blog.image} className='mb-md-1 mb-lg-0' alt={blog.name} />
<div className="ms-lg-2 text-md-center">
<h4 className={`${Style.name} mb-md-0 mb-0 mb-lg-0`}>{blog.name}</h4>
<p className={`${Style.ratingBox} mb-lg-0 mb-1 mb-md-0 d-flex justify-content-center  justify-content-md-center`}>
<span className={Style.rating}>
<i className={`fa-solid fa-star ${Style.star}`}></i>
<i className={`fa-solid fa-star ${Style.star}`}></i>
<i className={`fa-solid fa-star ${Style.star}`}></i>
<i className={`fa-solid fa-star ${Style.star}`}></i>
<i className={`fa-regular fa-star ${Style.star}`}></i>
</span>
</p>
<p className={`${Style.feedbackDetl} text-center mb-lg-0`}>{blog.feedbackDetl}</p>
</div>
</div>
</SwiperSlide>
))}
</Swiper>
<div className={Style.Buttons}>
<button ref={nextRef} className={Style.btn} type="button"><i className="fa-solid fa-arrow-right"></i></button>
</div>
</div>
</div>
);
}
export default Feedback;