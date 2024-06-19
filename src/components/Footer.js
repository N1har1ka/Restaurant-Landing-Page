import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>
      <div className='footerDiv'>
        <div className='ftdv'>
            <h2>FOODIE</h2>
            <p><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-linkedin"></i><i class="fa-brands fa-youtube"></i><i class="fa-brands fa-facebook-f"></i></p>
        </div>
        <div className='ftdv2'>
            <ul>
                <li>Quality</li>
                <li>Help</li>
                <li>Share</li>
                <li>Carrers</li>
                <li>Testimonials</li>
                <li>Work</li>
            </ul>
            <ul>
                <li>244-5333-7783</li>
                <li>hello@food.com</li>
                <li>press@food.com</li>
                <li>contact@food.com</li>
            </ul>
            <ul>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
