import React from 'react'
import NewsletterIcon from './Newsletter.png'
export default function newsletter() {
  return (
    <div className='newsletter'>
<img src={NewsletterIcon} alt="" className='newsletter-icon'/>
<div className="newsletter-right">
    <span className="sub-now"> subscribe now</span>
    <h1>Be in the know</h1>
    <form className="input-div">
    <span className="material-symbols-outlined">mail</span>
    <input type="email" name="email" id="" placeholder='Enter email address'required />
    <button type="submit">Subscribe now</button>
    </form>  
</div>
    </div>
  )
}
