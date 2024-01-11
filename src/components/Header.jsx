import React from 'react'
import icon from '../images/icons.png'
import {FaArrowDown} from 'react-icons/fa'

const Header = () => {
  return (
    <div className='header'>
            <div className="logo">
                <img src={icon} alt="" />
            </div>
            <div className="nav-box">
                <h5>XYZ Enterprises Pvt Ltd</h5>
                <div className='h3'>

                  <FaArrowDown style={{ color: 'black', }} />
                </div>
            </div>


      
    </div>
  )
}

export default Header
