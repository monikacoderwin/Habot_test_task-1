import React from 'react';
import './Signup.css';
import { FaArrowRightLong } from "react-icons/fa6";

const Signup = () => {
    return (
        <div className='Middle'>
            <div className='Left_Middle'>
                <h2>Ready to dive into HABOT?</h2>
                <div>
                    <p className='para1'>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
                </div>
                <button type="button" className="btn btn-success btn-lg">Sign up Today !   <FaArrowRightLong style={{ color: 'white' }} /></button>
            </div>
            <div className='Right'>
                <div className='Right_Middle'>
                    <div className='city_box'>
                        <p className='city_name'>Abu Dhabi</p>
                    </div>
                    <div className='city_box'>
                        <p className='city_name'>Dubai</p>
                    </div>
                </div>
                <div className='Right_Middle_2'>
                    <div className='city_box'>
                        <p className='city_name'>Sharjan & Ajman</p>
                    </div>
                    <div className='city_box'>
                        <p className='city_name'>Fujairah</p>
                    </div>
                </div>
                <div className='Right_Middle_3'>
                    <div className='city_box'>
                        <p className='city_name'>Ras AI Khaimah</p>
                    </div>
                    <div className='city_box'>
                        <p className='city_name'>Umm AI Quwain</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup