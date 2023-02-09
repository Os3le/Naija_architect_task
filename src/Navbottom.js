import React from 'react'
import { useState } from 'react'
export default function Navbottom({searchVal,toggleSearch,searchparam,setSearchparam ,saveSearchParam}) {

  return (
    <div className='nav-bottom'>
        <div className='bottom width70'>
            <div className="logo">
          <img src="" alt="" className="logo" />

            </div>
          <ul className="nav-items">
            <li className="nav-links"><button>home</button></li>
            <li className="nav-links"><button>about</button></li>
            <li className="nav-links"><button>games</button></li>
            <li className="nav-links"><button>competition</button></li>
            <li className="nav-links"><button>register</button></li>
              
            <li className="nav-links">
            <div className="search-div">
              <input type="text" name="" className='input-search' id={`search-${searchVal}`} onChange={(e)=>saveSearchParam(e)}/>
              <div className="search"><button className="material-symbols-outlined" onClick={toggleSearch}>search</button></div>   
            </div>
              </li>
          </ul>
</div>
    </div>
  )
}
