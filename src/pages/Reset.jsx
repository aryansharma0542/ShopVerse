import Style from './Reset.module.css'
import LeftPanel from '../component/LeftPanel/LeftPanel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageOne from '../assets/1624bd56-2b6c-4d27-8933-7f3491fc9d2c (1).png';

function Reset(){
    return(
<div className={Style.ContainerFluid}>
<Row className='gx-0'>
{/* Left-side  */}
<Col lg={6}>
<LeftPanel 
image={ImageOne}
title={<>Reset Your <br /><span className={Style.ShopVerseHeading}>ShopVerse</span> Password</>}
description={<>join your community and get access to <br />exclusive offers, latest collection and more!</>}
/>
</Col>

<Col lg={6} className='d-flex align-items-center justify-content-center'>
<div className='d-flex justify-content-center align-items-center'>
  <div className={`${Style.Wrapper} p-lg-3 d-flex align-items-center`}>
<div className={`${Style.Card} bg-light  p-lg-4`}>
    <div className={`${Style.logo} d-flex mb-lg-1 align-items-center justify-content-center`}>
        <img src={ImageOne} className={`${Style.ImageOne}`}  alt="" />
    </div> 
    <div className="text-center">
<h2 className={`${Style.ForgetAccount} fw-bold mb-lg-2`}>Reset Password</h2>
<p className={`text-secondary ${Style.paraThree}`}>Create a new password for your account and keep your account secure.</p>
    </div>
<form action="">
{/* Email Address */}
<div className={`${Style.formGroup} mb-lg-2`}>
<label>New Password</label>
<div className={Style.inputBox}>
<i className="fa-solid fa-lock"></i>
<input type="password"  placeholder='Enter your new password'/>
</div>
<p className={`mb-lg-0 px-lg-1  ${Style.PasswordHint}`}>
    Your password must include:
</p>
<ul className={Style.PasswordRules}>
    <li>At least 8 characters</li>
    <li>One uppercase letter (A-Z)</li>
    <li>One number (0-9)</li>
    <li>One special character (! @ # $ %)</li>
</ul>
</div>
{/*  */}
<div className={`${Style.formGroup} mb-lg-3`}>
<label>Confirm new password</label>
<div className={Style.inputBox}>
<i className="fa-solid fa-lock"></i>
<input type="password"  placeholder='Confirm your new password'/>
</div>
</div>

</form>
{/* Login Button */}
<button className={Style.ResetPasswordButton} type='submit'>Reset Password</button>
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
</div>
<p className={`mb-lg-0 ${Style.AllreadyAccountTwo}`}>Already have an account?<span className={`ms-lg-2 ${Style.LoginTwo}`}>Login</span></p>
</div>
</div>
</div>
</Col>
</Row>
</div>
    )
}
export default Reset;