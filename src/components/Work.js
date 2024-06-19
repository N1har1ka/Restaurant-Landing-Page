import React from 'react'
import './Work.css'

export default function Work() {
  return (
    <div >
      <div className='abtContent'>
        <p className='about1'>Work</p>
        <h1 className='about2'>How It Works</h1>
        <p className='about3'>
          Take your time to explore our diverse menu featuring a 
          wide range of culinary delights. Once you've made your 
          selection, simply click on the items you wish to order. 
          Our user-friendly interface allows you to customize your 
          meal according to your preferences, ensuring that every 
          dish is perfect just for you. Review your order to make 
          sure everything looks exactly how you want it. Proceed 
          to checkout where you can securely enter your payment 
          details. Sit back while our talented chefs prepare your 
          meal with the freshest ingredients and utmost care. 
          We'll notify you once your order is ready for pickup
          or on its way to your doorstep.</p>
      </div>
      <div className='abtcontent2'>
        <div className="divcontent">
          <div className='divIcon'>
            <p><i class="fa-solid fa-utensils ic"></i></p>
            <h4>Pick Meals</h4>
            <p>Explore our menu and pick your favorite meals from a variety of delicious options.</p>
          </div>
        </div>
        <div className="divcontent">
          <div className="divIcon">
            <p><i class="fa-solid fa-hand-pointer ic"></i></p>
            <h4>Choose How Often</h4>
            <p>Decide how frequently you'd like to enjoy our scrumptious dishes, whether it's a one-time treat or a regular dining experience.</p>
          </div>
        </div>
        <div className="divcontent">
          <div className="divIcon">
            <p><i class="fa-solid fa-truck ic"></i></p>
            <h4>Fast Deliveries</h4>
            <p>Experience swift and efficient deliveries that bring your food right to your doorstep, ensuring freshness and quality.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
