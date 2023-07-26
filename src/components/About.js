import React from 'react'
import './About.css'

const About = () => {
  return (
    <div>
     <div className="ethic">
      <h1>Ethics & Compliance</h1>
   
      <div className="img_box">
        <img src="./img/b1.jpg" alt="banner" />
        <h3>Our Vision: Empowering Your Digital Lifestyle</h3>
        <div className="contant">
        <p>your digital lifestyle and keep you connected to the world through the latest technological marvels. We understand that smartphones have become an integral part of modern life, serving as our window to information, entertainment, communication, and productivity</p>
        </div>
      </div>
      <div className="img_box_2">
        <img src="./img/b3.webp" alt="banner" />
        <h3>Our Promise: Uncompromising Quality and Reliability</h3>
        <div className="contant">
        <p>When you shop at <span>GadgetBazaar</span>, you can rest assured that every product in our catalog has been handpicked for its exceptional quality and reliability.</p>
        </div>
      </div>
      <h1>Sustainability</h1>
      <div className="img_box_3">
        <img src="./img/b4.jpg" alt="banner" />
        <h3>
Embracing Sustainability: Our Commitment to a Greener Future</h3>
        <div className="contant">
        <p>The future of e-commerce is sustainable, equitable and inclusive. As we continue to drive changes across key areas of our operations, our commitment is embedded in our vision to create a positive impact, for the planet and communities.</p>
        </div>
      </div>
     </div>
     </div>
   
  )
}

export default About
