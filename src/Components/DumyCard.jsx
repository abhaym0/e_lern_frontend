import React from 'react'

const Cards = () => {
  return (
    <div className='card'>
      <div className="card-con">
      <div className='card-head'>
        <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
      </div>
      <div className='card-body'>
        <h3>Front-End domination: created Anything with code</h3>
        <p className='s1'>Web Devlopment</p>
        <p className='s2'>Designing</p>
      </div>
      <div className='card-footer'>
        <div className='cf-1'>
          <p className='p'>Instrcutor</p>
          <p className='p'>Harsh Sharma</p>
        </div>
        <div className='cf-2'>
          <p className='p1'>Price value</p>
          <p className='p1'>Rs.4999</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Cards