import React from 'react'
import {motion , AnimatePresence} from 'framer-motion'
export default function Populargames ({popularGames2}) {
  let grid = popularGames2.map((eachGame , index)=>{
    return <motion.div layout 
    animate={{opacity: 1, scale:1}}
    initial={{opacity: 0}}
    exit={{opacity: 0.5 , scale: 0}}
    
    className="box" key={index}>
           <div className="top">
           <img src={eachGame.GameImage} alt="" className="top-img" />
           </div>
           <div className="bottom">
             <span className="title">{eachGame.GameDescription}</span>
             <span className="location">the museum of local art</span>
           </div>
           <div className="absolute-square">
             <img src={``} alt="" className="float-left" />
           </div>
         </motion.div>
        })
  return (
    <div className='popular-games'>
        <div className="width70-grid">
            <div className="sub">

            <h1 className="section-title">popular games</h1>
            </div>
            <motion.div layout className="game-grid">
              <AnimatePresence>
            {grid}
            </AnimatePresence>
            </motion.div >
        </div>
    </div>
  )
}


