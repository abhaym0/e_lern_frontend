import { motion } from 'framer-motion'
import React from 'react'


const Navbar = () => {
  return (
    <motion.div
    initial={{opacity:0,}}
    animate={{opacity:1}}
    transition={{ease:[0.7, 0, 0.84, 0],duration:3.5}}
    className='nav'>
      <ul className='ul1'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/userui'>Courses</a>
        </li>
        <li>
        </li>
      </ul>
    <ul className='ul2'>
      <li>
        <a href="/signup" className='btn'>Sign Up</a>
      </li>
      <li>
        <a href="/login" className='btn'>Log In</a>
      </li>
    </ul>
    </motion.div>
  )
}

export default Navbar
