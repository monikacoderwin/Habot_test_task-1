import React from 'react'
import './Working.css'
import image2 from '../Assets/document.png'
import image1 from '../Assets/image1.png';
import image3 from '../Assets/search.png';
import image4 from '../Assets/edit.png';
import image5 from '../Assets/quote.png';
import image6 from '../Assets/handshake.png';

const Working = () => {
  return (
    <>
      <div className='working'>
        <div className='heading'>
          <h2 className='work_header'>How it works</h2>
          <p className='work_subheading'>Buyers post their needs and review top
            suppliers, while suppliers complete profiles, connect with </p>
          <p className='work_subheading'>potential buyers, and build successful business relationships, sharing valuable feedback.</p>
        </div>
        <div className='row_content'>
          <div className='content'>
            <div className='sub_content'>
              <p className='icon'>
                <img src={image1} alt='icon1' className='icon_image' />
              </p>

              <h6>Select Your Role And</h6>
              <h6>Sign Up</h6>


            </div>

          </div>
          <div className='content'>
            <div className='sub_content_1'>
              <p className='icon'><img src={image2} alt='icon2' className='icon_image' /></p>

              <h6>Buyers Post Your</h6>
              <h6>Requirements</h6>


            </div>
          </div>
          <div className='content'>
            <div className='sub_content'>
              <p className='icon'> <img src={image3} alt='icon3' className='icon_image' /></p>

              <h6>Review, Select and</h6>
              <h6>Contact the Best Suppliers</h6>


            </div>
          </div>

        </div>
        <div className='row_content_1'>
          <div className='content'>
            <div className='sub_content_1'>
              <p className='icon'> <img src={image4} alt='icon4' className='icon_image' /></p>

              <h6>Suppliers Complete your</h6>
              <h6>profile and get notified for</h6>
              <h6>Oppotunities</h6>


            </div>

          </div>
          <div className='content'>
            <div className='sub_content'>
              <p className='icon'> <img src={image5} alt='icon5' className='icon_image' /></p>

              <h6>Contact to Buyers and Share</h6>
              <h6>your Quote for the service</h6>


            </div>
          </div>
          <div className='content'>
            <div className='sub_content_1'>
              <p className='icon'> <img src={image6} alt='icon6' className='icon_image' /></p>

              <h6>Both the Parties can Connect</h6>
              <h6>and Make Business Leave a</h6>
              <h6>Feedback</h6>


            </div>
          </div>

        </div>
      </div>
    </>
  )
}
export default Working;
