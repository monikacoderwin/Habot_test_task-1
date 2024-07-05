import React from 'react'
import './Buyer.css';
import { FaCheckCircle } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Buyer = () => {


  return (
    <>
      <div className='buyer'>
        <div className='left_middle'>
          <IoLogoYoutube className='youtube_icon' />
        </div>
        <div className='right_middle'>
          <div className='buyer_supplier'>

            <p className='buyer_part'> Buyer</p>
            <p className='supplier_part'>Supplier</p>
          </div>
          <p className='key_points'><FaCheckCircle style={{ color: 'green' }} />   Post your requirements.</p>
          <p className='key_points'><FaCheckCircle style={{ color: 'green' }} />   Sit back for multiple suppliers to contact you.</p>
          <p className='key_points'><FaCheckCircle style={{ color: 'green' }} />    Choose among the suppliers based on the ratings and reviews</p>

        </div>

      </div>
    </>
  )
}
export default Buyer;
