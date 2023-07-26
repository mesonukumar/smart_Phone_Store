import React from 'react'
// import { useState } from 'react'
import {Link} from 'react-router-dom'
import { BsArrowRight} from 'react-icons/bs'
import { BsTruck} from 'react-icons/bs'
import { FaRupeeSign} from 'react-icons/fa'
import { GiSmartphone} from 'react-icons/gi'
import { CiPercent} from 'react-icons/ci'
import { AiOutlineShoppingCart} from 'react-icons/ai'
import { AiOutlineEye} from 'react-icons/ai'
import { AiOutlineHeart} from 'react-icons/ai'
import { AiOutlineClose} from 'react-icons/ai'
import HomeProduct from './HomeProduct'
import { useAuth0 } from '@auth0/auth0-react'
import './Home.css'
const Home = ({details,view,close ,setclose ,addtocart,addToWishlist}) =>{
    // const [homeproduct,sethomeproduct]=useState(HomeProduct)
    const{ loginWithRedirect,isAuthenticated}=useAuth0()
  return (
    <div>
         {
           close ?
           
        <div className="product_details">
        <div className="container">
            <button onClick={()=>setclose(false)} className='closebtn'><AiOutlineClose/></button>
            {
              details.map((curEle)=>{
                return(
                    <div className="productbox" key={curEle.id}>
                        <div className="img_box">
                            <img src={curEle.img} alt={curEle.title} />
                        </div>
                        <div className="details">
                            <h4>{curEle.cat}</h4>
                            <h2>{curEle.title}</h2>
                            <p>A Screen will love :wether your family is streaming or video chatting with friends tablet A8...</p>
                            <h3>{curEle.price}</h3>
                            {
                             isAuthenticated?
                             <button onClick={()=> addtocart(curEle)}>Add To Cart</button>
                             :
                             <button onClick={()=> loginWithRedirect() }>Add To Cart</button>
                            }
                           
                        </div>
                    </div>
                )
              }) 
            }
            {/* <div className="productbox"></div> */}
        </div>
    </div>:null 
        }
      <div className="top_banner">
        <div className="container">
            <div className="details">
                <h2>The Best Phone Book Collection 2023</h2>
                <Link to='/product' className='link'>Shop Now<BsArrowRight/></Link>
            </div>
            <div className="img_box">
                <img src="img/slider-img.png" alt="SliderImg" />
            </div>
        </div>
      </div>
      <div className="product_type">
        <div className="container">
            <div className="box">
                <div className="img_box">
                    <img src="./img/Mobile phone.png" alt="mobile" />
                </div>
                <div className="details">
                    <p>23 products</p>
                </div>
            </div>
            <div className="box">
                <div className="img_box">
                    <img src="./img/iphone.jfif" alt="phone" />
                </div>
                <div className="details">
                    <p>20 products</p>
                </div>
            </div>
            <div className="box">
                <div className="img_box">
                    <img src="./img/redmi.png" alt="phone" />
                </div>
                <div className="details">
                    <p>63 products</p>
                </div>
            </div>
            <div className="box">
                <div className="img_box">
                    <img src="./img/vivo.webp" alt="phone" />
                </div>
                <div className="details">
                    <p>60 products</p>
                </div>
            </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
            <div className="box">
                <div className="icon">
                 <BsTruck/>
                </div>
                <div className="details">
                    <h3>Free Shipping</h3>
                    <p>Order above <FaRupeeSign/>20000</p>
                </div>
            </div>
            <div className="box">
                <div className="icon">
                 <BsTruck/>
                </div>
                <div className="details">
                    <h3>Return & Refund</h3>
                    <p>Money Back Gaurenty</p>
                </div>
            </div>
            <div className="box">
                <div className="icon">
                 <CiPercent/>
                </div>
                <div className="details">
                    <h3>Member Discount</h3>
                    <p>On Every Order</p>
                </div>
            </div>
            <div className="box">
                <div className="icon">
                 <GiSmartphone/>
                </div>
                <div className="details">
                    <h3>Customer Support</h3>
                    <p>Every Time Call support</p>
                </div>
            </div>
        </div>
      </div>
      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
            {
                HomeProduct.map((curEle)=>{
           return(
            
            <div className="box" key={curEle.id}>
                <div className="img_box">
                    <img src={curEle.img}alt={curEle.title} />
                    <div className="icon">
                        {
                            isAuthenticated?
                            <li onClick={()=> addtocart(curEle)}><AiOutlineShoppingCart/></li>
                            :
                            <li onClick={()=> loginWithRedirect() }><AiOutlineShoppingCart/></li>
                        }
                       
                        <li onClick={()=> view(curEle)}><AiOutlineEye/></li>
                        {
                            isAuthenticated?
                            <li onClick={()=> addToWishlist(curEle)}><AiOutlineHeart/></li>
                            :
                            <li onClick={()=> loginWithRedirect() }><AiOutlineHeart/></li>
                        }
                    </div>
                </div>
                <div className="details">
                    <p>{curEle.cat}</p>
                    <h3>{curEle.title}</h3>
                    <h4>₹{curEle.price}</h4>
                </div>
            </div>
            
           )
                })
            }
        </div>
      </div>
      <div className="banner">
        <div className="container">
        <div className="details">
            <h4>Latest Technology Added</h4>
            <h3>Apple iPad 10.2 9th Gen-2023</h3>
            <p>₹19999</p>
            <Link to='./product' className='link'>Shop Now<BsArrowRight/></Link>
        </div>
        <div className="img_box">
            <img src="./img/slider-img.png" alt="Sliderimg" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home
