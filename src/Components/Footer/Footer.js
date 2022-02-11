import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
 


const Footer = () => {
  return (
    <div className='footer'>
        Footer
        <div className="box">
         <div className="box1">
          <div className="i">
           <FontAwesomeIcon icon={faCopyright} />
          </div>
          <div className="h1">
          Copyrights 2021
          </div>
           
         </div>
         <div className="box2">
          <div className="face">
          <a href='#'>
            <img src='Images/facebook.svg' height={25} width={15}/>
          </a>  
          </div>
          <div className="insta">
          <a href='#'>
            <img src='Images/insta.svg' height={25} width={15}/>
          </a>  
          </div>
          <div className="mail">
          <a href='#'>
            <img src='Images/email.svg' height={25} width={15} />
          </a>  
          </div> 
            
          </div>
          <div className="box3">
            <div className="privacy">
              <a href='#'>
                Privacy Policy
              </a>
              |
            </div>
             <div className="tnc">
               <a href='#'>
                 T&C
               </a>
             </div>
            </div> 
          
        </div>
        
    
    </div>
  )
}

export default Footer