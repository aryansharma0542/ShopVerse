import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Policies } from '../../data';
import Styles from './Shipping.module.css';

function ShippingWar(){
return(
<div className={Styles.ShippingContainer}>
<Row className='px-0 mx-0'>
<div className={`d-lg-flex d-flex flex-wrap ${Styles.wrapper}  gap-0 px-0`}>
{Policies.map((policy , index) => (
<Col md={6} lg={3} xs={6} key={index} className={Styles.policyCol}>
<div className={`${Styles.AllShipping} d-flex`}>
<div className='d-inline ps-lg-1 pe-lg-1 ps-sm-2 pe-sm-2 ps-md-2 pe-md-2'>
<img src={policy.image} className={`${Styles.PolicyImage}`} alt={policy.image}></img>
</div>
<div className={`${Styles.detalis}`}>
<h5 className={Styles.heading}>{policy.heading}</h5>
<p className={`${Styles.para} mb-0`}>{policy.para}</p>
</div>
</div>
</Col>
))}
</div>
</Row>
</div>
)
}
export default ShippingWar;