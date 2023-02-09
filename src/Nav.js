import React from 'react'
// import Navbottom from './Navbottom'
export default function Nav() {
  return (
    <nav className='nav'>
        <div className="width70-nav">
            <div className="top">
        <ul className="left">
            <li className="location">
                <a href="" className='w'>
                <span className="material-symbols-outlined">location_on</span> 
                <span className='title' >9jakids Lane Lagos</span>
                </a>
            </li>
            <li className="location">
                <a href=""  className='w'>
                <span className="material-symbols-outlined">mail</span> 
                <span className='title'> 9jakids@test.com</span>
                </a>
            </li>
        </ul>
        <ul className="right">
            <li className="social">
            <a href="" >
                <img src="https://img.icons8.com/ios-glyphs/18/null/facebook-new.png"/>
            </a>
            </li>

            <li className="social">
            <a href="" >
                <img src="https://img.icons8.com/ios-glyphs/18/null/pinterest.png"/>
            </a>
            </li>

            <li className="social">
            <a href="" >
                <img src="https://img.icons8.com/ios-glyphs/18/null/twitter--v1.png"/>
            </a>
            </li>

            <li className="social">
            <a href="" >
                <img src="https://img.icons8.com/ios-glyphs/18/null/instagram-new.png"/>
            </a>
            </li>

        </ul>
        </div>
  
    </div>
    </nav>
  )
}
