import React from 'react'
import { useState } from 'react'
import Nav from './components/Nav'
import Rout from './routes/Rout'
import Footer from './components/Footer'
import ProductDetails from './components/ProductDetails'
import { BrowserRouter } from 'react-router-dom'
const App=()=> {
  // Add to wish list
  const [wishlist,setwishlist]=useState([])
  // Add to cart
  const [cart,setcart]=useState([])
  // product Details
  const [close,setclose]=useState(false)
  const [details,setdetails]=useState([])
// filter product
  const [product,setproduct]=useState(ProductDetails)
  const searchbtn=(product)=>{
const change=ProductDetails.filter((x)=>{
  return x.cat===product 
})
setproduct(change)
  }
  // Product View
  const view =(product) =>{
    setdetails([{...product}])
    setclose(true)
  }
  // add to wish list
  const addToWishlist =(product)=>{
    const exsit=wishlist.find((x)=>{
      return x.id===product.id
    })
    if(exsit){
      alert('This product is already added to wishlist')
    }else{
      setwishlist([...wishlist,{...product,qty:1}])
      alert('product is added to Wishlist')
    }
  }
  // add to cart
  const addtocart=(product)=>{
    const exsit=cart.find((x)=>{
      return x.id===product.id
      
    })
    
 if(exsit){
  alert('This product is already added to cart')
 }else{
  setcart([...cart,{...product,qty:1}])
  alert('product is added to cart')
 }
  }
  return (
    <div>
      <BrowserRouter>
      <Nav searchbtn={searchbtn}/>
    <Rout product={product} setproduct={setproduct} details={details} view={view} close={close} setclose={setclose} cart={cart} setcart={setcart} wishlist={wishlist} setwishlist={setwishlist} addtocart={addtocart} addToWishlist={addToWishlist}/>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
