import React from 'react';
import './Blog.css';

const Blog = () => {
  return <div className='blog'>
   <div className="up">
    <div className="left">
      <div className="name">
      <h1>OUR CAFE</h1>
      <div className="line">
        <span className='l1'></span>
      </div>
      </div>
      
      <p className='p1'>
        Spice Hustle offers cafe service of the best level to all the customers. 
      </p>
      <p className='p2'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum porro placeat cumque ex esse autem praesentium fuga necessitatibus, mollitia iure voluptas recusandae veritatis est quia commodi. Numquam, culpa ut? Voluptates.
      </p>
    </div>
    <div className="right">
     <div className="images1"> 
     <div className="imgcontainer1">
        <img src='Images/cafe3.jpg'/>
      </div>
      <div className="imgcontainer2">
        <img src="Images/cafe4.jpg"   />
      </div>
     </div> 

    </div>
   </div>
   <div className="down">
    <div className="left1">
      <div className="images2">
        <div className="imgcontainer3">
         <img src='Images/cafe1.jpg'/>
        </div>
        <div className="imgcontainer4">
          <img src='Images/cafe2.jpg'/>
        </div>
      </div>
    </div>
    <div className="right1">
      <h2 className='name2'>OUR CAFE</h2>
        <div className="para1">   
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur commodi explicabo vitae quae nam qui aliquam quisquam rem! Molestiae pariatur cupiditate molestias porro assumenda facilis fugiat saepe adipisci iure tempora?
        </div>
    </div>
   </div> 
    
  </div>;
};

export default Blog;
