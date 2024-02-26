import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Marqee from '../Components/Marqee';
import CardShowCase from '../Components/CardShowCase';
import Eyes from '../Components/Eyes';
import { motion } from 'framer-motion';
import ThreeD from '../Components/ThreeD';


const Home = () => {

    let [List, setList] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3001/user").then((response)=>{
      // console.log(response.data);
      setList(response.data);
    })
  },[]);

  return (
    <motion.div className=''>
      <div className="home">
      <Navbar></Navbar>
      <Hero></Hero>
      <Marqee></Marqee>
      <CardShowCase></CardShowCase>
    </div>
    </motion.div>
  )
}

export default Home
