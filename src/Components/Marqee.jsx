import { color } from 'framer-motion'
import React from 'react'
import { motion } from 'framer-motion'

const Marqee = () => {
    
  return (
    <div className=' marqee'>
        <div className="text-marqee">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration: 5}} >COOLEST CODING PLATFORM<div className='cirul'></div></motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration: 5}} >COOLEST CODING PLATFORM<div className='cirul'></div></motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration: 5}} >COOLEST CODING PLATFORM<div className='cirul'></div></motion.h1>
        </div>
    </div>
  )
}

export default Marqee
