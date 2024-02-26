import React from 'react'
import Card from '../Components/Cards'
import EnrolledCard from '../Components/EnrolledCard'
import DumyCard from '../Components/DumyCard'



const DashBoard = () => {
  return (
    <div>
      <div className="dash-container">
        <div className="dash-header">
            <h1>Dashboard</h1>
        </div>
        <div className="dash-hero">
            <h2>Your Endrolled Courses</h2>
            <DumyCard></DumyCard>
            <div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
