import React from 'react'
import img1 from './images/restaurantfood.png';
import img2 from './images/food.png'
import './MainContent.css'

export default function MainContent() {
  return (
    <div className='flex contain'>
      <div className=' main-container'>
        <div className='img-container'>
          <img className='img1'  src={img1} alt="" />
        </div>
        <div className='text-container'>
        <p className='main-text1'>Your Favourite Food Delivered Hot & Fresh</p>
        <p className='main-text2'>Healthy switcher chefs do all the prep work, like peeding, chopping and marinating, so you can cook a fresh food.</p>
        <button className='main-contain-btn'>Order Now <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>

      <div className='mainContainer'>
      <div className='container-img'>
        <img className='img2' src={img2} alt="" />
      </div>
      <div className='text-contain'>
        <p className='abt'>About</p>
        <p className='main-text1 txt'>Food Is An Important Part Of A Balanced Diet</p>
        <div className='mainabt flex'>
        <p className='abt1'>A balanced diet gives your body the nutrients it needs to
          function correctly. A balanced diet supplies the nutrients
           your body needs to work effectively. Without balanced nutrition,
            your body is more prone to disease, infection, fatigue, and low performance.</p>
        <p className='abt2'>“Your diet is a bank account. Good food choices are good investments.”
          
        </p>
        <div className='abtfoot flex'>
        <button className='main-contain-btn'>Learn More</button>
        <p><i class="fa-solid fa-circle-play " style={{fontSize:"30px",position:"relative",top:"10px",color:"#00ADB5"}}></i></p>
        <p className='abtfootp' style={{right:"10px"}}>Watch Video</p>
        
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}
