import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaTh,FaQuestionCircle,FaGift,FaPuzzlePiece,FaLifeRing,FaArrowRight,FaSignOutAlt,FaArrowDown     }from 'react-icons/fa'
import Profile from '../images/dp1.jpg'

const SideBar = ({children}) => {
    
   
    let menuItems = [
        {
        path:'/',
        name:'dashboard',
        icon:<FaTh style={{ color: 'skyblue' }}/>
    },
        {
        path:'/addons',
        name:'addons',
        icon:<FaPuzzlePiece  style={{ color: 'skyblue' }}/>

    },
        {
        path:'/faq',
        name:'faq',
        icon:<FaQuestionCircle  style={{ color: 'skyblue' }}/>,
    },
        {
        path:'/perks',
        name:'perks',
        icon:<FaGift  style={{ color: 'skyblue' }}/>
    },
        {
        path:'/supports',
        name:'support',
        icon:<FaLifeRing  style={{ color: 'skyblue' }}/>
    }
]
  return (
    <div className='container'>
        <div className="sidebar">
            <div className="top-section">
                {/* <h1>profile</h1>
                <h6>email</h6> */}
                <div className="profile">
                    <img src={Profile} alt="" />
                    <div className="details" style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'5px'}}>
                        <h4>ajmal</h4>
                        <FaArrowRight style={{backgroundcolor:'red'}}/>
                    </div>
                        <h6 style={{paddingBottom:'10px'}}>ajmal@gmail.com</h6>
                </div>
                <div className="bars">
                    {/* <MenuIcon/> */}
                </div>
            </div>
            {menuItems.map((item,index)=>(
                <NavLink to={item.path} key={index} className='link' activeClassName='active'  >
                    <div className="icon">{item.icon}</div>
                    <div className="link_text">{item.name}</div>
                    {/* <h1>{item.name}</h1> */}
                </NavLink>
            ))}
            <div className="logout">
                <button>logout</button>
            </div>
            <div className="logout-icon">

                <FaSignOutAlt style={{ color: 'skyblue' }}/>
            </div>
        </div>
        <main>{children}
        {/* <FaGift  style={{ color: 'skyblue', fontSize: '2em' }}/> */}
        </main>
        {console.log('clicked',children)}
      
    </div>
  )
}

export default SideBar
