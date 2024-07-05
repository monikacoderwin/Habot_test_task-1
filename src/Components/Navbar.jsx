import React from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='logo_holder'>
        <img src={logo} alt="logo" />
      </div>
      <div className='navbar_side_tags'>
        <ul>
          <li className="nav-item">
            <Link to="#" className="nav-link">Find Suppliers</Link>
          </li>
          <li className="nav-item dropdown">
            <Link to="#" role="button" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Find Service Tags
            </Link>
            <ul className="dropdown-menu">
              <li><Link to='#' className="dropdown-item" >Action</Link></li>
              <li><Link to='#' className="dropdown-item">Another action</Link></li>

            </ul>
          </li>
          <li className='nav-item'>
            <button type="button" className="btn btn-outline-success">Login / Sign up</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar