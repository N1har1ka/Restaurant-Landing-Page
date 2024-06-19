import React from 'react'
import './Testimonial.css'

export default function Testimonial() {
  return (
    <div>
      <div className='abtContent newCnt'>
        <p className='about1'>Testimonial</p>
        <h1 className='about2'>What They Are Saying</h1>
        <p className='about3'>Hear from our satisfied customers about their experiences with us. 
          Their words reflect the quality and dedication we put into every 
          meal we prepare.

        </p>
        <div className="divcontent divcnt">
          <div className='divIcon'>
            <img src="https://cdn.pixabay.com/photo/2022/11/23/18/31/birds-7612651_1280.png" alt="" style={{height:"100px",width:"100px"}} />
            <h5>"The dishes here are not just meals; they are experiences crafted with passion 
            and attention to detail. Each bite tells a story of flavor and freshness."</h5>
            <ul className='testul'>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
            </ul>
            <p>Niharika Singh</p>
          </div>
        </div>
      </div>
    </div>
  )
}
