import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { BsInstagram} from 'react-icons/bs'
import { AiFillTwitterSquare} from 'react-icons/ai'
import { AiOutlineYoutube} from 'react-icons/ai'
import './Footer.css'
function Footer() {
  return (
    <div>
     <div className="footer">
        <div className="container">
            <div className="about">
                <div className="logo">
                    {/* <img src='./img/logo.svg' alt="logo" /> */}
                    <h1>GadgetBazaar</h1>
                </div>
                <div className="details">
                    <p>Shop smart, shop secure, and discover the best deals at OurEcommerceStore. Your satisfaction is our priority.</p>
                    <div className="icon">
                        <li><AiFillFacebook/></li>
                        <li><BsInstagram/></li>
                        
                        <li><AiFillTwitterSquare/></li>
                        <li><AiOutlineYoutube/></li>
                        
                    </div>
                </div>
            </div>
            <div className="account">
                <h3>My Account</h3>
                <ul>
                   <li>Account</li> 
                   <li>Order</li>
                   <li>Cart</li>
                   <li>Shipping</li>
                   <li>Return</li>
                </ul>
            </div>
            <div className="page">
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Footer
