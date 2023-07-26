import React from 'react'
import { AiOutlineShoppingCart} from 'react-icons/ai'
import { AiOutlineEye} from 'react-icons/ai'
import { AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import { useAuth0 } from "@auth0/auth0-react";
import ProductDetails from './ProductDetails'
import './Product.css'


const Product=({product,setproduct,details,view,close ,setclose,addtocart,addToWishlist})=> {

    const{ loginWithRedirect,isAuthenticated}=useAuth0()
    const filterproduct=(product)=>{
       const update=ProductDetails.filter((x)=>{
        return x.cat===product
       })
       setproduct(update)
    }
    const allproducts=()=>{
        setproduct( ProductDetails)
    }
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
                    <div className="productbox">
                        <div className="img_box">
                            <img src={curEle.img} alt={curEle.title} />
                        </div>
                        <div className="details">
                            <h4>{curEle.cat}</h4>
                            <h2>{curEle.title}</h2>
                            <p>A Screen will love :wether your family is streaming or video chatting with friends tablet A8...</p>
                            <h3>₹{curEle.price}</h3>
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
       
    <div className="products">
    <h2>#Products</h2>
    <p>Home.Products</p>
        <div className="container">
            <div className="filter">
               <div className="catogries">
                <h3>Categories</h3>
                <ul>
                    <li onClick={()=> allproducts()}>All Products</li>
                    <li onClick={()=> filterproduct("iphone")}>Apple</li>
                    <li onClick={()=> filterproduct("redmi")}>Redmi</li>
                    <li onClick={()=> filterproduct("samsung")}>Samsung</li>
                    <li onClick={()=> filterproduct("realme")}>Realme</li>
                    <li onClick={()=> filterproduct("vivo")}>Vivo</li>
                </ul>
                </div>
                </div>
                <div className="productbox">
                    <div className="contant">
                      {
                       product.map((curEle)=>{
                            return(
                                <>
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
                                </>
                            )
                        })
                      }
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Product
