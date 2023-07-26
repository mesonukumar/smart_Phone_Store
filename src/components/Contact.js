import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [user,setuser]=useState({
        Name:'',
        Email:'',
        Subject:'',
        Message:''
    })
    const data=(event)=>{
        setuser({
            ...user,[event.target.name]: event.target.value
        })
    }
  return (
    <div>
     <div className="contact_container">
        <div className="contant">
            <h2># Contact Us</h2>
            <div className="form">
                <form method='POST'>
                 <input type="text" name='Name' value={user.Name} placeholder='Enter your Full Name' required autoComplete='off' onChange={data}/>
                 <input type="email" name='Email' value={user.Email}placeholder='Enter your Email' required autoComplete='off' onChange={data}/>
                 <input type="text" name='Subject' value={user.Subject} placeholder='Enter your Subject' required autoComplete='off' onChange={data}/>
                 <textarea name="Message"  value={user.Message} rows='5' placeholder='Your Message' required onChange={data}/>
                 <button type='submit'>send</button>
                </form>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Contact
