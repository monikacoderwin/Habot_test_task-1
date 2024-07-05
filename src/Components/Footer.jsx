import React from 'react'
import './Footer.css'
import logo from '../Assets/Logo1.png';
import linkedin from '../Assets/linkedin.png';
import twitter from '../Assets/Twitter.png';
import facebook from '../Assets/Facebook.png';
import instagram from '../Assets/Instagram.png';

const Footer = () => {
    return (
        <>
            <div className='Footer'>
                <div className='inner_footer'>
                    <div className='left_footer'>
                        <img src={logo} alt='logo' className='img_logo' />
                        <p className='footer_logo_content'>© R Singhania</p>
                    </div>
                    <div className='footer_1'>
                        <h5>Company</h5>
                        <p className='footer_link'>About</p>
                        <p className='footer_link'>FAQ</p>
                    </div>
                    <div className='footer_1'>
                        <h5>Terms</h5>
                        <p className='footer_link'>Data privacy</p>
                        <p className='footer_link'>Terms</p>
                        <p className='footer_link'>Accessibility</p>
                    </div>
                    <div className='footer_1'>
                        <h5>Related</h5>
                        <p className='footer_link'>Find Buyer</p>
                        <p className='footer_link'>Feedback</p>
                    </div>
                    <div className='footer_right'>
                        <img src={linkedin} alt='linkedin' className='social_image' />
                        <img src={twitter} alt='twitter' className='social_image' />
                        <img src={facebook} alt='facebook' className='social_image' />
                        <img src={instagram} alt='instagram' className='social_image' />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;
