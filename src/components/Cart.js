import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
// import { useAuth0 } from "@auth0/auth0-react";
import './Cart.css'

const Cart = ({cart,setcart }) => {
    // increase quantity
    const incqty=(product)=>{
       const exsit=cart.find((x)=>{
        return x.id===product.id
       })
       setcart(cart.map((curEle)=>{
        return curEle.id===product.id?{...exsit,qty:exsit.qty +1} : curEle
       }))
    }
    // Decrease Quantity
    const decqty=(product)=>{
        const exsit=cart.find((x)=>{
         return x.id===product.id
        })
        setcart(cart.map((curEle)=>{
         return curEle.id===product.id?{...exsit,qty:exsit.qty -1} : curEle
        }))
     }
    //  Remove Product
    const removeproduct =(product)=>{
        const exsit=cart.find((x)=>{
            return x.id===product.id
           })
           if(exsit.qty>0){
            setcart(cart.filter((x)=>{
              return x.id !==product.id
            }))
           }
    }
    // Total price
    const totalprice=cart.reduce((price,item)=>price +item.qty*item.price,0)
  return (
    <div>
      <div className="cartcontainer">
        {
            cart.length===0 &&
            <div className="emptycart">
                <h2 className="empty">Cart is Empty</h2>
                <Link to='/product' className='emptycartbtn'>Shop Now</Link>
            </div>
        }
        <div className="contant">
            {
              cart.map((curEle)=>{
                return(
                <div className="cart_item" key={curEle.id}>
                 <div className="img_box">
                    <img src={curEle.img} alt={curEle.title} />
                 </div>
                 <div className="details">
                    <div className="info">
                    <h4>{curEle.cat}</h4>
                    <h3>{curEle.title}</h3>
                    <p>Price: ₹{curEle.price}</p>
                    <div className="qty">
                       <button className='decqty' onClick={()=>decqty(curEle)}>-</button>
                        <input type="text" value={curEle.qty} />
                        <button className='incqty' onClick={()=>incqty(curEle)}>+</button>
                    </div>
                   
                    <h4 className='subtotal'>Sub Total: ₹{curEle.price * curEle.qty}</h4>
                    </div>
                    <div className="close">
                    <button onClick={()=> removeproduct(curEle)}><AiOutlineClose/></button>
                    </div>
                 </div>
                 </div>  
                )
              })  
            }
           
        </div>
        {
            cart.length>0 &&
            <div>
               <h2 className='totalprice'>Total Payment: ₹{totalprice}</h2>
               <button className='checkout'>checkout</button>
            </div>
        }
       
      </div>
    </div>
  )
}

export default Cart
