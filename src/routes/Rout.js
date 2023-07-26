import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../components/Home'
import Product from '../components/Product'
import Cart from '../components/Cart'
import Contact from '../components/Contact'
import About from '../components/About'
import Wishlist from '../components/Wishlist'
function Rout({product,setproduct,details,view,close,setclose,cart,setcart,addtocart,wishlist,setwishlist,addToWishlist}) {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home details={details} view={view} close={close} setclose={setclose} addtocart={addtocart} addToWishlist={addToWishlist}/>}/>
        <Route path='/product' element={<Product product={product} setproduct={setproduct} details={details} view={view} close={close} setclose={setclose} addtocart={addtocart} addToWishlist={addToWishlist}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setcart={setcart}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/wishlist' element={<Wishlist wishlist={wishlist} setwishlist={setwishlist}/>}></Route>
      </Routes>
    </div>
  )
}

export default Rout
