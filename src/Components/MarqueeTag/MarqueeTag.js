import React from 'react';
import { Parallax } from 'react-parallax';
import './MarqueeTag.css';
import Marquee from "react-fast-marquee";


const MarqueeTag = () => {
  return (
    <div className='content'>
          <Parallax bgImage='Images/Parallax.jpg' strength={700}  className='parall' >
                   <Marquee speed={100} gradient={false}>
                          <div className='container'>
                             COLD COFFEE
                          </div>
                          <div className='container'>
                              BURGER
                          </div>
                          <div className='container'>
                              TEA
                          </div>
                          
                       
                   </Marquee>
               
           
            
        </Parallax>
        
    </div>
  )
}

export default MarqueeTag