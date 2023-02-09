import React from 'react'
import banner from './Top Banner.png'
import timer from './Timer.png'

export default function Banner() {
  return (
    <div className='main'>
            <img src={banner} alt="banner" className="banner" />
            <img src={timer} alt="" className="timer" />
            <div className="text-left">
                <span className="main-title">Learning is Fun</span>
                  <p className="new-skills">
                      leaarn new skills online <br/>
                      find best courses
                  </p>
                  <div className="main-buttons">
                      <button className="main-btn register">Register</button>
                      <button className="main-btn">Login</button>
                  </div>
              </div>
          
    </div>
  )
}
