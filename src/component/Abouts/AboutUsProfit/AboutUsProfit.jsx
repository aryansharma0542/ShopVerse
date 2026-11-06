import Style from '../AboutUsProfit/AboutUsProfit.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HappyCustomerLogo } from '../../../data';

function AboutUsProfit(){
return(
<div className={Style.ProfitContainer}>
<div className={Style.ProfitBox}>
<Row className='g-0 mx-0'>
{HappyCustomerLogo.map((items , key) => (
<Col lg={3} xs={6}  className='px-0' key={key}>
<div className={` ${Style.ProfitCard} `}>
<div className={Style.widthProfitCard}>
<img src={items.image} className={Style.ProfitCardImage} alt="" />
</div>
<div className={Style.ProfitCardContent}>
<h4 className={`mb-0 ${Style.Count}`}>{items.count}<span>{items.suffix}</span></h4>
<p className={`mb-0 ${Style.TextProfit}`}>{items.text}</p>
</div>
</div>
</Col>
))}
</Row>
</div>
<div>
</div>
</div>
)
}
export default AboutUsProfit;