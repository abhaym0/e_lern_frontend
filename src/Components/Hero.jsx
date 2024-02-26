import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import Marqee from './Marqee';
import { motion } from 'framer-motion';
const Hero = () => {
    return (
        <motion.div
        initial={{scale:'40%'}}
        animate={{scale:"100%"}}
        transition={{ease:[0.83, 0, 0.14, 1],duration:1.9}}
        className='hero'>
            <div className="text-strcture">
                <div className="masker ">
                    <h1>Learn from the <span className='sp'>coolest</span></h1>
                </div>
                <div className="masker">
                    <div className="masker-container">
                   <motion.div 
                   initial={{width:0}} 
                   animate={{width:"130px"}} 
                   transition={{ease:[0.76, 0, 0.24, 1],duration:3} }
                   className='side-card'>
                    <video src="https://cdn.cuberto.com/cb/projects/flipaclip/cover.mp4" autoPlay='true' loop muted></video>
                    </motion.div><h1 className='card-h1'><span className='sp'>coding Platform</span></h1>
                    </div>
                </div>
                <div className="masker">
                    <h1>Accross the</h1>
                </div>
                <div className="masker">
                    <h1>Web.</h1>
                </div>
                <motion.a
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{ease:[0.12, 0, 0.39, 0],duration:4}}
                href='/signup'>Get Started<FaArrowRight className='arrow'/></motion.a></div>
            <div className='hero-sub'>
                <h2
                ><FaLeaf /><br /><span className='sp'>Start</span> your Journey Now,<br /> <span className='sp'>Level up</span> Your<br /> <span className='sp'>Skills</span></h2>
            </div>
        </motion.div>
    )
}

export default Hero
