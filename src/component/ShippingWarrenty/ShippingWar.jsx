
import { Policies } from '../../data';
import Styles from './Shipping.module.css';

function ShippingWar() {
    return (
        <div className={Styles.ShippingContainer}>
            <div className={Styles.wrapper}>

                {Policies.map((policy, index) => (
                    <div className={Styles.policyCol} key={index}>

                        <div className={Styles.AllShipping}>

                            <div className={Styles.imageWrapper}>
                                <img
                                    src={policy.image}
                                    className={Styles.PolicyImage}
                                    alt={policy.heading}
                                />
                            </div>

                            <div className={Styles.detalis}>
                                <h5 className={Styles.heading}>
                                    {policy.heading}
                                </h5>

                                <p className={Styles.para}>
                                    {policy.para}
                                </p>
                            </div>

                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default ShippingWar;
