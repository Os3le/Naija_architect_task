import React from 'react'
import {motion } from 'framer-motion'
export default function Game({eachGame , index}) {
    const {GameDescription , GameImage } = eachGame
    return (
        <motion.div layout 
        animate={{opacity: 1 , scale:1}}
        initial={{opacity: 0.7}}
        exit={{opacity: 0.5 , scale: 0.7}}
        
        className="box" key={index}>
               <div className="top">
               <img src={GameImage} alt="" className="top-img" />
               </div>
               <div className="bottom">
                 <span className="title">{GameDescription}</span>
                 <span className="location">the museum of local art</span>
               </div>
               <div className="absolute-square">
                 <img src={``} alt="" className="float-left" />
               </div>
             </motion.div>
            
      )
}
