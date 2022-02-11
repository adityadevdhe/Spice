import React from 'react';
import './ContactUsForm.css'

const ContactUsForm = () => {
  return <div className='contact'>
  <div className="contain"><div className="left">
   <div className="name">
    <h1>CONTACT US</h1>
    <div className="line">
      <span className='l1'></span>
    </div>
    </div>
    <p>Treat yourself to one of our signature services. Our beloved beauty experts will wow your brows, get you glowing and so much more. You’ll leave looking and feeling better than ever before.</p>
    <div className="form1">
     <div className="gr1">
     <div className="Container First">
       <label htmlFor='username'></label>
        <input type="text" name='First Name' placeholder='First Name'/>
      </div>
      <div className="Container Last">
        <label htmlFor='username'></label>
        <input type="text" placeholder='Last Name'  name='Last name'/>
      </div>
     </div>
     <div className="gr2">
     <div className="Container Phone">
       <label htmlFor='phone'></label>
        <input type="tel" placeholder='Phone' name='Phone'/>
      </div>
      <div className="Container Mail">
        <label htmlFor='email'></label>
        <input type="email" placeholder='E-mail'  name='E-mail'/>
      </div> 
     </div> 
      
      <div className="Container Message">
        <label htmlFor='username'></label>
        <input type="text" placeholder='Message' />
      </div>
      <div class="Submit">
        <a href="#">
          <input type="submit" name="" value="Submit"/>
        </a>
      </div> 
    </div>
   </div> 
    <div className="right">
    
      <div className="head">
       ADDRESS
      </div>
      <div className="add">
        <div className="icon"><img src='Images/location.svg'/></div>
      <div className="data"><p>Office No. 107, The Capital Mall, D.P. Studio, 1st Floor, 13/2 - 3&4/2, Kausarbagh, NIBMR Road, Kondhwa, Pune - 411048</p></div>
      </div>
      <div className="line1">
        <span className='l2'></span>
      </div>
      <div className="head1">
        PHONES
      </div>
      <div className="add">
        <div className="icon"><img src='Images/phone.svg'/></div>
        <div className="data1"><p>+91 987654321 </p></div>
      </div>
      <div className="line1">
        <span className='l2'></span>
      </div>
      <div className="head1">E-MAIL</div>     
      <div className="add">
       <div className="icon"><img src="Images/mailblack.svg"/></div>
       <div className="data1"><p>spicehustle@gmail.com</p></div>
      </div>
      <div className="line1">
        <span className='l2'></span>
      </div>
      <div className="head1">OPENING HOURS</div>
      <div className="add">
        <div className="icon"><img src="Images/location.svg" /></div>
        <div className="data1"><p>Mon-Sun: 11am - 8pm</p></div>
      </div>

       
        
        

      

    </div>
    
  </div>
  </div>  
   ;
};

export default ContactUsForm;
