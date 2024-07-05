import React from 'react';
import './Hero.css';
import { BsFillBriefcaseFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Hero = () => {

return (
    <>
      <div className='hero'>

        <p className='heading_1'>Are You a Supplier?</p>
        <p className='heading_2'>Explore Matching Opportunities.</p>
        <div className='input_field'>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1"><BsFillBriefcaseFill style={{ color: 'rgba(231, 119, 13, 1)' }} /></span>
            <input type="text" className="form-control" placeholder="Search your required service here"
              aria-label="Service" aria-describedby="basic-addon1" />
          </div>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1"><IoLocationSharp style={{ color: 'rgba(231, 119, 13, 1)' }} /></span>
            <input type="text" className="form-control"
              placeholder="Search your desired location here" aria-label="Location" aria-describedby="basic-addon1" />
          </div>
          <button type="button" className="btn_search" >Search</button>
        </div>
        <p className='buyer_link'>Are you a buyer?  <Link to='/' style={{ color: 'white' }}> Click here if you are looking to post a requirements</Link></p>

      </div>
    </>
  )
}

export default Hero;