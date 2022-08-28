import React from 'react';
import HeroImage from '../Media/Hero.svg'
import {AiFillHome} from 'react-icons/ai'
import './Hero.css';
import { useNavigate } from 'react-router-dom';
function Hero() {
  const navigate = useNavigate();

  const navigateToAddHouse = () => {
    navigate('/addhouse');
  }

  return (
    <>
      <div className='hero'>
        <div>
          <p className='hero-text'>Rent Your <span>Property.</span></p>
          <button className='list' onClick={navigateToAddHouse}  >List your house <span><AiFillHome /></span></button>
        </div>

        <img className='hero-image' src={HeroImage} />

      </div>


    </>
  )
}

export default Hero