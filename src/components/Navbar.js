import React from 'react'
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='contain'>
      <div className="flex flex-container">
        <h2 className='navbar-h2'>FOODIE</h2>
        <ul className='flex flex-ul'>
            <li>Home</li>
            <li>About</li>
            <li>Testimonals</li>
            <li>Contact</li>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
            <li><button className='container-btn'>Booking Now</button></li>
        </ul>
      </div>
    </div>
  )
}
