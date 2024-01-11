import React from 'react'
import {FaArrowRight} from 'react-icons/fa'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="heading">
        <h1>Choose a plan that's just right for you!</h1>
      </div>
      <div className="main-container">
        <div className="switch">
          <button>Monthly</button>
          <button>Annually</button>
        </div>
        <div className="box">
          <div className="card">
            <h3 className='title'>Basic</h3>
            <h6 className='old-price'>$89.99/mo</h6>
            <h2>$9.99/mp</h2>
            <div className="button">
              <button className='btn1'>get started</button>
              <FaArrowRight  style={{ color: 'skyblue', }}/>

            </div>
            <br />
            <hr />
            <div className='details'>wht you'll get:</div>
            <div className="points">
              <h6>Upto 25 users</h6>
              <h6>Upto 25 gb storage</h6>
              <h6>Email Support</h6>
            </div>
            <div className="link-tag">EXPLORE FEATURES</div>


          </div>
          <div className="card">
            <h3 className='title'>Standard</h3>
            <h6 className='old-price'>$189.99/mo</h6>
            <h2>$99.99/mo</h2>
            <div className="button">
              <button className='btn2'>get started</button>
              <FaArrowRight  style={{ color: 'skyblue', }}/>

            </div>
            <br />
            <hr />
            <div className='details'>what you'll get:</div>
            <div className="points">
              <h6>Upto 50 users</h6>
              <h6>Upto 60 gb storage</h6>
              <h6>Email+Chat Support</h6>
            </div>
            <div className="link-tag">EXPLORE FEATURES</div>


          </div>
          <div className="card">
            <h3 className='title'>Premium</h3>
            <h6 className='old-price'>$389.99/mo</h6>
            <h2>$199.99/mo</h2>
            <div className="button">
              <button className='btn3'>get started</button>
              <FaArrowRight  style={{ color: 'skyblue', }}/>

            </div>
            <br />
            <hr />
            <div className='details'>what you'll get:</div>
            <div className="points">
              <h6>Upto 75 users</h6>
              <h6>Upto 100gb storage</h6>
              <h6>Email+Chat+Whatsapp Support</h6>
            </div>
            <div className="link-tag">EXPLORE FEATURES</div>


          </div>
          
        </div>

      </div>
      
    </div>
  )
}

export default Dashboard
