import Style from './SignUp.module.css';
import Common from '../component/LeftPanel/LeftPanel.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageOne from '../assets/1624bd56-2b6c-4d27-8933-7f3491fc9d2c (1).png';
import { Link } from 'react-router-dom';
import LeftPanel from '../component/LeftPanel/LeftPanel'

function SignUp(){
    return(
<div className={`${Style.ContainerFluid}`}>
<Row className='gx-0'>
<Col lg={6}>
<LeftPanel 
image={ImageOne}
title={<>SignUp Your <br /><span className={Style.ShopVerseHeading}>ShopVerse</span> Password</>}
description={<>join your community and get access to <br />exclusive offers, latest collection and more!</>}
/>
</Col>

<Col lg={6}>
<div className={`${Style.Wrapper} p-lg-3`}>
<div className={`${Style.Card} bg-light  p-lg-4`}>
    <div className={`${Style.logo} d-flex mb-lg-1 mb-lg-3 align-items-center justify-content-between`}>
        <img src={ImageOne} className={`${Style.ImageOne}`}  alt="" />
        <div className='d-flex align-items-center'>
<Link to="/login" className={`mb-lg-0 ${Style.AllreadyAccountOne}`}>Already have an account?<span className={`ms-lg-1 ${Style.LoginOne}`}>Login</span></Link>
        </div>
    </div> 
<h2 className={`${Style.CreateAccount} fw-bold mb-lg-1`}>Create Your Account</h2>
<p className={`text-secondary  ${Style.para}`}>It's quick and easy. Get started today?</p>
<form action="">
{/* Full Name */}
<div className={Style.formGroup}>
<label>Full Name</label>
<div className={Style.inputBox}>
<i className="fa-regular fa-envelope"></i>
<input type="email"  placeholder='Enter your full name'/>
</div>
</div>
{/* Email Address */}
<div className={Style.formGroup}>
<label>Email Address</label>
<div className={Style.inputBox}>
<i className="fa-solid fa-lock"></i>
<input type="password"  placeholder='Enter your email address'/>
</div>
</div>
{/* Password */}
<div className={Style.formGroup}>
<label>Password</label>
<div className={Style.inputBox}>
<i className="fa-solid fa-lock"></i>
<input type="password"  placeholder='Enter your password'/>
</div>
</div>
{/* Confirm Password */}
{/* Email Address */}
<div className={Style.formGroup}>
<label>Confirm Password</label>
<div className={Style.inputBox}>
<i className="fa-solid fa-lock"></i>
<input type="password"  placeholder='Enter your confirm password'/>
</div>
</div>
</form>
<div className={`${Style.Terms} d-flex mb-lg-3 align-items-center`}>
<input type="checkbox" id="terms" />
  <label htmlFor="terms" className="ms-2">I agree to the{" "}<a href="">Terms & Conditions </a>{" "}and{" "}<a href="">Privacy Policy </a></label>
</div>
{/* Login Button */}
<button className={Style.SignUpButton} type='submit'>Sign Up</button>
<div className={Style.Or}>
<span></span><p className='mb-lg-0'>OR</p><span></span>
</div>
<div className={`${Style.SocialButtons} mb-lg-3`}>
<button>  <svg width="20" height="20" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M21.35 12.27c0-.78-.07-1.53-.2-2.27H12v4.3h5.22a4.46 4.46 0 0 1-1.94 2.93v2.43h3.14c1.84-1.7 2.93-4.2 2.93-7.39z"/>
    <path fill="#34A853" d="M12 21.5c2.63 0 4.84-.87 6.45-2.36l-3.14-2.43c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.29v2.51A9.74 9.74 0 0 0 12 21.5z"/>
    <path fill="#FBBC05" d="M6.54 13.61A5.85 5.85 0 0 1 6.23 12c0-.56.1-1.1.31-1.61V7.88H3.29A9.5 9.5 0 0 0 2.5 12c0 1.48.35 2.87.79 4.12l3.25-2.51z"/>
    <path fill="#EA4335" d="M12 6.36c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.5 14.63 2.5 12 2.5a9.74 9.74 0 0 0-8.71 5.38l3.25 2.51C7.31 8.08 9.46 6.36 12 6.36z"/>
  </svg>Continue with Google</button>
<button><svg width="20" height="20" viewBox="0 0 24 24">
  <path
    fill="#000"
    d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.79 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09zM12.03 7.25C11.88 5.02 13.69 3.18 15.82 3c.3 2.58-2.34 4.5-3.79 4.25z"
  />
</svg>
 Continue with Apple</button>
</div>
<Link to="/login" className={`mb-lg-0 ${Style.AllreadyAccountTwo}`}>Already have an account?<span className={`ms-lg-2 ${Style.LoginTwo}`}>Login</span></Link>
</div>
</div>
</Col>
</Row>
</div>
    )
}
export default SignUp;