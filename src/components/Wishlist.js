import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './Wishlist.css'

const Wishlist = ({wishlist,setwishlist }) => {
   
    //  Remove Product
    const removeproduct =(product)=>{
        const exsit=wishlist.find((x)=>{
            return x.id===product.id
           })
           if(exsit.qty>0){
            setwishlist(wishlist.filter((x)=>{
              return x.id !==product.id
            }))
           }
    }
   
  return (
    <div>
      <div className="wishlistcontainer">
        {
            wishlist.length===0 &&
            <div className="emptywishlist">
                <h2 className="empty">Wishlist is Empty</h2>
                <Link to='/product' className='emptywishlistbtn'>Add Product in Wishlist</Link>
            </div>
        }
        <div className="contant">
            {
              wishlist.map((curEle)=>{
                return(
                <div className="wishlist_item" key={curEle.id}>
                 <div className="img_box">
                    <img src={curEle.img} alt={curEle.title} />
                 </div>
                 <div className="details">
                    <div className="info">
                    <h4>{curEle.cat}</h4>
                    <h3>{curEle.title}</h3>
                    <p>Price: ₹{curEle.price}</p>
                     <div className="features">
                        <p>feature:</p><br></br>
                        <ul>
                            <li>ScreenSize:<span>{curEle.screensize}</span></li>
                            <li>Ram:<span>{curEle.ram} </span></li>
                            <li>Rom:<span>{curEle.rom}</span></li>
                            <li>FrontCamra:<span>{curEle.frontcamra} </span></li>
                            <li>RearCamra:<span>{curEle.rearcamra}</span></li>
                            <li>OperatingSystem: <span>{curEle.operatingsystem}</span></li>
                            <li>Sim:<span>{curEle.sim}</span></li>
                            <li>Sensor: <span></span>{curEle.sensor}</li>
                            <li>Battery:<span>{curEle.battery}</span></li>
                            <li>Colors:<span>{curEle.colors}</span></li>

                        </ul>
                     </div>
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
      
       
      </div>
    </div>
  )
}

export default Wishlist

