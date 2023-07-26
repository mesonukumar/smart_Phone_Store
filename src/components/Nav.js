import React, { useState } from 'react'
import { FaTruckMoving} from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai'
import { BsBagCheckFill } from 'react-icons/bs'
import { AiOutlineUser } from'react-icons/ai'
import { BiLogIn } from'react-icons/bi'
import { BiLogOut } from'react-icons/bi'
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './Nav.css'
const Nav=({searchbtn})=> {
    const[search,setsearch]=useState()
    const { loginWithRedirect,logout,user, isAuthenticated} = useAuth0();
    
  return (
    <>
      <div className="free">
      
        <div className="icon">
        <FaTruckMoving/>
        </div>
        <p> Free Shipping When shopping Upto &#8377;20000 </p>
      </div>
      <div className="main_header">
        <div className="container">
            <div className="logo">
                {/* <img src="./img/logo.jpg" alt="" /> */}
                <h1>GadgetBazaar</h1>
            </div>
            <div className="search_box">
                <input type="text" value={search} placeholder='Search Your Product...'autoComplete='off' onChange={(e)=> setsearch(e.target.value)}/>
                <button onClick={()=> searchbtn(search)}>search</button>
            </div>
            <div className="icon">
                {
                    isAuthenticated &&(
                        <div className="account">
                        <div className="user_icon">
                        <AiOutlineUser/>
                        </div>
                       <p>Hello,{user.name}</p>
                    </div>
                    )
                }
               
                <div className="second_icon">
                    <NavLink to='/wishlist' className='link'><AiOutlineHeart/></NavLink>
                    <NavLink to='/cart' className='link'><BsBagCheckFill/></NavLink>
                </div>
               
            </div>
        </div>
      </div>

      <div className="header">
        <div className="container">
            <div className="nav">
            <ul>
                <li>
                    <NavLink to='/' className='link'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/product' className='link'>product</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className='link'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className='link'>contact</NavLink>
                </li>
            </ul>
            </div>
            
            <div className="auth">
                {
                    isAuthenticated?
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><BiLogOut></BiLogOut>logout</button>
                    :
                    <button  onClick={() => loginWithRedirect()} ><BiLogIn></BiLogIn>logIn</button>
                
                }
                
                
            </div>
        </div>
      </div>
    </>
  )
}

export default Nav
