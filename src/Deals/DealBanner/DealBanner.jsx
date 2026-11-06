import Style from './DealBanner.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect , useState } from 'react';

function DealBanner(){
  const [timeLeft, setTimeLeft] = useState({ days:0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);
    targetDate.setHours(targetDate.getHours() + 14);
    targetDate.setMinutes(targetDate.getMinutes() + 36);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance <= 0) {
        clearInterval(interval);
        //setTimeLeft({ days:0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft((prev) => ({...prev, days:timeLeft.days, hours:timeLeft.hours, seconds:timeLeft.seconds }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

return(
<section>
<div className={`${Style.Dealsontainer}`}>
<div className={Style.Banner}>
<Row className='g-0'>
<Col lg={4}  md={4} className=''>
<div className={`${Style.LeftContent} py-3 ps-4 py-md-3 ps-md-4 py-lg-4 ps-lg-4`}>
{/* <div className=""> */}
<p className={`${Style.LimitedDeals} mb-1 mb-lg-0 mb-md-2  mb-sm-1  md:text-left`}>Limited Time Deals</p>
<h1 className={Style.big}>Big<span className={Style.Saving}> Savings</span><br />Bigger Smiles</h1>
<p className={` ${Style.GrabDeal} mb-2 mb-md-2`}>Grab the best deals before they're gone!</p>
<button className={Style.DealsButton}>Shop deals <i className={`fa-solid fa-arrow-right ps-lg-1`}></i></button>
{/* </div> */}
</div>
</Col>
<Col lg={3}  md={4} className={`px-0 ${Style.TimerCol}`}>
  <div className='d-flex flex-column justify-content-center align-items-center h-100'>
    <p className='text-center mb-1'><i className={`fa-solid fa-clock ${Style.AlarmAlert}`}></i></p>
    <p className={`${Style.DealEnd} mb-2`}>Deals End In</p>

    <div className='d-flex justify-content-center align-items-center gap-2 gap-md-1'>
      <div className={Style.TimeBox}>
        <h4 className={`${Style.Numbers} mb-0`}>{String(timeLeft.days).padStart(2, '0')}</h4>
        <span>Days</span>
      </div>
      <div className={Style.TimeBox}>
        <h4 className={`${Style.Numbers} mb-0`}>{String(timeLeft.hours).padStart(2, '0')}</h4>
        <span>Hours</span>
      </div>
      <div className={Style.TimeBox}>
        <h4 className={`${Style.Numbers} mb-0`}>{String(timeLeft.minutes).padStart(2, '0')}</h4>
        <span>Minutes</span>
      </div>
      <div className={Style.TimeBox}>
        <h4 className={`${Style.Numbers} mb-0`}>{String(timeLeft.seconds).padStart(2, '0')}</h4>
        <span>Seconds</span>
      </div>
    </div>
  </div>
</Col>
</Row>
    </div>
</div>
</section>
);
}
export default DealBanner;